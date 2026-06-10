import {
  Coffee as CoffeeIcon,
  CupSoda,
  Beer,
  Martini,
  Utensils,
  Milk,
  type LucideIcon,
} from "lucide-react";

/* ============================================================
   ΑΛΛΕΡΓΙΟΓΟΝΑ — EU 1169/2011
   ============================================================ */

export type Allergen =
  | "gluten" // 🌾 Δημητριακά με γλουτένη
  | "crustaceans" // 🦐 Καρκινοειδή
  | "eggs" // 🥚 Αυγά
  | "fish" // 🐟 Ψάρι
  | "peanuts" // 🥜 Αραχίδες
  | "soy" // 🫘 Σόγια
  | "milk" // 🥛 Γαλακτοκομικά (περιλ. λακτόζη)
  | "nuts" // 🌰 Καρποί με κέλυφος
  | "celery" // 🌿 Σέλινο
  | "mustard" // 🟡 Μουστάρδα
  | "sesame" // 🌻 Σουσάμι
  | "sulphites" // 🍷 Διοξείδιο του θείου
  | "lupin" // 🌼 Λούπινο
  | "molluscs"; // 🐚 Μαλάκια

export const allergenInfo: Record<
  Allergen,
  { icon: string; label: { el: string; en: string; tr: string } }
> = {
  gluten: {
    icon: "🌾",
    label: { el: "Γλουτένη", en: "Gluten", tr: "Gluten" },
  },
  crustaceans: {
    icon: "🦐",
    label: { el: "Καρκινοειδή", en: "Crustaceans", tr: "Kabuklular" },
  },
  eggs: { icon: "🥚", label: { el: "Αυγά", en: "Eggs", tr: "Yumurta" } },
  fish: { icon: "🐟", label: { el: "Ψάρι", en: "Fish", tr: "Balık" } },
  peanuts: {
    icon: "🥜",
    label: { el: "Αραχίδες", en: "Peanuts", tr: "Yer fıstığı" },
  },
  soy: { icon: "🫘", label: { el: "Σόγια", en: "Soy", tr: "Soya" } },
  milk: {
    icon: "🥛",
    label: { el: "Γαλακτοκομικά", en: "Dairy", tr: "Süt ürünleri" },
  },
  nuts: {
    icon: "🌰",
    label: { el: "Ξηροί καρποί", en: "Tree nuts", tr: "Sert kabuklu yemiş" },
  },
  celery: { icon: "🌿", label: { el: "Σέλινο", en: "Celery", tr: "Kereviz" } },
  mustard: {
    icon: "🟡",
    label: { el: "Μουστάρδα", en: "Mustard", tr: "Hardal" },
  },
  sesame: {
    icon: "🌻",
    label: { el: "Σουσάμι", en: "Sesame", tr: "Susam" },
  },
  sulphites: {
    icon: "🍷",
    label: { el: "Θειώδη", en: "Sulphites", tr: "Sülfit" },
  },
  lupin: { icon: "🌼", label: { el: "Λούπινο", en: "Lupin", tr: "Acı bakla" } },
  molluscs: {
    icon: "🐚",
    label: { el: "Μαλάκια", en: "Molluscs", tr: "Yumuşakçalar" },
  },
};

export const dietLabels = {
  vegetarian: {
    icon: "🌱",
    label: { el: "Χορτοφαγικό", en: "Vegetarian", tr: "Vejetaryen" },
  },
  vegan: {
    icon: "🌿",
    label: { el: "Vegan", en: "Vegan", tr: "Vegan" },
  },
  spicy: {
    icon: "🌶️",
    label: { el: "Πικάντικο", en: "Spicy", tr: "Acılı" },
  },
} as const;

export const promos = {
  el: [
    "☀️ Καλοκαιρινή γρανίτα με 14 γεύσεις — δοκίμασε τη!",
    "🍹 Σήμερα το Mojito είναι must — classic ή φράουλα;",
    "☕ Freddo espresso ή cappuccino; Και τα δύο 2.90€!",
    "🍔 Club sandwich με φρέσκες πατάτες — ό,τι πρέπει!",
    "🍺 Τοπικές μπύρες Sedusa & Nissiopi — δοκίμασε κάτι διαφορετικό!",
    "🌊 Γρανίτα Καρπούζι + Pina Colada = καλοκαίρι!",
    "🥗 Χωριάτικη ή Ντάκος — φρέσκο & νόστιμο!",
  ],
  en: [
    "☀️ Summer slushie with 14 flavors — give it a try!",
    "🍹 Today's must: Mojito — classic or strawberry?",
    "☕ Freddo espresso or cappuccino? Both just 2.90€!",
    "🍔 Club sandwich with fresh fries — absolutely perfect!",
    "🍺 Local brews Sedusa & Nissiopi — try something different!",
    "🌊 Watermelon slushie + Pina Colada = summer vibes!",
    "🥗 Greek salad or Dakos — fresh & delicious!",
  ],
  tr: [
    "☀️ 14 çeşit granita — dene bakalım!",
    "🍹 Bugün Mojito şart — klasik mi, çilekli mi?",
    "☕ Freddo espresso veya cappuccino? İkisi de 2.90€!",
    "🍔 Club sandviç + taze patates kızartması — mükemmel!",
    "🍺 Yerel biralar Sedusa & Nissiopi — farklı bir şey dene!",
    "🌊 Karpuz granitası + Pina Colada = yaz!",
    "🥗 Yunan salatası ya da Dakos — taze ve lezzetli!",
  ],
};
export const languages = [
  { code: "el", label: "GR" },
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
] as const;

export const emojiMap: Record<string, string> = {
  ΚΑΦΕΔΕΣ: "☕",
  COFFEES: "☕",
  KAHVELER: "☕",
  ΡΟΦΗΜΑΤΑ: "🧃",
  BEVERAGES: "🧃",
  İÇECEKLER: "🧃",
  ΑΝΑΨΥΚΤΙΚΑ: "🥤",
  "SOFT DRINKS": "🥤",
  MEŞRUBAT: "🥤",
  ΑΛΚΟΟΛ: "🍺",
  ALCOHOL: "🍺",
  ALKOL: "🍺",
  COCKTAILS: "🍹",
  KOKTEYLLER: "🍹",
  ΦΑΓΗΤΑ: "🍔",
  FOOD: "🍔",
  YEMEKLER: "🍔",
};
export interface Category {
  id: string;
  label: { el: string; en: string; tr: string };
  icon: LucideIcon;
}
export const categories: Category[] = [
  {
    id: "coffee",
    label: { el: "ΚΑΦΕΔΕΣ", en: "COFFEES", tr: "KAHVELER" },
    icon: CoffeeIcon,
  },
  {
    id: "drinks",
    label: { el: "ΡΟΦΗΜΑΤΑ", en: "BEVERAGES", tr: "İÇECEKLER" },
    icon: Milk,
  },
  {
    id: "soft_drinks",
    label: { el: "ΑΝΑΨΥΚΤΙΚΑ", en: "SOFT DRINKS", tr: "MEŞRUBAT" },
    icon: CupSoda,
  },
  {
    id: "alcohol",
    label: { el: "ΑΛΚΟΟΛ", en: "ALCOHOL", tr: "ALKOL" },
    icon: Beer,
  },
  {
    id: "cocktails",
    label: { el: "COCKTAILS", en: "COCKTAILS", tr: "KOKTEYLLER" },
    icon: Martini,
  },
  {
    id: "food",
    label: { el: "ΦΑΓΗΤΑ", en: "FOOD", tr: "YEMEKLER" },
    icon: Utensils,
  },
] as const;

export interface Product {
  title: { el: string; en: string; tr: string };
  description: { el: string; en: string; tr: string };
  price: number | string;
  featured?: boolean;
  flavors: { el: []; en: []; tr: [] };
  photoUrl?: string;
  allergens?: Allergen[];
  vegetarian?: boolean;
  vegan?: boolean;
  spicy?: boolean;
}

export const Coffee = {
  categoryTitle: { el: "ΚΑΦΕΔΕΣ", en: "COFFEES", tr: "KAHVELER" },
  subCategories: [
    {
      subTitle: {
        el: "ΚΡΥΑ ΡΟΦΗΜΑΤΑ",
        en: "COLD DRINKS",
        tr: "SOĞUK İÇECEKLER",
      },
      items: [
        {
          title: {
            el: "FREDDO ESPRESSO",
            en: "FREDDO ESPRESSO",
            tr: "FREDDO ESPRESSO",
          },
          description: {
            el: "Κανονικό (2.50€) | Τετραπλό (3.50€). Διαθέσιμο Decaf.",
            en: "Regular (2.50€) | Quad (3.50€). Decaf available.",
            tr: "Normal (2.50€) | Quad (3.50€). Decaf mevcuttur.",
          },
          price: 2.5,
          featured: true,
          photoUrl: "/assets/FREDDO ESPRESSO.avif",
          vegan: true,
        },
        {
          title: {
            el: "FREDDO CAPPUCCINO",
            en: "FREDDO CAPPUCCINO",
            tr: "FREDDO CAPPUCCINO",
          },
          description: {
            el: "Κανονικό (3.00€) | Τετραπλό (4.00€). Decaf.",
            en: "Regular (3.00€) | Quad (4.00€). Decaf available.",
            tr: "Normal (3.00€) | Quad (4.00€). Decaf mevcuttur.",
          },
          price: 3.0,
          photoUrl: "/assets/FREDDO CAPPUCCINO.avif",
          allergens: ["milk"],
          vegetarian: true,
        },
        {
          title: { el: "ΦΡΑΠΕ", en: "FRAPPE", tr: "FRAPPE" },
          description: {
            el: "Σερβίρεται σκέτος. Διαθέσιμος σε Decaf. Γάλα κατόπιν αιτήματος.",
            en: "Served plain. Decaf available. Milk on request.",
            tr: "Sade servis edilir. Decaf mevcuttur. İsteğe bağlı süt.",
          },
          price: 2,
          photoUrl: "/assets/FRAPPE.avif",
          vegan: true,
        },
        {
          title: { el: "LATTE ΚΡΥΟ", en: "ICED LATTE", tr: "BUZLU LATTE" },
          description: {
            el: "Με πλούσιο γάλα. Διαθέσιμο Decaf.",
            en: "With milk. Decaf available.",
            tr: "Sütlü. Decaf mevcuttur.",
          },
          price: 3,
          photoUrl: "/assets/ICED LATTE.avif",
          allergens: ["milk"],
          vegetarian: true,
        },
        {
          title: { el: "FREDDUCCINO", en: "FREDDUCCINO", tr: "FREDDUCCINO" },
          description: {
            el: "Blended ρόφημα καφέ.",
            en: "Blended coffee drink.",
            tr: "Buzlu harmanlanmış kahve.",
          },
          price: 3.5,
          photoUrl: "/assets/FREDDUCCINO.avif",
          allergens: ["milk"],
          vegetarian: true,
        },
      ],
    },
    {
      subTitle: {
        el: "ΖΕΣΤΑ ΡΟΦΗΜΑΤΑ",
        en: "HOT DRINKS",
        tr: "SICAK İÇECEKLER",
      },
      items: [
        {
          title: { el: "ESPRESSO", en: "ESPRESSO", tr: "ESPRESSO" },
          description: {
            el: "Μονό (2.00€) | Διπλό (2.50€). Decaf.",
            en: "Single (2.00€) | Double (2.50€). Decaf available.",
            tr: "Tek (2.00€) | Çift (2.50€). Decaf mevcuttur.",
          },
          price: 2,
          photoUrl: "/assets/ESPRESSO.avif",
          vegan: true,
        },
        {
          title: { el: "CAPPUCCINO", en: "CAPPUCCINO", tr: "CAPPUCCINO" },
          description: {
            el: "Μονό (2.20€) | Διπλό (3.00€). Decaf.",
            en: "Single (2.20€) | Double (3.00€). Decaf available.",
            tr: "Tek (2.20€) | Çift (3.00€). Decaf mevcuttur.",
          },
          price: 2.2,
          photoUrl: "/assets/cappuccino.avif",
          allergens: ["milk"],
          vegetarian: true,
        },
        {
          title: {
            el: "ΕΛΛΗΝΙΚΟΣ ΚΑΦΕΣ",
            en: "GREEK COFFEE",
            tr: "YUNAN KAHVESİ",
          },
          description: {
            el: "Μονός (1.50€) | Διπλός (2.00€). Decaf.",
            en: "Single (1.50€) | Double (2.00€). Decaf available.",
            tr: "Tek (1.50€) | Çift (2.00€). Decaf mevcuttur.",
          },
          price: 1.5,
          photoUrl: "/assets/GREEK COFFEE.avif",
          vegan: true,
        },
        {
          title: { el: "NESCAFE", en: "NESCAFE", tr: "NESCAFE" },
          description: {
            el: "Ζεστός στιγμιαίος. Διαθέσιμο Decaf.",
            en: "Hot instant. Decaf available.",
            tr: "Sıcak hazır kahve. Decaf.",
          },
          price: 2,
          photoUrl: "/assets/NESCAFE.avif",
          allergens: ["milk"],
          vegetarian: true,
        },
        {
          title: { el: "MACCHIATO", en: "MACCHIATO", tr: "MACCHIATO" },
          description: {
            el: "Μονός (2.00€) | Διπλό (2.50€). Διαθέσιμο και σε Decaf.",
            en: "Single (2.00€) | Double (2.50€). Also available in Decaf.",
            tr: "Tek (2.00€) | Çift (2.50€). Decaf seçeneği mevcuttur.",
          },
          price: 2,
          photoUrl: "/assets/MACCHIATO.avif",
          allergens: ["milk"],
          vegetarian: true,
        },
        {
          title: { el: "LUNGO", en: "LUNGO", tr: "LUNGO" },
          description: {
            el: "Μονός (2.00€) | Διπλό (2.50€). Διαθέσιμο και σε Decaf.",
            en: "Single (2.00€) | Double (2.50€). Also available in Decaf.",
            tr: "Tek (2.00€) | Çift (2.50€). Decaf seçeneği mevcuttur.",
          },
          price: 2,
          photoUrl: "/assets/LUNGO.avif",
          vegan: true,
        },
        {
          title: { el: "AMERICANO", en: "AMERICANO", tr: "AMERICANO" },
          description: {
            el: "Espresso με ζεστό νερό. Decaf.",
            en: "Espresso with hot water. Decaf.",
            tr: "Espresso sıcak su. Decaf.",
          },
          price: 2.5,
          photoUrl: "/assets/AMERICANO.avif",
          vegan: true,
        },
        {
          title: { el: "ΓΑΛΛΙΚΟΣ", en: "FILTER COFFEE", tr: "FİLTRE KAHVE" },
          description: {
            el: "Αρωματικός καφές φίλτρου. Decaf.",
            en: "Filter coffee. Decaf.",
            tr: "Filtre kahve. Decaf.",
          },
          price: 2.5,
          photoUrl: "/assets/FILTER COFFEE.avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: { el: "ΣΟΚΟΛΑΤΕΣ", en: "CHOCOLATES", tr: "ÇİKOLATALAR" },
      items: [
        {
          title: { el: "ΣΟΚΟΛΑΤΑ", en: "CHOCOLATE", tr: "ÇİKOLATA" },
          description: {
            el: "Ζεστή ή Κρύα.",
            en: "Hot or Iced.",
            tr: "Sıcak veya Soğuk.",
          },
          price: 3.5,
          photoUrl: "/assets/CHOCOLATE.avif",
          allergens: ["milk"],
          vegetarian: true,
        },
        {
          title: { el: "MOCHACCINO", en: "MOCHACCINO", tr: "MOCHACCINO" },
          description: {
            el: "Espresso και σοκολάτα. Ζεστό ή Κρύο.",
            en: "Espresso and chocolate. Hot or Iced.",
            tr: "Espresso ve çikolata. Sıcak/Soğuk.",
          },
          price: 4,
          photoUrl: "/assets/MOCHACCINO.avif",
          allergens: ["milk"],
          vegetarian: true,
        },
      ],
    },
  ],
};

export const Drinks = {
  categoryTitle: { el: "ΡΟΦΗΜΑΤΑ", en: "BEVERAGES", tr: "İÇECEKLER" },
  subCategories: [
    {
      subTitle: {
        el: "LIPTON ICE TEA",
        en: "LIPTON ICE TEA",
        tr: "LIPTON ICE TEA",
      },
      items: [
        {
          title: {
            el: "LIPTON ICE TEA (330ml / 500ml)",
            en: "LIPTON ICE TEA (330ml / 500ml)",
            tr: "LIPTON ICE TEA (330ml / 500ml)",
          },
          price: "2.00€ / 3.00€",
          flavors: {
            el: ["Λεμόνι", "Ροδάκινο", "Green", "Raspberry", "Χωρίς Ζάχαρη"],
            en: ["Lemon", "Peach", "Green", "Raspberry", "Zero Sugar"],
            tr: ["Limon", "Şeftali", "Yeşil Çay", "Ahududu", "Şekersiz"],
          },
          photoUrl: "/assets/LIPTON ICE TEA.avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: {
        el: "ΖΕΣΤΟ ΤΣΑΙ & ΒΟΤΑΝΑ",
        en: "HOT TEA & HERBS",
        tr: "SICAK ÇAY VE BİTKİLER",
      },
      items: [
        {
          title: {
            el: "ΤΣΑΙ (ΜΑΥΡΟ / ΠΡΑΣΙΝΟ)",
            en: "TEA (BLACK / GREEN)",
            tr: "ÇAY (SİYAH / YEŞİL)",
          },
          description: {
            el: "Ζεστό αρωματικό τσάι.",
            en: "Hot aromatic tea.",
            tr: "Sıcak aromatik çay.",
          },
          price: 2,
          photoUrl: "/assets/TEA HOT.avif",
          vegan: true,
        },
        {
          title: { el: "ΧΑΜΟΜΗΛΙ", en: "CHAMOMILE", tr: "PAPATYA ÇAYI" },
          description: {
            el: "Φυσικό χαλαρωτικό ρόφημα.",
            en: "Natural relaxing herbal drink.",
            tr: "Doğal rahatlatıcı bitki çayı.",
          },
          price: 1.5,
          photoUrl: "/assets/CHAMOMILE.avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: { el: "ΓΡΑΝΙΤΕΣ", en: "SLUSHIES", tr: "GRANİTALAR" },
      items: [
        {
          title: {
            el: "ΓΡΑΝΙΤΑ ΜΕ ΓΕΥΣΕΙΣ",
            en: "SLUSHIE FLAVORS",
            tr: "AROMALI GRANİTA",
          },
          price: 3.5,
          flavors: {
            el: [
              "Φράουλα",
              "Λεμόνι",
              "Ροδάκινο",
              "Μπανάνα",
              "Πεπόνι",
              "Καρπούζι",
              "Forest Fruit",
              "Passion Fruit",
              "Blackberry",
              "Raspberry",
              "Ανανάς",
              "Κεράσι",
              "Πράσινο Μήλο",
              "Καρύδα",
            ],
            en: [
              "Strawberry",
              "Lemon",
              "Peach",
              "Banana",
              "Melon",
              "Watermelon",
              "Forest Fruit",
              "Passion Fruit",
              "Blackberry",
              "Raspberry",
              "Pineapple",
              "Cherry",
              "Green Apple",
              "Coconut",
            ],
            tr: [
              "Çilek",
              "Limon",
              "Şeftali",
              "Muz",
              "Kavun",
              "Karpuz",
              "Orman Meyveleri",
              "Passion Fruit",
              "Böğürtlen",
              "Ahududu",
              "Ananas",
              "Kiraz",
              "Yeşil Elma",
              "Hindistan Cevizi",
            ],
          },
          photoUrl: "/assets/SLUSHIES.avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: { el: "ΓΙΑΓΙΑ ΜΑΣ", en: "GIA GIA MAS", tr: "GIA GIA MAS" },
      items: [
        {
          title: { el: "ΓΙΑΓΙΑ ΜΑΣ", en: "GIA GIA MAS", tr: "GIA GIA MAS" },
          price: 3.5,
          flavors: {
            el: [
              "Ροδάκινο",
              "Λεμόνι",
              "Κεράσι",
              "Φράουλα-Λεμόνι",
              "Μήλο-Ρόδι",
              "Πανδαισία Εσπεριδοειδών",
            ],
            en: [
              "Peach",
              "Lemon",
              "Cherry",
              "Strawberry-Lemon",
              "Apple-Pomegranate",
              "Mixed Citrus",
            ],
            tr: [
              "Şeftali",
              "Limon",
              "Kiraz",
              "Çilek-Limon",
              "Elma-Nar",
              "Karışık Narenciye",
            ],
          },
          photoUrl: "/assets/GIA GIA MAS.avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: { el: "ALOE", en: "ALOE", tr: "ALOE" },
      items: [
        {
          title: {
            el: "ALOE VERA DRINK",
            en: "ALOE VERA DRINK",
            tr: "ALOE VERA DRINK",
          },
          price: 2.5,
          flavors: {
            el: [
              "Φράουλα",
              "Καρπούζι",
              "Mango",
              "Ανανάς",
              "Blackberry",
              "Ροδάκινο",
            ],
            en: [
              "Strawberry",
              "Watermelon",
              "Mango",
              "Pineapple",
              "Blackberry",
              "Peach",
            ],
            tr: ["Çilek", "Karpuz", "Mango", "Ananas", "Böğürtlen", "Şeftali"],
          },
          photoUrl: "/assets/ALOE VERA DRINK.avif",
          vegan: true,
        },
      ],
    },
  ],
};

export const softDrinks = {
  categoryTitle: {
    el: "ΑΝΑΨΥΚΤΙΚΑ",
    en: "SOFT DRINKS",
    tr: "MEŞRUBAT",
  },
  subCategories: [
    {
      subTitle: { el: "ΑΝΑΨΥΚΤΙΚΑ", en: "SOFT DRINKS", tr: "GAZLI İÇECEKLER" },
      items: [
        {
          title: { el: "COCA COLA", en: "COCA COLA", tr: "COCA COLA" },
          price: 2,
          flavors: {
            el: ["Classic", "Zero", "Light"],
            en: ["Classic", "Zero", "Light"],
            tr: ["Classic", "Zero", "Light"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/COCA COLA.avif",
          vegan: true,
        },
        {
          title: { el: "PEPSI 330ml", en: "PEPSI 330ml", tr: "PEPSI 330ml" },
          price: 2,
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/PEPSI 330ml.avif",
          vegan: true,
        },
        {
          title: { el: "FANTA", en: "FANTA", tr: "FANTA" },
          price: 2,
          flavors: {
            el: ["Πορτοκαλάδα", "Λεμονάδα", "Μπλε"],
            en: ["Orangeade", "Lemonade", "Blue"],
            tr: ["Portakallı", "Limonata", "Mavi"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/FANTA.avif",
          vegan: true,
        },
        {
          title: { el: "ΗΒΗ", en: "IVI", tr: "IVI" },
          price: 2,
          flavors: {
            el: ["Πορτοκαλάδα", "Λεμονάδα", "Μπλε Πορτοκαλάδα"],
            en: ["Orangeade", "Lemonade", "Blue Orangeade"],
            tr: ["Portakallı", "Limonata", "Mavi Portakallı"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/IVI.avif",
          vegan: true,
        },
        {
          title: { el: "SPRITE", en: "SPRITE", tr: "SPRITE" },
          price: 2,
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/SPRITE.avif",
          vegan: true,
        },
        {
          title: { el: "7UP", en: "7UP", tr: "7UP" },
          price: 2,
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/7UP.avif",
          vegan: true,
        },
        {
          title: {
            el: "SCHWEPPES 330ml",
            en: "SCHWEPPES 330ml",
            tr: "SCHWEPPES 330ml",
          },
          price: 2,
          flavors: {
            el: [
              "Pink Grapefruit",
              "Orangeade",
              "Lemonade",
              "Pomegranate",
              "Mojito",
            ],
            en: [
              "Pink Grapefruit",
              "Orangeade",
              "Lemonade",
              "Pomegranate",
              "Mojito",
            ],
            tr: ["Pink Grapefruit", "Orangeade", "Lemonade", "Nar", "Mojito"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/SCHWEPPES 330ml.avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: {
        el: "ΦΥΣΙΚΟΙ ΧΥΜΟΙ & ΣΥΣΚΕΥΑΣΜΕΝΟΙ",
        en: "FRESH & BOTTLED JUICES",
        tr: "MEYVE SULARI",
      },
      items: [
        {
          title: {
            el: "ΦΥΣΙΚΟΣ ΧΥΜΟΣ ΠΟΡΤΟΚΑΛΙ",
            en: "FRESH ORANGE JUICE",
            tr: "TAZE PORTAKAL SUYU",
          },
          price: 3.5,
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/FRESH ORANGE JUICE.avif",
          vegan: true,
        },
        {
          title: {
            el: "ΦΥΣΙΚΟΣ ΧΥΜΟΣ ΑΝΑΜΕΙΚΤΟΣ",
            en: "FRESH MIXED JUICE",
            tr: "TAZE KARIŞIK MEYVE SUYU",
          },
          price: 4.0,
          flavors: {
            el: ["Πορτοκάλι", "Μήλο", "Μπανάνα", "Ροδάκινο"],
            en: ["Orange", "Apple", "Banana", "Peach"],
            tr: ["Portakal", "Elma", "Muz", "Şeftali"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/FRESH MIXED JUICE.avif",
          vegan: true,
        },
        {
          title: {
            el: "ΧΥΜΟΙ (250ml)",
            en: "JUICES (250ml)",
            tr: "MEYVE SULARI (250ml)",
          },
          price: 1.5,
          flavors: {
            el: ["Αναμεικτος", "Πορτοκάλι", "Βύσσινο", "Ροδάκινο"],
            en: ["Mixed", "Orange", "Sour Cherry", "Peach"],
            tr: ["Karışık", "Portakal", "Vişne", "Şeftali"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/JUICES (250ml).avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: { el: "ΚΡΥΟ ΤΣΑΙ", en: "ICE TEA", tr: "SOĞUK ÇAY" },
      items: [
        {
          title: {
            el: "FUZE TEA 330ml",
            en: "FUZE TEA 330ml",
            tr: "FUZE TEA 330ml",
          },
          price: 2,
          flavors: {
            el: ["Λεμόνι & Λουίζα", "Ροδάκινο & Ιβίσκος"],
            en: ["Lemon & Verbena", "Peach & Hibiscus"],
            tr: ["Limon ve Mine Çiçeği", "Şeftali ve Hibiskus"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/FUZE TEA 330ml.avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: { el: "ΝΕΡΟ", en: "WATER", tr: "SU" },
      items: [
        {
          title: {
            el: "ΦΥΣΙΚΟ ΜΕΤΑΛΛΙΚΟ ΝΕΡΟ",
            en: "NATURAL MINERAL WATER",
            tr: "DOĞAL MADEN SUYU",
          },
          price: "0.50€ / 1.00€",
          description: {
            el: "500ml / 1.5lt",
            en: "500ml / 1.5lt",
            tr: "500ml / 1.5lt",
          },
          photoUrl: "/assets/NATURAL MINERAL WATER.avif",
          vegan: true,
        },
        {
          title: {
            el: "ΑΝΘΡΑΚΟΥΧΟ ΝΕΡΟ 330ml",
            en: "SPARKLING WATER 330ml",
            tr: "MADEN SUYU 330ml",
          },
          price: 2.5,
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/SPARKLING WATER.avif",
          vegan: true,
        },
      ],
    },
  ],
};
export const Alcohol = {
  categoryTitle: {
    el: "ΑΛΚΟΟΛ",
    en: "ALCOHOL",
    tr: "ALKOL",
  },
  subCategories: [
    {
      subTitle: {
        el: "ΜΠΥΡΕΣ (330ml)",
        en: "BEERS (330ml)",
        tr: "BİRALAR (330ml)",
      },
      items: [
        {
          title: {
            el: "LAGER & CLASSIC",
            en: "LAGER & CLASSIC",
            tr: "LAGER & CLASSIC",
          },
          price: 2.0,
          flavors: {
            el: [
              "Άλφα",
              "Μύθος",
              "Fix",
              "Ζύθος",
              "Βεργίνα",
              "Amstel",
              "Heineken",
            ],
            en: [
              "Alfa",
              "Mythos",
              "Fix",
              "Zythos",
              "Vergina",
              "Amstel",
              "Heineken",
            ],
            tr: [
              "Alfa",
              "Mythos",
              "Fix",
              "Zythos",
              "Vergina",
              "Amstel",
              "Heineken",
            ],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/LAGER & CLASSIC.avif",
          allergens: ["gluten"],
          vegan: true,
        },
        {
          title: {
            el: "PILSNER & PREMIUM",
            en: "PILSNER & PREMIUM",
            tr: "PILSNER & PREMIUM",
          },
          price: 2,
          flavors: {
            el: ["Mamos", "Kaiser", "Άλφα Αλάτι"],
            en: ["Mamos", "Kaiser", "Alfa Salt"],
            tr: ["Mamos", "Kaiser", "Alfa Salt"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/PILSNER & PREMIUM.avif",
          allergens: ["gluten"],
          vegan: true,
        },
        {
          title: {
            el: "SPECIAL & LOCAL BREWS",
            en: "SPECIAL & LOCAL BREWS",
            tr: "ÖZEL BİRALAR",
          },
          price: 4.0,
          flavors: {
            el: ["Sedusa", "Nissiopi", "Νήσος", "Fix Dark"],
            en: ["Sedusa", "Nissiopi", "Nisos", "Fix Dark"],
            tr: ["Sedusa", "Nissiopi", "Nisos", "Fix Dark"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/SPECIAL & LOCAL BREWS.avif",
          allergens: ["gluten"],
          vegan: true,
        },
        {
          title: {
            el: "ΧΩΡΙΣ ΑΛΚΟΟΛ / RADLER",
            en: "ALCOHOL FREE / RADLER",
            tr: "ALKOLSÜZ / RADLER",
          },
          price: 2.0,
          flavors: {
            el: ["Άλφα Άνευ", "Fix Άνευ", "Radler"],
            en: ["Alfa Free", "Fix Free", "Radler"],
            tr: ["Alfa Free", "Fix Free", "Radler"],
          },
          description: { el: "", en: "", tr: "" },
          allergens: ["gluten"],
          photoUrl: "/assets/ALCOHOL FREE.avif",
          vegan: true,
        },
        {
          title: { el: "BUNDABERG", en: "BUNDABERG", tr: "BUNDABERG" },
          price: 3.0,
          photoUrl: "/assets/BUNDABERG.avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: {
        el: "RTD & READY TO DRINK",
        en: "RTD & MIXED DRINKS",
        tr: "RTD İÇECEKLER",
      },
      items: [
        {
          title: { el: "BREEZER", en: "BREEZER", tr: "BREEZER" },
          price: 4.0,
          flavors: {
            el: ["Καρπούζι", "Λεμόνι", "Πορτοκάλι"],
            en: ["Watermelon", "Lemon", "Orange"],
            tr: ["Karpuz", "Limon", "Portakal"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/BREEZER.avif",
          allergens: ["sulphites"],
          vegan: true,
        },
        {
          title: {
            el: "MIXED SPIRITS",
            en: "MIXED SPIRITS",
            tr: "KARIŞIK İÇKİLER",
          },
          price: 4.0,
          flavors: {
            el: ["Gordon's Space", "Smirnoff Ice"],
            en: ["Gordon's Space", "Smirnoff Ice"],
            tr: ["Gordon's Space", "Smirnoff Ice"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/MIXED SPIRITS.avif",
          allergens: ["sulphites"],
          vegan: true,
        },
      ],
    },
    {
      subTitle: {
        el: "ΚΡΑΣΙΑ & ΡΕΤΣΙΝΑ",
        en: "WINE & RETSINA",
        tr: "ŞARAP VE RETSİNA",
      },
      items: [
        {
          title: {
            el: "ΚΡΑΣΙ (250ml / 500ml)",
            en: "WINE (250ml / 500ml)",
            tr: "ŞARAP (250ml / 500ml)",
          },
          price: "3.5€ / 6.0€",
          flavors: {
            el: ["Λευκό Ξηρό", "Ημιγλυκό Κόκκινο", "Κόκκινο Ξηρό", "Ροζέ"],
            en: ["Dry White", "Semi-sweet Red", "Dry Red", "Rosé"],
            tr: ["Sek Beyaz", "Yarı Tatlı Kırmızı", "Sek Kırmızı", "Roze"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/WINE.avif",
          allergens: ["sulphites"],
          vegan: true,
        },
        {
          title: { el: "ΡΕΤΣΙΝΑ", en: "RETSINA", tr: "RETSİNA" },
          price: 6,
          flavors: {
            el: ["Μαλαματίνα", "Κουρτάκη"],
            en: ["Malamatina", "Kourtaki"],
            tr: ["Malamatina", "Kourtaki"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/RETSINA.avif",
          allergens: ["sulphites"],
          vegan: true,
        },
      ],
    },
    {
      subTitle: {
        el: "ΑΠΟΣΤΑΓΜΑΤΑ",
        en: "GREEK SPIRITS",
        tr: "YUNAN İÇKİLERİ",
      },
      items: [
        {
          title: {
            el: "ΟΥΖΟ",
            en: "OUZO",
            tr: "UZO",
          },
          price: 3.0,
          flavors: {
            el: ["50ml", "200ml (6.0€)"],
            en: ["50ml", "200ml (6.0€)"],
            tr: ["50ml", "200ml (6.0€)"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/OUZO.avif",
          vegan: true,
        },
        {
          title: {
            el: "ΤΣΙΠΟΥΡΟ",
            en: "TSIPOURO",
            tr: "ÇİPURO",
          },
          price: 8.0,
          flavors: {
            el: ["200ml"],
            en: ["200ml"],
            tr: ["200ml"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/TSIPOURO.avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: { el: "ΠΟΤΑ", en: "SPIRITS", tr: "İÇKİLER" },
      items: [
        {
          title: {
            el: "STANDARD DRINKS",
            en: "STANDARD DRINKS",
            tr: "STANDART İÇKΙLER",
          },
          price: 7.0,
          flavors: {
            el: ["Βότκα", "Τζιν", "Ρούμι", "Ουίσκι", "Τεκίλα"],
            en: ["Vodka", "Gin", "Rum", "Whiskey", "Tequila"],
            tr: ["Votka", "Cin", "Rom", "Viski", "Tekila"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/STANDARD DRINKS.avif",
          vegan: true,
        },
        {
          title: {
            el: "LIQUEURS & APERITIFS",
            en: "LIQUEURS & APERITIFS",
            tr: "LIKÖR VE APERATΙF",
          },
          price: 6.0,
          flavors: {
            el: ["Campari", "Aperol", "Baileys"],
            en: ["Campari", "Aperol", "Baileys"],
            tr: ["Campari", "Aperol", "Baileys"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/LIQUEURS.avif",
          allergens: ["milk", "eggs", "sulphites"],
        },
      ],
    },
  ],
};

export const Cocktails = {
  categoryTitle: { el: "COCKTAILS", en: "COCKTAILS", tr: "KOKTEYLLER" },
  subCategories: [
    {
      subTitle: {
        el: "SIGNATURE & BEST SELLERS",
        en: "SIGNATURE & BEST SELLERS",
        tr: "EN SEVİLENLER",
      },
      items: [
        {
          title: { el: "MOJITO", en: "MOJITO", tr: "MOJITO" },
          price: 8.5,
          flavors: {
            el: ["Classic", "Φράουλα"],
            en: ["Classic", "Strawberry"],
            tr: ["Klasik", "Çilekli"],
          },
          description: {
            el: "Λευκό ρούμι, lime, φρέσκια μέντα, ζάχαρη, σόδα.",
            en: "White rum, lime, fresh mint, sugar, soda.",
            tr: "Beyaz rom, lime, taze nane, şeker, soda.",
          },
          featured: true,
          photoUrl: "/assets/MOJITO.avif",
          vegan: true,
        },
        {
          title: { el: "MAI TAI", en: "MAI TAI", tr: "MAI TAI" },
          price: 9.0,
          description: {
            el: "Μείγμα ρουμιών, orgeat (σιρόπι αμυγδάλου), lime, ροδάκινο.",
            en: "Blend of rums, orgeat (almond syrup), lime, peach.",
            tr: "Rom karışımı, orgeat (badem şurubu), lime, şeftali.",
          },
          featured: true,
          photoUrl: "/assets/MAI TAI.avif",
          allergens: ["nuts"],
          vegan: true,
        },
        {
          title: { el: "MARGARITA", en: "MARGARITA", tr: "MARGARITA" },
          price: 8.5,
          flavors: {
            el: ["Classic", "Frozen Φράουλα", "Frozen Καρπούζι"],
            en: ["Classic", "Frozen Strawberry", "Frozen Watermelon"],
            tr: ["Klasik", "Frozen Çilek", "Frozen Karpuz"],
          },
          description: {
            el: "Tequila, triple sec, lime, αλάτι στο χείλος του ποτηριού.",
            en: "Tequila, triple sec, lime, salt rim.",
            tr: "Tekila, triple sec, lime, kenarda tuz.",
          },
          photoUrl: "/assets/MARGARITA.avif",
          vegan: true,
        },
        {
          title: { el: "PINA COLADA", en: "PINA COLADA", tr: "PINA COLADA" },
          price: 8.5,
          description: {
            el: "Λευκό ρούμι, κρέμα καρύδας, χυμός ανανά.",
            en: "White rum, coconut cream, pineapple juice.",
            tr: "Beyaz rom, hindistan cevizi kreması, ananas suyu.",
          },
          photoUrl: "/assets/PINA COLADA.avif",
          vegan: true,
        },
        {
          title: { el: "PALOMA", en: "PALOMA", tr: "PALOMA" },
          price: 8.5,
          description: {
            el: "Tequila, lime, αναψυκτικό ροζ γκρέιπφρουτ.",
            en: "Tequila, lime, pink grapefruit soda.",
            tr: "Tekila, lime, pembe greyfurt sodası.",
          },
          photoUrl: "/assets/PALOMA.avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: {
        el: "ALL TIME CLASSICS",
        en: "ALL TIME CLASSICS",
        tr: "KLASİKLER",
      },
      items: [
        {
          title: { el: "NEGRONI", en: "NEGRONI", tr: "NEGRONI" },
          price: 8.0,
          description: {
            el: "Gin, Campari, γλυκό vermouth.",
            en: "Gin, Campari, sweet vermouth.",
            tr: "Cin, Campari, tatlı vermut.",
          },
          photoUrl: "/assets/NEGRONI.avif",
          allergens: ["sulphites"],
          vegan: true,
        },
        {
          title: { el: "DAIQUIRI", en: "DAIQUIRI", tr: "DAIQUIRI" },
          price: 8.0,
          description: {
            el: "Λευκό ρούμι, lime, σιρόπι ζάχαρης.",
            en: "White rum, lime, simple syrup.",
            tr: "Beyaz rom, lime, şeker şurubu.",
          },
          photoUrl: "/assets/DAIQUIRI.avif",
          vegan: true,
        },
        {
          title: { el: "COSMOPOLITAN", en: "COSMOPOLITAN", tr: "COSMOPOLITAN" },
          price: 8.0,
          description: {
            el: "Vodka, triple sec, χυμός cranberry, lime.",
            en: "Vodka, triple sec, cranberry juice, lime.",
            tr: "Votka, triple sec, yaban mersini suyu, lime.",
          },
          photoUrl: "/assets/COSMOPOLITAN.avif",
          vegan: true,
        },
        {
          title: { el: "CUBA LIBRE", en: "CUBA LIBRE", tr: "CUBA LIBRE" },
          price: 8.0,
          description: {
            el: "Λευκό ρούμι, cola, lime.",
            en: "White rum, cola, lime.",
            tr: "Beyaz rom, kola, lime.",
          },
          photoUrl: "/assets/CUBA LIBRE.avif",
          vegan: true,
        },
        {
          title: {
            el: "SEX ON THE BEACH",
            en: "SEX ON THE BEACH",
            tr: "SEX ON THE BEACH",
          },
          price: 8.5,
          description: {
            el: "Vodka, peach schnapps, χυμός πορτοκαλιού, cranberry.",
            en: "Vodka, peach schnapps, orange juice, cranberry.",
            tr: "Votka, şeftali likörü, portakal suyu, yaban mersini.",
          },
          photoUrl: "/assets/SEX ON THE BEACH.avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: {
        el: "SOUR & MUDDLED",
        en: "SOUR & MUDDLED",
        tr: "EKŞİ VE EZİLMİŞ",
      },
      items: [
        {
          title: { el: "CAIPIRINHA", en: "CAIPIRINHA", tr: "CAIPIRINHA" },
          price: 8.0,
          description: {
            el: "Cachaça, lime, ζάχαρη.",
            en: "Cachaça, lime, sugar.",
            tr: "Cachaça, lime, şeker.",
          },
          photoUrl: "/assets/CAIPIRINHA.avif",
          vegan: true,
        },
        {
          title: { el: "CAIPIROSCA", en: "CAIPIROSCA", tr: "CAIPIROSCA" },
          price: 8.0,
          description: {
            el: "Vodka, lime, ζάχαρη.",
            en: "Vodka, lime, sugar.",
            tr: "Votka, lime, şeker.",
          },
          photoUrl: "/assets/CAIPIROSCA.avif",
          vegan: true,
        },
        {
          title: { el: "BRAMBLE", en: "BRAMBLE", tr: "BRAMBLE" },
          price: 8.5,
          description: {
            el: "Gin, λεμόνι, σιρόπι, λικέρ βατόμουρου.",
            en: "Gin, lemon, syrup, blackberry liqueur.",
            tr: "Cin, limon, şurup, böğürtlen likörü.",
          },
          photoUrl: "/assets/BRAMBLE.avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: {
        el: "WHISKEY BASED",
        en: "WHISKEY BASED",
        tr: "VİSKİ TABANLI",
      },
      items: [
        {
          title: { el: "MANHATTAN", en: "MANHATTAN", tr: "MANHATTAN" },
          price: 8.0,
          description: {
            el: "Whiskey, γλυκό vermouth, angostura bitters.",
            en: "Whiskey, sweet vermouth, angostura bitters.",
            tr: "Viski, tatlı vermut, angostura bitter.",
          },
          photoUrl: "/assets/MANHATTAN.avif",
          allergens: ["sulphites"],
          vegan: true,
        },
        {
          title: {
            el: "WHISKEY HIGHBALL",
            en: "WHISKEY HIGHBALL",
            tr: "WHISKEY HIGHBALL",
          },
          price: 8.0,
          description: {
            el: "Whiskey, σόδα, λεμόνι.",
            en: "Whiskey, soda water, lemon.",
            tr: "Viski, soda, limon.",
          },
          photoUrl: "/assets/WHISKEY HIGHBALL.avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: {
        el: "SPRITZ & APERITIVO",
        en: "SPRITZ & APERITIVO",
        tr: "SPRITZ VE APERATİF",
      },
      items: [
        {
          title: {
            el: "APEROL SPRITZ",
            en: "APEROL SPRITZ",
            tr: "APEROL SPRITZ",
          },
          price: 8.5,
          description: {
            el: "Aperol, prosecco, σόδα, φέτα πορτοκαλιού.",
            en: "Aperol, prosecco, soda, orange slice.",
            tr: "Aperol, prosecco, soda, portakal dilimi.",
          },
          photoUrl: "/assets/APEROL SPRITZ.avif",
          allergens: ["sulphites"],
          vegan: true,
        },
        {
          title: {
            el: "CAMPARI SPRITZ",
            en: "CAMPARI SPRITZ",
            tr: "CAMPARI SPRITZ",
          },
          price: 8.5,
          description: {
            el: "Campari, prosecco, σόδα, φέτα πορτοκαλιού.",
            en: "Campari, prosecco, soda, orange slice.",
            tr: "Campari, prosecco, soda, portakal dilimi.",
          },
          photoUrl: "/assets/CAMPARI SPRITZ.avif",
          allergens: ["sulphites"],
          vegan: true,
        },
      ],
    },
  ],
};
export const foodMenu = {
  categoryTitle: {
    el: "ΦΑΓΗΤΑ",
    en: "FOOD",
    tr: "YEMEKLER",
  },
  subCategories: [
    {
      subTitle: {
        el: "SNACKS & SANDWICH",
        en: "SNACKS & SANDWICH",
        tr: "ATIŞTIRMALIKLAR",
      },
      items: [
        {
          title: {
            el: "ΤΟΣΤ Η ΣΑΝΤΟΥΙΤΣ",
            en: "TOAST OR SANDWICH",
            tr: "TOST VEYA SANDVİÇ",
          },
          price: "2.00€ / 2.5€",
          flavors: {
            el: ["Ζαμπόν - Τυρί", "Γαλοπούλα - Τυρί"],
            en: ["Ham - Cheese", "Turkey - Cheese"],
            tr: ["Jambon - Peynir", "Hindi - Peynir"],
          },
          description: {
            el: "Περιλαμβάνει: ντομάτα, κέτσαπ, μουστάρδα, μαγιονέζα",
            en: "Includes: tomato, ketchup, mustard, mayo",
            tr: "İçindekiler: domates, ketçap, hardal, mayonez",
          },
          photoUrl: "/assets/TOAST OR SANDWICH.avif",
          allergens: ["gluten", "milk", "eggs", "mustard"],
        },
        {
          title: {
            el: "ΣΑΝΤΟΥΙΤΣ ΧΩΡΙΑΤΙΚΟ",
            en: "GREEK VILLAGE SANDWICH",
            tr: "YUNAN SANDVİÇİ",
          },
          price: 4,
          description: {
            el: "Φέτα, ντομάτα, αγγούρι, ελιές, ρίγανη, λάδι",
            en: "Feta cheese, tomato, cucumber, olives, oregano, olive oil",
            tr: "Beyaz peynir, domates, salatalık, zeytin, kekik, zeytinyağı",
          },
          photoUrl: "/assets/GREEK VILLAGE SANDWICH.avif",
          allergens: ["gluten", "milk"],
          vegetarian: true,
        },
        {
          title: {
            el: "CLUB SANDWICH",
            en: "CLUB SANDWICH",
            tr: "CLUB SANDVİÇ",
          },
          price: 6,
          description: {
            el: "Τυρί, ζαμπόν, μπέικον, μαρούλι, ντομάτα, μαγιονέζα. Συνοδεύεται από φρέσκες πατάτες.",
            en: "Cheese, ham, bacon, lettuce, tomato, mayo. Served with fresh fries.",
            tr: "Peynir, jambon, pastırma, marul, domates, mayonez. Taze patates kızartması ile servis edilir.",
          },
          photoUrl: "/assets/CLUB SANDWICH.avif",
          allergens: ["gluten", "milk", "eggs", "mustard"],
        },
      ],
    },
    {
      subTitle: {
        el: "BURGERS & HOT DOGS",
        en: "BURGERS & HOT DOGS",
        tr: "BURGER VE HOT DOG",
      },
      items: [
        {
          title: {
            el: "BURGER CLASSIC",
            en: "CLASSIC BURGER",
            tr: "KLASİK BURGER",
          },
          price: 6.5,
          description: {
            el: "Μπιφτέκι, τυρί, μαρούλι, ντομάτα, κέτσαπ, μουστάρδα, πικλες, BBQ sauce. Συνοδεύεται από πατάτες.",
            en: "Beef patty, cheese, lettuce, tomato, ketchup, mustard, pickles, BBQ sauce. Served with fries.",
            tr: "Köfte, peynir, marul, domates, ketçap, hardal, turşu, Barbekü sos. Patates ile servis edilir.",
          },
          featured: true,
          photoUrl: "/assets/CLASSIC BURGER.avif",
          allergens: ["gluten", "milk", "eggs", "mustard"],
        },
        {
          title: {
            el: "HOT DOG CLASSIC",
            en: "CLASSIC HOT DOG",
            tr: "KLASİK HOT DOG",
          },
          price: 3,
          description: {
            el: "Κέτσαπ, μουστάρδα",
            en: "Ketchup, mustard",
            tr: "Ketçap, hardal",
          },
          photoUrl: "/assets/CLASSIC HOT DOG.avif",
          allergens: ["gluten", "mustard"],
        },
        {
          title: {
            el: "HOT DOG SPECIAL",
            en: "SPECIAL HOT DOG",
            tr: "ÖZEL HOT DOG",
          },
          price: 4.5,
          description: {
            el: "Cheddar, BBQ sauce, πίκλες, κρεμμύδι",
            en: "Cheddar, BBQ sauce, pickles, onion",
            tr: "Cheddar, Barbekü sos, turşu, soğan",
          },
          photoUrl: "/assets/SPECIAL HOT DOG.avif",
          allergens: ["gluten", "milk", "mustard"],
        },
      ],
    },
    {
      subTitle: { el: "ΜΕΡΙΔΕΣ", en: "PLATES", tr: "TABAKLAR" },
      items: [
        {
          title: {
            el: "ΚΟΤΟΜΠΟΥΚΙΕΣ ΜΕΡΙΔΑ",
            en: "CHICKEN NUGGETS PLATE",
            tr: "TAVUK NUGGET TABAĞI",
          },
          price: 7.0,
          description: {
            el: "Κλασικές κοτομπουκιές με φρέσκες πατάτες",
            en: "Classic chicken nuggets with fresh fries",
            tr: "Taze patates kızartması ile klasik tavuk nugget",
          },
          photoUrl: "/assets/CHICKEN NUGGETS PLATE.avif",
          allergens: ["gluten", "eggs", "milk"],
        },
        {
          title: {
            el: "ΚΟΤΟΜΠΟΥΚΙΕΣ PHILADELPHIA",
            en: "CHICKEN NUGGETS PHILADELPHIA",
            tr: "PHILADELPHIA NUGGET",
          },
          price: 7.5,
          description: {
            el: "Γεμιστές με Philadelphia, συνοδεύονται από φρέσκες πατάτες",
            en: "Filled with Philadelphia cheese, served with fresh fries",
            tr: "Philadelphia peyniri dolgulu, taze patates kızartması ile",
          },
          photoUrl: "/assets/CHICKEN NUGGETS PHILADELPHIA.avif",
          allergens: ["gluten", "eggs", "milk"],
        },
        {
          title: {
            el: "ΠΑΤΑΤΕΣ ΤΗΓΑΝΗΤΕΣ",
            en: "FRENCH FRIES",
            tr: "PATATES KIZARTMASI",
          },
          price: 3.5,
          description: {
            el: "Φρέσκες τηγανητές πατάτες",
            en: "Freshly cut fries",
            tr: "Taze kesilmiş patates",
          },
          photoUrl: "/assets/FRENCH FRIES.avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: {
        el: "ΣΑΛΑΤΕΣ & ΟΡΕΚΤΙΚΑ",
        en: "SALADS & STARTERS",
        tr: "SALATALAR VE MEZELER",
      },
      items: [
        {
          title: { el: "ΧΩΡΙΑΤΙΚΗ", en: "GREEK SALAD", tr: "YUNAN SALATASI" },
          price: 6,
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/GREEK SALAD.avif",
          allergens: ["milk"],
          vegetarian: true,
        },
        {
          title: { el: "ΝΤΑΚΟΣ", en: "DAKOS SALAD", tr: "DAKOS" },
          price: 5,
          description: {
            el: "Κρητικό παξιμάδι, ντομάτα, φέτα, κάπαρη",
            en: "Cretan rusk, tomato, feta, capers",
            tr: "Girit peksimeti, domates, beyaz peynir",
          },
          photoUrl: "/assets/DAKOS SALAD.avif",
          allergens: ["gluten", "milk"],
          vegetarian: true,
        },
        {
          title: { el: "CHEF SALAD", en: "CHEF SALAD", tr: "ŞEFİN SALATASI" },
          price: 6,
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/CHEF SALAD.avif",
          allergens: ["milk", "eggs"],
        },
        {
          title: { el: "ΤΖΑΤΖΙΚΙ", en: "TZATZIKI", tr: "CACIK" },
          price: 3,
          description: { el: "Χειροποίητο", en: "Handmade", tr: "El yapımı" },
          photoUrl: "/assets/TZATZIKI.avif",
          allergens: ["milk"],
          vegetarian: true,
        },
        {
          title: {
            el: "ΦΡΟΥΤΟΣΑΛΑΤΑ",
            en: "FRUIT SALAD",
            tr: "MEYVE SALATASI",
          },
          price: 4,
          description: {
            el: "Με φρούτα εποχής",
            en: "With seasonal fruits",
            tr: "Mevsim meyveleri ile",
          },
          photoUrl: "/assets/FRUIT SALAD.avif",
          vegan: true,
        },
      ],
    },
    {
      subTitle: {
        el: "ΨΗΣΤΑΡΙΑ (ΤΕΜΑΧΙΑ)",
        en: "GRILL (PER PIECE)",
        tr: "IZGARA (ADET)",
      },
      items: [
        {
          title: { el: "ΣΟΥΒΛΑΚΙ ΧΟΙΡΙΝΟ", en: "PORK SKEWER", tr: "DOMUZ ŞİŞ" },
          price: 2.2,
          description: { el: "Τεμάχιο", en: "Per piece", tr: "Adet" },
          photoUrl: "/assets/PORK SKEWER.avif",
          allergens: ["mustard"],
        },
        {
          title: {
            el: "ΣΟΥΒΛΑΚΙ ΚΟΤΟΠΟΥΛΟ",
            en: "CHICKEN SKEWER",
            tr: "TAVUK ŞİŞ",
          },
          price: 2.5,
          description: { el: "Τεμάχιο", en: "Per piece", tr: "Adet" },
          allergens: ["mustard"],
          photoUrl: "/assets/CHICKEN SKEWER.avif",
        },
        {
          title: { el: "ΜΠΙΦΤΕΚΙ", en: "BEEF PATTY", tr: "KÖFTE" },
          price: 2.5,
          description: { el: "Τεμάχιο", en: "Per piece", tr: "Adet" },
          photoUrl: "/assets/BEEF PATTY.avif",
          allergens: ["gluten", "eggs"],
        },
        {
          title: { el: "ΚΕΜΠΑΠ", en: "KEBAB", tr: "KEBAP" },
          price: 2.5,
          description: { el: "Τεμάχιο", en: "Per piece", tr: "Adet" },
          photoUrl: "/assets/KEBAB.avif",
          allergens: ["gluten", "eggs"],
        },
        {
          title: {
            el: "ΛΟΥΚΑΝΙΚΟ ΧΩΡΙΑΤΙΚΟ",
            en: "TRADITIONAL SAUSAGE",
            tr: "KÖY SUCUĞU",
          },
          price: 2.5,
          description: { el: "Τεμάχιο", en: "Per piece", tr: "Adet" },
          photoUrl: "/assets/TRADITIONAL SAUSAGE.avif",
          allergens: ["mustard"],
        },
        {
          title: { el: "ΠΙΤΑ", en: "PITA BREAD", tr: "PİTA EKMEĞİ" },
          price: 0.5,
          description: { el: "Τεμάχιο", en: "Per piece", tr: "Adet" },
          photoUrl: "/assets/PITA BREAD.avif",
          allergens: ["gluten"],
          vegan: true,
        },
      ],
    },
  ],
};
