export type CourseCategory = {
  slug: string;
  title: string;
  description: string;
  icon: "code" | "server" | "mobile" | "design" | "react" | "fullstack";
};

export const courseCategories: CourseCategory[] = [
  {
    slug: "frontend-development",
    title: "Frontend Development",
    description:
      "Master modern web development with React, Next.js, and more.",
    icon: "code",
  },
  {
    slug: "backend-development",
    title: "Backend Development",
    description:
      "Build powerful server-side applications and APIs for scalable solutions.",
    icon: "server",
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    description:
      "Develop native mobile applications for both iOS and Android platforms.",
    icon: "mobile",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Create visually appealing and intuitive user interfaces for better experiences.",
    icon: "design",
  },
  {
    slug: "advanced-react-nextjs",
    title: "Advanced React & Next.js",
    description: "Build modern web applications with React and Next.js.",
    icon: "react",
  },
  {
    slug: "full-stack-web-development",
    title: "Full Stack Web Development",
    description: "Comprehensive course covering both frontend and backend.",
    icon: "fullstack",
  },
];

export function getCourseHref(slug: string) {
  return `/courses/${slug}` as const;
}
