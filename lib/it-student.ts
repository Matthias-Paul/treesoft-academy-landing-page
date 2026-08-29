import { getCourseBySlug } from "@/lib/courses";

export const itStudentConfig = {
  path: "/it-student",
  applyUrl: "/it-student/apply",
  applyOpensInNewTab: false,
  discountPercent: 50,
  discountLabel: "IT Students get 50% off — limited slots",
} as const;

export const itStudentHero = {
  headline: "Turn your IT into your first real tech skill.",
  subheadline:
    "Choose any of our six tracks — Frontend, Backend, Mobile, UI/UX, WordPress / Shopify, or Full Stack — live and project-based, alongside your Industrial Training.",
  primaryCta: "Apply Now",
  secondaryCta: "See programs",
} as const;

export const itStudentWhyNow = {
  heading: "Your IT period is supposed to build you. Most of the time, it doesn’t.",
  body: [
    "Too many students spend SIWES printing documents, sitting idle, or logging hours that never turn into skills. You leave with a signed logbook — and the same gaps you came with.",
    "This page is for the moment you’re in right now: on IT, or about to start. Treesoft Academy is how you make this period count — real projects, mentorship, and a skill you can show — not just another semester that slipped by.",
  ],
} as const;

/** All Treesoft Academy tracks available to IT / SIWES students. */
export const itStudentTrackSlugs = [
  "frontend-development",
  "backend-development",
  "mobile-development",
  "ui-ux-design",
  "wordpress-shopify",
  "full-stack-web-development",
] as const;

export const itStudentTrackExtras: Record<
  (typeof itStudentTrackSlugs)[number],
  { outcomeLine: string; weeklyHours: string }
> = {
  "frontend-development": {
    outcomeLine:
      "Ship responsive interfaces with React and modern CSS that belong in a real portfolio.",
    weeklyHours: "Live + self-paced · ~8–12 hrs/week",
  },
  "backend-development": {
    outcomeLine:
      "Build APIs, work with databases, and understand how real backend systems fit together.",
    weeklyHours: "Live + self-paced · ~8–12 hrs/week",
  },
  "mobile-development": {
    outcomeLine:
      "Build cross-platform mobile apps with React Native and prepare them for real-world release.",
    weeklyHours: "Live + self-paced · ~8–12 hrs/week",
  },
  "ui-ux-design": {
    outcomeLine:
      "Design usable product flows and interfaces — from research through polished UI.",
    weeklyHours: "Live + self-paced · ~8–12 hrs/week",
  },
  "wordpress-shopify": {
    outcomeLine:
      "Launch WordPress sites and Shopify stores clients can actually use and buy from.",
    weeklyHours: "Live + build projects · ~8–12 hrs/week",
  },
  "full-stack-web-development": {
    outcomeLine:
      "Ship end-to-end products — frontend, backend, databases, and deployment in one path.",
    weeklyHours: "Live + capstone · ~10–14 hrs/week",
  },
};

export function getItStudentTracks() {
  return itStudentTrackSlugs.map((slug) => {
    const course = getCourseBySlug(slug);
    if (!course) {
      throw new Error(`Missing course for IT student track: ${slug}`);
    }
    const extras = itStudentTrackExtras[slug];
    return {
      slug: course.slug,
      title: course.title,
      image: course.image,
      outcomeLine: extras.outcomeLine,
      format: extras.weeklyHours,
      href: `/courses/${course.slug}`,
    };
  });
}

export const itStudentDiscount = {
  heading: "50% off for IT / SIWES students",
  lead: "The discount exists for one reason: this is the window where building a real skill should be non-negotiable — and cost shouldn’t be the reason you skip it.",
  points: [
    {
      title: "What you get",
      description:
        "50% off tuition on eligible Treesoft Academy tracks while you are on (or about to start) Industrial Training.",
    },
    {
      title: "Who qualifies",
      description:
        "Undergraduates (typically 300/400 level) or ND/HND students currently on IT/SIWES, or with a confirmed upcoming placement.",
    },
    {
      title: "What you’ll submit",
      description:
        "We’ll confirm eligibility during review. Expect to share school ID and/or your IT/SIWES letter — exact requirements will be listed on the application form.",
    },
    {
      title: "Limited slots",
      description:
        "Capacity is limited per cohort so mentorship stays real. Apply early — we don’t use fake countdown timers; when slots fill, the offer pauses.",
    },
  ],
} as const;

export const itStudentSteps = [
  {
    step: "01",
    title: "Apply",
    description:
      "Fill the form. Tell us your track preference and your IT / SIWES status.",
  },
  {
    step: "02",
    title: "Get reviewed",
    description:
      "Our team confirms eligibility and applies your IT student discount.",
  },
  {
    step: "03",
    title: "Start learning",
    description:
      "Begin live, project-based classes alongside your Industrial Training.",
  },
  {
    step: "04",
    title: "Build a portfolio",
    description:
      "Leave this period with real projects — not just a signed logbook.",
  },
] as const;

export const itStudentSocialProof = {
  heading: "Students who treated training like training",
  lead: "We don’t invent IT-specific stats. Here’s what learners who came through hands-on programs at Treesoft say about the shift from theory to real work.",
} as const;

export const itStudentFaqs = [
  {
    id: "experience",
    question: "Do I need any prior experience?",
    answer:
      "No. Our beginner-friendly tracks start from fundamentals. What you need is a laptop, reliable internet, and the willingness to put in weekly practice alongside your IT.",
  },
  {
    id: "time",
    question: "How much time do I need weekly?",
    answer:
      "Plan for roughly 8–12 hours per week — a mix of live sessions and self-paced project work. The schedule is designed to sit alongside a typical IT placement, not replace it.",
  },
  {
    id: "after-it",
    question: "What happens after my IT ends — can I keep learning?",
    answer:
      "Yes. Once you’re enrolled, you continue through the program timeline even if your SIWES placement ends mid-cohort. The goal is finishing with skills and projects, not stopping when the logbook closes.",
  },
  {
    id: "certificate",
    question: "Is the certificate / portfolio recognized?",
    answer:
      "You’ll earn a Treesoft Academy certificate of completion and — more importantly — portfolio projects you can show employers. Hiring managers care about what you can build; we train for that.",
  },
  {
    id: "discount-how",
    question: "How does the discount work / what do I need to submit?",
    answer:
      "Apply through the IT student form and note your SIWES status. Our team verifies eligibility (school ID and/or IT letter as requested on the form), then confirms your 50% off tuition before you start.",
  },
] as const;

export const itStudentFinalCta = {
  heading: "Make this IT period count.",
  body: "Apply for the IT student offer, pick your track, and spend this season building a skill — not just filling a logbook.",
  primaryCta: "Apply Now",
} as const;
