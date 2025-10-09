export const getDashboardData = (req, res) => {
  res.json({
    earnings: Math.floor(Math.random() * 500),
    clicks: Math.floor(Math.random() * 2000),
    conversions: Math.floor(Math.random() * 80),
  });
};
