export type Testimonial = {
  name: string;
  company: string;
  quote: string;
  initials: string;
  rating: number;
};

// These are intentionally labelled samples. Replace with approved, attributable client reviews.
export const testimonials: Testimonial[] = [
  {
    name: "Sample client",
    company: "Business name placeholder",
    quote: "Placeholder review space for a client-approved perspective on working with Adscredence.",
    initials: "SC",
    rating: 5,
  },
  {
    name: "Sample client",
    company: "Business name placeholder",
    quote: "Placeholder review space for feedback about the planning, creative process, and campaign support.",
    initials: "SC",
    rating: 5,
  },
  {
    name: "Sample client",
    company: "Business name placeholder",
    quote: "Placeholder review space for a concise testimonial from a real, approved Adscredence client.",
    initials: "SC",
    rating: 5,
  },
];
