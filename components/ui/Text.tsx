import { cn } from "@/lib/cn";

type TextSize = "lead" | "body" | "small" | "nav";
type TextTone = "default" | "muted" | "soft" | "invert" | "brand";

const sizeClasses: Record<TextSize, string> = {
  lead: "text-lead",
  body: "text-body",
  small: "text-small",
  nav: "text-nav",
};

const toneClasses: Record<TextTone, string> = {
  default: "text-foreground",
  muted: "text-text-muted",
  soft: "text-text-soft",
  invert: "text-white/90",
  brand: "text-brand-dark",
};

export type TextProps = React.HTMLAttributes<HTMLElement> & {
  as?: "p" | "span" | "div" | "label";
  size?: TextSize;
  tone?: TextTone;
  weight?: "normal" | "medium" | "bold";
};

export function Text({
  as: Comp = "p",
  size = "body",
  tone = "default",
  weight = "normal",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Comp
      className={cn(
        sizeClasses[size],
        toneClasses[tone],
        weight === "medium" && "font-medium",
        weight === "bold" && "font-bold",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
