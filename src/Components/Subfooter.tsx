import { ShoppingCart, Shield, Truck, Headphones } from "lucide-react";

export default function Subfooter() {
  return (
    <div className="border-t mt-2 mb-2">
      <div className="w-full py-12 bg-[#B88E2F]"> {/* Changed background to golden */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gray-200 rounded-full">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2 text-black">High Quality</h3>
            <p className="text-sm text-white">Crafted from top materials</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gray-200 rounded-full">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2 text-black">Discounts / Promotions</h3>
            <p className="text-sm text-white">On festivals</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gray-200 rounded-full">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2 text-black">Free Shipping</h3>
            <p className="text-sm text-white">Order over Rs. 3000</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gray-200 rounded-full">
              <Headphones className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2 text-black">24 / 7 Support</h3>
            <p className="text-sm text-white">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
