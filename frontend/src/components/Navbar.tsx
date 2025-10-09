"use client";

import Link from "next/link";
import { Search, User, Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5624d0] rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="text-xl font-bold text-[#1c1d1f]">Udemy</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/courses"
                className="text-sm text-[#1c1d1f] hover:text-[#5624d0]"
              >
                Courses
              </Link>
              <Link
                href="/dashboard"
                className="text-sm text-[#1c1d1f] hover:text-[#5624d0]"
              >
                Dashboard
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm text-[#1c1d1f] hover:text-[#5624d0] font-semibold"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-[#5624d0] text-white text-sm font-semibold rounded-lg hover:bg-[#4a1fb8]"
            >
              Sign up
            </Link>
            <Link
              href="/profile"
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <User className="w-5 h-5 text-[#1c1d1f]" />
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/courses"
              className="block text-sm text-[#1c1d1f] hover:text-[#5624d0]"
            >
              Courses
            </Link>
            <Link
              href="/dashboard"
              className="block text-sm text-[#1c1d1f] hover:text-[#5624d0]"
            >
              Dashboard
            </Link>
            <Link
              href="/login"
              className="block text-sm text-[#1c1d1f] hover:text-[#5624d0]"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="block text-sm text-[#1c1d1f] hover:text-[#5624d0]"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
