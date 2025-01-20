'use client';  // Mark this as a Client Component

import { useState } from 'react';
import Navbar from "@/Components/Navbar";
import Subfooter from "@/Components/Subfooter";
import Footer from "@/Components/Footer";
import Image from 'next/image';

const FavoritePage = () => {
  const [favorites, setFavorites] = useState<string[]>([]); // Example of storing favorite product IDs

  // Function to add product to favorites
  const addToFavorites = (productId: string) => {
    setFavorites((prevFavorites) => [...prevFavorites, productId]);
  };

  return (
    <div>
      <Navbar />
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-[#B88E2F] mb-8">
            Your Favorite Products
          </h2>

          {favorites.length === 0 ? (
            <p className="text-lg text-gray-700 text-center">You have no favorite products yet. Start adding some!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((productId) => (
                <div key={productId} className="p-4 border rounded-lg shadow-md">
                  {/* Example of a product card */}
                  <Image src={`/images/products/${productId}.jpg`} alt={`Product ${productId}`} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{`Product ${productId}`}</h3>
                  <button
                    className="bg-[#B88E2F] text-white py-2 px-4 rounded-md hover:bg-[#9A7423]"
                    onClick={() => addToFavorites(productId)}
                  >
                    Add to Favorites
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Subfooter />
      <Footer />
    </div>
  );
};

export default FavoritePage;
