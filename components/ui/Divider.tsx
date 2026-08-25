import { cn } from "@/lib/cn";

export type DividerProps = React.HTMLAttributes<HTMLHRElement> & {
  tone?: "default" | "strong" | "invert";
  spacing?: "sm" | "md" | "lg";
};

const toneClasses = {
  default: "border-border",
  strong: "border-border-strong",
  invert: "border-white/20",
} as const;

const spacingClasses = {
  sm: "my-4",
  md: "my-8",
  lg: "my-12",
} as const;

export function Divider({
  tone = "default",
  spacing = "md",
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      className={cn(
        "w-full border-0 border-t",
        toneClasses[tone],
        spacingClasses[spacing],
        className,
      )}
      {...props}
    />
  );
}
