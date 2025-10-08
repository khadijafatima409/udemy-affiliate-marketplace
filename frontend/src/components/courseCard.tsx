// components/CourseCard.tsx
"use client";
import React from "react";
import Link from "next/link";
import type { Course } from "../type/course";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
      <Link href={`/course/${course.id}`} className="block">
        <div className="h-40 bg-gradient-to-r from-indigo-100 to-indigo-50 flex items-center justify-center text-indigo-600 font-semibold">
          {/* placeholder image */}
          <span className="text-sm">Course image</span>
        </div>
      </Link>

      <div className="p-4 flex-1 flex flex-col">
        <Link
          href={`/course/${course.id}`}
          className="text-sm font-semibold hover:text-indigo-600"
        >
          {course.title}
        </Link>

        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
          {course.headline}
        </p>

        <div className="mt-3 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            {/* <Stars rating={course.rating} /> */}
            <span className="text-gray-600">{course.rating.toFixed(1)}</span>
            <span className="text-gray-400">
              ({course.reviews.toLocaleString()})
            </span>
          </div>
          <div className="text-right">
            <div className="font-semibold">
              {course.discountedPrice
                ? `$${course.discountedPrice.toFixed(2)}`
                : `$${course.price.toFixed(2)}`}
            </div>
            {course.discountedPrice && (
              <div className="text-xs text-gray-400 line-through">
                ${course.price.toFixed(2)}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

// function Stars({ rating }: { rating: number }) {
//   const full = Math.floor(rating);
//   return (
//     <div className="flex items-center gap-0.5" aria-hidden>
//       {Array.from({ length: 5 }).map((_, i) => (
//         <svg
//           key={i}
//           className={`w-3 h-3 ${
//             i < full ? "text-yellow-400" : "text-gray-300"
//           }`}
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.604L19.336 24 12 19.897 4.664 24l1.586-8.646L.5 9.75l7.832-1.732L12 .587z" />
//         </svg>
//       ))}
//     </div>
//   );
// }
