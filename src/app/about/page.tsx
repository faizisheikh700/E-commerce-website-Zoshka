import Navbar from "@/Components/Navbar";
import Subfooter from "@/Components/Subfooter";
import Footer from "@/Components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B88E2F] mb-16">
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#B88E2F] mb-4">
                Our Story
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                At Zoshka, we are passionate about providing high-quality products that make life easier, more efficient, and enjoyable. Our journey started with a simple idea – to offer top-notch products across various categories that can bring joy and convenience to homes, offices, and beyond.
              </p>
              <p className="text-lg text-gray-700">
                Our commitment to quality, customer satisfaction, and innovation drives everything we do. With an ever-expanding catalog, we strive to be your go-to destination for all things home, lifestyle, and technology.
              </p>
            </div>
            {/* Image for the "Our Story" section */}
            <div className="flex justify-center items-center">
              <Image
                src="/about.png"
                alt="Our Story Image"
                width={430}
                height={230}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Empty space */}
          <div className="my-12"></div>

          {/* Mission section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <Image
                src="/mission1.png"
                alt="Mission Image"
                width={430}
                height={230}
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#B88E2F] mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Our mission is to enhance the daily lives of our customers by offering a curated selection of products that are both functional and stylish. We believe that great products should be accessible to everyone, and we are committed to providing exceptional service and competitive prices.
              </p>
              <p className="text-lg text-gray-700">
                We are constantly evolving to meet the needs of our customers, always keeping innovation, sustainability, and customer care at the forefront of our operations.
              </p>
            </div>
          </div>

          {/* Empty space */}
          <div className="my-12"></div>

          {/* Our Team section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#B88E2F] mb-8">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image
                src="/user2.jpg"
                alt="Team Member 1"
                width={150}
                height={150}
                className=" mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-[#B88E2F]">
                Saima Adeel
              </h3>
              <p className="text-gray-700">CEO & Founder</p>
              <p className="mt-4 text-gray-600">
                Saima Adeel is a House Wife by profession. She founded Zoshka with the goal of offering quality products and excellent service to our customers.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image
                src="/user2.jpg"
                alt="Team Member 2"
                width={150}
                height={150}
                className=" mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-[#B88E2F]">
                Syeda Aliza Masood
              </h3>
              <p className="text-gray-700">General Manager</p>
              <p className="mt-4 text-gray-600">
                Syeda Aliza Masood is an Electrical Engineer by profession. She manages daily operations, ensures efficiency, and drives business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Subfooter />
      <Footer />
    </div>
  );
}
