import Link from "next/link";
import { ButtonLink, Grid, Heading, Section, Text } from "@/components/ui";
import { CourseCard } from "@/components/courses/CourseCard";
import {
  getItStudentTracks,
  itStudentConfig,
} from "@/lib/it-student";

export function ItStudentPrograms() {
  const tracks = getItStudentTracks();

  return (
    <Section id="programs" spacious aria-labelledby="it-programs-heading">
      <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
        <Heading as={2} size="h2" id="it-programs-heading">
          Programs for your IT period
        </Heading>
        <Text size="lead" tone="muted" className="mt-3">
          Pick the track that matches where you want to leave this season —
          with something you can actually build and show.
        </Text>
      </div>

      <Grid cols={3} gap="lg">
        {tracks.map((track) => (
          <CourseCard
            key={track.slug}
            href={track.href}
            title={track.title}
            description={track.outcomeLine}
            image={track.image}
            meta={track.format}
            ctaLabel="View course detail"
            footer={
              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <ButtonLink
                  href={itStudentConfig.applyUrl}
                  variant="primary"
                  size="sm"
                  className="w-full sm:w-auto"
                  {...(itStudentConfig.applyOpensInNewTab
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  Apply for this track
                </ButtonLink>
                <Link
                  href={track.href}
                  className="inline-flex min-h-9 items-center justify-center px-1 text-sm font-semibold text-brand-dark transition-colors hover:text-brand"
                >
                  Full program page
                </Link>
              </div>
            }
          />
        ))}
      </Grid>
    </Section>
  );
}
