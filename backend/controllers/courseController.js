import Course from "../models/Course.js";

export const getCourses = async (req, res) => {
  const { search } = req.query;
  let query = {};
  if (search) query.title = { $regex: search, $options: "i" };
  const courses = await Course.find(query);
  res.json(courses);
};

export const getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ message: "Course not found" });
  res.json(course);
};
