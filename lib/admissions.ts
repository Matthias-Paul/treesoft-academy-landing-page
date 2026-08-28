export const enrollmentSteps = [
  {
    step: "01",
    title: "Pick your program",
    description:
      "Browse our courses and open the one that fits your goal. Each page shows what you'll learn, how long it runs, and what's included.",
  },
  {
    step: "02",
    title: "Reach out to enroll",
    description:
      "When you're ready, contact our team. We'll confirm availability, answer questions, and walk you through payment or installment options.",
  },
  {
    step: "03",
    title: "Get confirmed",
    description:
      "Once payment is sorted, you'll receive confirmation with your start date, schedule, and what to prepare before class.",
  },
  {
    step: "04",
    title: "Start building",
    description:
      "Join live sessions, work through projects, and get feedback from mentors — the same path our learners use to grow from practice to portfolio work.",
  },
] as const;

export const enrollmentIntro = {
  heading: "How to enroll",
  lead: "No hidden steps. Choose a program, talk to us, and start when your cohort begins.",
} as const;

export const itStudentEnrollmentNote = {
  title: "On IT or SIWES?",
  description:
    "If you're on Industrial Training, apply through our IT student page for 50% off tuition. You'll submit a short form — our team reviews eligibility before you pay.",
  cta: "Apply as an IT Student",
} as const;
