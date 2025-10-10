import mongoose from "mongoose";

import Course from "../models/Course.js";

export const getCourses = async (req, res) => {
  try {
    const { search, category, minPrice, maxPrice, rating } = req.query;
    const query = {};
    if (search) query.title = { $regex: search, $options: "i" };
    if (category) query.category = category;
    if (rating) query.rating = { $gte: Number(rating) };
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    const courses = await Course.find(query).limit(100).sort({ createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;

    // ✅ Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid course ID format" });
    }

    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// optional: expose categories (distinct)
export const getCategories = async (req, res) => {
  try {
    const categories = await Course.distinct("category");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
