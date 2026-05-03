import { type Product } from "../data/data";
interface ProductCardProps {
  lang: "el" | "en" | "tr";
  product: Product;
}
export default function ProductCard({ lang, product }: ProductCardProps) {
  return (
    <div className="p-4 border-b border-sand-50 last:border-0 bg-white">
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-bold text-seed uppercase text-sm">
          {product.title[lang]}
        </h4>
        <span className="font-bold text-seed text-sm">{product.price}€</span>
      </div>

      {product.flavors && product.flavors[lang] && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {product.flavors[lang].map((flavor: string, i: number) => (
            <span
              key={i}
              className="text-[10px] bg-rind-50/20 text-seed px-2 py-0.5 rounded-full border border-rind-400"
            >
              {flavor}
            </span>
          ))}
        </div>
      )}

      {!product.flavors && product.description?.[lang] && (
        <p className="text-xs italic text-seed/50">
          {product.description[lang]}
        </p>
      )}
    </div>
  );
}
