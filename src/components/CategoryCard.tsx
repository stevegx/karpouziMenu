import { emojiMap } from "../data/data";

interface CategoryCardProps {
  label: string;
  onClick: () => void;
  emoji?: string;
}

export default function CategoryCard({ label, onClick }: CategoryCardProps) {
  const emoji = emojiMap[label] || "🍽️";

  return (
    <button
      onClick={onClick}
      aria-label={`Πήγαινε στην κατηγορία ${label}`}
      className="
        flex flex-col items-center justify-center 
        p-4 bg-white rounded-[1.25rem] 
        border border-sand-200 w-full min-h-22
        cursor-pointer transition-all duration-200 
        shadow-md
        active:scale-[0.96] 
        outline-none
        hover:shadow-xl
      "
    >
      <span
        className="text-2xl leading-none mb-[0.4rem]"
        role="img"
        aria-hidden="true"
      >
        {emoji}
      </span>

      <span
        className="
          font-title text-[0.78rem] font-semibold 
          text-seed text-center leading-[1.2] 
          uppercase tracking-[0.02em]
        "
      >
        {label}
      </span>
    </button>
  );
}
