import { courses } from "../data/courses";
import { categories } from "@/data/categories";
import {
  Course,
  Category,
  AffiliateLink,
  DashboardStats,
} from "../type/courses";

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
