import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-black text-white px-8 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-bold">
          E-Shop
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>

          <Link href="/products" className="hover:text-gray-300 transition">
            Products
          </Link>

          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>

          <Link
            href="/cart"
            className="relative bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            🛒 Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}