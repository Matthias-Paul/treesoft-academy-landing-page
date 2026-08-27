import Image from "next/image";
import { ButtonLink } from "@/components/ui";
import { siteConfig } from "@/lib/site";

export function CoursesHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="courses-hero-heading"
    >
      <Image
        src="/images/background-2-scaled.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-bg-zoom object-cover object-center"
      />
      <div className="absolute inset-0 bg-brand-dark/55" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-container flex-col items-center px-5 py-24 text-center sm:px-8 md:py-32 lg:px-[2.1875rem] lg:py-[12.5rem]">
        <div className="hero-reveal hero-reveal-1 max-w-3xl">
          <h1 id="courses-hero-heading" className="text-display text-white">
            Our Courses
          </h1>
          <p className="hero-reveal hero-reveal-2 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
            Transform your career with our comprehensive tech courses. Learn
            from industry experts and get hands-on experience with real-world
            projects.
          </p>

          <div className="hero-reveal hero-reveal-3 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="#categories" variant="white" size="lg">
              Browse Categories
            </ButtonLink>
            <ButtonLink
              href={siteConfig.cta.href}
              variant="outline"
              size="lg"
              className="border-white text-white hover:border-white "
            >
              Talk to an Advisor
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
