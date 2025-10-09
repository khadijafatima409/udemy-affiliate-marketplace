export interface Course {
  id: number;
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
  id: number;
  name: string;
  icon: string;
}
