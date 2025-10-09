"use client";

import { categories } from "@/data/categories";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#1c1d1f] mb-3">Category</h3>
      <div className="space-y-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="category"
            value=""
            checked={selectedCategory === ""}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-4 h-4 text-[#5624d0] focus:ring-[#5624d0]"
          />
          <span className="text-sm text-[#1c1d1f]">All Categories</span>
        </label>
        {categories.map((category) => (
          <label
            key={category.id}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="category"
              value={category.name}
              checked={selectedCategory === category.name}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-4 h-4 text-[#5624d0] focus:ring-[#5624d0]"
            />
            <span className="text-sm text-[#1c1d1f]">{category.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
