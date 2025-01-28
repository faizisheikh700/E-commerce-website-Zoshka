"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/b2.jpg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-end min-h-screen bg-black bg-opacity-40">
        {/* Content Box */}
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg p-4 md:p-8 bg-black bg-opacity-90 rounded-lg shadow-lg text-center md:text-left">
          <h6 className="text-sm md:text-base lg:text-lg font-semibold mb-2 md:mb-4 text-white">
            New Arrival
          </h6>
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-[#B88E2F]">
            Discover Our <br /> New Collection
          </h3>
          <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore
          </p>
          <Link href="/shop">
            <button className="inline-block bg-[#B88E2F] text-white px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold rounded-md hover:bg-gray-800 transition duration-300">
              BUY NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
