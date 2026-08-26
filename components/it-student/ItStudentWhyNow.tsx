import { Heading, Section, Text } from "@/components/ui";
import { itStudentWhyNow } from "@/lib/it-student";

export function ItStudentWhyNow() {
  return (
    <Section
      id="why-now"
      tone="muted"
      spacious
      aria-labelledby="it-why-now-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Heading as={2} size="h2" id="it-why-now-heading">
          {itStudentWhyNow.heading}
        </Heading>
        <div className="mt-6 space-y-4">
          {itStudentWhyNow.body.map((paragraph) => (
            <Text key={paragraph.slice(0, 24)} size="lead" tone="muted">
              {paragraph}
            </Text>
          ))}
        </div>
      </div>
    </Section>
  );
}
