import axios from "axios";
import { Category, Course } from "../type/courses";

// ✅ Your backend base URL
const API_URL = "http://localhost:5000/api";

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
