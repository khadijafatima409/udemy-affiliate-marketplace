import mongoose from "mongoose";

const affiliateLinkSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    code: { type: String, required: true },
    link: { type: String, required: true },
    clicks: { type: Number, default: 0 },
    conversions: { type: Number, default: 0 },
    earnings: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const AffiliateLink = mongoose.model("AffiliateLink", affiliateLinkSchema);
export default AffiliateLink;
