import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: any) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 p-5 flex flex-col">
      <Link href={`/products/${product.id}`} className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain mb-4 hover:scale-105 transition duration-300"
        />
      </Link>

      <h2
        className="font-semibold text-gray-800 line-clamp-2 mb-2 min-h-8px
      "
      >
        {product.title}
      </h2>

      <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>

      <div className="mt-auto space-y-2">
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 rounded-lg transition"
        >
          Add to Cart
        </button>

        <Link href={`/products/${product.id}`}>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
