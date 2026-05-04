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

export default function ProductList({
  id,
  lang,
  productList,
  categoryTitle,
}: ProductListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id={id}
      ref={sectionRef}
      className="scroll-mt-24 border-b border-sand-100"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 bg-white active:bg-sand-50"
      >
        <span className="font-title text-2xl font-semibold text-watermelon-500 uppercase text-left">
          {categoryTitle[lang]}
        </span>

        <span
          className={`text-watermelon-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
              strokeWidth={3}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="bg-sand-50/30 pb-8 flex flex-col animate-in fade-in slide-in-from-top-1 duration-200">
          {productList.map((sub, idx) => (
            <div key={idx} className="w-full">
              {/* Ο τίτλος της υποενότητας (π.χ. ΚΡΥΑ ΡΟΦΗΜΑΤΑ) */}
              <div className="bg-sand-100/50 py-2 px-6 my-2">
                <h3 className="text-sm font-bold text-seed/50 uppercase tracking-[0.2em]">
                  {sub.subTitle[lang]}
                </h3>
              </div>

              <div className="flex flex-col gap-1 px-2">
                {sub.items.map((product, pIdx) => (
                  <ProductCard key={pIdx} lang={lang} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
