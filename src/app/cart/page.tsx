"use client";

import type { FC } from "react";
import { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Subfooter from "@/Components/Subfooter";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import Image from "next/image";

// Define the CartItem type for better TypeScript support
type CartItem = {
  id: string;
  productname: string;
  productdes: string;
  price: number;
  discount: number;
  image: string;
};

const Cart: FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const DELIVERY_CHARGES = 200; // Fixed delivery charges
  const router = useRouter();

  useEffect(() => {
    // Load cart items from localStorage when component mounts
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(items);
  }, []);

  const removeFromCart = (itemId: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    const cartTotal = cartItems.reduce((total, item) => {
      const discountedPrice = item.price - (item.price * item.discount) / 100;
      return total + discountedPrice;
    }, 0);
    return cartTotal + DELIVERY_CHARGES; // Add delivery charges
  };

  const continueShopping = () => {
    router.push("/shop");
  };

  const proceedToCheckout = () => {
    router.push("/shipping"); // Change this to your actual shipping page route
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
          <button
            onClick={continueShopping}
            className="bg-[#B88E2F] text-white px-6 py-3 rounded-lg hover:bg-[#B88E2F] transition-colors"
          >
            Continue Shopping
          </button>
        </div>
        <Subfooter />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#B88E2F] mb-8 text-center">Your Shopping Cart</h1>

        <div className="grid gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 shadow-md"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.productname}
                width={128} // Set appropriate width
                height={128} // Set appropriate height
                className="w-32 h-32 object-contain bg-white rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">{item.productname}</h2>
                <p className="text-gray-600 mt-1">{item.productdes}</p>
                <div className="mt-2">
                  <span className="text-[#B88E2F] font-semibold">Price: </span>
                  <span className="text-red-500 line-through ml-2">Rs. {item.price}</span>
                  <span className="text-gray-800 font-bold ml-4">
                    Rs. {item.price - (item.price * item.discount) / 100}
                  </span>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-100 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold text-gray-800">Subtotal:</span>
            <span className="text-2xl font-bold text-[#B88E2F]">
              Rs. {calculateTotal() - DELIVERY_CHARGES}
            </span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold text-gray-800">Delivery Charges:</span>
            <span className="text-2xl font-bold text-[#B88E2F]">Rs. {DELIVERY_CHARGES}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold text-gray-800">Total:</span>
            <span className="text-2xl font-bold text-[#B88E2F]">Rs. {calculateTotal()}</span>
          </div>
          <div className="flex gap-4 justify-end">
            <button
              onClick={continueShopping}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-[#B88E2F] transition-colors font-semibold"
            >
              Continue Shopping
            </button>
            <button
              onClick={proceedToCheckout}
              className="bg-[#B88E2F] text-white px-6 py-3 rounded-lg hover:bg-black transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Subfooter />
      <Footer />
    </div>
  );
};

export default Cart;
