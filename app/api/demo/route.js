import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();

    const { parentName, phone, email, studentName, age } = body;

    // Basic validation
    if (!parentName || !phone || !studentName || !age) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("chess_academy");

    const newLead = {
      parentName: parentName.trim(),
      phone: phone.trim(),
      email: email?.trim() || "",
      studentName: studentName.trim(),
      age: Number(age),

      source: "website",
      status: "new",
      notes: "",
      contactedAt: null,
      enrolledAt: null,

      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db
      .collection("demo_requests")
      .insertOne(newLead);

    return Response.json({
      success: true,
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Demo API Error:", error);
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
