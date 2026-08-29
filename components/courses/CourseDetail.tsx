import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Heading, Section, Text } from "@/components/ui";
import { formatCoursePrice, type CourseCategory } from "@/lib/courses";
import { siteConfig } from "@/lib/site";

type CourseDetailProps = {
  course: CourseCategory;
};

function DotList({ items }: { items: readonly string[] }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-[0.9375rem] leading-relaxed text-text-soft"
        >
          <span
            className="mt-2 size-1.5 shrink-0 rounded-full bg-black"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
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
    <section id={id} className="scroll-mt-28">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-foreground md:text-[1.375rem]">
        {title}
      </h2>
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
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-full max-w-container px-5 py-16 sm:px-8 md:py-20 lg:px-[2.1875rem] lg:py-24">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/courses"
                  className="transition-colors hover:text-white"
                >
                  Courses
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/90">{course.title}</li>
            </ol>
          </nav>

          <Heading as={1} size="display" invert id="course-heading">
            {course.title}
          </Heading>
          <Text size="lead" tone="invert" className="mt-4 max-w-2xl">
            {course.summary}
          </Text>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/80">
            {course.duration}
            <span className="mx-2 text-white/40" aria-hidden="true">
              ·
            </span>
            {course.level}
            <span className="mx-2 text-white/40" aria-hidden="true">
              ·
            </span>
            {course.format}
          </p>
        </div>
      </section>

      <Section spacious>
        <div className="flex flex-col gap-14 lg:flex-row lg:gap-16 xl:gap-24">
          <div className="flex min-w-0 flex-1 flex-col gap-12 md:gap-14">
            <DetailBlock id="about" title="About this program">
              <p className="m-0 max-w-2xl text-[1.0625rem] leading-[1.75] text-text-soft">
                {course.about}
              </p>
            </DetailBlock>

            <DetailBlock id="learn" title="What you'll learn">
              <DotList items={course.outcomes} />
            </DetailBlock>

            <DetailBlock id="outline" title="Course outline">
              <ol className="m-0 flex list-none flex-col gap-7 p-0">
                {course.outline.map((module, index) => (
                  <li key={module.title} className="m-0">
                    <p className="m-0 text-[0.9375rem] font-bold text-foreground">
                      <span className="mr-2 font-medium text-text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {module.title}
                    </p>
                    <ul className="mt-2.5 ml-[1.875rem] flex list-none flex-col gap-1.5 p-0">
                      {module.lessons.map((lesson) => (
                        <li
                          key={lesson}
                          className="text-sm leading-relaxed text-text-soft"
                        >
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </DetailBlock>

            <DetailBlock id="requirements" title="Requirements">
              <DotList items={course.requirements} />
            </DetailBlock>

            <DetailBlock id="careers" title="Career outcomes">
              <p className="m-0 max-w-xl text-[0.9375rem] leading-relaxed text-text-soft">
                {course.careerOutcomes.join(" · ")}
              </p>
            </DetailBlock>

            <DetailBlock id="audience" title="Who this course is for">
              <DotList items={course.whoFor} />
            </DetailBlock>
          </div>

          <aside className="w-full shrink-0 lg:w-[22rem]">
            <div className="flex flex-col gap-4 lg:sticky lg:top-24">
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
                    href={siteConfig.portal.href}
                    variant="primary"
                    fullWidth
                  >
                    {siteConfig.portal.label}
                  </ButtonLink>
                  <ButtonLink href={siteConfig.cta.href} variant="outline" fullWidth>
                    {siteConfig.cta.label}
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded-[10px] border border-border bg-surface-muted/80 p-6">
                <Heading as={3} size="h5">
                  What&apos;s included
                </Heading>
                <div className="mt-4">
                  <DotList items={course.includes} />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
