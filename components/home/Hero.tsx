import Image from "next/image";
import { ButtonLink } from "@/components/ui";
import { siteConfig } from "@/lib/site";

const heroImages = [
  {
    src: "/images/african-girl-smiling-sitting-wokplace-with-laptop-1-1536x1024.webp",
    alt: "Student smiling while working on a laptop at Treesoft Academy",
    priority: true,
  },
  {
    src: "/images/remote-worker-uses-conversational-ai-bot-help-solve-daily-tasks-1-1536x864.jpg",
    alt: "Developer collaborating with AI tools on daily coding tasks",
    priority: false,
  },
] as const;

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/images/background-1.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-bg-zoom object-cover object-center"
      />
      <div className="absolute inset-0 bg-brand-mid/45" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-container items-center gap-10 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[44%_56%] lg:gap-8 lg:px-[2.1875rem] lg:py-[8.75rem] xl:gap-12">
        <div className="hero-reveal hero-reveal-1 text-center lg:pr-4 lg:text-left">
          <div id="hero-heading" className="text-display text-white">
            Transform Your Tech Journey with {siteConfig.name}
          </div>

          <div className="hero-reveal hero-reveal-2 text-center lg:text-left mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg lg:mx-0">
            Join a community of innovators and master the skills that shape
            tomorrow&apos;s technology. From frontend development to UI/UX
            design, we&apos;re here to guide your journey.
          </div>

          <div className="hero-reveal hero-reveal-3 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <ButtonLink
              href="/courses"
              variant="primary"
              size="lg"
              className="w-full min-w-[11rem] sm:w-auto"
            >
              Start Your Journey
            </ButtonLink>
            <ButtonLink
              href="/about"
              variant="white"
              size="lg"
              className="w-full min-w-[11rem] px-10 sm:w-auto"
            >
              Explore Now
            </ButtonLink>
          </div>
        </div>

        <div className="hero-reveal hero-reveal-2 hidden lg:grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5">
          {heroImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative aspect-[3/4] w-full overflow-hidden rounded-[10px] shadow-[0_20px_50px_rgb(0_0_0_/0.25)] sm:aspect-[4/5] ${
                index === 0 ? "hero-reveal-2" : "hero-reveal-3 sm:mt-8"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={image.priority}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 28vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
