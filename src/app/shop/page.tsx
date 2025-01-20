'use client';  // Mark this as a Client Component

import { useState } from 'react';
import Navbar from "@/Components/Navbar";
import Subfooter from "@/Components/Subfooter";
import Footer from "@/Components/Footer";
import Image from "next/image";
import { FaHeart, FaRegHeart } from 'react-icons/fa';  // Import React icons

export default function Shop() {
  const [favorites, setFavorites] = useState<string[]>([]); // Array to store favorite product IDs

  // Function to toggle favorite status
  const toggleFavorite = (productId: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)  // Remove from favorites if already added
        : [...prevFavorites, productId]  // Add to favorites if not already added
    );
  };

  return (
    <div>
      <Navbar />
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B88E2F] mb-8">Our Shop</h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Example Product 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/product1.jpg"
                alt="Product 1"
                width={300}
                height={200}
                className="object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-[#B88E2F]">Product 1</h3>
              <p className="text-gray-700 mt-2">$49.99</p>
              <button className="mt-4 px-4 py-2 bg-[#B88E2F] text-white rounded-lg">Add to Cart</button>
              <div
                onClick={() => toggleFavorite("product1")}
                className="mt-4 cursor-pointer text-xl"
              >
                {favorites.includes("product1") ? (
                  <FaHeart color="red" />
                ) : (
                  <FaRegHeart color="gray" />
                )}
              </div>
            </div>

            {/* Example Product 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/product2.jpg"
                alt="Product 2"
                width={300}
                height={200}
                className="object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-[#B88E2F]">Product 2</h3>
              <p className="text-gray-700 mt-2">$59.99</p>
              <button className="mt-4 px-4 py-2 bg-[#B88E2F] text-white rounded-lg">Add to Cart</button>
              <div
                onClick={() => toggleFavorite("product2")}
                className="mt-4 cursor-pointer text-xl"
              >
                {favorites.includes("product2") ? (
                  <FaHeart color="red" />
                ) : (
                  <FaRegHeart color="gray" />
                )}
              </div>
            </div>

            {/* Add more product blocks here */}
          </div>
        </div>
      </section>
      <Subfooter />
      <Footer />
    </div>
  );
}
