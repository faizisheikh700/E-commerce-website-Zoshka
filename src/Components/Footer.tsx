export default function Footer() {
    return (
      <footer className="bg-black text-gray-300 py-12"> {/* Increased padding */}
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
              <p className="text-sm">
                We provide high-quality products to make your shopping experience seamless. 
                Shop now and enjoy the best deals!
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/shop" className="hover:text-white">Shop</a></li>
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            {/* Customer Support */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
              <ul className="space-y-2">
                <li><a href="/shipping" className="hover:text-white">Shipping</a></li>
                <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <p className="text-sm">Email: zoshka@gmail.com</p>
              <p className="text-sm">Phone: +92 123 456 7890</p>
              <p className="text-sm">Address: Your Street, Karachi, Pakistan</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-facebook-f"></i> {/* Replace with an actual icon */}
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-twitter"></i> {/* Replace with an actual icon */}
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-instagram"></i> {/* Replace with an actual icon */}
                </a>
              </div>
            </div>
          </div>
          {/* Space between Top Section and Bottom Section */}
          <div className="mt-12"></div> {/* Added spacing */}
          {/* Bottom Section */}
          <div className="border-t border-gray-900 pt-4 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Zoshka. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  