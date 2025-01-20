"use client";

import Image from "next/image";

export default function CategorySection() {
  const categories = [
    { id: 1, title: "Smart Devices", image: "/smart.jpeg" },
    { id: 2, title: "Kitchen Gadgets", image: "/kitchen.jpeg" },
    { id: 3, title: "Organizer", image: "/organizer.jpeg" },
    { id: 4, title: "Cosmetics", image: "/cosmatic.jpg" },
    { id: 5, title: "Decor", image: "/decor.jpeg" },
    { id: 6, title: "Toys & Games", image: "/toy.jpeg" },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative w-full aspect-square"> {/* Maintain aspect ratio */}
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">{category.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
