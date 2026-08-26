export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "paul",
    name: "Adesina Paul",
    role: "FullStack Developer at Treesoft",
    image: "/images/paul-1.webp",
    quote:
      "Since joining Treesoft, I've gained hands-on experience by working on real-world projects and grown through mentorship from senior developers. This internship has helped me transition from theory to practical coding, improving my skills, mindset, and understanding of the tech industry.",
  },
  {
    id: "imran",
    name: "Imran Fatihah",
    role: "Frontend Developer at Treesoft",
    image: "/images/Dojah-1542x2048.webp",
    quote:
      "During my Treesoft internship, I improved my coding and collaboration skills. I learned to write clean, scalable code, communicate effectively, and work within deadlines. Feedback from senior developers refined my work and helped me deliver high-quality, well-documented projects.",
  },
  {
    id: "esther",
    name: "Esther Adetogun",
    role: "Graphic Designer at Treesoft",
    image: "/images/Esther-5-2-1.jpg",
    quote:
      "Working with the team at Treesoft greatly enhanced my design skills and collaboration. I learned to follow brand guidelines, maintain consistency, and deliver developer-friendly assets. Feedback from seniors strengthened my confidence, creativity, and ability to refine impactful designs.",
  },
];
