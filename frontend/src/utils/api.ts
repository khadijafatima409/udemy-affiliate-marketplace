import { courses } from "../data/courses";
import { categories } from "@/data/categories";
import { Course, Category } from "../type/courses";

export const getCourses = async (): Promise<Course[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(courses), 100);
  });
};

export const getCourseById = async (
  id: number
): Promise<Course | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(courses.find((c) => c.id === id)), 100);
  });
};

export const getCategories = async (): Promise<Category[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(categories), 100);
  });
};

export const generateAffiliateLink = (courseId: number): string => {
  return `https://courseplatform.com/course/${courseId}?ref=affiliate_${Math.random()
    .toString(36)
    .substring(7)}`;
};
