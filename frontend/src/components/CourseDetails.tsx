// components/CourseDetails.tsx
"use client";
import React, { useState } from "react";

type Lecture = {
  id: string;
  title: string;
  duration: string;
  preview?: boolean;
};
type Section = { id: string; title: string; lectures: Lecture[] };
type Instructor = { name: string; title?: string; avatarUrl?: string };
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

export default function CourseDetails({ course }: { course: Course }) {
  const [openSec, setOpenSec] = useState<string | null>(
    course.curriculum[0]?.id ?? null
  );

  // function fmtPrice(p: number) {
  //   return `$${p.toFixed(2)}`;
  // }

  function handleBuy() {
    if (course.affiliateUrl) {
      // Simulate affiliate click + redirect
      window.open(course.affiliateUrl, "_blank", "noopener,noreferrer");
      console.log("Affiliate click simulated for", course.id);
    } else {
      alert("No affiliate link configured (demo).");
    }
  }

  return (
    <div className="w-full">
      {/* Grid: main content + sidebar (stack on small, 2/3 + 1/3 on md+) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main column */}
        <div className="md:col-span-2 space-y-6">
          {/* Hero / top card */}
          <article className="bg-white p-6 rounded-lg shadow-sm">
            <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
              {course.title}
            </h1>
            <p className="text-sm text-gray-600 mt-2">{course.headline}</p>

            <div className="flex flex-wrap items-center gap-3 mt-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Stars rating={course.rating} />
                <span className="font-medium ml-1">
                  {course.rating.toFixed(1)}
                </span>
                <span className="text-gray-500">
                  ({course.reviews.toLocaleString()})
                </span>
              </div>

              <span className="text-gray-400">•</span>

              <div className="text-gray-700">
                {course.students.toLocaleString()} students
              </div>

              <span className="text-gray-400">•</span>

              <div className="text-gray-700">
                Last updated {course.lastUpdated}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">What you&apos;ll learn</h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {course.whatYouWillLearn.map((w, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span className="mt-1 text-green-600">✓</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Description</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                {course.description}
              </p>
            </div>
          </article>

          {/* Curriculum */}
          <section className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold px-2">Curriculum</h2>

            <div className="mt-3 divide-y">
              {course.curriculum.map((sec) => {
                const open = openSec === sec.id;
                return (
                  <div key={sec.id} className="py-2">
                    <button
                      onClick={() => setOpenSec(open ? null : sec.id)}
                      aria-expanded={open}
                      className="w-full text-left flex items-center justify-between px-3 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded"
                    >
                      <div>
                        <div className="font-medium">{sec.title}</div>
                        <div className="text-xs text-gray-500">
                          {sec.lectures.length} lectures
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {open ? "▾" : "▸"}
                      </div>
                    </button>

                    {open && (
                      <div className="px-4 pb-3">
                        <ul className="space-y-2">
                          {sec.lectures.map((lec) => (
                            <li
                              key={lec.id}
                              className="flex items-center justify-between text-sm"
                            >
                              <div className="flex items-center gap-3">
                                {lec.preview && (
                                  <span className="px-1.5 py-0.5 text-xs border rounded text-indigo-600">
                                    Preview
                                  </span>
                                )}
                                <span className="text-gray-700">
                                  {lec.title}
                                </span>
                              </div>
                              <div className="text-gray-500">
                                {lec.duration}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-1">
          {/* On small screens: show a compact card above other sidebar content */}
          <div className="block md:hidden">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-xl font-semibold">
                    {course.discountedPrice
                      ? fmt(course.discountedPrice)
                      : fmt(course.price)}
                  </div>
                  {course.discountedPrice && (
                    <div className="text-sm text-gray-500 line-through">
                      {fmt(course.price)}
                    </div>
                  )}
                </div>
                <div className="text-xs text-gray-500">Bestseller</div>
              </div>

              <div className="mt-3 space-y-2">
                <button
                  onClick={handleBuy}
                  className="w-full px-4 py-2 rounded bg-amber-500 text-white font-medium"
                >
                  Buy now
                </button>
                <button className="w-full px-4 py-2 rounded border">
                  Add to cart
                </button>
              </div>

              <ul className="mt-3 text-xs text-gray-600 space-y-1">
                <li>{course.duration} total length</li>
                <li>{course.language}</li>
                <li>Certificate of completion</li>
              </ul>
            </div>
          </div>

          {/* Sticky sidebar card for md+ */}
          <div className="hidden md:block sticky top-6">
            <div className="bg-white p-5 rounded-lg border shadow-sm">
              <div className="text-right text-sm text-gray-500">Bestseller</div>
              <div className="mt-2">
                <div className="text-2xl font-semibold">
                  {course.discountedPrice
                    ? fmt(course.discountedPrice)
                    : fmt(course.price)}
                </div>
                {course.discountedPrice && (
                  <div className="text-sm text-gray-500 line-through">
                    {fmt(course.price)}
                  </div>
                )}
              </div>

              <div className="mt-4 space-y-2">
                <button
                  onClick={handleBuy}
                  className="w-full px-4 py-2 rounded bg-amber-500 text-white font-medium hover:brightness-95"
                >
                  Buy now
                </button>
                <button className="w-full px-4 py-2 rounded border">
                  Add to cart
                </button>
                <button className="w-full px-4 py-2 rounded border">
                  Gift this course
                </button>
              </div>

              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>{course.duration} total length</li>
                <li>{course.language}</li>
                <li>Certificate of completion</li>
              </ul>
            </div>

            <div className="mt-4 bg-white p-4 rounded-lg border shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold">
                  {initials(course.instructor.name)}
                </div>
                <div>
                  <div className="font-medium">{course.instructor.name}</div>
                  <div className="text-sm text-gray-500">
                    {course.instructor.title}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                {course.instructor.title} — hands-on, project-based lessons.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ---------- small helpers ---------- */

function fmt(n: number) {
  return `$${n.toFixed(2)}`;
}

function initials(name = "") {
  return name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  return (
    <div className="flex items-center gap-1" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        return (
          <svg
            key={i}
            className={`w-4 h-4 ${
              filled ? "text-yellow-400" : "text-gray-300"
            }`}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.604L19.336 24 12 19.897 4.664 24l1.586-8.646L.5 9.75l7.832-1.732L12 .587z" />
          </svg>
        );
      })}
    </div>
  );
}
