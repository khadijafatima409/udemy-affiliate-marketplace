import axios from "axios";
import { Course } from "../type/courses";

// ✅ Your backend base URL
const API_URL = "http://localhost:5000/api";

// ✅ Fetch all courses from backend
export const getCourses = async (): Promise<Course[]> => {
  const res = await axios.get<Course[]>(`${API_URL}/courses`);
  return res.data;
};

// ✅ Fetch a course by ID
export const getCourseById = async (id: string): Promise<Course> => {
  const res = await axios.get<Course>(`${API_URL}/courses/${id}`);
  return res.data;
};

// ✅ (optional) Example for categories if you add them later
export const getCategories = async () => {
  const res = await axios.get(`${API_URL}/categories`);
  return res.data;
};
