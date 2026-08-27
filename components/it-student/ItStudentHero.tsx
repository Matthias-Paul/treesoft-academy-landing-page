import Image from "next/image";
import { ButtonLink } from "@/components/ui";
import {
  itStudentConfig,
  itStudentHero,
} from "@/lib/it-student";

function ApplyLink({
  children,
  variant = "white",
  className,
}: {
  children: React.ReactNode;
  variant?: "primary" | "white" | "outline";
  className?: string;
}) {
  return (
    <ButtonLink
      href={itStudentConfig.applyUrl}
      variant={variant}
      size="lg"
      className={className}
      {...(itStudentConfig.applyOpensInNewTab
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </ButtonLink>
  );
}

export function ItStudentHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="it-student-hero-heading"
    >
      <Image
        src="/images/background-1.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-bg-zoom object-cover object-center"
      />
      <div className="absolute inset-0 bg-brand-dark/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-container items-center gap-10 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[1fr_0.9fr] lg:gap-12 lg:px-[2.1875rem] lg:py-[7.5rem]">
        <div className="hero-reveal hero-reveal-1 text-center lg:text-left">
          <h1
            id="it-student-hero-heading"
            className="text-display text-white"
          >
            {itStudentHero.headline}
          </h1>

          <p className="hero-reveal hero-reveal-2 mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg lg:mx-0">
            {itStudentHero.subheadline}
          </p>

          <div className="hero-reveal hero-reveal-2 mt-6 flex justify-center lg:justify-start">
            <span className="inline-flex items-center rounded-md border border-white/25 bg-white/10 px-3.5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              {itStudentConfig.discountLabel}
            </span>
          </div>

          <div className="hero-reveal hero-reveal-3 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <ApplyLink
              variant="white"
              className="w-full min-w-[11rem] sm:w-auto"
            >
              {itStudentHero.primaryCta}
            </ApplyLink>
            <ButtonLink
              href="#programs"
              variant="outline"
              size="lg"
              className="w-full min-w-[11rem] border-white text-white hover:border-white  hover:text-brand-dark sm:w-auto"
            >
              {itStudentHero.secondaryCta}
            </ButtonLink>
          </div>
        </div>

        <div className="hero-reveal hero-reveal-3 relative mx-auto hidden aspect-[4/5] w-full max-w-md overflow-hidden rounded-[10px] lg:mx-0 lg:block lg:max-w-none">
          <Image
            src="/images/african-girl-smiling-sitting-wokplace-with-laptop-1-1536x1024.webp"
            alt="Student focused on building skills on a laptop"
            fill
            priority
            sizes="(max-width: 1024px) 0vw, 40vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
