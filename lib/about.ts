export const aboutValues = [
  {
    title: "Excellence",
    description:
      "We pursue excellence in everything we do, from curriculum design to student support.",
  },
  {
    title: "Innovation",
    description:
      "We embrace new technologies and teaching methods to deliver cutting-edge tech education.",
  },
  {
    title: "Community",
    description:
      "We foster a supportive community where students learn, grow, and succeed together.",
  },
  {
    title: "Mission",
    description:
      "Igniting curiosity and motivation through learning and mentorship from experts.",
  },
  {
    title: "Vision",
    description:
      "Lead in transforming learners into innovators, empowering tech-driven creation, problem-solving, and leadership.",
  },
  {
    title: "Growth",
    description:
      "We foster continuous learning and personal development for both students and instructors.",
  },
] as const;

export const aboutTeam = [
  {
    name: "Sarah Johnson",
    role: "Lead Frontend Instructor",
    image: "/images/ali-morshedlou-WMD64tMfc4k-unsplash.jpg",
  },
  {
    name: "Michael Chen",
    role: "Backend Development Lead",
    image: "/images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg",
  },
  {
    name: "David Kim",
    role: "Mobile Development Instructor",
    image: "/images/bantersnaps-pzOUnvx9c1E-unsplash.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "UI/UX Design Instructor",
    image: "/images/disruptivo-pdejnCbAyxU-unsplash.jpg",
  },
] as const;

export const aboutMission =
  "To ignite curiosity, fuel innovation, and cultivate mastery in technology. Through hands-on learning, mentorship from industry experts, and real-world projects, we empower students to break boundaries, build impactful solutions, and thrive in the fast-evolving tech landscape.";

export const aboutVision =
  "To be the leading tech academy that transforms passionate learners into industry-ready innovators. We envision a future where technology empowers individuals to create, solve, and lead with confidence, shaping the digital world of tomorrow.";

/** Values shown on the Courses page (matches the live site). */
export const coursesPageValues = aboutValues.slice(0, 4);
