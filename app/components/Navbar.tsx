"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-black">
              Brandon
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8">
            <Link href="#about" className="text-gray-700 hover:text-black transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-black transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-black transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
