import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import { StarIcon } from "lucide-react";
interface footerProps {
  lang: "el" | "en" | "tr";
}

export default function Footer({ lang }: footerProps) {
  return (
    <footer className="bg-seed text-white p-8 mt-10 flex flex-col items-center gap-4">
      <div className="flex gap-6 items-center">
        {" "}
        <a
          href="https://www.instagram.com/cantine_watermellon"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img src={instagram} alt="Instagram" className="h-8 w-8" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61575732263648"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img src={facebook} alt="Facebook" className="h-8 w-8" />
        </a>
      </div>
      <a
        href="https://www.google.com/search?sca_esv=ddbdabb62a8f686c&rlz=1C1GCEA_enGR1130GR1130&sxsrf=ANbL-n6nAxSJ-kiss3TMqnW-dqmAYXdOCA:1777625283035&q=kantina+karpouzi+xaramida&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZqyixnWShOpCUgK3viTv4-eGJ4k-7rJQmrvIS4TUyJEsBUzY8guLHqWsEFxeVXaSLSbudw%3D&uds=ALYpb_kgbr9WnQ7cqOGSWrVQwMIXI8Lzuh4LoE5ac9TlRGk_8QWsb36p0z2SG02l0srHm7rRU-jDa2te3sLX1ghsblSkrmyYbrunj148Fwze19vS81LBfEdNyqb92ZUxNnJNTyZo3Sml&sa=X&ved=2ahUKEwjV46ec2peUAxU_QPEDHXzJJ-cQ3PALegQINBAF&biw=1920&bih=945&dpr=1" // Βάλε το δικό σου link
        target="_blank"
        rel="noopener noreferrer"
        className=" bg-watermelon-500 text-white p-3 rounded-full shadow-2xl flex items-center gap-2 hover:bg-watermelon-600"
      >
        <span className="text-xs font-bold pl-1">RATE US</span>
        <div className="bg-white p-1 rounded-full text-watermelon-500">
          <StarIcon size={16} fill="currentColor" />{" "}
          {/* Αν χρησιμοποιείς Lucide icons */}
        </div>
      </a>
      <div className="max-w-md mx-auto text-center space-y-4">
        <h2 className="font-title text-2xl font-bold text-watermelon-400">
          {lang === "el" ? "To Καρπούζι" : "Karpouzi"}
        </h2>

        <p className="font-body text-xs text-white/60 italic">
          {lang === "el"
            ? "Η καντίνα μας, το στέκι σας! ❤️"
            : lang === "en"
              ? "Our canteen, your place to hangout! ❤️"
              : "Kantinimiz, mekanınız! ❤️"}
        </p>

        <div className="border-t border-white/10 pt-4 text-[10px] uppercase tracking-widest text-white/40">
          &copy; 2026 Karpouzi Cantina - All Rights Reserved <br />
          Created by Stavros Vetsikas
        </div>
      </div>
    </footer>
  );
}
