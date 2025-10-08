import CourseDetails from "@/components/courseDetails";
import CourseList from "@/components/courseList";
import { sampleCourse } from "@/data/sampleCourse";

export default function Home() {
  const courses = [sampleCourse];

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <CourseDetails course={sampleCourse} />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Other courses</h2>
        <CourseList initialCourses={courses} />
      </div>
    </main>
  );
}
