import AffiliateLink from "../models/AffiliateLink.js";

export const getDashboardData = async (req, res) => {
  try {
    const userId = req.user;
    const links = await AffiliateLink.find({ user: userId });

    const totalEarnings = links.reduce((s, l) => s + (l.earnings || 0), 0);
    const totalClicks = links.reduce((s, l) => s + (l.clicks || 0), 0);
    const totalConversions = links.reduce(
      (s, l) => s + (l.conversions || 0),
      0
    );

    res.json({
      totalEarnings,
      totalClicks,
      totalConversions,
      activeLinks: links.length,
      links,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
