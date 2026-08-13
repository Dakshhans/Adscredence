import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { WhyYouTube } from "@/components/why-youtube";
import { WorkSection } from "@/components/work-section";
import { YouTubeAdsSection } from "@/components/youtube-ads-section";
import { Mail, Phone } from "lucide-react";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Adscredence | YouTube Advertising Solutions",
  description: "Adscredence helps businesses reach their audiences through YouTube advertising campaigns tailored to their goals, audience, and budget.",
};

export default function HomePage() {
  return (
    <div className="page-shell">
      <Hero />
      <YouTubeAdsSection />
      <WorkSection />
      <HowItWorks />
      <WhyYouTube />
      <Testimonials />
      <section className="section" id="contact" aria-labelledby="home-contact-heading">
        <div className="container contact-layout">
          <div>
            <span className="eyebrow">Start a conversation</span>
            <h2 id="home-contact-heading" className="section-title display">Let&apos;s Talk About Your YouTube Advertising Campaign.</h2>
            <p className="section-intro" style={{ marginTop: 20 }}>Share your question or campaign requirements. We&apos;ll use the details to understand how YouTube advertising could fit your plans.</p>
            <div className="contact-details">
              <div className="contact-detail"><Mail size={19} aria-hidden="true" /><div><h3>Email</h3><a href={`mailto:${site.email}`}>{site.email}</a></div></div>
              <div className="contact-detail"><Phone size={19} aria-hidden="true" /><div><h3>Phone</h3><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></div></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
