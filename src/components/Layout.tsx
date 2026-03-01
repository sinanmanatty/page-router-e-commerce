import Navbar from "./Navbar";
import Link from "next/link";

export default function Layout({ children }: any) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
        {children}
      </main>

      <footer className="bg-slate-900 text-gray-300 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Shopsy
            </h3>
            <p className="text-sm leading-relaxed">
              Your trusted online shopping destination.
              Discover amazing products at unbeatable prices.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Customer Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">
                FAQs
              </li>
              <li className="hover:text-white cursor-pointer">
                Shipping Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Returns & Refunds
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact Us
            </h4>
            <p className="text-sm mb-2">📧 support@shopsy.com</p>
            <p className="text-sm mb-4">📞 +91 98765 43210</p>

            <div className="flex gap-4 text-lg">
              <span className="hover:text-white cursor-pointer">📘</span>
              <span className="hover:text-white cursor-pointer">📸</span>
              <span className="hover:text-white cursor-pointer">🐦</span>
              <span className="hover:text-white cursor-pointer">▶</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 text-center py-6 text-sm">
          © {new Date().getFullYear()} Shopsy. All rights reserved.
        </div>
      </footer>

    </div>
  );
}