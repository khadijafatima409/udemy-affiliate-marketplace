import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomButton } from "@/components/ui/CustomButton";
import Link from "next/link";

import {
  Briefcase,
  Camera,
  Code,
  Database,
  Music,
  Palette,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { getCategories, getCourses } from "@/utils/api";
import { CourseList } from "@/components/CourseList";

const iconMap: Record<string, any> = {
  Code,
  Smartphone,
  Database,
  Palette,
  Briefcase,
  TrendingUp,
  Camera,
  Music,
};

export default async function Home() {
  const courses = await getCourses();
  const categories = await getCategories();
  const featuredCourses = courses.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-[#5624d0] to-[#7c3aed] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Learn Without Limits
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Start, switch, or advance your career with thousands of courses
              from industry experts.
            </p>
            <div className="max-w-2xl">
              {/* <SearchBar placeholder="What do you want to learn?" /> */}
            </div>
          </div>
        </div>
      </section>
      <main className="flex-1">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1c1d1f] mb-8">
              Popular Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {categories.map((category) => {
                const Icon = iconMap[category.icon];
                return (
                  <Link
                    key={category.id}
                    href={`/courses?category=${encodeURIComponent(
                      category.name
                    )}`}
                    className="bg-gray-50 hover:bg-gray-100 p-6 rounded-xl transition-colors flex flex-col items-center text-center gap-3"
                  >
                    <div className="bg-[#5624d0] text-white p-4 rounded-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-semibold text-[#1c1d1f]">
                      {category.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#1c1d1f]">
                Featured Courses
              </h2>
              <Link href="/courses">
                <CustomButton variant="outline" size="md">
                  View All Courses
                </CustomButton>
              </Link>
            </div>
            <CourseList courses={featuredCourses} />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1c1d1f] mb-4">
                  Become an Affiliate Partner
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Earn commissions by promoting quality courses to your
                  audience. Join thousands of affiliates earning passive income.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-gray-700">
                      Earn up to 30% commission
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-gray-700">
                      Real-time tracking dashboard
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-gray-700">Monthly payouts</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <CustomButton variant="primary" size="lg">
                    Get Started
                  </CustomButton>
                </Link>
              </div>
              <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center h-80">
                <p className="text-gray-400 text-lg">
                  Affiliate Dashboard Preview
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
