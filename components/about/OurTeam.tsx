import Image from "next/image";
import { Grid, Heading, Section, Text } from "@/components/ui";
import { aboutTeam } from "@/lib/about";

export function OurTeam() {
  return (
    <Section
      id="team"
      tone="surface"
      spacious
      aria-labelledby="team-heading"
    >
      <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
        <Heading as={2} size="h2" id="team-heading">
          Our Team
        </Heading>
        <Text size="lead" tone="muted" className="mt-3">
          Mentors and instructors dedicated to helping you grow into a
          confident, industry-ready professional.
        </Text>
      </div>

      <Grid cols={4} gap="lg">
        {aboutTeam.map((member) => (
          <article
            key={member.name}
            className="group overflow-hidden rounded-[10px] bg-white shadow-[0_16px_40px_0_rgba(192,198,211,0.2)] transition-transform duration-250 ease-[var(--ease)] hover:-translate-y-1"
          >
            <div className="relative aspect-[5/6] overflow-hidden bg-surface-muted">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                className="object-cover object-top transition-transform duration-500 ease-[var(--ease)] group-hover:scale-105"
              />
            </div>
            <div className="p-5 text-center">
              <Heading as={3} size="h5">
                {member.name}
              </Heading>
              <Text size="small" tone="muted" className="mt-1">
                {member.role}
              </Text>
            </div>
          </article>
        ))}
      </Grid>
    </Section>
  );
}
