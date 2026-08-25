import {
  CourseCategories,
  FaqJsonLd,
  FeaturedCourses,
  GetInTouch,
  Hero,
} from "@/components/home";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <FaqJsonLd />
      <main id="main-content" className="flex-1">
        <Hero />
        <CourseCategories />
        <GetInTouch />
        <FeaturedCourses />
      </main>
    </>
  );
}
