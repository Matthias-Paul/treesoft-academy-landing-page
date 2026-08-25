export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Treesoft Academy",
    url: "https://treesoftacademy.com",
    logo: "https://treesoftacademy.com/images/treesoft-logo.png",
    description:
      "Join a community of innovators and master the skills that shape tomorrow’s technology.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 6 Funsho Ajayi Street, Aguda, Surulere",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    telephone: "+2349037019967",
    parentOrganization: {
      "@type": "Organization",
      name: "Treesoft Nig. Ltd.",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
