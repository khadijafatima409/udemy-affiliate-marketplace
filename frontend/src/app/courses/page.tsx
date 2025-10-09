"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { CourseList } from "@/components/CourseList";
import { CategoryFilter } from "@/components/Filters/CategoryFilter";
import { PriceFilter } from "@/components/Filters/PriceFilter";
import { RatingFilter } from "@/components/Filters/RatingFilter";
import { CustomButton } from "@/components/ui/CustomButton";
import { Course } from "../../type/courses";
import { getCourses } from "@/utils/api";
import { Filter } from "lucide-react";

export default function CoursesPage() {
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    getCourses().then((courses) => {
      setAllCourses(courses);
      setFilteredCourses(courses);
    });
  }, []);

  useEffect(() => {
    let filtered = allCourses;

    if (selectedCategory) {
      filtered = filtered.filter(
        (course) => course.category === selectedCategory
      );
    }

    if (selectedPrice) {
      if (selectedPrice === "free") {
        filtered = filtered.filter((course) => course.price === 0);
      } else if (selectedPrice === "0-25") {
        filtered = filtered.filter(
          (course) => course.price > 0 && course.price <= 25
        );
      } else if (selectedPrice === "25-50") {
        filtered = filtered.filter(
          (course) => course.price > 25 && course.price <= 50
        );
      } else if (selectedPrice === "50-100") {
        filtered = filtered.filter(
          (course) => course.price > 50 && course.price <= 100
        );
      } else if (selectedPrice === "100+") {
        filtered = filtered.filter((course) => course.price > 100);
      }
    }

    if (selectedRating > 0) {
      filtered = filtered.filter((course) => course.rating >= selectedRating);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredCourses(filtered);
  }, [
    selectedCategory,
    selectedPrice,
    selectedRating,
    searchQuery,
    allCourses,
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="bg-white py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-[#1c1d1f] mb-6">
              All Courses
            </h1>
            <div className="max-w-2xl">
              <SearchBar onSearch={setSearchQuery} />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[#1c1d1f]">Filters</h2>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden p-2 hover:bg-gray-100 rounded"
                  >
                    <Filter className="w-5 h-5" />
                  </button>
                </div>

                <div
                  className={`space-y-6 ${
                    showFilters ? "block" : "hidden lg:block"
                  }`}
                >
                  <CategoryFilter
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                  />
                  <PriceFilter
                    selectedPrice={selectedPrice}
                    onPriceChange={setSelectedPrice}
                  />
                  <RatingFilter
                    selectedRating={selectedRating}
                    onRatingChange={setSelectedRating}
                  />
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="mb-6">
                <p className="text-sm text-gray-600">
                  Showing {filteredCourses.length} of {allCourses.length}{" "}
                  courses
                </p>
              </div>

              {filteredCourses.length > 0 ? (
                <>
                  <CourseList courses={filteredCourses} />
                  <div className="mt-12 flex justify-center">
                    <CustomButton variant="outline" size="lg">
                      Load More
                    </CustomButton>
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-gray-600">
                    No courses found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
