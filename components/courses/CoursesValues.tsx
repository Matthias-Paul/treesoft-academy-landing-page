import Image from "next/image";
import { Grid, Heading, Section, Text } from "@/components/ui";
import { coursesPageValues } from "@/lib/about";
import { siteConfig } from "@/lib/site";

export function CoursesValues() {
  return (
    <Section id="values" spacious aria-labelledby="courses-values-heading">
      <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14 xl:gap-16">
        <div className="relative aspect-[580/680] w-full max-w-md overflow-hidden rounded-[10px] lg:max-w-none lg:w-[42%]">
          <Image
            src="/images/jacqueline-day-1SapfOEZN2g-unsplash.png"
            alt="Treesoft Academy learner focused on building with modern tools"
            fill
            sizes="(max-width: 1024px) 90vw, 42vw"
            className="object-cover object-center"
          />
        </div>

        <div className="w-full lg:w-[58%]">
          <Heading as={2} size="h2" id="courses-values-heading">
            Our Values
          </Heading>
          <Text size="lead" tone="muted" className="mt-3 max-w-xl">
            The principles that shape how we teach, mentor, and grow every
            learner at {siteConfig.name}.
          </Text>

          <Grid cols={2} gap="md" className="mt-8">
            {coursesPageValues.map((value) => (
              <article
                key={value.title}
                className="rounded-[10px] border border-border bg-surface-muted/60 p-5 transition-colors duration-250 ease-[var(--ease)] hover:border-brand/30 hover:bg-white hover:shadow-[0_16px_40px_0_rgba(192,198,211,0.25)] md:p-6"
              >
                <div
                  className="mb-3 h-1 w-10 rounded-full bg-brand"
                  aria-hidden="true"
                />
                <Heading as={3} size="h5" className="mb-2">
                  {value.title}
                </Heading>
                <Text size="small" tone="muted">
                  {value.description}
                </Text>
              </article>
            ))}
          </Grid>
        </div>
      </div>
    </Section>
  );
}
