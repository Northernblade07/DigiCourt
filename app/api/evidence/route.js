import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import Evidence from "@/model/Evidence";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/user-auth";
import { uploadFileToStorage } from "@/lib/fileUpload";

export async function POST(req) {
  try {
    await connectDb();
    const session = await getServerSession({ req, ...authOptions });
    if (!session || session.user.role !== "clerk") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const formData = await req.formData();
    const caseId = formData.get("caseId");

    for (const file of formData.getAll("evidence[]")) {
      if (file instanceof File) {
        const fileUrl = await uploadFileToStorage(file);
        await Evidence.create({
          caseId,
          fileUrl,
          fileType: file.type,
          uploadedBy: session.user.id,
        });
      }
    }

    return NextResponse.json({ message: "Evidence uploaded" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
