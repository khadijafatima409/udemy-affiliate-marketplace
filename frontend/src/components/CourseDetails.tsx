"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomButton } from "@/components/ui/CustomButton";
import { CustomCard } from "@/components/ui/CustomCard";
import { Star, Users, Clock, BarChart, CheckCircle } from "lucide-react";
import { Course } from "../type/courses";
import { generateAffiliateLink } from "@/utils/api";
import Image from "next/image";
import { AffiliateLinkBox } from "./Dashboard/AffiliateLinkBox";

interface CourseDetailProps {
  initialCourse: Course;
}

export function CourseDetail({ initialCourse }: CourseDetailProps) {
  const [course] = useState<Course>(initialCourse);
  const [affiliateLink, setAffiliateLink] = useState<string>("");
  const [showAffiliateLink, setShowAffiliateLink] = useState(false);

  const handleGenerateLink = () => {
    const link = generateAffiliateLink(course.id);
    setAffiliateLink(link);
    setShowAffiliateLink(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="bg-[#1c1d1f] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <span className="text-sm text-gray-300">
                    {course.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {course.title}
                </h1>
                <p className="text-lg text-gray-300 mb-6">
                  {course.description}
                </p>

                <div className="flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-yellow-400">
                      {course.rating}
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{course.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <BarChart className="w-5 h-5" />
                    <span>{course.level}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-300">
                    Created by{" "}
                    <span className="text-white font-semibold">
                      {course.instructor}
                    </span>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <CustomCard>
                  <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#1c1d1f]">
                      ${course.price}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <CustomButton
                      variant="primary"
                      className="w-full"
                      size="lg"
                    >
                      Buy Now
                    </CustomButton>
                    <CustomButton
                      variant="outline"
                      className="w-full"
                      size="lg"
                      onClick={handleGenerateLink}
                    >
                      Generate Affiliate Link
                    </CustomButton>
                  </div>
                </CustomCard>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {showAffiliateLink && (
                  <AffiliateLinkBox
                    link={affiliateLink}
                    title="Your Affiliate Link"
                  />
                )}

                <CustomCard>
                  <h2 className="text-2xl font-bold text-[#1c1d1f] mb-4">
                    What you&apos;ll learn
                  </h2>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "Build real-world projects from scratch",
                      "Master core concepts and best practices",
                      "Learn industry-standard tools and workflows",
                      "Get hands-on experience with practical exercises",
                      "Access to downloadable resources",
                      "Certificate of completion",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CustomCard>

                <CustomCard>
                  <h2 className="text-2xl font-bold text-[#1c1d1f] mb-4">
                    Course Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {course.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This comprehensive course is designed to take you from
                    beginner to advanced. You&apos;ll learn through hands-on
                    projects and real-world examples. By the end of this course,
                    you&apos;ll have the skills and confidence to build
                    professional projects on your own.
                  </p>
                </CustomCard>

                <CustomCard>
                  <h2 className="text-2xl font-bold text-[#1c1d1f] mb-4">
                    Student Reviews
                  </h2>
                  {course.reviews.length > 0 ? (
                    <div className="space-y-4">
                      {course.reviews.map((review) => (
                        <div
                          key={review.id}
                          className="border-b border-gray-200 pb-4 last:border-0"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-10 h-10 bg-[#5624d0] rounded-full flex items-center justify-center text-white font-semibold">
                              {review.user.charAt(0)}
                            </div>
                            <div>
                              <p className="font-semibold text-[#1c1d1f]">
                                {review.user}
                              </p>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700">
                            {review.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No reviews yet.</p>
                  )}
                </CustomCard>
              </div>

              <div className="lg:col-span-1">
                <CustomCard>
                  <h3 className="text-xl font-bold text-[#1c1d1f] mb-4">
                    About the Instructor
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-[#5624d0] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {course.instructor.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1c1d1f]">
                        {course.instructor}
                      </p>
                      <p className="text-sm text-gray-600">Expert Instructor</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Professional educator with years of experience in the
                    industry. Passionate about helping students achieve their
                    learning goals.
                  </p>
                </CustomCard>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
