import { Grid, Heading, Section, Text } from "@/components/ui";
import { CourseCard } from "@/components/courses/CourseCard";
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
          <CourseCard
            key={course.slug}
            href={getCourseHref(course.slug)}
            title={course.title}
            description={course.description}
            image={course.image}
            meta={`${course.duration} · ${course.level}`}
            ctaLabel="View details"
          />
        ))}
      </Grid>
    </Section>
  );
}
