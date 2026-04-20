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

    let {
      referrerName,
      currentStudentName,
      studentName,
      countryCode,
      phone,
      parentEmail,
      grade,
      location,
      relationship,
      website,
    } = body;

    if (hasSpamTrap(website)) {
      return Response.json({ success: true });
    }

    if (!referrerName || !currentStudentName || !studentName || !phone || !countryCode) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    referrerName = referrerName.trim();
    currentStudentName = currentStudentName.trim();
    studentName = studentName.trim();
    countryCode = countryCode.trim();
    parentEmail = parentEmail?.trim() || "";
    grade = grade?.trim() || "";
    location = location?.trim() || "";
    relationship = relationship?.trim() || "";

    const normalizeName = (value) => value.replace(/\s+/g, " ").trim();
    const namePattern = /^[A-Za-z][A-Za-z\s'.-]{1,59}$/;

    const cleanedReferrerName = normalizeName(referrerName);
    const cleanedCurrentStudentName = normalizeName(currentStudentName);
    const cleanedStudentName = normalizeName(studentName);

    if (!namePattern.test(cleanedReferrerName)) {
      return Response.json(
        { success: false, message: "Invalid referrer name" },
        { status: 400 }
      );
    }

    if (!namePattern.test(cleanedCurrentStudentName)) {
      return Response.json(
        { success: false, message: "Invalid current student name" },
        { status: 400 }
      );
    }

    if (!namePattern.test(cleanedStudentName)) {
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

    if (parentEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parentEmail)) {
      return Response.json(
        { success: false, message: "Invalid parent email" },
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
      currentStudentName: cleanedCurrentStudentName,
      studentName: cleanedStudentName,
      phone: fullPhone,
      parentEmail,
      grade,
      location,
      relationship,
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
          <p><strong>Current Nimzo Student:</strong> ${escapeHtml(cleanedCurrentStudentName)}</p>
          <p><strong>Student:</strong> ${escapeHtml(cleanedStudentName)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(fullPhone)}</p>
          <p><strong>Parent Email:</strong> ${escapeHtml(parentEmail || "Not Provided")}</p>
          <p><strong>Grade:</strong> ${escapeHtml(grade || "Not Provided")}</p>
          <p><strong>Location:</strong> ${escapeHtml(location || "Not Provided")}</p>
          <p><strong>Relationship:</strong> ${escapeHtml(relationship || "Not Provided")}</p>
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
