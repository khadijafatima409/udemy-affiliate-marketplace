import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: String,
  rating: Number,
  comment: String,
  date: String,
});

const courseSchema = new mongoose.Schema(
  {
    title: String,
    instructor: String,
    image: String,
    rating: Number,
    price: Number,
    category: String,
    description: String,
    // additional fields
    students: { type: Number, default: 0 },
    duration: { type: String, default: "" },
    level: { type: String, default: "Beginner" },
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
