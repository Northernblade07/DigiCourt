import { connectDb } from "@/lib/db";
import Case from "@/model/Case";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    await connectDb();
    const { caseId } = params;

    const deletedCase = await Case.findByIdAndDelete(caseId);

    if (!deletedCase) {
      return NextResponse.json({ error: "Case not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Case deleted successfully", case: deletedCase });
  } catch (error) {
    console.error("Error deleting case:", error);
    return NextResponse.json({ error: "Failed to delete case" }, { status: 500 });
  }
}
