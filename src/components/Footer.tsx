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
        href="https://www.google.com/search?sca_esv=35896ee927ddd118&rlz=1C1GCEA_enGR1130GR1130&sxsrf=ANbL-n65M3mbHfAgCEtoW_YnsSBAUEdXzA:1780669228701&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZqyixnWShOpCUgK3viTv489ZBhxn04X57aXrK1NUcmMmZ5M8EYaffQ2VWZI2HiKSsVB2anHBQT-RxGES1r9XwyLvSHJLmAgxTTJSyLLVmn9XmUc4w%3D%3D&q=Kantina+to+karpouzi+%CE%9A%CF%81%CE%B9%CF%84%CE%B9%CE%BA%CE%AD%CF%82&sa=X&ved=2ahUKEwjjgdvmpfCUAxWESfEDHazNFK0Q0bkNegQIHRAF&biw=1920&bih=945&dpr=1"
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

        {/* Photo disclaimer */}
        <p className="font-body text-[0.7rem] text-white/55 italic max-w-md leading-relaxed mt-4 mb-1 px-2">
          {lang === "el"
            ? "📸 Οι φωτογραφίες των προϊόντων είναι ενδεικτικές και ενδέχεται να διαφέρουν από το τελικό προϊόν που σερβίρεται."
            : lang === "en"
              ? "📸 Product photos are for illustration purposes only and may differ from the actual product served."
              : "📸 Ürün fotoğrafları yalnızca tanıtım amaçlıdır ve servis edilen üründen farklı olabilir."}
        </p>

        {/* Allergen disclaimer */}
        <p className="font-body text-[0.7rem] text-white/55 italic max-w-md leading-relaxed mb-3 px-2">
          {lang === "el"
            ? "ℹ️ Για περισσότερες πληροφορίες σχετικά με αλλεργιογόνα ή συστατικά, καλό θα ήταν να ρωτήσετε τον σερβιτόρο μας για σιγουριά."
            : lang === "en"
              ? "ℹ️ For additional information about allergens or ingredients, please feel free to ask our staff."
              : "ℹ️ Alerjenler veya içerikler hakkında ek bilgi için lütfen personelimize danışmanızı öneririz."}
        </p>

        <div className="border-t border-white/8 pt-3 text-[0.8rem] uppercase tracking-widest text-white/60">
          &copy; 2026 Karpouzi Cantina — All Rights Reserved
          <br />
          Created by Stavros Vetsikas
        </div>
      </div>
    </footer>
  );
}
