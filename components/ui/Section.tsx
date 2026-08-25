import { cn } from "@/lib/cn";

type SectionTone = "default" | "muted" | "surface" | "dark" | "brand";

const toneClasses: Record<SectionTone, string> = {
  default: "bg-white text-foreground",
  muted: "bg-surface-muted text-foreground",
  surface: "bg-surface text-foreground",
  dark: "bg-black text-white",
  brand: "bg-brand-dark text-white",
};

export type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "aside";
  tone?: SectionTone;
  /** Extra vertical padding (matches WP section-y spacing) */
  spacious?: boolean;
  containerClassName?: string;
  /** When false, children are not wrapped in Container */
  contained?: boolean;
};

export function Section({
  as: Comp = "section",
  tone = "default",
  spacious = false,
  contained = true,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  const content = contained ? (
    <div
      className={cn(
        "mx-auto w-full max-w-container px-5 sm:px-8 lg:px-[2.1875rem]",
        containerClassName,
      )}
    >
      {children}
    </div>
  ) : (
    children
  );

  return (
    <Comp
      className={cn(
        "relative w-full",
        toneClasses[tone],
        spacious ? "section-y" : "py-12 md:py-16 lg:py-[4.375rem]",
        className,
      )}
      {...props}
    >
      {content}
    </Comp>
  );
}
