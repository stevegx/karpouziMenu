import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div>
      <div className="bg-linear-to-r from-watermelon-400/80 to-watermelon-400 text-white text-3xl p-4 text-center font-display drop-shadow-lg">
        <h2>Καφεδες / Coffees</h2>
      </div>
      <div className="mt-6">
        <ProductCard />
      </div>
    </div>
  );
}
