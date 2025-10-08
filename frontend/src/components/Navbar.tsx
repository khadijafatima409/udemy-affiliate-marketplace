"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, Bell, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [openMob, setOpenMob] = useState(false);
  const [query, setQuery] = useState("");
  const categories = [
    "Development",
    "Business",
    "Design",
    "Marketing",
    "IT & Software",
  ];

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* left: menu button + brand */}
        <div className="flex items-center gap-6">
          {/* show hamburger up to large screens (mobile + tablet). On lg and up we show full nav */}
          <button
            onClick={() => setOpenMob((s) => !s)}
            className="lg:hidden p-2 rounded hover:bg-gray-100"
            aria-label={openMob ? "Close menu" : "Open menu"}
          >
            {openMob ? "✕" : "☰"}
          </button>

          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              UdemyClone
            </Link>
            {/* <span className="text-xs text-gray-500 hidden md:inline">
              Affiliate demo
            </span> */}
          </div>
        </div>

        {/* center: search (tablet & desktop) */}
        <div className="hidden md:flex items-center flex-1 mx-6">
          <div className="w-full">
            <label htmlFor="search" className="sr-only">
              Search courses
            </label>
            <div className="relative">
              <input
                id="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for courses, e.g. React, Python..."
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 rounded-md hover:bg-gray-100">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* right: nav actions */}
        <nav className="flex items-center gap-4">
          {/* For desktop (lg+) show full nav. On tablet (md) we keep a compact set. */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="relative group">
              <button className="px-3 py-2 rounded hover:bg-gray-100">
                Categories
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                {categories.map((c) => (
                  <a
                    key={c}
                    className="block px-4 py-2 hover:bg-gray-50"
                    href="#"
                  >
                    {c}
                  </a>
                ))}
              </div>
            </div>
            <a className="px-3 py-2 rounded hover:bg-gray-100" href="#">
              Udemy for Business
            </a>
            <button className="px-3 py-2 rounded hover:bg-gray-100">
              Become an Instructor
            </button>
          </div>

          {/* compact icons (visible on all sizes) */}
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Notifications"
          >
            <Bell size={20} />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Cart"
          >
            <ShoppingCart size={20} />
          </button>

          {/* login: show on tablet and desktop, hide on smallest phones (use responsive sizing) */}
          <div className="hidden md:block">
            <button className="px-3 py-2 rounded bg-violet-600 text-white hover:bg-violet-700">
              Log in
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile & Tablet slide-down panel: visible on screens smaller than lg */}
      {openMob && (
        <div className="lg:hidden bg-white border-t px-4 py-3 space-y-3">
          {/* Search bar for small screens (mobile + tablet) */}
          <div>
            <label htmlFor="mobile-search" className="sr-only">
              Search courses
            </label>
            <div className="relative">
              <input
                id="mobile-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses..."
                className="w-full rounded-md border border-gray-200 px-3 py-2"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md hover:bg-gray-100">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Links - stacked for touch targets */}
          <div className="flex flex-col gap-2">
            <details className="group">
              <summary className="px-2 py-2 rounded hover:bg-gray-100 cursor-pointer">
                Categories
              </summary>
              <div className="pl-4 mt-2 flex flex-col gap-1">
                {categories.map((c) => (
                  <a
                    key={c}
                    className="block px-2 py-2 rounded hover:bg-gray-50"
                    href="#"
                  >
                    {c}
                  </a>
                ))}
              </div>
            </details>

            <a className="block px-2 py-2 rounded hover:bg-gray-100" href="#">
              Udemy for Business
            </a>
            <a className="block px-2 py-2 rounded hover:bg-gray-100" href="#">
              Become an Instructor
            </a>

            <button className="px-3 py-2 rounded bg-indigo-600 text-white">
              Log in
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
