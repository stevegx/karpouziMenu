import { Icon } from "lucide-react";
import { watermelon } from "@lucide/lab";

interface HeroProps {
  lang: string;
  setLang: (lang: "el" | "en" | "tr") => void;
  languages: readonly { code: string; label: string }[];
}

export default function HeroSection({ lang, setLang, languages }: HeroProps) {
  return (
    <header className="relative overflow-hidden text-center pt-14 pb-20 px-6 rounded-b-[2.5rem] bg-linear-[160deg,#c92e2e_0%,#e63939_45%,#c0392b_100%]">
      {/* Background Blobs */}
      <div className="absolute pointer-events-none -top-12 -right-12 w-48 h-48 bg-white/8 rounded-full" />
      <div className="absolute pointer-events-none -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full" />

      {/* Watermelon icons */}
      <Icon
        iconNode={watermelon}
        size={90}
        strokeWidth={2.5}
        absoluteStrokeWidth
        color="rgba(255,255,255,0.9)"
        className="absolute z-20 top-2 left-2 rotate-120"
        aria-hidden="true"
      />
      <Icon
        iconNode={watermelon}
        size={80}
        strokeWidth={2.5}
        absoluteStrokeWidth
        color="rgba(255,255,255,0.7)"
        className="absolute z-20 bottom-6 right-3"
        aria-hidden="true"
      />

      {/* Logo & tagline */}
      <div className="relative z-20">
        <h1 className="text-white drop-shadow-lg ml-5 font-title leading-[1.1] mb-2 text-[clamp(3rem,15vw,5rem)]">
          Το Καρπούζι
        </h1>
        <p className="font-body italic text-[1.1rem] text-white/92 tracking-wide mb-7">
          {lang === "el"
            ? "η καντίνα μας, το στέκι σας!"
            : lang === "en"
              ? "our canteen, your hangout spot!"
              : "kantinimiz, mekanınız!"}
        </p>

        {/* Language buttons */}
        <div
          role="group"
          aria-label={lang === "el" ? "Επιλογή γλώσσας" : "Language selection"}
          className="flex justify-center gap-3"
        >
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code as "el" | "en" | "tr")}
              aria-label={`${l.label} - ${l.code === "el" ? "Ελληνικά" : l.code === "en" ? "English" : "Türkçe"}`}
              aria-pressed={lang === l.code}
              className={`
                w-13 h-13 rounded-full font-title text-base cursor-pointer transition-all duration-200
                ${
                  lang === l.code
                    ? "bg-white text-watermelon-700 border-[2.5px] border-white font-bold scale-110 shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    : "bg-white/12 text-white border-2 border-white/40 font-semibold scale-100"
                }
              `}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
