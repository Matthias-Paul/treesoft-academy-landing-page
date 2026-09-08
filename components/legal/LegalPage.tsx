import Link from "next/link";

export type LegalSection = {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
};

type LegalPageProps = {
  title: string;
  description: string;
  updated: string;
  sections: readonly LegalSection[];
};

export function LegalPage({
  title,
  description,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <main id="main-content" className="flex-1 bg-surface">
      <header className="border-b border-brand/15 bg-brand-soft">
        <div className="mx-auto w-full max-w-container px-5 py-16 sm:px-8 md:py-20 lg:px-[2.1875rem]">
          <h1 className="text-display text-brand-dark">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-soft sm:text-lg">
            {description}
          </p>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-container gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[13rem_minmax(0,1fr)] lg:px-[2.1875rem]">
        <nav aria-label={`${title} sections`} className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-3 text-sm font-semibold text-foreground">
            On this page
          </p>
          <ul className="flex list-none flex-col gap-2 border-l border-border p-0">
            {sections.map((section, index) => (
              <li key={section.title}>
                <a
                  href={`#section-${index + 1}`}
                  className="block border-l-2 border-transparent py-1 pl-4 text-sm text-text-soft transition-colors hover:border-brand hover:text-brand-dark"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="rounded-md border border-border bg-white px-6 py-8 sm:px-9 md:py-10">
          <div className="mx-auto max-w-3xl divide-y divide-border">
            {sections.map((section, index) => (
              <section
                id={`section-${index + 1}`}
                key={section.title}
                className="scroll-mt-28 py-8 first:pt-0 last:pb-0"
              >
                <h2 className="text-xl font-bold text-foreground">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-[0.9375rem] leading-7 text-text-soft"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.items ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.9375rem] leading-7 text-text-soft marker:text-brand">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="mt-8 border-t border-border pt-8">
              <p className="text-[0.9375rem] leading-7 text-text-soft">
                Have a question about this policy?{" "}
                <Link
                  href="/contact"
                  className="font-medium text-brand-dark underline decoration-brand/40 underline-offset-4 hover:text-brand"
                >
                  Contact our team
                </Link>
                .
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
