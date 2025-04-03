import { NextResponse } from "next/server";
import Case from "@/model/Case";
import { connectDb } from "@/lib/db";

export async function GET(params) {
    try {
        await connectDb();

        const cases = await Case.find({});
      
        return NextResponse.json(cases,{
            status:200
        })
    } catch (error) {
        return NextResponse.json({message:"error fetching cases"}<{
            status:500
        })
    }
}

// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Case from "@/models/Case"; // Import case model

export async function POST(req) {
  try {
    await connectDb(); // Ensure DB connection

    const caseData = await req.json();

    // Create a new case entry in MongoDB
    const newCase = await Case.create(caseData);

    return NextResponse.json({ success: true, case: newCase }, { status: 201 });
  } catch (error) {
    console.error("Error creating case:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create case" },
      { status: 500 }
    );
  }
}
