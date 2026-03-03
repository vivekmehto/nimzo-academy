import clientPromise from "@/lib/mongodb";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    let { referrerName, studentName, phone, grade, location } = body;

    if (!referrerName || !studentName || !phone) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Trim
    referrerName = referrerName.trim();
    studentName = studentName.trim();
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

    const cleanedPhone = phone.replace(/\D/g, "");

    if (!/^\d{8,15}$/.test(cleanedPhone)) {
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
      phone: cleanedPhone,
      grade,
      location,
      status: "new",
      createdAt: new Date(),
    });

    // ✅ Send Email
    await resend.emails.send({
      from: "Nimzo Academy <onboarding@resend.dev>",
      to: "vivekmehto.chess@gmail.com",
      subject: "New Referral Submission – Nimzo Academy",
      html: `
        <h2>New Referral Submission</h2>
        <p><strong>Referrer:</strong> ${cleanedReferrerName}</p>
        <p><strong>Student:</strong> ${cleanedStudentName}</p>
        <p><strong>Phone:</strong> ${cleanedPhone}</p>
        <p><strong>Grade:</strong> ${grade || "Not Provided"}</p>
        <p><strong>Location:</strong> ${location || "Not Provided"}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("Referral API Error:", error);
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}