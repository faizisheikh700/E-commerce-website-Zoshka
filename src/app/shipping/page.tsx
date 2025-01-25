"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/Components/ui/button";
import emailjs from "emailjs-com";
import Navbar from "@/Components/Navbar";
import Subfooter from "@/Components/Subfooter";
import Footer from "@/Components/Footer";

export default function Shipping() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send email using EmailJS
    try {
      const result = await emailjs.send(
        "service_id", // Your EmailJS service ID
        "template_id", // Your EmailJS template ID
        formData, // Form data to send
        "user_id" // Your EmailJS user ID
      );
      console.log("Email successfully sent:", result.text);

      // Navigate to confirmation page
      router.push("/confirmation");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Navbar />
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-[#B88E2F] mb-8">
            Shipping Information
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Contact Number Field */}
            <div>
              <label
                htmlFor="contact"
                className="block text-lg font-medium text-gray-700"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                placeholder="Enter your contact number"
                required
              />
            </div>

            {/* Address Field */}
            <div>
              <label
                htmlFor="address"
                className="block text-lg font-medium text-gray-700"
              >
                Shipping Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                placeholder="Enter your shipping address"
                rows={4}
                required
              ></textarea>
            </div>

            {/* Order Notes Field */}
            <div>
              <label
                htmlFor="notes"
                className="block text-lg font-medium text-gray-700"
              >
                Order Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                placeholder="Any special instructions or notes"
                rows={4}
              ></textarea>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full mt-4 bg-[#B88E2F] text-white hover:bg-[#9A7423]"
              size="lg"
            >
              Submit Shipping Details
            </Button>
          </form>
        </div>
      </section>
      <Subfooter />
      <Footer />
    </div>
  );
}
