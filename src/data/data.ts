import { type LucideIcon } from "lucide-react";
import { CupSoda } from "lucide-react";
import { Martini } from "lucide-react";
import { Wine } from "lucide-react";
import { Hamburger } from "lucide-react";
import { Beer } from "lucide-react";
import freddoEspresso from "../assets/freddoespresso.jpg";
export const languages = [
  { code: "el", label: "GR" },
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
] as const;

export interface Category {
  id: string;
  label: { el: string; en: string; tr: string };
  icon: LucideIcon;
}
export const categories: Category[] = [
  {
    id: "coffee",
    label: { el: "ΚΑΦΕΔΕΣ", en: "COFFEES", tr: "KAHVELER" },
    icon: CupSoda,
  },
  {
    id: "drinks",
    label: { el: "ΡΟΦΗΜΑΤΑ", en: "BEVERAGES", tr: "İÇECEKLER" },
    icon: Wine,
  },
  {
    id: "Cocktails",
    label: { el: "COCKTAILS", en: "COCKTAILS", tr: "KOKTEYLLER" },
    icon: Martini,
  },
  {
    id: "Food",
    label: { el: "ΦΑΓΗΤΑ", en: "FOOD", tr: "YEMEKLER" },
    icon: Hamburger,
  },
  {
    id: "beer",
    label: { el: "ΜΠΥΡΕΣ", en: "BEERS", tr: "BİRALAR" },
    icon: Beer,
  },
] as const;

export interface Product {
  img: string;
  tittle: { el: string; en: string; tr: string };
  description: { el: string; en: string; tr: string };
  price: number;
}

export const productCoffee: Product[] = [
  {
    img: freddoEspresso,
    tittle: { el: "Freddo Espresso", en: "agglikoTittle", tr: "turkishtittle" },
    description: {
      el: "Κλασικος και δυνατός, οπως πρεπει",
      en: "english",
      tr: "Turkish",
    },
    price: 29.9,
  },
];
