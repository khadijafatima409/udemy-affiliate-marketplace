import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Course from "./models/Course.js";

dotenv.config();

const courses = [
  {
    title: "React for Beginners - Complete React Course 2024",
    description:
      "Learn React from scratch with hands-on projects. Build modern web applications with the most popular JavaScript library.",
    instructor: "John Doe",
    price: 49.99,
    rating: 4.7,
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
    students: 45230,
    duration: "12.5 hours",
    level: "Beginner",
    reviews: [
      {
        user: "Sarah M.",
        rating: 5,
        comment: "Excellent course! Very clear explanations.",
        date: "2024-01-15",
      },
      {
        user: "Mike P.",
        rating: 4,
        comment: "Good content, would recommend.",
        date: "2024-01-10",
      },
    ],
  },
  {
    title: "Mastering Node.js - Backend Development",
    description:
      "Become a Node.js expert. Build scalable backend applications with Express, MongoDB, and modern JavaScript.",
    instructor: "Jane Smith",
    price: 59.99,
    rating: 4.8,
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600",
    students: 32450,
    duration: "18 hours",
    level: "Intermediate",
    reviews: [
      {
        user: "Tom R.",
        rating: 5,
        comment: "Best Node.js course I have taken!",
        date: "2024-01-20",
      },
    ],
  },
  {
    title: "Python for Data Science and Machine Learning",
    description:
      "Master Python for data science. Learn Pandas, NumPy, Matplotlib, and scikit-learn with real-world projects.",
    instructor: "Dr. Emily Chen",
    price: 69.99,
    rating: 4.9,
    category: "Data Science",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    students: 67890,
    duration: "25 hours",
    level: "Intermediate",
    reviews: [
      {
        user: "Lisa K.",
        rating: 5,
        comment: "Amazing depth of content!",
        date: "2024-01-18",
      },
    ],
  },
  {
    title: "UI/UX Design Masterclass - Figma to Production",
    description:
      "Learn UI/UX design from scratch. Master Figma, design principles, and create stunning user interfaces.",
    instructor: "Alex Johnson",
    price: 44.99,
    rating: 4.6,
    category: "Design",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    students: 28900,
    duration: "15 hours",
    level: "Beginner",
    reviews: [],
  },
  {
    title: "Complete Digital Marketing Course 2024",
    description:
      "Master digital marketing: SEO, social media, email marketing, and analytics. Grow your business online.",
    instructor: "Michael Brown",
    price: 39.99,
    rating: 4.5,
    category: "Marketing",
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
    students: 51200,
    duration: "20 hours",
    level: "All Levels",
    reviews: [],
  },
  {
    title: "iOS App Development with Swift",
    description:
      "Build iOS apps from scratch using Swift and SwiftUI. Learn Xcode and publish to the App Store.",
    instructor: "Sarah Williams",
    price: 54.99,
    rating: 4.7,
    category: "Mobile Development",
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
    students: 19800,
    duration: "22 hours",
    level: "Beginner",
    reviews: [],
  },
  {
    title: "Business Strategy and Entrepreneurship",
    description:
      "Learn business strategy fundamentals. Start and grow your own business with proven frameworks.",
    instructor: "Robert Davis",
    price: 34.99,
    rating: 4.4,
    category: "Business",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    students: 42100,
    duration: "16 hours",
    level: "All Levels",
    reviews: [],
  },
  {
    title: "Professional Photography Masterclass",
    description:
      "Master photography from basics to advanced. Learn composition, lighting, and post-processing.",
    instructor: "Jessica Taylor",
    price: 47.99,
    rating: 4.8,
    category: "Photography",
    image:
      "https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=600",
    students: 15600,
    duration: "14 hours",
    level: "All Levels",
    reviews: [],
  },
];

const importData = async () => {
  try {
    await connectDB();
    await Course.deleteMany();
    const insertedCourses = await Course.insertMany(courses);
    console.log("✅ Sample courses inserted!");
    console.log("\n🆔 Inserted Course IDs:");
    insertedCourses.forEach((course) => {
      console.log(`${course.title}: ${course._id}`);
    });
    console.log("\nUse any of these IDs for testing:");
    console.log("👉 Example: http://localhost:5000/api/courses/<_id_here>");
    process.exit();
  } catch (err) {
    console.error("❌ Error inserting data:", err);
    process.exit(1);
  }
};

importData();
