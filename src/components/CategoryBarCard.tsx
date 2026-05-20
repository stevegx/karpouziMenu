import { emojiMap } from "../data/data";
interface CategoryCardProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
  emoji?: string;
}

export default function CategoryBarCard({
  label,
  onClick,
  isActive,
}: CategoryCardProps) {
  const emoji = emojiMap[label] || "🍽️";

  return (
    <button
      onClick={onClick}
      aria-pressed={isActive}
      className={`
        shrink-0 py-2.5 px-2  rounded-2xl shadow-md
        font-title text-[0.82rem] font-bold tracking-[0.04em] uppercase whitespace-nowrap
        cursor-pointer transition-all duration-200 min-h-9 min-w-20 outline-none
        ${
          isActive
            ? "bg-rind-500 text-white border-white scale-105 shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
            : "bg-white/15 text-seed border-white/40 scale-100 shadow-md"
        }
        active:scale-95
      `}
    >
      <div className="flex flex-col">
        {emoji && (
          <span
            className="text-lg leading-none mb-1"
            role="img"
            aria-hidden="true"
          >
            {emoji}
          </span>
        )}
        {label}
      </div>
    </button>
  );
}
