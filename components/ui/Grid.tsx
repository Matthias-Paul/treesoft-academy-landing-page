import { cn } from "@/lib/cn";

type GridCols = 1 | 2 | 3 | 4;

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  cols?: GridCols;
  gap?: "sm" | "md" | "lg" | "xl";
};

const gapClasses = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-10",
} as const;

const colClasses: Record<GridCols, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export function Grid({
  cols = 3,
  gap = "lg",
  className,
  children,
  ...props
}: GridProps) {
  return (
    <div
      className={cn("grid", colClasses[cols], gapClasses[gap], className)}
      {...props}
    >
      {children}
    </div>
  );
}
