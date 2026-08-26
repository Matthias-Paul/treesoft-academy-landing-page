import Image from "next/image";
import { Grid, Heading, Section, Text } from "@/components/ui";
import { itStudentSocialProof } from "@/lib/it-student";
import { testimonials } from "@/lib/testimonials";

export function ItStudentSocialProof() {
  return (
    <Section
      id="stories"
      tone="muted"
      spacious
      aria-labelledby="it-stories-heading"
    >
      <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
        <Heading as={2} size="h2" id="it-stories-heading">
          {itStudentSocialProof.heading}
        </Heading>
        <Text size="lead" tone="muted" className="mt-3">
          {itStudentSocialProof.lead}
        </Text>
      </div>

      <Grid cols={3} gap="lg">
        {testimonials.map((item) => (
          <figure
            key={item.id}
            className="flex h-full flex-col rounded-[12px] bg-white p-7 shadow-[0_20px_70px_0_rgba(192,198,211,0.25)] transition-shadow duration-250 ease-[var(--ease)] hover:shadow-[0_24px_60px_0_rgba(0,86,18,0.12)] md:p-8"
          >
            <blockquote className="flex-1">
              <Text
                as="p"
                size="body"
                tone="soft"
                className="text-[1.0625rem] leading-relaxed"
              >
                &ldquo;{item.quote}&rdquo;
              </Text>
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-surface-muted ring-2 ring-brand-soft">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="56px"
                  className="object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate text-base font-bold text-foreground">
                  {item.name}
                </p>
                <p className="truncate text-sm text-text-muted">{item.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </Grid>
    </Section>
  );
}
