interface CategoryCardProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

export default function CategoryBarCard({
  label,
  onClick,
  isActive,
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      aria-pressed={isActive}
      className={`
        shrink-0 py-[0.4rem] px-4 rounded-full border-2
        font-title text-[0.82rem] font-bold tracking-[0.04em] uppercase whitespace-nowrap
        cursor-pointer transition-all duration-200 min-h-9 min-w-16 outline-none
        ${
          isActive
            ? "bg-white text-watermelon-700 border-white scale-105 shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
            : "bg-white/15 text-white border-white/40 scale-100 shadow-none"
        }
        active:scale-95
      `}
    >
      {label}
    </button>
  );
}
