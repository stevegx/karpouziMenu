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
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-sand-200 shadow-sm">
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className={`
          flex gap-3 p-4 overflow-x-auto no-scrollbar select-none
          ${isDragging ? "cursor-grabbing" : "cursor-grab"}
          active:cursor-grabbing
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
    </div>
  );
}
