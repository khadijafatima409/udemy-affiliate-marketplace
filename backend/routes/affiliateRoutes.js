import express from "express";
import { generateAffiliateLink } from "../controllers/affiliateController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/generate", protect, generateAffiliateLink);

export default router;
