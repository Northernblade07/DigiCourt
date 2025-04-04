import mongoose from "mongoose";

const CaseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    details: { type: String, required: true },
    partyA: { type: String, required: true },
    partyB: { type: String, required: true },
    caseType: { type: String },
    partyAContact: {
      phone: { type: String },
      email: { type: String },
      address: { type: String },
    },
    partyBContact: {
      phone: { type: String },
      email: { type: String },
      address: { type: String },
    },
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", },
    status: { type: String, enum: ["Pending", "under review", "closed"], default: "pending" },
    priority: { type: String, enum: ["High","medium","Low"] },
    judgeId: { type: mongoose.Schema.Types.ObjectId, ref: "Judge", default: null },
    assignedJudge: { type: String },
    isApproved: { type: Boolean, default: false },
    judgeFeedback: { type: String, default: "" },
    evidence: [{ type: mongoose.Schema.Types.ObjectId, ref: "Evidence" }],
    documents: [
      {
        name: String,
        url: String,
        uploadDate: Date,
      },
    ],
    summary: { type: String, default: "" },
    recommendation: [{ type: String }],
    filingDate: { type: String },
    filingFee: { type: Number },
}, { timestamps: true });

const Case = mongoose.models.Case || mongoose.model("Case", CaseSchema);
export default Case;
