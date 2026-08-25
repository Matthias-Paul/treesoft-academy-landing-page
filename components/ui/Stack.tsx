import { cn } from "@/lib/cn";

type StackDirection = "row" | "col";
type StackGap = "xs" | "sm" | "md" | "lg" | "xl";

const gapClasses: Record<StackGap, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
} as const;

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
} as const;

export type StackProps = {
  as?: "div" | "ul" | "ol" | "nav" | "section";
  direction?: StackDirection;
  gap?: StackGap;
  align?: keyof typeof alignClasses;
  justify?: keyof typeof justifyClasses;
  wrap?: boolean;
  className?: string;
  children?: React.ReactNode;
  id?: string;
  role?: string;
  "aria-label"?: string;
};

export function Stack({
  as: Comp = "div",
  direction = "col",
  gap = "md",
  align,
  justify,
  wrap = false,
  className,
  children,
  ...props
}: StackProps) {
  return (
    <Comp
      className={cn(
        "flex",
        direction === "row" ? "flex-row" : "flex-col",
        gapClasses[gap],
        align && alignClasses[align],
        justify && justifyClasses[justify],
        wrap && "flex-wrap",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
