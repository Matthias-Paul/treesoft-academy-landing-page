import { cn } from "@/lib/cn";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "article" | "main" | "header" | "footer" | "nav";
  narrow?: boolean;
};

export function Container({
  as: Comp = "div",
  className,
  narrow = false,
  children,
  ...props
}: ContainerProps) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-[2.1875rem]",
        narrow ? "max-w-3xl" : "max-w-container",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
