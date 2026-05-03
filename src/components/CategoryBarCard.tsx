interface CategoryCardProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

export default function CategoryCard({
  label,
  onClick,
  isActive,
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        shrink-0 px-6 py-2 rounded-full transition-all duration-300 border-2
        ${
          isActive
            ? "bg-watermelon-400 border-watermelon-500 text-white shadow-lg scale-105"
            : "bg-white border-sand-100 text-seed hover:border-watermelon-200 shadow-sm"
        }
      `}
    >
      <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}
