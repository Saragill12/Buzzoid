'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 md:px-8 py-4 min-h-[80px] flex flex-col justify-center">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://buzzoid.com/wp-content/themes/buzz/v3/logo-alt-C7Kzt3kD.svg"
            alt="Logo"
            className="w-46 h-46 mr-2"
          />
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex space-x-6 items-center text-sm text-gray-600 font-medium">
          <Link
            href="/Buy-instagram-like"
            className="hover:text-orange-600 ml-[-10%] translate-y-[2px]"
          >
            Buy Instagram Likes
          </Link>
          <Link href="/Buy-instagram-follower" className="hover:text-orange-600">
            Buy Instagram Followers
          </Link>
          <Link href="/buy-instagram-comments" className="hover:text-orange-600">
            Buy Instagram Comments
          </Link>
          <Link href="/Buy-instagram-view" className="hover:text-orange-600">
            Buy Instagram Views
          </Link>
          <Link href="/faq" className="hover:text-orange-600">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-orange-600">
            Contact Us
          </Link>
          <Link href="/login" className="hover:text-orange-600">
            Login
          </Link>
          <Link
            href="/signup"
            className="text-orange-600 border border-orange-500 px-3 py-1 rounded hover:bg-orange-50 transition"
          >
            Sign up
          </Link>
        </div>
      </div>

      {/* Menu Items (Mobile) */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm font-medium text-gray-600">
          <Link
            href="/Buy-instagram-like"
            className="block hover:text-orange-600 pl-2 pt-1"
          >
            Buy Instagram Likes
          </Link>
          <Link href="/Buy-instagram-follower" className="block hover:text-orange-600 pl-2">
            Buy Instagram Followers
          </Link>
          <Link href="/buy-instagram-comments" className="block hover:text-orange-600 pl-2">
            Buy Instagram Comments
          </Link>
          <Link href="/Buy-instagram-view" className="block hover:text-orange-600 pl-2">
            Buy Instagram Views
          </Link>
          <Link href="/faq" className="block hover:text-orange-600 pl-2">
            FAQ
          </Link>
          <Link href="/contact" className="block hover:text-orange-600 pl-2">
            Contact Us
          </Link>
          <Link href="/login" className="block hover:text-orange-600 pl-2">
            Login
          </Link>
          <Link
            href="/signup"
            className="inline-block text-orange-600 border border-orange-500 px-3 py-1 rounded hover:bg-orange-50 ml-2"
          >
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
}
