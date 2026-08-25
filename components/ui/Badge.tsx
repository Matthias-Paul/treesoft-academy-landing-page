import { cn } from "@/lib/cn";

type BadgeTone = "brand" | "muted" | "dark" | "outline";

const toneClasses: Record<BadgeTone, string> = {
  brand: "bg-brand-soft text-brand-dark",
  muted: "bg-surface-muted text-text-soft",
  dark: "bg-black text-white",
  outline: "border border-border text-text-soft",
};

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
};

export function Badge({
  tone = "brand",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2.5 py-1 text-xs font-semibold tracking-wide",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
