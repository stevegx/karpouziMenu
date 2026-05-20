import CategoryCard from "./CategoryCard";
import { type Category } from "../data/data";

export interface CategoryListProps {
  lang: "el" | "en" | "tr";
  onCategoryClick: (id: string) => void;
  categories: Category[];
}

export default function CategoryList({
  lang,
  onCategoryClick,
  categories,
}: CategoryListProps) {
  return (
    <section
      aria-label={
        lang === "el"
          ? "Κατηγορίες"
          : lang === "en"
            ? "Categories"
            : "Kategoriler"
      }
      className="z-20 relative -top-20 rounded-4xl mx-5 bg-white shadow-lg"
    >
      <h2 className="text-center font-title text-xl py-3 font-semibold text-watermelon-700 mt-7 mb-1 tracking-tight uppercase">
        {lang === "el"
          ? "ΟΙ ΚΑΤΗΓΟΡΙΕΣ ΜΑΣ"
          : lang === "en"
            ? "OUR CATEGORIES"
            : "KATEGORİLERİMİZ"}
      </h2>

      <div className="grid grid-cols-3 gap-3 px-4 pb-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            label={category.label[lang]}
            onClick={() => onCategoryClick(category.id)}
          />
        ))}
      </div>
    </section>
  );
}
