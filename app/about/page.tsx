import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn how Adscredence approaches YouTube advertising around each business, audience, and campaign objective.",
};

const pillars = [
  { label: "01", title: "Who we are", copy: "Adscredence is a YouTube advertising-focused company helping businesses bring their products, services, and stories to video audiences." },
  { label: "02", title: "Our approach", copy: "We take a customized, solution-focused view of each brief, starting with what your business needs to communicate and who needs to see it." },
  { label: "03", title: "Our experience", copy: "Our team brings experience from the digital media industry, pairing creative thinking with a grounded understanding of the video landscape." },
  { label: "04", title: "Our focus", copy: "We work to understand your business, audience, goals, and requirements so the campaign direction remains connected to what matters." },
  { label: "05", title: "Our goal", copy: "Help businesses make better use of YouTube advertising while building thoughtful, long-term client relationships." },
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="container">
          <span className="eyebrow">About Adscredence</span>
          <h1 id="about-heading" className="display">A focused partner for YouTube advertising.</h1>
          <p>We help businesses approach YouTube advertising with clearer direction, a tailored campaign plan, and their objectives at the center.</p>
        </div>
      </section>
      <section className="section" aria-labelledby="approach-heading">
        <div className="container">
          <div className="about-intro">
            <h2 id="approach-heading" className="about-lead">Our approach at Adscredence is built on a belief in innovative, optimized YouTube advertising that can support your business&apos;s specific requirements.</h2>
            <div className="about-text">
              <p>We believe in a dedicated, solution-based approach to YouTube advertising. Our team of marketing enthusiasts and professionals works together to analyze the unique requirements of your business, then considers how a video campaign can support its message and objectives.</p>
              <p>Every member of our team brings rich experience from the digital media industry, allowing us to approach each project with creativity, expertise, and a strong understanding of the digital landscape. We also focus on strengthening the lifetime value of our customer relationships.</p>
              <p>It would be our pleasure to hear from you. Reach out for a better analysis of your advertising requirements. At Adscredence, we strive to create impactful YouTube advertising outcomes while keeping your business strategy and objectives at the center of everything we do.</p>
            </div>
          </div>
          <div className="about-pillars">
            {pillars.map((pillar) => <article className="pillar" key={pillar.label}><span>{pillar.label}</span><h2>{pillar.title}</h2><p>{pillar.copy}</p></article>)}
          </div>
        </div>
      </section>
      <CtaBand title="Ready to Advertise on YouTube?" copy="Let&apos;s begin with your business, audience, and campaign requirements." buttonLabel="Get Started" />
    </div>
  );
}
