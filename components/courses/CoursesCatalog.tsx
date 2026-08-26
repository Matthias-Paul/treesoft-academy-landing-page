import Image from "next/image";
import Link from "next/link";
import { Grid, Heading, Section, Text } from "@/components/ui";
import { courseCategories, getCourseHref } from "@/lib/courses";

export function CoursesCatalog() {
  return (
    <Section id="categories" spacious aria-labelledby="courses-catalog-heading">
      <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
        <Heading as={2} size="h2" id="courses-catalog-heading">
          Explore Our Courses
        </Heading>
        <Text size="lead" tone="muted" className="mt-3">
          Choose a learning path to see what you&apos;ll learn, who it&apos;s
          for, and how the program is structured — just clear course
          details.
        </Text>
      </div>

      <Grid cols={3} gap="lg">
        {courseCategories.map((course) => (
          <Link
            key={course.slug}
            href={getCourseHref(course.slug)}
            className="group flex h-full flex-col overflow-hidden rounded-[10px] bg-white shadow-[0_16px_40px_0_rgba(192,198,211,0.22)] transition-[transform,box-shadow] duration-250 ease-[var(--ease)] hover:-translate-y-1 hover:shadow-[0_24px_50px_0_rgba(0,86,18,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
              <Image
                src={course.image}
                alt=""
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover object-center transition-transform duration-500 ease-[var(--ease)] group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-7">
              <Heading as={3} size="h4" className="mb-2.5">
                {course.title}
              </Heading>
              <Text size="body" tone="muted" className="flex-1">
                {course.description}
              </Text>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark">
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
            </div>
          </Link>
        ))}
      </Grid>
    </Section>
  );
}
