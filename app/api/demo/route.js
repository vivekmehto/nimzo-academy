import clientPromise from "@/lib/mongodb";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    let {
      parentName,
      countryCode,
      phone,
      email,
      studentName,
      age,
      sourceDetail,
      type = "demo",
    } = body;

    if (!parentName || !phone || !studentName || !age || !countryCode) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    // Trim first
    parentName = parentName.trim();
    studentName = studentName.trim();
    email = email?.trim() || "";
    countryCode = countryCode.trim();

    const allowedTypes = ["demo", "assessment"];

    if (!allowedTypes.includes(type)) {
      return Response.json(
        { success: false, message: "Invalid booking type" },
        { status: 400 },
      );
    }

    // Clean names
    const cleanedParentName = parentName.replace(/[^a-zA-Z\s]/g, "");
    const cleanedStudentName = studentName.replace(/[^a-zA-Z\s]/g, "");

    if (!/^[a-zA-Z\s]{2,50}$/.test(cleanedParentName)) {
      return Response.json(
        { success: false, message: "Invalid parent name" },
        { status: 400 },
      );
    }

    if (!/^[a-zA-Z\s]{2,50}$/.test(cleanedStudentName)) {
      return Response.json(
        { success: false, message: "Invalid student name" },
        { status: 400 },
      );
    }

    // Validate email
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json(
        { success: false, message: "Invalid email format" },
        { status: 400 },
      );
    }

    // Validate country code
    if (!/^\+\d{1,4}$/.test(countryCode)) {
      return Response.json(
        { success: false, message: "Invalid country code" },
        { status: 400 },
      );
    }

    // Clean phone
    const cleanedPhone = phone.replace(/\D/g, "");
    const fullPhone = `${countryCode}${cleanedPhone}`;

    if (!/^\+\d{8,15}$/.test(fullPhone)) {
      return Response.json(
        { success: false, message: "Invalid phone number" },
        { status: 400 },
      );
    }

    // Validate age
    age = Number(age);
    if (isNaN(age) || age < 5 || age > 18) {
      return Response.json(
        { success: false, message: "Invalid age" },
        { status: 400 },
      );
    }

    const client = await clientPromise;
    const db = client.db("chess_academy");

    const newLead = {
      parentName: cleanedParentName,
      studentName: cleanedStudentName,
      phone: fullPhone,
      email,
      age,

      bookingType: type,

      leadSource: "website",
      referralSource: sourceDetail?.trim() || "",

      status: "new",
      notes: "",
      contactedAt: null,
      enrolledAt: null,

      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await db.collection("demo_requests").insertOne(newLead);

    await resend.emails.send({
      from: "Nimzo Academy <onboarding@resend.dev>",
      to: "vivekmehto.chess@gmail.com",
      subject:
        type === "demo"
          ? "New Demo Request Received"
          : "New Assessment Booking Received",

      html: `
        <h2>
  ${type === "demo" ? "New Demo Request" : "New Assessment Booking"}
</h2>

        <p><strong>Parent Name:</strong> ${cleanedParentName}</p>
        <p><strong>Phone:</strong> ${fullPhone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Student Name:</strong> ${cleanedStudentName}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Heard About Us:</strong> ${sourceDetail || "Not Provided"}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Demo API Error:", error);
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
