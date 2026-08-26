import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDetail } from "@/components/courses";
import {
  getAllCourseSlugs,
  getCourseBySlug,
} from "@/lib/courses";
import { siteConfig } from "@/lib/site";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: "Course not found" };
  }

  return {
    title: course.title,
    description: course.summary,
    alternates: {
      canonical: `/courses/${course.slug}`,
    },
    openGraph: {
      title: `${course.title} | ${siteConfig.name}`,
      description: course.summary,
      url: `/courses/${course.slug}`,
    },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <main id="main-content" className="flex-1">
      <CourseDetail course={course} />
    </main>
  );
}
