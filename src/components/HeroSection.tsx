import { Icon } from "lucide-react";
import { watermelon } from "@lucide/lab";
import { Heart } from "lucide-react";
interface HeroProps {
  lang: string;
  setLang: (lang: "el" | "en" | "tr") => void;
  languages: readonly { code: string; label: string }[];
}

export default function HeroSection({ lang, setLang, languages }: HeroProps) {
  return (
    <header className="bg-watermelon-600 pt-16 pb-20 px-6 text-center rounded-b-[3.5rem] shadow-2xl relative overflow-hidden">
      <div className="absolute -top-10 -right-10 opacity-10 w-40 h-40 bg-white rounded-full pointer-events-none" />
      <Icon
        iconNode={watermelon}
        size={100}
        strokeWidth={3}
        absoluteStrokeWidth
        color="white"
        className="absolute top-2 left-0 md:left-10 z-20 rotate-110 p-2 md:p-0"
      />
      <h1 className="text-white text-7xl font-display drop-shadow-lg mb-2 z-20">
        To Καρπούζι
      </h1>
      <div className="flex justify-center items-center gap-2">
        <p className="text-sand-50 font-body italic text-lg opacity-90 tracking-wide z-20">
          η καντίνα μας, το στέκη σας!{" "}
        </p>
        <Heart
          size={50}
          strokeWidth={2}
          absoluteStrokeWidth
          color="white"
          className="rotate-20 p-1"
        />
      </div>
      <Icon
        iconNode={watermelon}
        size={100}
        strokeWidth={3}
        absoluteStrokeWidth
        color="white"
        className="absolute bottom-10 right-0 md:right-10 z-20"
      />
      <div className="flex justify-center gap-4 mt-10 relative z-20">
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code as "el" | "en" | "tr")}
            className={`w-14 h-14 rounded-full font-display text-lg transition-all border-2 flex items-center justify-center shadow-md
              ${
                lang === l.code
                  ? "bg-sand-200 text-watermelon-700 border-white scale-110 shadow-xl"
                  : "bg-white/10 text-white border-white/30 hover:bg-white/20"
              }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    </header>
  );
}
