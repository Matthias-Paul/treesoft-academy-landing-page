import { Grid, Heading, Section, Text } from "@/components/ui";
import { itStudentSteps } from "@/lib/it-student";

export function ItStudentHowItWorks() {
  return (
    <Section
      id="how-it-works"
      spacious
      aria-labelledby="it-how-heading"
    >
      <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
        <Heading as={2} size="h2" id="it-how-heading">
          How it works
        </Heading>
        <Text size="lead" tone="muted" className="mt-3">
          From application to portfolio — a clear path while you&apos;re on IT.
        </Text>
      </div>

      <Grid cols={4} gap="lg">
        {itStudentSteps.map((item) => (
          <article
            key={item.step}
            className="relative flex h-full flex-col rounded-[10px] border border-border bg-surface-muted/50 p-6 md:p-7"
          >
            <span
              className="mb-4 text-3xl font-bold text-brand"
              aria-hidden="true"
            >
              {item.step}
            </span>
            <Heading as={3} size="h5" className="mb-2">
              {item.title}
            </Heading>
            <Text size="small" tone="muted">
              {item.description}
            </Text>
          </article>
        ))}
      </Grid>
    </Section>
  );
}
