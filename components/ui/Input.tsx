import { cn } from "@/lib/cn";

const fieldBase =
  "w-full rounded-md border border-border bg-white px-4 py-3 text-base text-foreground placeholder:text-text-muted transition-colors duration-250 ease-[var(--ease)] hover:border-border-strong focus-visible:border-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 disabled:cursor-not-allowed disabled:opacity-50";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export function Input({ className, invalid, type = "text", ...props }: InputProps) {
  return (
    <input
      type={type}
      aria-invalid={invalid || undefined}
      className={cn(
        fieldBase,
        invalid && "border-red-500 focus-visible:ring-red-500/30",
        className,
      )}
      {...props}
    />
  );
}

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export function Textarea({ className, invalid, rows = 4, ...props }: TextareaProps) {
  return (
    <textarea
      rows={rows}
      aria-invalid={invalid || undefined}
      className={cn(
        fieldBase,
        "min-h-[8rem] resize-y",
        invalid && "border-red-500 focus-visible:ring-red-500/30",
        className,
      )}
      {...props}
    />
  );
}
