import { cn } from "@/lib/cn";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
};

export function Label({
  className,
  required,
  children,
  ...props
}: LabelProps) {
  return (
    <label
      className={cn(
        "mb-1.5 block text-sm font-medium text-foreground",
        className,
      )}
      {...props}
    >
      {children}
      {required ? (
        <span className="ml-0.5 text-red-600" aria-hidden="true">
          *
        </span>
      ) : null}
    </label>
  );
}
