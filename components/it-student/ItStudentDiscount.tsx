import { Grid, Heading, Section, Text } from "@/components/ui";
import { itStudentDiscount } from "@/lib/it-student";

export function ItStudentDiscount() {
  return (
    <Section
      id="discount"
      tone="muted"
      spacious
      aria-labelledby="it-discount-heading"
    >
      <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
        <Heading as={2} size="h2" id="it-discount-heading">
          {itStudentDiscount.heading}
        </Heading>
        <Text size="lead" tone="muted" className="mt-3">
          {itStudentDiscount.lead}
        </Text>
      </div>

      <Grid cols={4} gap="md">
        {itStudentDiscount.points.map((point) => (
          <article
            key={point.title}
            className="rounded-[10px] border border-border bg-white p-6 md:p-7"
          >
            <Heading as={3} size="h5" className="mb-2">
              {point.title}
            </Heading>
            <Text size="small" tone="muted">
              {point.description}
            </Text>
          </article>
        ))}
      </Grid>
    </Section>
  );
}
