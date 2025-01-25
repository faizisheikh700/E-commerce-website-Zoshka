"use client";
import { useState } from "react";
import Link from "next/link";
// Import icons from react-icons
import { FaShoppingCart, FaUser } from "react-icons/fa";

function SecondBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section className="bg-black text-white py-4 border-b-2 border-white">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left: All Categories Dropdown */}
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="bg-[#B88E2F] px-4 py-2 rounded-md"
          >
            All Categories
          </button>
          {isMenuOpen && (
            <ul className="absolute bg-black text-white w-48 mt-2 rounded-md shadow-lg z-10">
              <li className="px-4 py-2 hover:bg-gray-600">Smart Devices</li>
              <li className="px-4 py-2 hover:bg-gray-600">Kitchen Gadgets</li>
              <li className="px-4 py-2 hover:bg-gray-600">Organizer</li>
              <li className="px-4 py-2 hover:bg-gray-600">Cosmetics</li>
              <li className="px-4 py-2 hover:bg-gray-600">Decor</li>
              <li className="px-4 py-2 hover:bg-gray-600">Toys & Games</li>
            </ul>
          )}
        </div>

        {/* Center: Search Bar (Hidden on mobile, visible on laptops) */}
        <div className="flex-1 mx-4 hidden md:block">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded-md text-gray-800"
          />
        </div>

        {/* Right: User and Cart Sections */}
        <div className="flex items-center space-x-6">
          {/* User*/}
          <div className="flex flex-col items-center">
            <FaUser className="w-6 h-6 mb-1" />
            <Link href="/login">User</Link>
          </div>

          {/* My Cart */}
          <div className="flex flex-col items-center relative">
            <FaShoppingCart className="w-6 h-6 mb-1" />
            {/* Cart Item Count Badge */}
            <Link href="/cart">My Cart</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondBar;
