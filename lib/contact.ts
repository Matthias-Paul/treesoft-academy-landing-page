export const contactSubjects = [
  { value: "courses", label: "Course enrollment" },
  { value: "it-student", label: "IT student application" },
  { value: "partnership", label: "Partnership or collaboration" },
  { value: "general", label: "General inquiry" },
] as const;

export type ContactSubject = (typeof contactSubjects)[number]["value"];

export const contactHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
] as const;
