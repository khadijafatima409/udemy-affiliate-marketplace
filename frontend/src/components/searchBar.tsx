// components/SearchBar.tsx
"use client";
import React from "react";

export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (s: string) => void;
}) {
  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">
        Search courses
      </label>
      <div className="relative">
        <input
          id="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search courses, e.g. React, TypeScript..."
          className="w-full rounded-md border border-gray-200 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
          🔍
        </div>
      </div>
    </div>
  );
}
