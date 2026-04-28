import { type LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export default function CategoryCard({
  icon: Icon,
  label,
  onClick,
}: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center p-4 bg-rind-100 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer border-2 border-transparent hover:border-watermelon-200 w-28"
    >
      <div className="bg-rind-300 p-3 rounded-full mb-2 text-white shadow-inner">
        <Icon size={32} strokeWidth={2.5} />
      </div>
      <h2 className="font-display text-sm text-seed font-semibold text-center leading-tight">
        {label}
      </h2>
    </div>
  );
}
