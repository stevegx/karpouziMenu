import { useRef, useState } from "react";
import CategoryBarCard from "./CategoryBarCard";
import { type Category } from "../data/data";

export interface CategoryBarProps {
  lang: "el" | "en" | "tr";
  onCategoryClick: (id: string) => void;
  activeId: string;
  categories: Category[];
}

export default function CategoryBar({
  lang,
  onCategoryClick,
  categories,
  activeId,
}: CategoryBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <nav
      aria-label={lang === "el" ? "Πλοήγηση κατηγοριών" : "Category navigation"}
      className="fixed top-0 left-0 right-0 z-50 bg-watermelon-700 border-b border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
    >
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className={`
          flex gap-[0.6rem] py-[0.65rem] px-4 overflow-x-auto select-none 
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden 
          touch-pan-x
          ${isDragging ? "cursor-grabbing" : "cursor-grab"}
        `}
      >
        {categories.map((category) => (
          <CategoryBarCard
            key={category.id}
            label={category.label[lang]}
            onClick={() => {
              if (!isDragging) onCategoryClick(category.id);
            }}
            isActive={category.id === activeId}
          />
        ))}
      </div>
    </nav>
  );
}
