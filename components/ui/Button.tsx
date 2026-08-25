import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-dark text-white hover:bg-brand-mid focus-visible:ring-brand-dark",
  secondary:
    "bg-brand text-white hover:bg-brand-mid focus-visible:ring-brand",
  outline:
    "border border-brand-mid bg-transparent text-brand-dark hover:bg-brand-dark hover:text-white hover:border-brand-dark focus-visible:ring-brand-mid",
  ghost:
    "bg-transparent text-brand-dark hover:bg-brand-soft focus-visible:ring-brand",
  white:
    "bg-white text-brand-dark hover:bg-surface-muted focus-visible:ring-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 text-sm",
  md: "min-h-10 px-5 text-[0.9375rem]",
  lg: "min-h-12 px-[1.4375rem] text-base",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-250 ease-[var(--ease)] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
