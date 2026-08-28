import {
  CourseCategories,
  FaqJsonLd,
  FeaturedCourses,
  FinalCta,
  GetInTouch,
  Hero,
  HowToEnroll,
  SuccessStories,
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
        <HowToEnroll />
        <GetInTouch />
        <FeaturedCourses />
        <SuccessStories />
        <FinalCta />
      </main>
    </>
  );
}
