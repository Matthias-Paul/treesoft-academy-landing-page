import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Heading, Section, Text } from "@/components/ui";
import {
  formatCoursePrice,
  type CourseCategory,
} from "@/lib/courses";
import { siteConfig } from "@/lib/site";

type CourseDetailProps = {
  course: CourseCategory;
};

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-[0.9375rem] leading-relaxed text-text-soft">
      <span
        className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-dark"
        aria-hidden
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.5 6.2 4.8 8.5 9.5 3.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

function DetailBlock({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="flex flex-col gap-5 scroll-mt-28">
      <Heading as={2} size="h3">
        {title}
      </Heading>
      {children}
    </section>
  );
}

export function CourseDetail({ course }: CourseDetailProps) {
  const price = formatCoursePrice(course.pricing);

  return (
    <>
      <section
        className="relative isolate overflow-hidden"
        aria-labelledby="course-heading"
      >
        <Image
          src={course.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-dark/70" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-container px-5 py-20 sm:px-8 md:py-28 lg:px-[2.1875rem]">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/courses" className="hover:text-white">
                  Courses
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">{course.title}</li>
            </ol>
          </nav>

          <Heading as={1} size="display" invert id="course-heading">
            {course.title}
          </Heading>
          <Text size="lead" tone="invert" className="mt-4 max-w-2xl">
            {course.summary}
          </Text>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-md bg-white/15 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              {course.duration}
            </span>
            <span className="rounded-md bg-white/15 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              {course.level}
            </span>
            <span className="rounded-md bg-white/15 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              {course.format}
            </span>
            <span className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-brand-dark">
              {price}
            </span>
          </div>
        </div>
      </section>

      <Section spacious>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex min-w-0 flex-1 flex-col gap-12">
            <DetailBlock id="about" title="About this program">
              <Text size="body" tone="soft" className="max-w-3xl text-[1.0625rem] leading-relaxed">
                {course.about}
              </Text>
            </DetailBlock>

            <DetailBlock id="learn" title="What you'll learn">
              <ul className="space-y-3">
                {course.outcomes.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock id="outline" title="Course outline">
              <div className="flex flex-col gap-4">
                {course.outline.map((module, index) => (
                  <article
                    key={module.title}
                    className="rounded-[10px] border border-border bg-surface-muted/60 p-5 md:p-6"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-brand-dark text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <Heading as={3} size="h5">
                          {module.title}
                        </Heading>
                        <ul className="mt-3 space-y-2">
                          {module.lessons.map((lesson) => (
                            <li
                              key={lesson}
                              className="flex gap-2 text-sm leading-relaxed text-text-soft"
                            >
                              <span
                                className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                                aria-hidden
                              />
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </DetailBlock>

            <DetailBlock id="requirements" title="Requirements">
              <ul className="space-y-3">
                {course.requirements.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock id="careers" title="Career outcomes">
              <ul className="grid gap-3 sm:grid-cols-2">
                {course.careerOutcomes.map((role) => (
                  <li
                    key={role}
                    className="rounded-[10px] border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground shadow-[0_8px_24px_0_rgba(192,198,211,0.18)]"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock id="audience" title="Who this course is for">
              <ul className="space-y-3">
                {course.whoFor.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </DetailBlock>
          </div>

          <aside className="w-full shrink-0 lg:w-[22rem]">
            <div className="sticky top-28 flex flex-col gap-4">
              <div className="rounded-[10px] border border-border bg-white p-6 shadow-[0_16px_40px_0_rgba(192,198,211,0.25)]">
                <Text size="small" tone="muted" weight="medium">
                  {course.pricing.label}
                </Text>
                <p className="mt-1 text-3xl font-black tracking-tight text-brand-dark">
                  {price}
                </p>
                <Text size="small" tone="muted" className="mt-2">
                  {course.pricing.note}
                </Text>
                {course.pricing.installment ? (
                  <Text size="small" tone="brand" className="mt-2 font-medium">
                    {course.pricing.installment}
                  </Text>
                ) : null}

                <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-text-muted">Duration</dt>
                    <dd className="text-right font-medium text-foreground">
                      {course.duration}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-text-muted">Level</dt>
                    <dd className="text-right font-medium text-foreground">
                      {course.level}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-text-muted">Format</dt>
                    <dd className="text-right font-medium text-foreground">
                      {course.format}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-text-muted">Schedule</dt>
                    <dd className="text-right font-medium text-foreground">
                      {course.schedule}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-col gap-3">
                  <ButtonLink
                    href={siteConfig.cta.href}
                    variant="primary"
                    fullWidth
                  >
                    Enroll / Reach Out
                  </ButtonLink>
                  <ButtonLink href="/courses" variant="outline" fullWidth>
                    All courses
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded-[10px] border border-border bg-surface-muted/80 p-6">
                <Heading as={3} size="h5">
                  What’s included
                </Heading>
                <ul className="mt-4 space-y-3">
                  {course.includes.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
