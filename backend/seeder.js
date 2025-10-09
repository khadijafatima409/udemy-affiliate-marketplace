import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Course from "../backend/models/Course.js";

dotenv.config();

const courses = [
  {
    title: "React for Beginners",
    description:
      "Learn the fundamentals of React including hooks and state management.",
    instructor: "John Doe",
    price: 49.99,
    rating: 4.7,
    category: "Web Development",
    image: "https://img-c.udemycdn.com/course/240x135/2195288_49b2_4.jpg",
  },
  {
    title: "Mastering TypeScript",
    description:
      "A complete guide to TypeScript for modern JavaScript developers.",
    instructor: "Jane Smith",
    price: 39.99,
    rating: 4.6,
    category: "Programming Languages",
    image: "https://img-c.udemycdn.com/course/240x135/947098_02ec_2.jpg",
  },
  {
    title: "Node.js & Express Bootcamp",
    description:
      "Learn backend development with Node.js, Express, and MongoDB.",
    instructor: "Michael Johnson",
    price: 59.99,
    rating: 4.8,
    category: "Backend Development",
    image: "https://img-c.udemycdn.com/course/240x135/1879018_95b6.jpg",
  },
  {
    title: "Next.js Complete Guide",
    description:
      "Build fullstack React apps with Next.js 14 and server components.",
    instructor: "Sarah Lee",
    price: 44.99,
    rating: 4.9,
    category: "Fullstack Development",
    image: "https://img-c.udemycdn.com/course/240x135/3690014_4932.jpg",
  },
  {
    title: "Python for Data Science",
    description:
      "Learn Python and its data science libraries like pandas, NumPy, and Matplotlib.",
    instructor: "David Kim",
    price: 34.99,
    rating: 4.5,
    category: "Data Science",
    image: "https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg",
  },
];

const importData = async () => {
  try {
    await connectDB();
    await Course.deleteMany(); // clear previous data
    await Course.insertMany(courses);
    console.log("✅ Sample courses inserted!");
    process.exit();
  } catch (error) {
    console.error("❌ Error inserting data:", error);
    process.exit(1);
  }
};

importData();
