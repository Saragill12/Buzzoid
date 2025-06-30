"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 relative overflow-hidden">
        {/* Decorative images (optional – can be removed) */}
        {/* Removed background decorations behind the logo */}

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center py-2 px-4">
          <span className="text-white text-sm mr-3">Try out our new Comments!</span>
          <Link href="/buy-instagram-comments">
            <Button
              size="sm"
              className="bg-white text-blue-600 hover:bg-gray-100 text-xs font-semibold px-3 py-1 h-6"
            >
              CLICK HERE
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo (Centered on mobile) */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link href="/" className="flex items-center">
              <img
                src="https://buzzoid.com/wp-content/themes/buzz/v3/logo-alt-C7Kzt3kD.svg"
                alt="Buzzoid Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/Buy-instagram-like" className="text-gray-600 hover:text-gray-800 text-sm font-medium">
              Buy Instagram Likes
            </Link>
            <Link href="/buy-instagram-followers" className="text-gray-600 hover:text-gray-800 text-sm font-medium">
              Buy Instagram Followers
            </Link>
            <Link href="/buy-instagram-comments" className="text-gray-600 hover:text-gray-800 text-sm font-medium">
              Buy Instagram Comments
            </Link>
            <Link href="/buy-instagram-views" className="text-gray-600 hover:text-gray-800 text-sm font-medium">
              Buy Instagram Views
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-gray-800 text-sm font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800 text-sm font-medium">
              Contact Us
            </Link>
          </div>

          {/* Auth & Mobile Toggle */}
          <div className="flex items-center space-x-3 lg:space-x-6">
            <Link href="/login" className="text-gray-600 hover:text-gray-800 text-sm font-medium">
              Login
            </Link>
            <Link href="/signup">
              <Button
                size="sm"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm font-medium px-4 py-2 rounded-md"
              >
                Sign up
              </Button>
            </Link>

            {/* Toggle Button for Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 p-2"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 space-y-2 pb-4">
            <Link href="/Buy-instagram-like" className="block text-gray-600 hover:text-gray-800 text-sm font-medium">
              Buy Instagram Likes
            </Link>
            <Link href="/buy-instagram-followers" className="block text-gray-600 hover:text-gray-800 text-sm font-medium">
              Buy Instagram Followers
            </Link>
            <Link href="/buy-instagram-comments" className="block text-gray-600 hover:text-gray-800 text-sm font-medium">
              Buy Instagram Comments
            </Link>
            <Link href="/buy-instagram-views" className="block text-gray-600 hover:text-gray-800 text-sm font-medium">
              Buy Instagram Views
            </Link>
            <Link href="/faq" className="block text-gray-600 hover:text-gray-800 text-sm font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="block text-gray-600 hover:text-gray-800 text-sm font-medium">
              Contact Us
            </Link>
            <Link href="/login" className="block text-gray-600 hover:text-gray-800 text-sm font-medium">
              Login
            </Link>
            <Link href="/signup" className="block bg-orange-500 text-white px-4 py-2 rounded-md text-center">
              Sign up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
