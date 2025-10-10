import AffiliateLink from "../models/AffiliateLink.js";

export const generateAffiliateLink = async (req, res) => {
  try {
    const userId = req.user;
    const { courseId } = req.body;
    if (!userId) return res.status(401).json({ message: "Not authenticated" });
    if (!courseId) return res.status(400).json({ message: "Missing courseId" });

    const code = Math.random().toString(36).substring(2, 9);
    const link = `https://yourapp.com/courses/${courseId}?ref=${code}`;

    const doc = await AffiliateLink.create({
      user: userId,
      courseId,
      code,
      link,
      clicks: 0,
      conversions: 0,
      earnings: 0,
    });

    res.status(201).json({ link: doc.link, id: doc._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
