import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const bestOffers = products.slice(0, 4);
  const recommended = products.slice(4, 8);
  const newArrivals = products.slice(8, 12);

  return (
    <div className="space-y-16">

      <div className="bg-blue-600 text-white rounded-2xl p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Shopsy 🛍
        </h1>
        <p className="text-lg">
          Discover amazing products at unbeatable prices
        </p>
      </div>

      <Section title="🔥 Best Offers" products={bestOffers} />

      <Section title="⭐ Recommended For You" products={recommended} />

      <Section title="🆕 New Arrivals" products={newArrivals} />

    </div>
  );
}

function Section({ title, products }: any) {
  return (
    <div>
      <h2 className="text-2xl text-blue-600 font-bold mb-6">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}