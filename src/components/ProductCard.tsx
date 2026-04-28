import { productCoffee } from "../data/data";
export default function ProductCard() {
  return (
    <div className="flex items-center justify-around bg-white rounded-3xl w-full max-w-md h-32 gap-4 p-4 m-2 shadow-xl border border-sand-100">
      <div className="w-20 h-20 shrink-0 flex items-center justify-center">
        <img
          src={productCoffee[0].img}
          alt="product"
          className="max-h-full max-w-full object-contain rounded-lg"
        />
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h2 className="font-title font-bold text-lg text-seed truncate uppercase tracking-tight">
          {productCoffee[0].tittle["el"]}
        </h2>
        <p className="text-xs font-body italic text-seed/60 leading-tight mt-1 line-clamp-2">
          {productCoffee[0].description["el"]}
        </p>
      </div>
      <div className="shrink-0">
        <span className="text-xl font-title font-bold text-watermelon-500 whitespace-nowrap ml-2">
          {productCoffee[0].price}€
        </span>
      </div>
    </div>
  );
}
