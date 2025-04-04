import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import Case from "@/model/Case";
import Evidence from "@/model/Evidence";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/user-auth";
import { uploadFileToStorage } from "@/lib/fileupload";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    await connectDb();

    // Re-enable authentication if needed
    // const session = await getServerSession({ req, ...authOptions });
    // if (!session || session.user.role !== "clerk") {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    // }

    const formData = await req.formData();

    // Ensure priority is valid
    const validPriorities = ["High", "medium", "Low"];
    let priority = formData.get("priority");
    if (!validPriorities.includes(priority)) priority = "Low"; // Default to Low

    // Extract case details
    const caseData = {
      title: formData.get("title"),
      caseType: formData.get("caseType"),
      partyA: formData.get("partyA"),
      partyB: formData.get("partyB"),
      details: formData.get("details"),
      priority,
      filingDate: formData.get("filingDate"),
      partyAContact: JSON.parse(formData.get("partyAContact")),
      partyBContact: JSON.parse(formData.get("partyBContact")),
      reportedBy: null, // Remove or set a test value if session is disabled
      status: "Pending",
    };

    // Create case in DB
    const newCase = await Case.create(caseData);

    // Handle file uploads (Cloudinary)
    const documents = [];
    for (const file of formData.getAll("documents[]")) {
      if (file instanceof File) {
        const fileBuffer = await file.arrayBuffer();
        const fileBase64 = Buffer.from(fileBuffer).toString("base64");

        // Upload to Cloudinary
        const fileUrl = await uploadFileToStorage(fileBase64, file.type);

        const newDoc = await Evidence.create({
          caseId: newCase._id,
          fileUrl,
          fileType: file.type,
          uploadedBy: null, // Replace with session.user.id when enabled
        });

        documents.push({
          name: file.name,
          url: fileUrl,
          uploadDate: new Date().toISOString(),
        });
      }
    }

    // Save documents in case
    newCase.documents = documents;
    await newCase.save();

    return NextResponse.json(
      { message: "Case filed successfully", case: newCase },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error filing case:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
