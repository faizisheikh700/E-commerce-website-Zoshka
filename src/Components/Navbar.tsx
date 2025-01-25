"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo with Image */}
        <div className="flex items-center text-2xl font-bold">
          <Image
            src="/logo.jpeg" // Replace with the actual path to your logo image
            alt="Logo"
            width={50} // Set the width of the logo
            height={50} // Set the height of the logo
            className="mr-2"
          />
          <Link href="/" className="hover:text-gray-300">
            Zoshka
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li> 
          <li><Link href="/shop" className="hover:text-gray-300">Shop</Link></li>
          <li><Link href="/cart" className="hover:text-gray-300">Cart</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
           
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-300">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 py-2">
          <ul className="space-y-4">
            <li><Link href="/" className="hover:text-gray-300" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-300" onClick={toggleMenu}>About</Link></li> 
            <li><Link href="/shop" className="hover:text-gray-300" onClick={toggleMenu}>Shop</Link></li>
            <li><Link href="/cart" className="hover:text-gray-300" onClick={toggleMenu}>Cart</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300" onClick={toggleMenu}>Contact</Link></li>
            
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
