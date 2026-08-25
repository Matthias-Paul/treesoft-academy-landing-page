export const siteConfig = {
  name: "Treesoft Academy",
  shortName: "Treesoft",
  tagline: "Transform Your Tech Journey",
  description:
    "Join a community of innovators and master the skills that shape tomorrow’s technology. From frontend development to UI/UX design, Treesoft Academy guides your journey.",
  url: "https://treesoftacademy.com",
  locale: "en_NG",
  phone: "+2349037019967",
  phoneDisplay: "(+234) 9037019967",
  email: "info@treesoftacademy.com",
  contactEmail: "temitope@treesoft.ng",
  address: "No. 6 Funsho Ajayi Street, Aguda, Surulere, Lagos.",
  company: "Treesoft Nig. Ltd.",
  cta: {
    label: "Reach Out Now",
    href: "mailto:temitope@treesoft.ng",
  },
  social: [
    { label: "Facebook", network: "facebook", href: "#" },
    { label: "X (Twitter)", network: "twitter", href: "#" },
    { label: "Instagram", network: "instagram", href: "#" },
  ] as const,
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
  ],
  footerAbout: [
    { label: "Contact Us", href: "mailto:temitope@treesoft.ng" },
    { label: "Courses", href: "/courses" },
    { label: "About Us", href: "/about" },
  ],
  footerLegal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Terms of Use", href: "/terms" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
