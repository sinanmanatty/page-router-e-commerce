import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

export default function ProductDetailsPage() {
  const router = useRouter();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!router.isReady) return;

    const { id } = router.query;

    if (!id || Array.isArray(id)) {
      setError("Invalid product ID.");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );

        if (!res.ok) {
          throw new Error("Product not found.");
        }

        const data: Product = await res.json();

        if (!data || !data.id) {
          throw new Error("Invalid product data.");
        }

        setProduct(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong.");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [router.isReady, router.query]);

  // Loading State
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium text-gray-600">
          Loading product details...
        </p>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
        <p className="text-red-600 font-semibold">{error}</p>
        <Link
          href="/products"
          className="text-blue-600 underline hover:text-blue-800"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-16 bg-white shadow-lg rounded-2xl p-10">

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-96 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 uppercase mb-2">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {product.title}
          </h1>

          <p className="text-3xl text-blue-600 font-bold mb-6">
            ${product.price}
          </p>

          <p className="text-gray-600 leading-relaxed mb-10">
            {product.description}
          </p>

          <div className="flex gap-4 mt-auto">
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg transition"
            >
              Add to Cart
            </button>

            <Link
              href="/cart"
              className="border border-gray-300 px-8 py-3 rounded-xl hover:bg-gray-100 transition text-gray-700"
            >
              Go to Cart
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}