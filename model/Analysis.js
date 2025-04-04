import mongoose from "mongoose";

const AnalysisSchema = new mongoose.Schema({
  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Case",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  analysis: {
    summary: {
      type: String,
      default: "",
    },
    loopholes: {
      type: [String],
      default: [],
    },
    charges: {
      type: [String],
      default: [],
    },
    recommendations: {
      type: [String],
      default: [],
    },
  },
}, {
  timestamps: true,
});

const Analysis = mongoose.models.Analysis || mongoose.model("Analysis", AnalysisSchema);

export default Analysis;
