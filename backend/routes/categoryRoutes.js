import express from "express";
const router = express.Router();

const categories = [
  { id: 1, name: "Web Development", icon: "🌐" },
  { id: 2, name: "Data Science", icon: "📊" },
  { id: 3, name: "Design", icon: "🎨" },
  { id: 4, name: "Programming Languages", icon: "💻" },
];

router.get("/", (req, res) => {
  res.json(categories);
});

export default router;
