import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type CourseCardProps = {
  href: string;
  title: string;
  description: string;
  image: string;
  meta?: string;
  ctaLabel?: string;
  className?: string;
  footer?: React.ReactNode;
};

export function CourseCard({
  href,
  title,
  description,
  image,
  meta,
  ctaLabel = "View program",
  className,
  footer,
}: CourseCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[10px] border border-border bg-white p-4 transition-colors duration-250 ease-[var(--ease)] hover:border-brand/35 md:p-5",
        className,
      )}
    >
      <Link
        href={href}
        className="group flex flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-md"
      >
        <div className="relative aspect-[5/3] overflow-hidden rounded-md bg-surface-muted">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="object-cover object-center transition-transform duration-500 ease-[var(--ease)] group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col pt-5">
          {meta ? (
            <p className="mb-2 text-xs font-medium text-text-muted">{meta}</p>
          ) : null}
          <h3 className="text-lg font-bold leading-snug text-foreground">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-text-soft line-clamp-3">
            {description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark underline-offset-4 group-hover:underline">
            {ctaLabel}
            <span aria-hidden="true" className="transition-transform duration-250 group-hover:translate-x-0.5">
              →
            </span>
          </span>
        </div>
      </Link>

      {footer ? <div className="mt-5 border-t border-border pt-5">{footer}</div> : null}
    </article>
  );
}
