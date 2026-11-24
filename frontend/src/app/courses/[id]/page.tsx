import { CourseDetail } from "@/components/CourseDetails";
import { getCourses, getCourseById } from "@/utils/api";

import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const courses = await getCourses();
    return courses.map((course) => ({
      id: course._id.toString(),
    }));
  } catch {
    // Backend not reachable at build time; pages will render on request instead
    return [];
  }
}

interface CourseDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { id } = await params;
  const course = await getCourseById(id);

  if (!course) {
    notFound();
  }

  return <CourseDetail initialCourse={course} />;
}
