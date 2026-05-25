import { cn } from "@/lib/utils";

interface GoldGlowProps {
  className?: string;
  intensity?: "subtle" | "default" | "strong";
}

const intensityMap = {
  subtle: "shadow-[0_0_20px_rgba(201,169,110,0.06)]",
  default: "shadow-[0_0_40px_rgba(201,169,110,0.1)]",
  strong: "shadow-[0_0_60px_rgba(201,169,110,0.2)]",
};

export default function GoldGlow({
  className,
  intensity = "default",
}: GoldGlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-inherit will-change-[box-shadow]",
        intensityMap[intensity],
        className
      )}
      aria-hidden="true"
    />
  );
}
