import { GetServerSideProps } from "next";
import ProductCard from "../../components/ProductCard";

export default function Products({ products }: any) {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return { props: { products } };
};