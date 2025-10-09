export const generateAffiliateLink = (req, res) => {
  const { courseId } = req.body;
  const userId = req.user; // from auth middleware
  const link = `https://yourapp.com/courses/${courseId}?ref=${userId}`;
  res.json({ link });
};
