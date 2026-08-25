import NextLink from "next/link";
import { cn } from "@/lib/cn";

export type TextLinkProps = React.ComponentProps<typeof NextLink> & {
  tone?: "default" | "brand" | "muted" | "invert" | "nav";
  underline?: boolean;
};

const toneClasses = {
  default: "text-foreground hover:text-brand",
  brand: "text-brand hover:text-brand-dark",
  muted: "text-text-muted hover:text-brand",
  invert: "text-white hover:text-brand",
  nav: "text-nav text-foreground hover:text-brand",
} as const;

export function TextLink({
  className,
  tone = "default",
  underline = false,
  children,
  ...props
}: TextLinkProps) {
  return (
    <NextLink
      className={cn(
        "transition-colors duration-250 ease-[var(--ease)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        toneClasses[tone],
        underline && "underline underline-offset-4",
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}
