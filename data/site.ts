export const site = {
  name: "Adscredence",
  description: "YouTube advertising solutions designed around your business goals.",
  email: "hello@adscredence.example",
  phone: "+91 00000 00000",
  address: "Your business address goes here",
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/#our-work" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "Adscredence helps businesses reach their audiences through YouTube advertising campaigns tailored to their goals, audience, and budget.",
  url: "https://adscredence.example",
  email: site.email,
  telephone: site.phone,
  sameAs: Object.values(site.socials),
};
