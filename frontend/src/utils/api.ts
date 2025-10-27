import axios from "axios";
import {
  AffiliateLink,
  Category,
  Course,
  DashboardStats,
} from "../type/courses";

// ✅ Your backend base URL
const API_URL = "http://localhost:5001/api";

// ✅ Fetch all courses from backend
export const getCourses = async (): Promise<Course[]> => {
  const res = await axios.get<Course[]>(`${API_URL}/courses`);
  return res.data;
};

// ✅ Fetch a course by ID
export const getCourseById = async (_id: string): Promise<Course> => {
  const res = await axios.get<Course>(`${API_URL}/courses/${_id}`);
  return res.data;
};

// ✅ (optional) Example for categories if you add them later
export const getCategories = async (): Promise<Category[]> => {
  const res = await axios.get<Category[]>(`${API_URL}/categories`);
  return res.data;
};

// ✅ Generate affiliate link (mock)
export const generateAffiliateLink = (id: string) => {
  return `https://courseplatform.com/course/${id}?ref=affiliate_${Math.random()
    .toString(36)
    .substring(7)}`;
};

export const getMockDashboardStats = (): DashboardStats => {
  return {
    totalEarnings: 2847.5,
    totalClicks: 1234,
    totalConversions: 87,
    activeLinks: 15,
  };
};

export const getMockAffiliateLinks = (): AffiliateLink[] => {
  return [
    {
      id: 1,
      courseId: 1,
      courseTitle: "React for Beginners",
      link: "https://courseplatform.com/course/1?ref=aff_xyz123",
      clicks: 245,
      conversions: 18,
      earnings: 899.82,
      createdAt: "2024-01-10",
    },
    {
      id: 2,
      courseId: 3,
      courseTitle: "Python for Data Science",
      link: "https://courseplatform.com/course/3?ref=aff_abc456",
      clicks: 189,
      conversions: 12,
      earnings: 839.88,
      createdAt: "2024-01-15",
    },
  ];
};
