import { ButtonLink, Heading, Section, Text } from "@/components/ui";
import {
  enrollmentIntro,
  enrollmentSteps,
  itStudentEnrollmentNote,
} from "@/lib/admissions";
import { siteConfig } from "@/lib/site";

export function HowToEnroll() {
  return (
    <Section
      id="how-to-enroll"
      tone="muted"
      spacious
      aria-labelledby="how-to-enroll-heading"
    >
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16 xl:gap-20">
        <div className="w-full lg:w-[58%]">
          <Heading as={2} size="h2" id="how-to-enroll-heading">
            {enrollmentIntro.heading}
          </Heading>
          <Text size="lead" tone="muted" className="mt-4 max-w-xl">
            {enrollmentIntro.lead}
          </Text>

          <ol className="mt-10 flex list-none flex-col gap-8 p-0">
            {enrollmentSteps.map((item) => (
              <li key={item.step} className="m-0 flex gap-5">
                <span
                  className="shrink-0 text-sm font-medium tabular-nums text-text-muted"
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-soft">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="w-full lg:w-[42%] lg:pt-1">
          <div className="rounded-[10px] border border-border bg-white p-6 md:p-7">
            <h3 className="text-base font-bold text-foreground">
              {itStudentEnrollmentNote.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-soft">
              {itStudentEnrollmentNote.description}
            </p>
            <div className="mt-5">
              <ButtonLink
                href={siteConfig.itStudentCta.href}
                variant="primary"
                size="md"
              >
                {itStudentEnrollmentNote.cta}
              </ButtonLink>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <ButtonLink href="/courses" variant="outline" size="md" fullWidth>
              View all courses
            </ButtonLink>
            <ButtonLink
              href={siteConfig.cta.href}
              variant="primary"
              size="md"
              fullWidth
            >
              {siteConfig.cta.label}
            </ButtonLink>
          </div>
        </aside>
      </div>
    </Section>
  );
}
