import { ButtonLink, Grid, Heading, IconBox, Section, Text } from "@/components/ui";
import { courseCategories, getCourseHref } from "@/lib/courses";
import { siteConfig } from "@/lib/site";

function CategoryIcon({ name }: { name: (typeof courseCategories)[number]["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "code":
      return (
        <svg {...common}>
          <path d="M8 7L3 12l5 5M16 7l5 5-5 5M14 4l-4 16" />
        </svg>
      );
    case "server":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" rx="1.5" />
          <rect x="3" y="14" width="18" height="6" rx="1.5" />
          <path d="M7 7h.01M7 17h.01" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...common}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    case "design":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20a7 7 0 0 1 14 0" />
          <path d="M16.5 3.5 20 7" />
        </svg>
      );
    case "react":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(120 12 12)"
          />
        </svg>
      );
    case "fullstack":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h10" />
          <path d="M16 15l2 2 3-4" />
        </svg>
      );
  }
}

export function CourseCategories() {
  return (
    <Section id="categories" spacious aria-labelledby="categories-heading">
      <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
        <Heading as={2} size="h2" id="categories-heading">
          Browse Courses By Categories
        </Heading>
        <Text size="lead" tone="muted" className="mt-3">
          Explore structured learning paths designed to take you from
          fundamentals to job-ready skills.
        </Text>
      </div>

      <Grid cols={3} gap="lg">
        {courseCategories.map((course) => (
          <IconBox
            key={course.slug}
            href={getCourseHref(course.slug)}
            icon={<CategoryIcon name={course.icon} />}
            title={course.title}
            description={course.description}
          />
        ))}
      </Grid>

      <div className="mt-10  flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-14">
        
        <div className="text-white hover:text-black transition-colors duration-250 ease-[var(--ease)]" >
        <ButtonLink href="/courses" variant="primary" size="lg">
          View Pricing
        </ButtonLink>
          </div>
        <div className="text-black hover:text-white transition-colors duration-250 ease-[var(--ease)]" >
        <ButtonLink href={siteConfig.cta.href} variant="outline" size="lg">
          Take Action
        </ButtonLink>
      </div>
      </div>
    </Section>
  );
}
