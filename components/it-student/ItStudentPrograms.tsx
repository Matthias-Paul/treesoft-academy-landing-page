import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Grid, Heading, Section, Text } from "@/components/ui";
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
          <article
            key={track.slug}
            className="flex h-full flex-col overflow-hidden rounded-[10px] bg-white shadow-[0_16px_40px_0_rgba(192,198,211,0.22)] transition-[transform,box-shadow] duration-250 ease-[var(--ease)] hover:-translate-y-1 hover:shadow-[0_24px_50px_0_rgba(0,86,18,0.12)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
              <Image
                src={track.image}
                alt=""
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-7">
              <Heading as={3} size="h4" className="mb-2.5">
                {track.title}
              </Heading>
              <Text size="body" tone="muted" className="flex-1">
                {track.outcomeLine}
              </Text>

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
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
                  className="inline-flex min-h-9 items-center justify-center px-2 text-sm font-semibold text-brand-dark transition-colors hover:text-brand"
                >
                  View course detail
                </Link>
              </div>
            </div>
          </article>
        ))}
      </Grid>
    </Section>
  );
}
