'use client';  // Mark this as a Client Component

import Navbar from "@/Components/Navbar";
import Subfooter from "@/Components/Subfooter";
import Footer from "@/Components/Footer";

const Confirmation = () => {
  return (
    <div>
      <Navbar />
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-[#B88E2F] mb-8">
            Order Confirmation
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Thank you for your order! 🎉
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We have successfully received your order and are currently processing it. You will be notified once it is ready for shipment.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            In the meantime, feel free to explore more amazing products on our site!
          </p>
          <div>
            <button
              className="bg-[#B88E2F] text-white py-2 px-4 rounded-md hover:bg-[#9A7423]"
              onClick={() => window.location.href = "/"}  // Redirect to the homepage
            >
              Go to Homepage
            </button>
          </div>
        </div>
      </section>
      <Subfooter />
      <Footer />
    </div>
  );
};

export default Confirmation;
