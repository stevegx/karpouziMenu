import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import { StarIcon } from "lucide-react";

interface footerProps {
  lang: "el" | "en" | "tr";
}

export default function Footer({ lang }: footerProps) {
  return (
    <footer className="bg-seed text-white pt-10 px-6 pb-8 mt-6 flex flex-col items-center gap-5">
      {/* Rate us button */}
      <a
        href="https://www.google.com/search?..."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Αξιολόγησε μας στο Google"
        className="flex items-center gap-2 bg-watermelon-700/90 text-white py-[0.65rem] px-6 rounded-full no-underline font-title text-[0.95rem] font-bold tracking-wider  transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <span>
          {lang === "el"
            ? "ΑΞΙΟΛΟΓΗΣΕ ΜΑΣ"
            : lang === "tr"
              ? "BİZİ DEĞERLENDİRİN"
              : "RATE US"}
        </span>
        <div className="bg-white rounded-full p-[0.2rem] flex items-center justify-center">
          <StarIcon size={14} fill="#c92e2e" color="#c92e2e" />
        </div>
      </a>

      {/* Social links */}
      <div className="flex items-center gap-6">
        <a
          href="https://www.instagram.com/cantine_watermellon"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white/80 no-underline font-body text-[0.85rem] transition-colors hover:text-white"
        >
          <img src={instagram} alt="" aria-hidden="true" className="h-7 w-7" />
          Instagram
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61575732263648"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white/80 no-underline font-body text-[0.85rem] transition-colors hover:text-white"
        >
          <img src={facebook} alt="" aria-hidden="true" className="h-7 w-7" />
          Facebook
        </a>
      </div>

      {/* Logo & info */}
      <div className="text-center">
        <p className="font-title text-[1.6rem] font-bold text-watermelon-500 mb-1">
          🍉 {lang === "el" ? "To Καρπούζι" : "Karpouzi"}
        </p>
        <p className="font-body text-[0.85rem] text-white/70 italic mb-4">
          {lang === "el"
            ? "Η καντίνα μας, το στέκι σας! ❤️"
            : lang === "en"
              ? "Our canteen, your place to hangout! ❤️"
              : "Kantinimiz, mekanınız! ❤️"}
        </p>
        <a
          href="https://www.flaticon.com/free-icons/watermelon"
          title="watermelon icons"
          className="text-[0.8rem] text-white/60 uppercase mt-2"
        >
          Watermelon icons created by juicy_fish - Flaticon
        </a>
        <div className="border-t border-white/8 pt-3 text-[0.8rem] uppercase tracking-widest text-white/60">
          &copy; 2026 Karpouzi Cantina — All Rights Reserved
          <br />
          Created by Stavros Vetsikas
        </div>
      </div>
    </footer>
  );
}
