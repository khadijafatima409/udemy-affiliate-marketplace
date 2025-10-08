// src/types/course.ts
export type Lecture = {
  id: string;
  title: string;
  duration: string;
  preview?: boolean;
};
export type Section = { id: string; title: string; lectures: Lecture[] };
export type Instructor = { name: string; title?: string; avatarUrl?: string };

export type Course = {
  id: string;
  title: string;
  headline: string;
  rating: number;
  reviews: number;
  students: number;
  duration: string;
  lastUpdated: string;
  language: string;
  price: number;
  discountedPrice?: number;
  whatYouWillLearn: string[];
  description: string;
  instructor: Instructor;
  curriculum: Section[];
  affiliateUrl?: string;
};
