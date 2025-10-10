export interface Course {
  _id: string;
  title: string;
  instructor: string;
  image: string;
  rating: number;
  price: number;
  category: string;
  description: string;
  students: number;
  duration: string;
  level: string;
  reviews: Review[];
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  _id: number;
  name: string;
  icon: string;
}

export interface AffiliateLink {
  id: number;
  courseId: number;
  courseTitle: string;
  link: string;
  clicks: number;
  conversions: number;
  earnings: number;
  createdAt: string;
}
export interface DashboardStats {
  totalEarnings: number;
  totalClicks: number;
  totalConversions: number;
  activeLinks: number;
}
