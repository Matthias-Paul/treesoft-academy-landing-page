import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Heading, Section, Text } from "@/components/ui";
import { courseCategories, getCourseHref } from "@/lib/courses";

export function FeaturedCourses() {
  const leftCourses = courseCategories.slice(0, 3);
  const rightCourses = courseCategories.slice(3);

  return (
    <Section
      id="featured-courses"
      tone="surface"
      spacious
      aria-labelledby="featured-courses-heading"
    >
      <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14 xl:gap-16">
        <div className="relative aspect-[590/423] w-full overflow-hidden rounded-[10px] lg:w-1/2">
          <Image
            src="/images/austin-distel-rxpThOwuVgE-unsplash.jpg"
            alt="Team collaborating on laptops during a Treesoft Academy workshop"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <Heading as={2} size="h2" id="featured-courses-heading">
            Featured Courses
          </Heading>
          <Text size="lead" tone="muted" className="mt-3 max-w-lg">
            Explore our most popular courses designed to help you master the
            latest technologies.
          </Text>

          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:gap-10">
            <ul className="flex flex-1 flex-col gap-3">
              {leftCourses.map((course) => (
                <li key={course.slug}>
                  <Link
                    href={getCourseHref(course.slug)}
                    className="group flex items-center gap-3 rounded-md px-1 py-1.5 text-[0.9375rem] font-medium text-foreground transition-colors duration-250 ease-[var(--ease)] hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <span
                      className="size-1.5 shrink-0 rounded-full bg-black"
                      aria-hidden="true"
                    />
                    <span className="underline-offset-4 group-hover:underline">
                      {course.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex flex-1 flex-col gap-3">
              {rightCourses.map((course) => (
                <li key={course.slug}>
                  <Link
                    href={getCourseHref(course.slug)}
                    className="group flex items-center gap-3 rounded-md px-1 py-1.5 text-[0.9375rem] font-medium text-foreground transition-colors duration-250 ease-[var(--ease)] hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <span
                      className="size-1.5 shrink-0 rounded-full bg-black"
                      aria-hidden="true"
                    />
                    <span className="underline-offset-4 group-hover:underline">
                      {course.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-white">
            <ButtonLink href="/courses" variant="primary" size="lg">
              View all courses
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
