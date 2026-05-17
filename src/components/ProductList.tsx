import ProductCard from "./ProductCard";
import { type Product } from "../data/data";
import { useState, useRef } from "react";

interface SubCategory {
  subTitle: { el: string; en: string; tr: string };
  items: Product[];
}

interface ProductListProps {
  id: string;
  lang: "el" | "en" | "tr";
  productList: SubCategory[];
  categoryTitle: { el: string; en: string; tr: string };
}

const catEmoji: Record<string, string> = {
  coffee: "☕",
  drinks: "🧃",
  soft_drinks: "🥤",
  alcohol: "🍺",
  cocktails: "🍹",
  food: "🍔",
};

export default function ProductList({
  id,
  lang,
  productList,
  categoryTitle,
}: ProductListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const emoji = catEmoji[id] || "🍽️";

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`scroll-mt-20 border-b border-sand-200 transition-colors duration-300 ${
        isOpen ? "bg-sand-50" : "bg-white"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        className="flex w-full cursor-pointer items-center justify-between px-5 py-4 transition-all active:bg-watermelon-50/50"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl leading-none" role="img" aria-hidden="true">
            {emoji}
          </span>
          <span className="font-title text-xl font-semibold tracking-tight text-watermelon-700 uppercase">
            {categoryTitle[lang]}
          </span>
        </div>

        <span
          className={`text-watermelon-700 transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div
          id={`${id}-content`}
          role="region"
          aria-label={categoryTitle[lang]}
          className="pb-6 animate-in fade-in slide-in-from-top-1 duration-200"
        >
          {productList.map((sub, idx) => (
            <div key={idx}>
              <div
                className={`bg-sand-200/50 px-5 py-2 mb-4 border-l-4 border-watermelon-700 ${
                  idx > 0 ? "mt-4" : "mt-2"
                }`}
              >
                <h3 className="font-body text-sm font-bold tracking-[0.18em] text-seed/70 uppercase m-0">
                  {sub.subTitle[lang]}
                </h3>
              </div>

              <div className="px-3">
                {sub.items.map((product, pIdx) => (
                  <ProductCard
                    key={pIdx}
                    lang={lang}
                    product={product}
                    featured={product.featured}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
