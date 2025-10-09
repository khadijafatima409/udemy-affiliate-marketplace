"use client";

import { Star } from "lucide-react";

interface RatingFilterProps {
  selectedRating: number;
  onRatingChange: (rating: number) => void;
}

export function RatingFilter({
  selectedRating,
  onRatingChange,
}: RatingFilterProps) {
  const ratings = [
    { value: 0, label: "All Ratings" },
    { value: 4.5, label: "4.5 & up" },
    { value: 4.0, label: "4.0 & up" },
    { value: 3.5, label: "3.5 & up" },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#1c1d1f] mb-3">Rating</h3>
      <div className="space-y-2">
        {ratings.map((rating) => (
          <label
            key={rating.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="rating"
              value={rating.value}
              checked={selectedRating === rating.value}
              onChange={(e) => onRatingChange(Number(e.target.value))}
              className="w-4 h-4 text-[#5624d0] focus:ring-[#5624d0]"
            />
            <div className="flex items-center gap-1">
              {rating.value > 0 && (
                <>
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm text-[#1c1d1f]">{rating.label}</span>
                </>
              )}
              {rating.value === 0 && (
                <span className="text-sm text-[#1c1d1f]">{rating.label}</span>
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
