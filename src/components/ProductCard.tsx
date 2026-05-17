import { type Product } from "../data/data";

interface ProductCardProps {
  lang: "el" | "en" | "tr";
  product: Product;
  featured?: boolean;
}

const pillClasses = [
  { bg: "bg-green-50", border: "border-green-200", text: "text-green-700" },
  { bg: "bg-red-50", border: "border-red-200", text: "text-red-700" },
  { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-800" },
  { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700" },
  { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-700" },
  { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-700" },
];

export default function ProductCard({
  lang,
  product,
  featured,
}: ProductCardProps) {
  const priceDisplay =
    typeof product.price === "number" && `${product.price.toFixed(2)}€`;

  const hasFlavors =
    product.flavors &&
    product.flavors[lang] &&
    product.flavors[lang].length > 0;

  const hasDescription =
    product.description?.[lang] && product.description[lang] !== "";
  return (
    <div
      aria-label={product.title[lang]}
      className={`relative mb-2 mt-5 rounded-2xl border-1.5 p-3.5 transition-all duration-300 border ${
        featured
          ? "bg-white border-watermelon-500 shadow-lg shadow-watermelon-700/20"
          : "bg-white border-sand-200 shadow-sm"
      }`}
    >
      {featured && (
        <div
          className="absolute -top-2.5 right-3 bg-watermelon-500 text-white text-[0.65rem] font-title font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase shadow-sm"
          aria-label="Δημοφιλές"
        >
          ⭐ Δημοφιλές
        </div>
      )}

      <div
        className={`flex items-start justify-between gap-3 ${
          hasFlavors || hasDescription ? "mb-2.5" : "mb-0"
        }`}
      >
        <h4 className="font-title text-[1rem] font-semibold text-seed uppercase tracking-wider leading-tight flex-1 m-0">
          {product.title[lang]}
        </h4>
        <span
          className="font-title text-lg font-semibold text-watermelon-700 whitespace-nowrap shrink-0 bg-watermelon-50 px-2.5 py-0.5 rounded-lg"
          aria-label={`Τιμή: ${priceDisplay}`}
        >
          {priceDisplay}
        </span>
      </div>

      {hasDescription && (
        <p
          className={`font-body text-seed  ${
            hasFlavors ? "text-sm mb-2" : "text-sm mt-2"
          }`}
        >
          {product.description![lang]}
        </p>
      )}

      {/* Flavors */}
      {hasFlavors && (
        <div
          className="flex flex-wrap gap-1.5"
          aria-label={
            lang === "el" ? "Διαθέσιμες γεύσεις" : "Available flavors"
          }
        >
          {product.flavors[lang].map((flavor: string, i: number) => {
            const col = pillClasses[i % pillClasses.length];
            return (
              <span
                key={i}
                className={`text-[0.7rem] mt-1 font-body font-bold px-2.5 py-1.5 rounded-full border leading-none ${col.bg} ${col.text} ${col.border}`}
              >
                {flavor}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
