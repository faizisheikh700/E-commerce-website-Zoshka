export default function Reviews() {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B88E2F] mb-8">
            What Our Customers Are Saying
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4">
                Good product with good customer service.
              </p>
              <h4 className="text-xl font-semibold text-[#B88E2F]">Aliya Murtaza</h4>
              <p className="text-sm text-gray-500">Customer</p>
            </div>
            {/* Review 2 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4">
                A wonderful experience, fast delivery, and excellent customer service!
              </p>
              <h4 className="text-xl font-semibold text-[#B88E2F]">S.Masood Ahmed</h4>
              <p className="text-sm text-gray-500">Customer</p>
            </div>
            {/* Review 3 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4">
                The quality of the products is outstanding. Will definitely buy again.
              </p>
              <h4 className="text-xl font-semibold text-[#B88E2F]">Rida Raza</h4>
              <p className="text-sm text-gray-500">Customer</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  