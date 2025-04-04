import { connectDb } from "@/lib/db";
import Case from "@/model/Case";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    await connectDb();
    console.log(params);
    const caseId = params.caseId;
    console.log(caseId);
    const { decision, penalty, period, reason } = await req.json();

    const updatedCase = await Case.findByIdAndUpdate(
      caseId,
      {
        $set: {
          "judgement.decision": decision,
          "judgement.penalty": penalty,
          "judgement.period": period,
          "judgement.reason": reason,
        },
      },
      { new: true }
    );

    return NextResponse.json({ success: true, data: updatedCase });
  } catch (error) {
    console.error("Error updating judgement:", error);
    return NextResponse.json({ success: false, error: "Failed to update judgement" }, { status: 500 });
  }
}
