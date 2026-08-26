import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function AboutHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="about-hero-heading"
    >
      <Image
        src="/images/background-2-scaled.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-bg-zoom object-cover object-center"
      />
      <div className="absolute inset-0 bg-brand-mid/45" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-container px-5 py-24 sm:px-8 md:py-32 lg:px-[2.1875rem] lg:py-[12.5rem]">
        <div className="hero-reveal hero-reveal-1 max-w-2xl text-center lg:max-w-xl lg:text-left">
          <h1
            id="about-hero-heading"
            className="text-display text-white"
          >
            About Treesoft Academy
          </h1>
          <p className="hero-reveal hero-reveal-2 mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg lg:mx-0">
            Established in 2024, Treesoft Academy is a specialized agency in
            custom software and mobile app development education. Our Frontend
            Clinic sector leads the way in transforming passionate learners into
            industry-ready professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
