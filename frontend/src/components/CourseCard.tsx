import Link from "next/link";
import { Star, Users } from "lucide-react";
import { Course } from "../type/courses";
import Image from "next/image";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course._id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col">
        <div className="relative h-48 w-full bg-gray-200">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-[#1c1d1f] mb-2 line-clamp-2">
            {course.title}
          </h3>

          <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>

          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-[#1c1d1f]">{course.rating}</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(course.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              ({course.students.toLocaleString()})
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <Users className="w-4 h-4" />
            <span>{course.students.toLocaleString()} students</span>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <span className="text-2xl font-bold text-[#1c1d1f]">
              ${course.price}
            </span>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
              {course.level}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
