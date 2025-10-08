// components/CourseList.tsx
"use client";
import React, { useMemo, useState } from "react";
import type { Course } from "../type/course";
import SearchBar from "../components/searchBar";
import CourseCard from "./courseCard";

export default function CourseList({
  initialCourses,
}: {
  initialCourses: Course[];
}) {
  const [query, setQuery] = useState("");
  const courses = initialCourses;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter((c) => {
      return (
        c.title.toLowerCase().includes(q) ||
        c.headline.toLowerCase().includes(q) ||
        c.instructor.name.toLowerCase().includes(q)
      );
    });
  }, [query, courses]);

  return (
    <section>
      <div className="mb-6">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-8 text-center text-gray-500">
          No courses found for “{query}”
        </div>
      )}
    </section>
  );
}
