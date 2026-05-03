import { useEffect, useState, useRef } from "react";
import HeroSection from "./components/HeroSection";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import CategoryBar from "./components/CategoryBar";
import Footer from "./components/Footer";

// Προσοχή στα imports: φέρε και το αρχικό categories array
import {
  languages,
  categories,
  Drinks,
  softDrinks,
  Alcohol,
  Cocktails,
  Coffee,
  foodMenu,
} from "./data/data";

export default function App() {
  const [lang, setLang] = useState<"el" | "en" | "tr">("el");
  const [activeId, setActiveId] = useState("");
  const [showBar, setShowBar] = useState(false);

  // 1. Δυναμική ταξινόμηση κατηγοριών
  const [sortedCategories, setSortedCategories] = useState([...categories]);

  const topBoundaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSortOrder = () => {
      const hour = new Date().getHours();
      let order: string[] = [];

      // Ορισμός προτεραιότητας βάσει ώρας
      if (hour >= 5 && hour < 12) {
        order = [
          "coffee",
          "drinks",
          "food",
          "soft_drinks",
          "alcohol",
          "cocktails",
        ];
      } else if (hour >= 12 && hour < 18) {
        order = [
          "coffee",
          "food",
          "soft_drinks",
          "drinks",
          "alcohol",
          "cocktails",
        ];
      } else {
        order = [
          "cocktails",
          "alcohol",
          "food",
          "soft_drinks",
          "drinks",
          "coffee",
        ];
      }

      const newSorted = [...categories].sort((a, b) => {
        return order.indexOf(a.id) - order.indexOf(b.id);
      });

      setSortedCategories(newSorted);
    };

    updateSortOrder();
    const interval = setInterval(updateSortOrder, 15 * 60 * 1000);

    // 2. Intersection Observers
    const headerObserver = new IntersectionObserver(
      ([entry]) => setShowBar(!entry.isIntersecting),
      { threshold: 0 },
    );
    if (topBoundaryRef.current) headerObserver.observe(topBoundaryRef.current);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-85px 0px -70% 0px", threshold: 0 },
    );

    const sections = document.querySelectorAll("section[data-category]");
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      clearInterval(interval);
      headerObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [sortedCategories]);

  const onCategoryClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const menuData: Record<string, any> = {
    coffee: Coffee,
    drinks: Drinks,
    soft_drinks: softDrinks,
    alcohol: Alcohol,
    cocktails: Cocktails,
    food: foodMenu,
  };

  return (
    <div className="flex flex-col min-h-screen bg-sand-50">
      <div ref={topBoundaryRef}>
        <HeroSection lang={lang} setLang={setLang} languages={languages} />
        <h1 className="text-center font-bold text-3xl text-rind-300 mt-8">
          {lang === "el"
            ? "ΟΙ ΚΑΤΗΓΟΡΙΕΣ ΜΑΣ"
            : lang === "en"
              ? "OUR CATEGORIES"
              : "KATEGORİLERİMİZ"}
        </h1>
        {/* Περνάμε το sortedCategories στο CategoryList */}
        <CategoryList
          lang={lang}
          categories={sortedCategories}
          onCategoryClick={onCategoryClick}
        />
      </div>

      {showBar && (
        <CategoryBar
          lang={lang}
          categories={sortedCategories}
          onCategoryClick={onCategoryClick}
          activeId={activeId}
        />
      )}

      <main className="flex-1 pt-4">
        {sortedCategories.map((cat) => {
          const data = menuData[cat.id];
          if (!data) return null;
          return (
            <section key={cat.id} id={cat.id} data-category>
              <ProductList
                id={cat.id}
                lang={lang}
                productList={data.subCategories}
                categoryTitle={data.categoryTitle}
              />
            </section>
          );
        })}
      </main>

      <Footer lang={lang} />
    </div>
  );
}
