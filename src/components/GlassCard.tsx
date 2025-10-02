import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-effect rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300",
        "border border-white/30 backdrop-blur-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
