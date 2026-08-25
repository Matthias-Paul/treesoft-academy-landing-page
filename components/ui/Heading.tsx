import { cn } from "@/lib/cn";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const sizeClasses: Record<HeadingSize, string> = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  h5: "text-lg font-bold leading-snug",
  h6: "text-base font-bold leading-snug",
};

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingLevel;
  size?: HeadingSize;
  serif?: boolean;
  muted?: boolean;
  invert?: boolean;
};

export function Heading({
  as = 2,
  size,
  serif = false,
  muted = false,
  invert = false,
  className,
  children,
  ...props
}: HeadingProps) {
  const Comp = `h${as}` as const;
  const resolvedSize = size ?? (`h${Math.min(as, 4)}` as HeadingSize);

  return (
    <Comp
      className={cn(
        sizeClasses[resolvedSize],
        serif && "text-display-serif",
        muted && "text-text-muted",
        invert && "text-white",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
