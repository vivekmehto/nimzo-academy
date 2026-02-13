import clientPromise from "@/lib/mongodb";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    let { name, email, phone, message } = body;

    // Required fields check
    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Trim inputs
    name = name.trim();
    email = email.trim();
    message = message.trim();
    phone = phone?.trim() || "";
  

    // Clean name
    const cleanedName = name.replace(/[^a-zA-Z\s]/g, "");

    if (!/^[a-zA-Z\s]{2,50}$/.test(cleanedName)) {
      return Response.json(
        { success: false, message: "Invalid name" },
        { status: 400 }
      );
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Message validation
    if (message.length < 10 || message.length > 1000) {
      return Response.json(
        { success: false, message: "Message must be between 10 and 1000 characters" },
        { status: 400 }
      );
    }

    // Optional phone validation
    if (phone) {
      const cleanedPhone = phone.replace(/\D/g, "");

      if (!/^\d{7,15}$/.test(cleanedPhone)) {
        return Response.json(
          { success: false, message: "Invalid phone number" },
          { status: 400 }
        );
      }

      phone = cleanedPhone;
    }

    const client = await clientPromise;
    const db = client.db("chess_academy");

    const newMessage = {
      name: cleanedName,
      email,
      phone: phone || "",
      message,

      inquirySource: "contact_page",
      status: "new",

      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await db.collection("contact_messages").insertOne(newMessage);

    // Email notification
    await resend.emails.send({
      from: "Nimzo Academy <onboarding@resend.dev>",
      to: "vivekmehto.chess@gmail.com",
      subject: "New Contact Message Received",
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${cleanedName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("Contact API Error:", error);
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
