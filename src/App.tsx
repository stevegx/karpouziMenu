import { useState } from "react";
import HeroSection from "./components/HeroSection";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import { languages } from "./data/data";
export default function App() {
  const [lang, setLang] = useState<"el" | "en" | "tr">("el");

  const onCategoryClick = () => {
    console.log("hello there");
  };
  return (
    <div className="bg-sand-50">
      <HeroSection lang={lang} setLang={setLang} languages={languages} />
      <h1 className="text-center font-bold text-3xl text-rind-300 mt-8">
        {lang === "el"
          ? "ΟΙ ΚΑΤΗΓΟΡΙΕΣ ΜΑΣ"
          : lang === "en"
            ? "OUR CATEGORIES"
            : "KATEGORİLERİMİZ"}
      </h1>

      <CategoryList lang={lang} onCategoryClick={onCategoryClick} />
      <ProductList />
    </div>
  );
}
