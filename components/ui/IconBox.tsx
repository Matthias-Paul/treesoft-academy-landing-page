import Link from "next/link";
import { cn } from "@/lib/cn";
import { Heading } from "./Heading";
import { Text } from "./Text";

export type IconBoxProps = {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
  href?: string;
  interactive?: boolean;
};

export function IconBox({
  icon,
  title,
  description,
  className,
  href,
  interactive = true,
}: IconBoxProps) {
  const classes = cn(
    "group flex h-full flex-col rounded-md bg-surface-muted p-7 text-left transition-[background-color,box-shadow,border-color,transform] duration-250 ease-[var(--ease)] md:p-8",
    interactive &&
      "border border-transparent hover:-translate-y-1 hover:border-border-strong hover:bg-brand-dark hover:shadow-card hover:[&_.icon-box-title]:text-white hover:[&_.icon-box-desc]:text-white/85 hover:[&_.icon-box-icon]:bg-white/15 hover:[&_.icon-box-icon]:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
    className,
  );

  const content = (
    <>
      <div
        className="icon-box-icon mb-5 inline-flex size-12 items-center justify-center rounded-md bg-brand-soft text-brand-dark transition-colors duration-250"
        aria-hidden="true"
      >
        {icon}
      </div>
      <Heading as={3} size="h4" className="icon-box-title mb-2.5">
        {title}
      </Heading>
      {description ? (
        <Text size="body" tone="muted" className="icon-box-desc flex-1">
          {description}
        </Text>
      ) : null}
      {href ? (
        <span className="icon-box-desc mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors group-hover:text-white">
          View details
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-250 group-hover:translate-x-0.5"
          >
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <article className={classes}>{content}</article>;
}
