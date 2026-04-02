import clientPromise from "@/lib/mongodb";
import { applyRateLimit, escapeHtml, hasSpamTrap } from "@/lib/lead-utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const rateLimitResponse = applyRateLimit(req, "referral");
    if (rateLimitResponse) {
      return rateLimitResponse;
    }

    const body = await req.json();

    let { referrerName, studentName, countryCode, phone, grade, location, website } = body;

    if (hasSpamTrap(website)) {
      return Response.json({ success: true });
    }

    if (!referrerName || !studentName || !phone || !countryCode) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Trim
    referrerName = referrerName.trim();
    studentName = studentName.trim();
    countryCode = countryCode.trim();
    grade = grade?.trim() || "";
    location = location?.trim() || "";

    // Clean Names
    const cleanedReferrerName = referrerName.replace(/[^a-zA-Z\s]/g, "");
    const cleanedStudentName = studentName.replace(/[^a-zA-Z\s]/g, "");

    if (!/^[a-zA-Z\s]{2,50}$/.test(cleanedReferrerName)) {
      return Response.json(
        { success: false, message: "Invalid referrer name" },
        { status: 400 }
      );
    }

    if (!/^[a-zA-Z\s]{2,50}$/.test(cleanedStudentName)) {
      return Response.json(
        { success: false, message: "Invalid student name" },
        { status: 400 }
      );
    }

    if (!/^\+\d{1,4}$/.test(countryCode)) {
      return Response.json(
        { success: false, message: "Invalid country code" },
        { status: 400 }
      );
    }

    const cleanedPhone = phone.replace(/\D/g, "");
    const fullPhone = `${countryCode}${cleanedPhone}`;

    if (!/^\+\d{8,15}$/.test(fullPhone)) {
      return Response.json(
        { success: false, message: "Invalid phone number" },
        { status: 400 }
      );
    }

    // ✅ Save to Mongo
    const client = await clientPromise;
    const db = client.db("chess_academy");

    await db.collection("referrals").insertOne({
      referrerName: cleanedReferrerName,
      studentName: cleanedStudentName,
      phone: fullPhone,
      grade,
      location,
      status: "new",
      createdAt: new Date(),
    });

    try {
      await resend.emails.send({
        from: "Nimzo Academy <onboarding@resend.dev>",
        to: "vivekmehto.chess@gmail.com",
        subject: "New Referral Submission – Nimzo Academy",
        html: `
          <h2>New Referral Submission</h2>
          <p><strong>Referrer:</strong> ${escapeHtml(cleanedReferrerName)}</p>
          <p><strong>Student:</strong> ${escapeHtml(cleanedStudentName)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(fullPhone)}</p>
          <p><strong>Grade:</strong> ${escapeHtml(grade || "Not Provided")}</p>
          <p><strong>Location:</strong> ${escapeHtml(location || "Not Provided")}</p>
        `,
      });
    } catch (emailError) {
      console.error("Referral email error:", emailError);
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error("Referral API Error:", error);
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
