import type { Metadata } from "next";
import {
  CoursesCatalog,
  CoursesHero,
  CoursesValues,
  CoursesVision,
} from "@/components/courses";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Courses",
  description: `Transform your career with comprehensive tech courses at ${siteConfig.name}. Learn from industry experts and get hands-on experience with real-world projects.`,
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: `Courses | ${siteConfig.name}`,
    description: `Explore frontend, backend, mobile, UI/UX, and full stack courses at ${siteConfig.name}.`,
    url: "/courses",
  },
};

export default function CoursesPage() {
  return (
    <main id="main-content" className="flex-1">
      <CoursesHero />
      <CoursesCatalog />
      <CoursesValues />
      <CoursesVision />
    </main>
  );
}
