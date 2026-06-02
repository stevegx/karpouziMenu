import {
  Coffee as CoffeeIcon,
  CupSoda,
  Beer,
  Martini,
  Utensils,
  Milk,
  type LucideIcon,
} from "lucide-react";

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
            el: "Κανονικό (2.90€) | Τετραπλό (4.00€). Διαθέσιμο Decaf.",
            en: "Regular (2.90€) | Quad (4.00€). Decaf available.",
            tr: "Normal (2.90€) | Quad (4.00€). Decaf mevcuttur.",
          },
          price: 2.9,
          featured: true,
          photoUrl: "/assets/FREDDO ESPRESSO.jpg",
        },
        {
          title: {
            el: "FREDDO CAPPUCCINO",
            en: "FREDDO CAPPUCCINO",
            tr: "FREDDO CAPPUCCINO",
          },
          description: {
            el: "Κανονικό (2.90€) | Τετραπλό (4.00€). Decaf.",
            en: "Regular | Quad. Decaf.",
            tr: "Normal | Quad. Decaf.",
          },
          price: 2.9,
          photoUrl: "/assets/FREDDO CAPPUCCINO.jpg",
        },
        {
          title: { el: "ΦΡΑΠΕ", en: "FRAPPE", tr: "FRAPPE" },
          description: {
            el: "Διαθέσιμο και σε Decaf.",
            en: "Also available in Decaf.",
            tr: "Decaf mevcuttur.",
          },
          price: 2.9,
          photoUrl: "/assets/FRAPPE.jpg",
        },
        {
          title: { el: "LATTE ΚΡΥΟ", en: "ICED LATTE", tr: "BUZLU LATTE" },
          description: {
            el: "Με πλούσιο γάλα. Διαθέσιμο Decaf.",
            en: "With milk. Decaf available.",
            tr: "Sütlü. Decaf mevcuttur.",
          },
          price: 2.9,
          photoUrl: "/assets/ICED LATTE.jpg",
        },
        {
          title: { el: "FREDDUCCINO", en: "FREDDUCCINO", tr: "FREDDUCCINO" },
          description: {
            el: "Blended ρόφημα καφέ.",
            en: "Blended coffee drink.",
            tr: "Buzlu harmanlanmış kahve.",
          },
          price: 4.0,
          photoUrl: "/assets/FREDDUCCINO.jpg",
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
            el: "Μονό (2.90€) | Διπλό (3.90€). Decaf.",
            en: "Single | Double. Decaf.",
            tr: "Tek | Çift. Decaf.",
          },
          price: 2.9,
          photoUrl: "/assets/ESPRESSO.jpg",
        },
        {
          title: { el: "CAPPUCCINO", en: "CAPPUCCINO", tr: "CAPPUCCINO" },
          description: {
            el: "Μονό (2.90€) | Διπλό (3.90€). Decaf.",
            en: "Single | Double. Decaf.",
            tr: "Tek | Çift. Decaf.",
          },
          price: 2.9,
          photoUrl: "/assets/cappuccino.jpg",
        },
        {
          title: {
            el: "ΕΛΛΗΝΙΚΟΣ ΚΑΦΕΣ",
            en: "GREEK COFFEE",
            tr: "YUNAN KAHVESI",
          },
          description: {
            el: "Μονός (2.00€) | Διπλός (3.00€). Decaf.",
            en: "Single | Double. Decaf.",
            tr: "Tek | Çift. Decaf.",
          },
          price: 2.0,
          photoUrl: "/assets/GREEK COFFEE.jpg",
        },
        {
          title: { el: "NESCAFE", en: "NESCAFE", tr: "NESCAFE" },
          description: {
            el: "Ζεστός στιγμιαίος. Διαθέσιμο Decaf.",
            en: "Hot instant. Decaf available.",
            tr: "Sıcak hazır kahve. Decaf.",
          },
          price: 2.9,
          photoUrl: "/assets/NESCAFE.jpg",
        },
        {
          title: { el: "MACCHIATO", en: "MACCHIATO", tr: "MACCHIATO" },
          description: {
            el: "Διπλό (3.90€). Διαθέσιμο και σε Decaf.",
            en: "Double (3.90€). Also available in Decaf.",
            tr: "Çift (3.90€). Decaf seçeneği mevcuttur.",
          },
          price: 3.9,
          photoUrl: "/assets/MACCHIATO.jpg",
        },
        {
          title: { el: "LUNGO", en: "LUNGO", tr: "LUNGO" },
          description: {
            el: "Διπλό (3.90€). Διαθέσιμο και σε Decaf.",
            en: "Double (3.90€). Also available in Decaf.",
            tr: "Çift (3.90€). Decaf seçeneği mevcuttur.",
          },
          price: 3.9,
          photoUrl: "/assets/LUNGO.jpg",
        },
        {
          title: { el: "AMERICANO", en: "AMERICANO", tr: "AMERICANO" },
          description: {
            el: "Espresso με ζεστό νερό. Decaf.",
            en: "Espresso with hot water. Decaf.",
            tr: "Espresso sıcak su. Decaf.",
          },
          price: 2.9,
          photoUrl: "/assets/AMERICANO.jpg",
        },
        {
          title: { el: "ΓΑΛΛΙΚΟΣ", en: "FILTER COFFEE", tr: "FİLTRE KAHVE" },
          description: {
            el: "Αρωματικός καφές φίλτρου. Decaf.",
            en: "Filter coffee. Decaf.",
            tr: "Filtre kahve. Decaf.",
          },
          price: 2.9,
          photoUrl: "/assets/FILTER COFFEE.jpg",
        },
      ],
    },
    {
      subTitle: { el: "ΣΟΚΟΛΑΤΕΣ", en: "CHOCOLATES", tr: "ÇΙΚOLATALAR" },
      items: [
        {
          title: { el: "ΣΟΚΟΛΑΤΑ", en: "CHOCOLATE", tr: "ÇİKOLATA" },
          description: {
            el: "Ζεστή ή Κρύα.",
            en: "Hot or Iced.",
            tr: "Sıcak veya Soğuk.",
          },
          price: 3.2,
          photoUrl: "/assets/CHOCOLATE.jpg",
        },
        {
          title: { el: "MOCHACCINO", en: "MOCHACCINO", tr: "MOCHACCINO" },
          description: {
            el: "Espresso και σοκολάτα. Ζεστό ή Κρύο.",
            en: "Espresso and chocolate. Hot or Iced.",
            tr: "Espresso ve çikolata. Sıcak/Soğuk.",
          },
          price: 3.5,
          photoUrl: "/assets/MOCHACCINO.jpg",
        },
      ],
    },
  ],
};

export const Drinks = {
  categoryTitle: { el: "ΡΟΦΗΜΑΤΑ", en: "DRINKS", tr: "İÇECEKLER" },
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
          price: "2.50 / 3.50",
          flavors: {
            el: ["Λεμόνι", "Ροδάκινο", "Green", "Raspberry", "Χωρίς Ζάχαρη"],
            en: ["Lemon", "Peach", "Green", "Raspberry", "Zero Sugar"],
            tr: ["Limon", "Şeftali", "Yeşil Çay", "Ahududu", "Şekersiz"],
          },
          photoUrl: "/assets/LIPTON ICE TEA.jpg",
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
            tr: "ÇAY (SİYAH / YEΣΙΛ)",
          },
          description: {
            el: "Ζεστό αρωματικό τσάι.",
            en: "Hot aromatic tea.",
            tr: "Sıcak aromatik çay.",
          },
          price: 2.9,
          photoUrl: "/assets/TEA HOT.jpg",
        },
        {
          title: { el: "ΧΑΜΟΜΗΛΙ", en: "CHAMOMILE", tr: "PAPATYA ÇAYI" },
          description: {
            el: "Φυσικό χαλαρωτικό ρόφημα.",
            en: "Natural relaxing herbal drink.",
            tr: "Doğal rahatlatıcı bitki çayı.",
          },
          price: 2.9,
          photoUrl: "/assets/CHAMOMILE.jpg",
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
          price: 4.0,
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
          photoUrl: "/assets/SLUSHIES.jpg",
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
          photoUrl: "/assets/GIA GIA MAS.png",
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
          price: 3.5,
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
          photoUrl: "/assets/ALOE VERA DRINK.jpg",
        },
      ],
    },
  ],
};

export const softDrinks = {
  categoryTitle: {
    el: "ΑΝΑΨΥΚΤΙΚΑ & ΧΥΜΟΙ",
    en: "SOFT DRINKS & JUICES",
    tr: "MEŞRUBAT VE MEYVE SULARI",
  },
  subCategories: [
    {
      subTitle: { el: "ΑΝΑΨΥΚΤΙΚΑ", en: "SOFT DRINKS", tr: "GAZLI İÇECEKLER" },
      items: [
        {
          title: { el: "COCA COLA", en: "COCA COLA", tr: "COCA COLA" },
          price: 2.5,
          flavors: {
            el: ["Classic", "Zero", "Light"],
            en: ["Classic", "Zero", "Light"],
            tr: ["Classic", "Zero", "Light"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/COCA COLA.jpg",
        },
        {
          title: { el: "PEPSI 330ml", en: "PEPSI 330ml", tr: "PEPSI 330ml" },
          price: 2.5,
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/PEPSI 330ml.jpg",
        },
        {
          title: { el: "FANTA", en: "FANTA", tr: "FANTA" },
          price: 2.5,
          flavors: {
            el: ["Πορτοκαλάδα", "Λεμονάδα", "Μπλε"],
            en: ["Orangeade", "Lemonade", "Blue"],
            tr: ["Portakallı", "Limonata", "Mavi"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/FANTA.jpg",
        },
        {
          title: { el: "ΗΒΗ", en: "IVI", tr: "IVI" },
          price: 2.5,
          flavors: {
            el: ["Πορτοκαλάδα", "Λεμονάδα", "Μπλε Πορτοκαλάδα"],
            en: ["Orangeade", "Lemonade", "Blue Orangeade"],
            tr: ["Portakallı", "Limonata", "Mavi Portakallı"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/IVI.jpg",
        },
        {
          title: { el: "SPRITE", en: "SPRITE", tr: "SPRITE" },
          price: 2.5,
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/SPRITE.jpg",
        },
        {
          title: { el: "7UP", en: "7UP", tr: "7UP" },
          price: 2.5,
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/7UP.jpg",
        },
        {
          title: {
            el: "SCHWEPPES 330ml",
            en: "SCHWEPPES 330ml",
            tr: "SCHWEPPES 330ml",
          },
          price: 2.8,
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
          photoUrl: "/assets/SCHWEPPES 330ml.jpg",
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
          photoUrl: "/assets/FRESH ORANGE JUICE.jpg",
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
          photoUrl: "/assets/FRESH MIXED JUICE.jpg",
        },
        {
          title: {
            el: "ΧΥΜΟΙ (250ml)",
            en: "JUICES (250ml)",
            tr: "MEYVE SULARI (250ml)",
          },
          price: 2.2,
          flavors: {
            el: ["Αναμεικτος", "Πορτοκάλι", "Βύσσινο", "Ροδάκινο"],
            en: ["Mixed", "Orange", "Sour Cherry", "Peach"],
            tr: ["Karışık", "Portakal", "Vişne", "Şeftali"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/JUICES (250ml).jpg",
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
          price: 2.8,
          flavors: {
            el: ["Λεμόνι & Λουίζα", "Ροδάκινο & Ιβίσκος"],
            en: ["Lemon & Verbena", "Peach & Hibiscus"],
            tr: ["Limon ve Mine Çiçeği", "Şeftali ve Hibiskus"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/FUZE TEA 330ml.jpg",
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
          price: "0.50 / 1.50",
          description: {
            el: "500ml / 1.5lt",
            en: "500ml / 1.5lt",
            tr: "500ml / 1.5lt",
          },
          photoUrl: "/assets/NATURAL MINERAL WATER.jpg",
        },
        {
          title: {
            el: "ΑΝΘΡΑΚΟΥΧΟ ΝΕΡΟ",
            en: "SPARKLING WATER",
            tr: "MADEN SUYU",
          },
          price: 2.5,
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/SPARKLING WATER.jpg",
        },
      ],
    },
  ],
};
export const Alcohol = {
  categoryTitle: {
    el: "ΑΛΚΟΟΛΟΥΧΑ",
    en: "ALCOHOLIC DRINKS",
    tr: "ALKOLLÜ İÇECEKLER",
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
          price: 4.0,
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
          photoUrl: "/assets/LAGER & CLASSIC.jpg",
        },
        {
          title: {
            el: "PILSNER & PREMIUM",
            en: "PILSNER & PREMIUM",
            tr: "PILSNER & PREMIUM",
          },
          price: 4.5,
          flavors: {
            el: ["Mamos", "Kaiser", "Άλφα Αλάτι"],
            en: ["Mamos", "Kaiser", "Alfa Salt"],
            tr: ["Mamos", "Kaiser", "Alfa Salt"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/PILSNER & PREMIUM.jpg",
        },
        {
          title: {
            el: "SPECIAL & LOCAL BREWS",
            en: "SPECIAL & LOCAL BREWS",
            tr: "ÖZEL BİRALAR",
          },
          price: 5.0,
          flavors: {
            el: ["Sedusa", "Nissiopi", "Νήσος", "Fix Dark"],
            en: ["Sedusa", "Nissiopi", "Nisos", "Fix Dark"],
            tr: ["Sedusa", "Nissiopi", "Nisos", "Fix Dark"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/SPECIAL & LOCAL BREWS.jpg",
        },
        {
          title: {
            el: "ΧΩΡΙΣ ΑΛΚΟΟΛ / RADLER",
            en: "ALCOHOL FREE / RADLER",
            tr: "ALKOLSÜZ / RADLER",
          },
          price: 4.0,
          flavors: {
            el: ["Άλφα Άνευ", "Fix Άνευ", "Radler", "Bundaberg"],
            en: ["Alfa Free", "Fix Free", "Radler", "Bundaberg"],
            tr: ["Alfa Free", "Fix Free", "Radler", "Bundaberg"],
          },
          description: { el: "", en: "", tr: "" },
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
          price: 5.0,
          flavors: {
            el: ["Καρπούζι", "Λεμόνι", "Πορτοκάλι"],
            en: ["Watermelon", "Lemon", "Orange"],
            tr: ["Karpuz", "Limon", "Portakal"],
          },
          description: { el: "", en: "", tr: "" },
        },
        {
          title: {
            el: "MIXED SPIRITS",
            en: "MIXED SPIRITS",
            tr: "KARIŞIK İÇKİLER",
          },
          price: 5.5,
          flavors: {
            el: ["Gordon's Space", "Smirnoff Ice"],
            en: ["Gordon's Space", "Smirnoff Ice"],
            tr: ["Gordon's Space", "Smirnoff Ice"],
          },
          description: { el: "", en: "", tr: "" },
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
          price: "4.0 / 7.0",
          flavors: {
            el: ["Λευκό Ξηρό", "Ημιγλυκό Κόκκινο", "Κόκκινο Ξηρό", "Ροζέ"],
            en: ["Dry White", "Semi-sweet Red", "Dry Red", "Rosé"],
            tr: ["Sek Beyaz", "Yarı Tatlı Kırmızı", "Sek Kırmızı", "Roze"],
          },
          description: { el: "", en: "", tr: "" },
        },
        {
          title: { el: "ΡΕΤΣΙΝΑ", en: "RETSINA", tr: "RETSİNA" },
          price: 4.5,
          flavors: {
            el: ["Μαλαματίνα", "Κουρτάκη"],
            en: ["Malamatina", "Kourtaki"],
            tr: ["Malamatina", "Kourtaki"],
          },
          description: { el: "", en: "", tr: "" },
        },
      ],
    },
    {
      subTitle: {
        el: "ΑΠΟΣΤΑΓΜΑΤΑ",
        en: "GREEK SPIRITS",
        tr: "YUNAN İÇKİLERΙ",
      },
      items: [
        {
          title: {
            el: "ΟΥΖΟ / ΤΣΙΠΟΥΡΟ",
            en: "OUZO / TSIPOURO",
            tr: "UZO / ÇİPURO",
          },
          price: "5.0 / 8.0",
          flavors: {
            el: ["Ούζο 50ml", "Ούζο 200ml", "Τσίπουρο 200ml"],
            en: ["Ouzo 50ml", "Ouzo 200ml", "Tsipouro 200ml"],
            tr: ["Uzo 50ml", "Uzo 200ml", "Çipuro 200ml"],
          },
          description: { el: "", en: "", tr: "" },
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
            tr: "STANDART İÇKİLER",
          },
          price: 7.0,
          flavors: {
            el: ["Βότκα", "Τζιν", "Ρούμι", "Ουίσκι", "Τεκίλα"],
            en: ["Vodka", "Gin", "Rum", "Whiskey", "Tequila"],
            tr: ["Votka", "Cin", "Romatiz", "Viski", "Tekila"],
          },
          description: { el: "", en: "", tr: "" },
        },
        {
          title: {
            el: "LIQUEURS & APERITIFS",
            en: "LIQUEURS & APERITIFS",
            tr: "LIKÖR VE APERATİF",
          },
          price: 7.0,
          flavors: {
            el: ["Campari", "Aperol", "Baileys"],
            en: ["Campari", "Aperol", "Baileys"],
            tr: ["Campari", "Aperol", "Baileys"],
          },
          description: { el: "", en: "", tr: "" },
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
          description: { el: "", en: "", tr: "" },
          featured: true,
          photoUrl: "/assets/MOJITO.jpg",
        },
        {
          title: { el: "MAI TAI", en: "MAI TAI", tr: "MAI TAI" },
          price: 9.0,
          description: {
            el: "Blend of rums, orgeat, lime, peach",
            en: "Blend of rums, orgeat, lime, peach",
            tr: "Romatiz, orgeat, lime",
          },
          featured: true,
          photoUrl: "/assets/MAI TAI.jpg",
        },
        {
          title: { el: "MARGARITA", en: "MARGARITA", tr: "MARGARITA" },
          price: 8.5,
          flavors: {
            el: ["Classic", "Frozen Φράουλα", "Frozen Καρπούζι"],
            en: ["Classic", "Frozen Strawberry", "Frozen Watermelon"],
            tr: ["Klasik", "Frozen Çilek", "Frozen Karpuz"],
          },
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/MARGARITA.jpg",
        },
        {
          title: { el: "PINA COLADA", en: "PINA COLADA", tr: "PINA COLADA" },
          price: 8.5,
          description: {
            el: "Rum, coconut, pineapple juice",
            en: "Rum, coconut, pineapple juice",
            tr: "Romatiz, hindistan cevizi, ananas suyu",
          },
          photoUrl: "/assets/PINA COLADA.jpg",
        },
        {
          title: { el: "PALOMA", en: "PALOMA", tr: "PALOMA" },
          price: 9.0,
          description: {
            el: "Tequila, lime, pink grapefruit soda",
            en: "Tequila, lime, pink grapefruit soda",
            tr: "Tekila, lime, greyfurt soda",
          },
          photoUrl: "/assets/PALOMA.jpg",
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
          price: 9.0,
          description: {
            el: "Gin, Campari, Sweet Vermouth",
            en: "Gin, Campari, Sweet Vermouth",
            tr: "Cin, Campari, Vermut",
          },
          photoUrl: "/assets/NEGRONI.jpg",
        },
        {
          title: { el: "DAIQUIRI", en: "DAIQUIRI", tr: "DAIQUIRI" },
          price: 8.5,
          description: {
            el: "Rum, lime, simple syrup",
            en: "Rum, lime, simple syrup",
            tr: "Romatiz, lime, şurup",
          },
          photoUrl: "/assets/DAIQUIRI.jpg",
        },
        {
          title: { el: "COSMOPOLITAN", en: "COSMOPOLITAN", tr: "COSMOPOLITAN" },
          price: 8.5,
          description: {
            el: "Vodka, triple sec, cranberry, lime",
            en: "Vodka, triple sec, cranberry, lime",
            tr: "Votka, triple sec, yaban mersini, lime",
          },
          photoUrl: "/assets/COSMOPOLITAN.jpg",
        },
        {
          title: { el: "CUBA LIBRE", en: "CUBA LIBRE", tr: "CUBA LIBRE" },
          price: 8.5,
          description: {
            el: "Rum, cola, lime",
            en: "Rum, cola, lime",
            tr: "Romatiz, kola, lime",
          },
          photoUrl: "/assets/CUBA LIBRE.jpg",
        },
        {
          title: {
            el: "SEX ON THE BEACH",
            en: "SEX ON THE BEACH",
            tr: "SEX ON THE BEACH",
          },
          price: 8.5,
          description: {
            el: "Vodka, peach schnapps, orange, cranberry",
            en: "Vodka, peach schnapps, orange, cranberry",
            tr: "Votka, şeftali, portakal, yaban mersini",
          },
          photoUrl: "/assets/SEX ON THE BEACH.jpg",
        },
      ],
    },
    {
      subTitle: {
        el: "SOUR & MUDDLED",
        en: "SOUR & MUDDLED",
        tr: "EKŞΙ VE EZΙLMİŞ",
      },
      items: [
        {
          title: { el: "CAIPIRINHA", en: "CAIPIRINHA", tr: "CAIPIRINHA" },
          price: 8.5,
          description: {
            el: "Cachaça, lime, sugar",
            en: "Cachaça, lime, sugar",
            tr: "Cachaça, lime, şeker",
          },
          photoUrl: "/assets/CAIPIRINHA.jpg",
        },
        {
          title: { el: "CAIPIROSCA", en: "CAIPIROSCA", tr: "CAIPIROSCA" },
          price: 8.5,
          description: {
            el: "Vodka, lime, sugar",
            en: "Vodka, lime, sugar",
            tr: "Votka, lime, şeker",
          },
          photoUrl: "/assets/CAIPIROSCA.jpg",
        },
        {
          title: { el: "BRAMBLE", en: "BRAMBLE", tr: "BRAMBLE" },
          price: 9.0,
          description: {
            el: "Gin, lemon, blackberry liqueur",
            en: "Gin, lemon, blackberry liqueur",
            tr: "Cin, limon, böğürtlen likörü",
          },
          photoUrl: "/assets/BRAMBLE.jpg",
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
          price: 9.0,
          description: {
            el: "Whiskey, sweet vermouth, bitters",
            en: "Whiskey, sweet vermouth, bitters",
            tr: "Viski, tatlı vermut",
          },
          photoUrl: "/assets/MANHATTAN.jpg",
        },
        {
          title: {
            el: "WHISKEY HIGHBALL",
            en: "WHISKEY HIGHBALL",
            tr: "WHISKEY HIGHBALL",
          },
          price: 9.0,
          description: {
            el: "Whiskey, soda water, lemon",
            en: "Whiskey, soda water, lemon",
            tr: "Viski, soda, limon",
          },
          photoUrl: "/assets/WHISKEY HIGHBALL.jpg",
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
          price: 7.5,
          description: {
            el: "Aperol, prosecco, soda",
            en: "Aperol, prosecco, soda",
            tr: "Aperol, prosecco, soda",
          },
          photoUrl: "/assets/APEROL SPRITZ.jpg",
        },
        {
          title: {
            el: "CAMPARI SPRITZ",
            en: "CAMPARI SPRITZ",
            tr: "CAMPARI SPRITZ",
          },
          price: 7.5,
          description: {
            el: "Campari, prosecco, soda",
            en: "Campari, prosecco, soda",
            tr: "Campari, prosecco, soda",
          },
          photoUrl: "/assets/CAMPARI SPRITZ.jpg",
        },
      ],
    },
  ],
};
export const foodMenu = {
  categoryTitle: {
    el: "ΚΟΥΖΙΝΑ & ΦΑΓΗΤΟ",
    en: "KITCHEN & FOOD",
    tr: "MUTFAK VE YEMEK",
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
          price: 4.5,
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
          photoUrl: "/assets/TOAST OR SANDWICH.jpg",
        },
        {
          title: {
            el: "ΣΑΝΤΟΥΙΤΣ ΧΩΡΙΑΤΙΚΟ",
            en: "GREEK VILLAGE SANDWICH",
            tr: "YUNAN SANDVİÇİ",
          },
          price: 5.5,
          description: {
            el: "Φέτα, ντομάτα, αγγούρι, ελιές, ρίγανη, λάδι",
            en: "Feta cheese, tomato, cucumber, olives, oregano, olive oil",
            tr: "Beyaz peynir, domates, salatalık, zeytin, kekik, zeytinyağı",
          },
          photoUrl: "/assets/GREEK VILLAGE SANDWICH.jpg",
        },
        {
          title: {
            el: "CLUB SANDWICH",
            en: "CLUB SANDWICH",
            tr: "CLUB SANDVİÇ",
          },
          price: 8.5,
          description: {
            el: "Τυρί, ζαμπόν, μπέικον, μαρούλι, ντομάτα, μαγιονέζα. Συνοδεύεται από φρέσκες πατάτες.",
            en: "Cheese, ham, bacon, lettuce, tomato, mayo. Served with fresh fries.",
            tr: "Peynir, jambon, pastırma, marul, domates, mayonez. Taze patates kızartması ile servis edilir.",
          },
          photoUrl: "/assets/CLUB SANDWICH.jpg",
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
          price: 9.0,
          description: {
            el: "Μπιφτέκι, τυρί, μαρούλι, ντομάτα, κέτσαπ, μουστάρδα, πικλες, BBQ sauce. Συνοδεύεται από πατάτες.",
            en: "Beef patty, cheese, lettuce, tomato, ketchup, mustard, pickles, BBQ sauce. Served with fries.",
            tr: "Köfte, peynir, marul, domates, ketçap, hardal, turşu, Barbekü sos. Patates ile servis edilir.",
          },
          featured: true,
          photoUrl: "/assets/CLASSIC BURGER.jpg",
        },
        {
          title: {
            el: "HOT DOG CLASSIC",
            en: "CLASSIC HOT DOG",
            tr: "KLASİK HOT DOG",
          },
          price: 4.5,
          description: {
            el: "Κέτσαπ, μουστάρδα",
            en: "Ketchup, mustard",
            tr: "Ketçap, hardal",
          },
          photoUrl: "/assets/CLASSIC HOT DOG.jpg",
        },
        {
          title: {
            el: "HOT DOG SPECIAL",
            en: "SPECIAL HOT DOG",
            tr: "ÖZEL HOT DOG",
          },
          price: 6.0,
          description: {
            el: "Cheddar, BBQ sauce, πίκλες, κρεμμύδι",
            en: "Cheddar, BBQ sauce, pickles, onion",
            tr: "Cheddar, Barbekü sos, turşu, soğan",
          },
          photoUrl: "/assets/SPECIAL HOT DOG.jpg",
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
          price: 8.5,
          description: {
            el: "Κλασικές κοτομπουκιές με φρέσκες πατάτες",
            en: "Classic chicken nuggets with fresh fries",
            tr: "Taze patates kızartması ile klasik tavuk nugget",
          },
          photoUrl: "/assets/CHICKEN NUGGETS PLATE.jpg",
        },
        {
          title: {
            el: "ΚΟΤΟΜΠΟΥΚΙΕΣ PHILADELPHIA",
            en: "CHICKEN NUGGETS PHILADELPHIA",
            tr: "PHILADELPHIA NUGGET",
          },
          price: 9.5,
          description: {
            el: "Γεμιστές με Philadelphia, συνοδεύονται από φρέσκες πατάτες",
            en: "Filled with Philadelphia cheese, served with fresh fries",
            tr: "Philadelphia peyniri dolgulu, taze patates kızartması ile",
          },
          photoUrl: "/assets/CHICKEN NUGGETS PHILADELPHIA.jpg",
        },
        {
          title: {
            el: "ΠΑΤΑΤΕΣ ΤΗΓΑΝΗΤΕΣ",
            en: "FRENCH FRIES",
            tr: "PATATES KIZARTMASI",
          },
          price: 4.0,
          description: {
            el: "Φρέσκες τηγανητές πατάτες",
            en: "Freshly cut fries",
            tr: "Taze kesilmiş patates",
          },
          photoUrl: "/assets/FRENCH FRIES.jpg",
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
          price: 7.5,
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/GREEK SALAD.jpg",
        },
        {
          title: { el: "ΝΤΑΚΟΣ", en: "DAKOS SALAD", tr: "DAKOS" },
          price: 7.0,
          description: {
            el: "Κρητικό παξιμάδι, ντομάτα, φέτα, κάπαρη",
            en: "Cretan rusk, tomato, feta, capers",
            tr: "Girit peksimeti, domates, beyaz peynir",
          },
          photoUrl: "/assets/DAKOS SALAD.jpg",
        },
        {
          title: { el: "CHEF SALAD", en: "CHEF SALAD", tr: "ŞEFİN SALATASI" },
          price: 8.0,
          description: { el: "", en: "", tr: "" },
          photoUrl: "/assets/CHEF SALAD.jpg",
        },
        {
          title: { el: "ΤΖΑΤΖΙΚΙ", en: "TZATZIKI", tr: "CACIK" },
          price: 4.5,
          description: { el: "Χειροποίητο", en: "Handmade", tr: "El yapımı" },
          photoUrl: "/assets/TZATZIKI.jpg",
        },
        {
          title: {
            el: "ΦΡΟΥΤΟΣΑΛΑΤΑ",
            en: "FRUIT SALAD",
            tr: "MEYVE SALATASI",
          },
          price: 6.0,
          description: {
            el: "Με φρούτα εποχής",
            en: "With seasonal fruits",
            tr: "Mevsim meyveleri ile",
          },
          photoUrl: "/assets/FRUIT SALAD.jpg",
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
          photoUrl: "/assets/PORK SKEWER.jpg",
        },
        {
          title: {
            el: "ΣΟΥΒΛΑΚΙ ΚΟΤΟΠΟΥΛΟ",
            en: "CHICKEN SKEWER",
            tr: "TAVUK ŞİŞ",
          },
          price: 2.4,
          description: { el: "Τεμάχιο", en: "Per piece", tr: "Adet" },
        },
        {
          title: { el: "ΜΠΙΦΤΕΚΙ", en: "BEEF PATTY", tr: "KÖFTE" },
          price: 2.5,
          description: { el: "Τεμάχιο", en: "Per piece", tr: "Adet" },
          photoUrl: "/assets/BEEF PATTY.jpg",
        },
        {
          title: { el: "ΚΕΜΠΑΠ", en: "KEBAB", tr: "KEBAP" },
          price: 2.5,
          description: { el: "Τεμάχιο", en: "Per piece", tr: "Adet" },
          photoUrl: "/assets/KEBAB.jpg",
        },
        {
          title: {
            el: "ΛΟΥΚΑΝΙΚΟ ΧΩΡΙΑΤΙΚΟ",
            en: "TRADITIONAL SAUSAGE",
            tr: "KÖY SUCUĞU",
          },
          price: 2.5,
          description: { el: "Τεμάχιο", en: "Per piece", tr: "Adet" },
          photoUrl: "/assets/TRADITIONAL SAUSAGE.jpg",
        },
        {
          title: { el: "ΠΙΤΑ", en: "PITA BREAD", tr: "PİTA EKMEĞΙ" },
          price: 0.5,
          description: { el: "Τεμάχιο", en: "Per piece", tr: "Adet" },
          photoUrl: "/assets/PITA BREAD.jpg",
        },
      ],
    },
  ],
};
