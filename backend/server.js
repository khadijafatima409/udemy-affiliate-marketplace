const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Load courses from JSON
const coursesFilePath = path.join(__dirname, "courses.json");
let courses = JSON.parse(fs.readFileSync(coursesFilePath, "utf-8"));

// Root route
app.get("/", (req, res) => {
  res.send("Udemy Affiliate Marketplace Backend is running!");
});

// Get all courses
app.get("/api/courses", (req, res) => {
  res.json(courses);
});

// Get single course by id
app.get("/api/course/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find((c) => c.id === courseId);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

// Search/filter courses
app.get("/api/courses/search", (req, res) => {
  const { query, category, minRating } = req.query;
  let results = courses;

  if (query) {
    results = results.filter((c) =>
      c.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (category) {
    results = results.filter((c) => c.category === category);
  }

  if (minRating) {
    results = results.filter((c) => c.rating >= parseFloat(minRating));
  }

  res.json(results);
});

// Get affiliate link
app.get("/api/course/:id/affiliate", (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find((c) => c.id === courseId);
  if (course) {
    res.json({ affiliate_link: course.affiliate_link });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

// Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
