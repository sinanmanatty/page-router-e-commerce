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
  const { id } = router.query;

  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container-custom py-20 text-center">
        <p className="text-lg">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      <div className="grid md:grid-cols-2 gap-16 bg-white shadow-lg rounded-2xl p-10">

        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-96 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-gray-500 uppercase mb-2">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold text-black mb-4">
            {product.title}
          </h1>

          <p className="text-3xl text-blue-600 font-bold mb-6">
            ${product.price}
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="flex gap-4 mt-auto">
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg transition"
            >
              Add to Cart
            </button>

            <Link href="/cart">
              <button className="border border-yellow-300 px-8 py-3 rounded-xl hover:bg-yellow-50 transition text-gray-700">
                Go to Cart
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}