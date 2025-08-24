import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 1200, image: "/images/1.png" },
  { id: 2, name: "Headphones", price: 200, image: "/images/2.png" },
  { id: 3, name: "Phone", price: 800, image: "/images/3.png" },
];

export default function ProductsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
