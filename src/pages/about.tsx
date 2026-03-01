export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
      <section className="text-center">
        <h1 className="text-4xl text-black font-bold mb-6">About Shopsy 🛍</h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Shopsy is a modern ecommerce platform dedicated to providing
          high-quality products at affordable prices. We believe shopping should
          be simple, secure, and enjoyable for everyone.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12">
        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl text-blue-400 font-semibold mb-4">
            🎯 Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To make online shopping accessible, reliable, and convenient by
            offering a wide range of carefully selected products.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl text-blue-400 font-semibold mb-4">
            🌍 Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To become a globally trusted ecommerce brand known for quality,
            customer satisfaction, and innovation.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl text-black font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl text-blue-400 font-semibold mb-4">
              🚚 Fast Delivery
            </h3>
            <p className="text-gray-600">
              Quick and reliable shipping across multiple regions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl text-blue-400 font-semibold mb-4">
              🔒 Secure Payments
            </h3>
            <p className="text-gray-600">
              Safe and encrypted payment processing for your peace of mind.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl text-blue-400 font-semibold mb-4">
              ⭐ Quality Products
            </h3>
            <p className="text-gray-600">
              Carefully curated products with high customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white rounded-2xl py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          <div>
            <h3 className="text-3xl font-bold">10K+</h3>
            <p>Happy Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p>Products</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p>Countries</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </section>
    </div>
  );
}
