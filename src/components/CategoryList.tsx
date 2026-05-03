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
    <div className="grid grid-cols-3 gap-4 p-6 justify-items-center md:flex md:flex-wrap md:justify-center">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          icon={category.icon}
          label={category.label[lang]}
          onClick={() => onCategoryClick(category.id)}
        />
      ))}
    </div>
  );
}
