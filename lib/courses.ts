export type CourseOutlineModule = {
  title: string;
  lessons: string[];
};

export type CoursePricing = {
  amount: number;
  currency: "NGN";
  label: string;
  note: string;
  installment?: string;
};

export type CourseCategory = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  about: string;
  icon: "code" | "server" | "mobile" | "design" | "cms" | "fullstack";
  image: string;
  duration: string;
  level: string;
  format: string;
  schedule: string;
  pricing: CoursePricing;
  includes: string[];
  requirements: string[];
  outcomes: string[];
  careerOutcomes: string[];
  outline: CourseOutlineModule[];
  whoFor: string[];
};

export const courseCategories: CourseCategory[] = [
  {
    slug: "frontend-development",
    title: "Frontend Development",
    description:
      "Master modern web development with React, Next.js, and more.",
    summary:
      "Master modern web development with React, Next.js, and TypeScript. Build fast, scalable interfaces through real-world projects.",
    about:
      "This program takes you from core web fundamentals to building production-ready interfaces with React and Next.js. You will learn modern tooling, component architecture, styling systems, and how to collaborate like a professional frontend engineer through mentorship and project-based learning.",
    icon: "code",
    image: "/images/male-programmer-working-developing-new-html-script-1-1536x1024.jpg",
    duration: "12–16 weeks",
    level: "Beginner to Intermediate",
    format: "Live sessions + self-paced projects",
    schedule: "Weekday evenings & weekend labs",
    pricing: {
      amount: 250000,
      currency: "NGN",
      label: "Full program fee",
      note: "Includes mentorship, project reviews, and certificate of completion.",
      installment: "Flexible installment plans available on request.",
    },
    includes: [
      "Live instructor-led classes",
      "Hands-on project portfolio",
      "Code reviews and mentorship",
      "Certificate of completion",
      "Career guidance support",
    ],
    requirements: [
      "Basic computer literacy and reliable internet access",
      "A laptop capable of running modern browsers and VS Code",
      "Willingness to practice coding outside class hours",
      "No prior programming experience required",
    ],
    outcomes: [
      "Build responsive, production-ready interfaces",
      "Work confidently with React, Next.js, and TypeScript",
      "Style applications with modern CSS and Tailwind",
      "Ship portfolio projects that demonstrate real skill",
    ],
    careerOutcomes: [
      "Junior Frontend Developer",
      "React Developer",
      "UI Engineer",
      "Web Development Intern / Associate",
    ],
    outline: [
      {
        title: "Module 1 — Web Foundations",
        lessons: [
          "HTML semantics and accessibility basics",
          "CSS layout, Flexbox, and Grid",
          "Modern JavaScript (ES6+)",
        ],
      },
      {
        title: "Module 2 — React Essentials",
        lessons: [
          "Components, props, and state",
          "Hooks and side effects",
          "Forms, lists, and conditional UI",
        ],
      },
      {
        title: "Module 3 — Next.js & TypeScript",
        lessons: [
          "App Router fundamentals",
          "Routing, layouts, and data fetching",
          "TypeScript for frontend apps",
        ],
      },
      {
        title: "Module 4 — Styling & Delivery",
        lessons: [
          "Tailwind CSS and component systems",
          "API integration and error states",
          "Deployment, performance, and portfolio polish",
        ],
      },
    ],
    whoFor: [
      "Beginners starting a career in web development",
      "Designers who want to become frontend developers",
      "Anyone ready to build interactive web products",
    ],
  },
  {
    slug: "backend-development",
    title: "Backend Development",
    description:
      "Build powerful server-side applications and APIs for scalable solutions.",
    summary:
      "Build robust server-side applications and APIs with Node.js, Express, and databases — then deploy them with confidence.",
    about:
      "This course focuses on the server side of modern software. You will design APIs, model data, implement authentication, and learn how to structure, secure, and deploy backend services used by real applications.",
    icon: "server",
    image: "/images/business-woman-working-office-1-scaled.jpg",
    duration: "12–16 weeks",
    level: "Beginner to Intermediate",
    format: "Live sessions + self-paced projects",
    schedule: "Weekday evenings & weekend labs",
    pricing: {
      amount: 250000,
      currency: "NGN",
      label: "Full program fee",
      note: "Includes mentorship, project reviews, and certificate of completion.",
      installment: "Flexible installment plans available on request.",
    },
    includes: [
      "Live instructor-led classes",
      "API and database projects",
      "Code reviews and mentorship",
      "Certificate of completion",
      "Deployment walkthroughs",
    ],
    requirements: [
      "Basic computer literacy and reliable internet access",
      "Comfort with using the command line at a beginner level",
      "A laptop suitable for Node.js development",
      "Prior frontend knowledge is helpful but not required",
    ],
    outcomes: [
      "Design and build RESTful APIs",
      "Work with databases and authentication",
      "Structure scalable Node.js applications",
      "Deploy and secure backend services",
    ],
    careerOutcomes: [
      "Junior Backend Developer",
      "API Developer",
      "Node.js Developer",
      "Software Engineering Intern",
    ],
    outline: [
      {
        title: "Module 1 — Server Foundations",
        lessons: [
          "HTTP, APIs, and client-server architecture",
          "Node.js runtime essentials",
          "Express application structure",
        ],
      },
      {
        title: "Module 2 — Data & Persistence",
        lessons: [
          "Database concepts and modeling",
          "CRUD operations and validation",
          "Working with ORMs / query patterns",
        ],
      },
      {
        title: "Module 3 — Auth & Security",
        lessons: [
          "Authentication and authorization",
          "Password hashing and sessions/tokens",
          "Common security best practices",
        ],
      },
      {
        title: "Module 4 — Production Readiness",
        lessons: [
          "Error handling and logging",
          "Testing backend endpoints",
          "Deployment and environment configuration",
        ],
      },
    ],
    whoFor: [
      "Aspiring backend or full stack developers",
      "Frontend developers expanding into the server side",
      "Builders who want to create secure, scalable APIs",
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    description:
      "Develop native mobile applications for both iOS and Android platforms.",
    summary:
      "Build cross-platform mobile apps with React Native, then prepare them for App Store and Google Play release.",
    about:
      "Learn to design and ship mobile experiences that feel native on both iOS and Android. This program covers React Native, navigation, device features, performance, and the practical steps required to publish mobile products.",
    icon: "mobile",
    image: "/images/developer-coding-desk-1536x864.jpg",
    duration: "12–16 weeks",
    level: "Intermediate",
    format: "Live sessions + self-paced projects",
    schedule: "Weekday evenings & weekend labs",
    pricing: {
      amount: 300000,
      currency: "NGN",
      label: "Full program fee",
      note: "Includes mentorship, project reviews, and certificate of completion.",
      installment: "Flexible installment plans available on request.",
    },
    includes: [
      "Live instructor-led classes",
      "Cross-platform app projects",
      "Mentorship and code reviews",
      "Certificate of completion",
      "Store deployment guidance",
    ],
    requirements: [
      "Basic JavaScript or React familiarity recommended",
      "A capable laptop for mobile development tooling",
      "Android Studio / Xcode setup guidance provided in class",
      "Commitment to weekly project milestones",
    ],
    outcomes: [
      "Build cross-platform mobile apps with React Native",
      "Create polished, performant mobile interfaces",
      "Handle navigation, state, and device features",
      "Prepare apps for store submission",
    ],
    careerOutcomes: [
      "Junior Mobile Developer",
      "React Native Developer",
      "Cross-Platform App Developer",
      "Mobile Engineering Intern",
    ],
    outline: [
      {
        title: "Module 1 — Mobile Foundations",
        lessons: [
          "React Native project setup",
          "Core components and styling",
          "Platform differences and tooling",
        ],
      },
      {
        title: "Module 2 — App Architecture",
        lessons: [
          "Navigation patterns",
          "State management for mobile",
          "Forms, lists, and reusable UI",
        ],
      },
      {
        title: "Module 3 — Device & Data",
        lessons: [
          "API integration",
          "Local storage and offline basics",
          "Permissions and device features",
        ],
      },
      {
        title: "Module 4 — Launch Ready",
        lessons: [
          "Testing and debugging",
          "Performance optimization",
          "App Store and Play Store deployment",
        ],
      },
    ],
    whoFor: [
      "Developers interested in iOS and Android apps",
      "Frontend engineers expanding into mobile",
      "Builders who want one codebase for both platforms",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Create visually appealing and intuitive user interfaces for better experiences.",
    summary:
      "Learn UI/UX principles, Figma workflows, and design systems that translate cleanly into developer-ready products.",
    about:
      "This program develops both the craft and process of product design. You will research users, wireframe solutions, design polished interfaces in Figma, and learn how to collaborate effectively with engineering teams.",
    icon: "design",
    image: "/images/5726840-1536x1024.jpg",
    duration: "10–14 weeks",
    level: "Beginner to Intermediate",
    format: "Live sessions + design critiques",
    schedule: "Weekday evenings & weekend critiques",
    pricing: {
      amount: 200000,
      currency: "NGN",
      label: "Full program fee",
      note: "Includes mentorship, critique sessions, and certificate of completion.",
      installment: "Flexible installment plans available on request.",
    },
    includes: [
      "Live instructor-led classes",
      "Portfolio case study projects",
      "Design critiques and mentorship",
      "Certificate of completion",
      "Developer handoff guidance",
    ],
    requirements: [
      "Interest in design and problem-solving",
      "A laptop that can run Figma smoothly",
      "No prior design degree required",
      "Openness to feedback and iteration",
    ],
    outcomes: [
      "Design user-centered digital products",
      "Build consistent design systems in Figma",
      "Apply accessibility and usability best practices",
      "Hand off developer-friendly design assets",
    ],
    careerOutcomes: [
      "Junior UI/UX Designer",
      "Product Designer (Associate)",
      "Visual / Interface Designer",
      "Design Intern",
    ],
    outline: [
      {
        title: "Module 1 — Design Foundations",
        lessons: [
          "UX thinking and user research basics",
          "Information architecture",
          "Wireframing and flows",
        ],
      },
      {
        title: "Module 2 — Visual Interface Design",
        lessons: [
          "Typography, color, and layout",
          "Components and design systems",
          "High-fidelity UI in Figma",
        ],
      },
      {
        title: "Module 3 — Usability & Accessibility",
        lessons: [
          "Usability testing methods",
          "Accessibility principles",
          "Iteration from feedback",
        ],
      },
      {
        title: "Module 4 — Delivery & Portfolio",
        lessons: [
          "Prototyping interactions",
          "Developer handoff",
          "Case study presentation",
        ],
      },
    ],
    whoFor: [
      "Aspiring product designers",
      "Developers who want stronger design skills",
      "Creatives moving into digital product design",
    ],
  },
  {
    slug: "wordpress-shopify",
    title: "WordPress / Shopify",
    description:
      "Build professional websites and online stores with WordPress and Shopify.",
    summary:
      "Learn to design, build, and launch WordPress sites and Shopify stores — from themes and content to payments and launch.",
    about:
      "This program teaches you how to create real client-ready websites and ecommerce stores without starting from a blank code editor. You will learn WordPress for content-driven sites and Shopify for online stores, including themes, pages, products, payments, and the workflows freelancers and agencies use every day.",
    icon: "cms",
    image: "/images/business-woman-working-office-1-scaled.jpg",
    duration: "8–12 weeks",
    level: "Beginner to Intermediate",
    format: "Live sessions + build projects",
    schedule: "Weekday evenings & weekend labs",
    pricing: {
      amount: 250000,
      currency: "NGN",
      label: "Full program fee",
      note: "Includes mentorship, project reviews, and certificate of completion.",
      installment: "Flexible installment plans available on request.",
    },
    includes: [
      "Live instructor-led classes",
      "WordPress and Shopify projects",
      "Theme setup and customization guidance",
      "Certificate of completion",
      "Freelance and client delivery tips",
    ],
    requirements: [
      "Basic computer literacy and reliable internet access",
      "A laptop capable of running modern browsers",
      "Willingness to practice building sites outside class hours",
      "No coding experience required",
    ],
    outcomes: [
      "Build and launch professional WordPress websites",
      "Set up and customize a Shopify store for real products",
      "Manage pages, products, media, and basic SEO",
      "Deliver client-ready sites with a clear handoff process",
    ],
    careerOutcomes: [
      "WordPress Developer / Site Builder",
      "Shopify Store Specialist",
      "Freelance Web Designer",
      "Ecommerce Assistant / Coordinator",
    ],
    outline: [
      {
        title: "Module 1 — WordPress Foundations",
        lessons: [
          "Hosting, domains, and WordPress setup",
          "Themes, pages, posts, and media",
          "Menus, plugins, and site structure",
        ],
      },
      {
        title: "Module 2 — WordPress Delivery",
        lessons: [
          "Page builders and layout systems",
          "Forms, speed, and basic SEO",
          "Launch checklist and client handoff",
        ],
      },
      {
        title: "Module 3 — Shopify Store Setup",
        lessons: [
          "Store setup, themes, and navigation",
          "Products, collections, and media",
          "Payments, shipping, and checkout basics",
        ],
      },
      {
        title: "Module 4 — Shopify Growth & Polish",
        lessons: [
          "Homepage and product page conversion",
          "Apps, analytics, and order workflows",
          "Portfolio store project and launch",
        ],
      },
    ],
    whoFor: [
      "Beginners who want to build websites fast",
      "Entrepreneurs launching an online store",
      "Freelancers aiming to offer WordPress or Shopify services",
    ],
  },
  {
    slug: "full-stack-web-development",
    title: "Full Stack Web Development",
    description: "Comprehensive course covering both frontend and backend.",
    summary:
      "A complete path covering frontend, backend, databases, and deployment so you can ship full products.",
    about:
      "This comprehensive program prepares you to build applications end to end. You will learn React/Next.js on the frontend, Node.js/Express on the backend, connect databases and authentication, and finish with a portfolio-ready capstone project.",
    icon: "fullstack",
    image: "/images/campaign-creators-qCi_MzVODoU-unsplash.jpg",
    duration: "16–20 weeks",
    level: "Beginner to Intermediate",
    format: "Live sessions + capstone project",
    schedule: "Weekday evenings & weekend labs",
    pricing: {
      amount: 350000,
      currency: "NGN",
      label: "Full program fee",
      note: "Includes mentorship, capstone review, and certificate of completion.",
      installment: "Flexible installment plans available on request.",
    },
    includes: [
      "Live full-stack instruction",
      "Capstone project mentorship",
      "Code reviews across the stack",
      "Certificate of completion",
      "Career and portfolio guidance",
    ],
    requirements: [
      "Basic computer literacy and consistent study time",
      "A laptop suitable for full stack development",
      "No computer science degree required",
      "Motivation to complete a multi-week capstone",
    ],
    outcomes: [
      "Build complete full-stack applications end to end",
      "Connect frontend interfaces to backend APIs",
      "Work with databases, auth, and deployment",
      "Deliver a portfolio-ready capstone project",
    ],
    careerOutcomes: [
      "Junior Full Stack Developer",
      "Software Developer",
      "Web Application Developer",
      "Engineering Intern / Associate",
    ],
    outline: [
      {
        title: "Module 1 — Frontend Core",
        lessons: [
          "HTML, CSS, and JavaScript foundations",
          "React essentials",
          "Next.js application structure",
        ],
      },
      {
        title: "Module 2 — Backend Core",
        lessons: [
          "Node.js and Express",
          "REST API development",
          "Databases and data modeling",
        ],
      },
      {
        title: "Module 3 — Integration",
        lessons: [
          "Auth across frontend and backend",
          "Connecting clients to APIs",
          "Testing and debugging workflows",
        ],
      },
      {
        title: "Module 4 — Capstone & Launch",
        lessons: [
          "Full product build",
          "Deployment and documentation",
          "Portfolio presentation and career prep",
        ],
      },
    ],
    whoFor: [
      "Career switchers entering software development",
      "Learners who want end-to-end product skills",
      "Builders aiming for full stack roles",
    ],
  },
];

export function formatCoursePrice(pricing: CoursePricing) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: pricing.currency,
    maximumFractionDigits: 0,
  }).format(pricing.amount);
}

export function getCourseHref(slug: string) {
  return `/courses/${slug}` as const;
}

export function getCourseBySlug(slug: string) {
  return courseCategories.find((course) => course.slug === slug);
}

export function getAllCourseSlugs() {
  return courseCategories.map((course) => course.slug);
}
