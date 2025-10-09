import { Course } from "../type/courses";

export const courses: Course[] = [
  {
    id: 1,
    title: "React for Beginners - Complete React Course 2024",
    instructor: "John Doe",
    image:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    price: 49.99,
    category: "Web Development",
    description:
      "Learn React from scratch with hands-on projects. Build modern web applications with the most popular JavaScript library.",
    students: 45230,
    duration: "12.5 hours",
    level: "Beginner",
    reviews: [
      {
        id: 1,
        user: "Sarah M.",
        rating: 5,
        comment: "Excellent course! Very clear explanations.",
        date: "2024-01-15",
      },
      {
        id: 2,
        user: "Mike P.",
        rating: 4,
        comment: "Good content, would recommend.",
        date: "2024-01-10",
      },
    ],
  },
  {
    id: 2,
    title: "Mastering Node.js - Backend Development",
    instructor: "Jane Smith",
    image:
      "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    price: 59.99,
    category: "Web Development",
    description:
      "Become a Node.js expert. Build scalable backend applications with Express, MongoDB, and modern JavaScript.",
    students: 32450,
    duration: "18 hours",
    level: "Intermediate",
    reviews: [
      {
        id: 3,
        user: "Tom R.",
        rating: 5,
        comment: "Best Node.js course I have taken!",
        date: "2024-01-20",
      },
    ],
  },
  {
    id: 3,
    title: "Python for Data Science and Machine Learning",
    instructor: "Dr. Emily Chen",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    price: 69.99,
    category: "Data Science",
    description:
      "Master Python for data science. Learn Pandas, NumPy, Matplotlib, and scikit-learn with real-world projects.",
    students: 67890,
    duration: "25 hours",
    level: "Intermediate",
    reviews: [
      {
        id: 4,
        user: "Lisa K.",
        rating: 5,
        comment: "Amazing depth of content!",
        date: "2024-01-18",
      },
    ],
  },
  {
    id: 4,
    title: "UI/UX Design Masterclass - Figma to Production",
    instructor: "Alex Johnson",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    price: 44.99,
    category: "Design",
    description:
      "Learn UI/UX design from scratch. Master Figma, design principles, and create stunning user interfaces.",
    students: 28900,
    duration: "15 hours",
    level: "Beginner",
    reviews: [],
  },
  {
    id: 5,
    title: "Complete Digital Marketing Course 2024",
    instructor: "Michael Brown",
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    price: 39.99,
    category: "Marketing",
    description:
      "Master digital marketing: SEO, social media, email marketing, and analytics. Grow your business online.",
    students: 51200,
    duration: "20 hours",
    level: "All Levels",
    reviews: [],
  },
  {
    id: 6,
    title: "iOS App Development with Swift",
    instructor: "Sarah Williams",
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    price: 54.99,
    category: "Mobile Development",
    description:
      "Build iOS apps from scratch using Swift and SwiftUI. Learn Xcode and publish to the App Store.",
    students: 19800,
    duration: "22 hours",
    level: "Beginner",
    reviews: [],
  },
  {
    id: 7,
    title: "Business Strategy and Entrepreneurship",
    instructor: "Robert Davis",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    price: 34.99,
    category: "Business",
    description:
      "Learn business strategy fundamentals. Start and grow your own business with proven frameworks.",
    students: 42100,
    duration: "16 hours",
    level: "All Levels",
    reviews: [],
  },
  {
    id: 8,
    title: "Professional Photography Masterclass",
    instructor: "Jessica Taylor",
    image:
      "https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    price: 47.99,
    category: "Photography",
    description:
      "Master photography from basics to advanced. Learn composition, lighting, and post-processing.",
    students: 15600,
    duration: "14 hours",
    level: "All Levels",
    reviews: [],
  },
];
