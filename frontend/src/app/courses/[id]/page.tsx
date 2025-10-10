import { CourseDetail } from "@/components/CourseDetails";
import { getCourses, getCourseById } from "@/utils/api";

import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    id: course._id.toString(),
  }));
}

interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const course = await getCourseById((params.id));

  if (!course) {
    notFound();
  }

  return <CourseDetail initialCourse={course} />;
}
