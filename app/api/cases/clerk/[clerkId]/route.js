// app/api/cases/clerk/[clerkId]/route.js
import { connectDb } from "@/lib/db";
import Case from "@/model/Case";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connectDb();

    const cases = await Case.find({ uploadedBy: id }).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: cases });
  } catch (error) {
    console.error("Error fetching cases:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch cases" }, { status: 500 });
  }
}
