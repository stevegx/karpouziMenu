import { type Product, allergenInfo, dietLabels } from "../data/data";
import { useState } from "react";

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

const featuredLabel = {
  el: "Δημοφιλές",
  en: "Popular",
  tr: "Popüler",
};

export default function ProductCard({
  lang,
  product,
  featured,
}: ProductCardProps) {
  const [openInfo, setOpenInfo] = useState<string | null>(null);

  const priceDisplay =
    typeof product.price === "number"
      ? `${product.price.toFixed(2)}€`
      : product.price;

  const hasFlavors =
    product.flavors &&
    product.flavors[lang] &&
    product.flavors[lang].length > 0;

  const hasDescription =
    product.description?.[lang] && product.description[lang] !== "";

  const hasPhotoUrl =
    product.photoUrl && product.photoUrl.trim() !== ""
      ? product.photoUrl
      : null;

  // Συγκεντρώνω όλα τα badges σε ένα array για ενιαία απόδοση
  type Badge = { key: string; icon: string; label: string; tone: "diet" | "allergen" };
  const badges: Badge[] = [];

  if (product.vegan) {
    badges.push({
      key: "vegan",
      icon: dietLabels.vegan.icon,
      label: dietLabels.vegan.label[lang],
      tone: "diet",
    });
  } else if (product.vegetarian) {
    // Δείχνω vegetarian μόνο αν δεν είναι vegan (το vegan καλύπτει)
    badges.push({
      key: "vegetarian",
      icon: dietLabels.vegetarian.icon,
      label: dietLabels.vegetarian.label[lang],
      tone: "diet",
    });
  }
  if (product.spicy) {
    badges.push({
      key: "spicy",
      icon: dietLabels.spicy.icon,
      label: dietLabels.spicy.label[lang],
      tone: "diet",
    });
  }
  product.allergens?.forEach((a) => {
    badges.push({
      key: a,
      icon: allergenInfo[a].icon,
      label: allergenInfo[a].label[lang],
      tone: "allergen",
    });
  });

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
          aria-label={featuredLabel[lang]}
        >
          ⭐ {featuredLabel[lang]}
        </div>
      )}
      <div className="flex flex-row items-start gap-3 w-full">
        {hasPhotoUrl && (
          <img
            src={hasPhotoUrl}
            alt={product.title[lang]}
            width="80"
            height="80"
            loading="lazy"
            decoding="async"
            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shrink-0 bg-sand-200 animate-pulse"
            onLoad={(e) => {
              e.currentTarget.classList.remove("animate-pulse");
              e.currentTarget.classList.remove("bg-sand-200");
            }}
          />
        )}

        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-title text-base font-semibold text-seed uppercase tracking-wide leading-tight line-clamp-2">
              {product.title[lang]}
            </h4>

            <span className="font-title text-sm font-bold text-watermelon-700 bg-watermelon-50 px-2 py-0.5 rounded-md whitespace-nowrap shrink-0">
              {priceDisplay}
            </span>
          </div>

          {hasDescription && (
            <p className="font-body text-sm text-seed/80 mt-1 line-clamp-2">
              {product.description![lang]}
            </p>
          )}

          {/* Allergen & diet badges */}
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {badges.map((b) => {
                const isOpen = openInfo === b.key;
                return (
                  <button
                    key={b.key}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenInfo(isOpen ? null : b.key);
                    }}
                    aria-label={b.label}
                    title={b.label}
                    className={`inline-flex items-center gap-0.5 text-[0.7rem] font-body font-semibold px-1.5 py-0.5 rounded-md border leading-none transition-colors cursor-pointer ${
                      b.tone === "diet"
                        ? "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"
                        : "bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100"
                    }`}
                  >
                    <span aria-hidden="true">{b.icon}</span>
                    {isOpen && <span>{b.label}</span>}
                  </button>
                );
              })}
            </div>
          )}

          {hasFlavors && (
            <div className="flex flex-wrap gap-1 mt-2">
              {product.flavors[lang].map((flavor: string, i: number) => {
                const col = pillClasses[i % pillClasses.length];
                return (
                  <span
                    key={i}
                    className={`text-[0.65rem] font-body font-bold px-1.5 py-0.5 rounded-xl border leading-none ${col.bg} ${col.text} ${col.border}`}
                  >
                    {flavor}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
