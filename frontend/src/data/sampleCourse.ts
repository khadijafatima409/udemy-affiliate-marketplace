// data/sampleCourse.ts

import type { Course } from "../type/course";

export const sampleCourse: Course = {
  id: "react-bootcamp",
  title: "React & Next.js Bootcamp 2025",
  headline: "Learn React, Next.js, and Tailwind by building real-world apps.",
  rating: 4.7,
  reviews: 12500,
  students: 102000,
  duration: "18.5 hours",
  lastUpdated: "October 2025",
  language: "English",
  price: 59.99,
  discountedPrice: 19.99,
  whatYouWillLearn: [
    "Build responsive UIs with React & Tailwind",
    "Master Next.js App Router and API routes",
    "Integrate third-party APIs like Udemy Affiliate",
    "Deploy full-stack apps to Vercel or AWS",
  ],
  description:
    "This hands-on course teaches you to build modern web apps using React, Next.js, and Tailwind CSS. Perfect for beginners and intermediates looking to advance their front-end career.",
  instructor: {
    name: "Jane Doe",
    title: "Senior Front-End Engineer",
    avatarUrl: "https://i.pravatar.cc/100?img=3",
  },
  curriculum: [
    {
      id: "intro",
      title: "Introduction to React",
      lectures: [
        {
          id: "1",
          title: "Welcome to the course",
          duration: "05:00",
          preview: true,
        },
        { id: "2", title: "What is React?", duration: "08:12" },
      ],
    },
    {
      id: "nextjs",
      title: "Next.js Fundamentals",
      lectures: [
        { id: "3", title: "Routing and Pages", duration: "10:45" },
        {
          id: "4",
          title: "Fetching data with getServerSideProps",
          duration: "09:37",
        },
      ],
    },
  ],
  affiliateUrl:
    "https://www.udemy.com/course/react-nextjs-bootcamp/?couponCode=AFFILIATE123",
};
