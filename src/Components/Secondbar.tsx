"use client";
import { useState } from "react";
import Link from "next/link";
// Import icons from react-icons
import { FaHeart, FaShoppingCart } from "react-icons/fa";

function SecondBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // Start with 0 items in the cart

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Example function to simulate adding an item to the cart
  const addToCart = () => {
    setCartItemCount(cartItemCount + 1); // Increment the cart count
  };

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

        {/* Right: Favorite and Cart Sections */}
        <div className="flex items-center space-x-6">
          {/* Favorite */}
          <div className="flex flex-col items-center">
            <FaHeart className="w-6 h-6 mb-1" />
            <Link href="/favorite">Favorite</Link>
          </div>

          {/* My Cart */}
          <div className="flex flex-col items-center relative">
            <FaShoppingCart className="w-6 h-6 mb-1" />
            {/* Cart Item Count Badge */}
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
            <Link href="/cart">My Cart</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondBar;
