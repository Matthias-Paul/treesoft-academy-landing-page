import { Heading, Section, Text } from "@/components/ui";
import { coursesPageValues } from "@/lib/about";
import { siteConfig } from "@/lib/site";

export function CoursesValues() {
  return (
    <Section id="values" spacious aria-labelledby="courses-values-heading">
      <div className="mx-auto max-w-2xl text-center">
        <Heading as={2} size="h2" id="courses-values-heading">
          Our Values
        </Heading>
        <Text size="lead" tone="muted" className="mt-4">
          How we teach, mentor, and grow every learner at {siteConfig.name}.
        </Text>
      </div>

      <ul className="mt-12 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {coursesPageValues.map((value) => (
          <li
            key={value.title}
            className="m-0 rounded-md border border-border bg-white p-6 sm:p-8"
          >
            <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {value.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
