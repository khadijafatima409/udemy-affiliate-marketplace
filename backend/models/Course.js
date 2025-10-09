import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: String,
    instructor: String,
    image: String,
    rating: Number,
    price: Number,
    category: String,
    description: String,
  },
  { timestamps: true }
);
const Course = mongoose.model("Course", courseSchema);
export default Course;
