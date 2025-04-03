import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Case from "@/models/Case";
import Evidence from "@/models/Evidence";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { uploadFileToStorage } from "@/lib/fileUpload"; // Cloud upload helper
import { extractTextFromPDF } from "@/lib/pdfExtractor"; // PDF text extraction utility

// ✅ Only allow POST requests
export async function POST(req: NextRequest) {
  try {
    await connectDB(); // Connect to MongoDB

    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "clerk") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const details = formData.get("details") as string;
    const priority = formData.get("priority") as string;
    const file = formData.get("file") as File; // Get uploaded file

    if (!title || !details || !file) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 🔹 Step 1: Create Case
    const newCase = await Case.create({
      title,
      details,
      reportedBy: session.user.id,
      priority,
    });

    // 🔹 Step 2: Upload File to Cloud Storage (e.g., S3, Firebase)
    const fileUrl = await uploadFileToStorage(file);

    // 🔹 Step 3: Extract text from PDF (if applicable)
    let extractedText = "";
    if (file.type === "application/pdf") {
      extractedText = await extractTextFromPDF(fileUrl);
    }

    // 🔹 Step 4: Create Evidence Entry
    const newEvidence = await Evidence.create({
      caseId: newCase._id,
      uploadedBy: session.user.id,
      fileType: file.type.split("/")[1], // Get file extension
      fileUrl,
      extractedText,
    });

    // 🔹 Step 5: Link Evidence to Case
    newCase.evidence.push(newEvidence._id);
    await newCase.save();

    return NextResponse.json(
      { message: "Case and evidence uploaded successfully", caseId: newCase._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error uploading case:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
