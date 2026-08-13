import type { Metadata } from "next";
import { Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Adscredence to discuss your YouTube advertising campaign requirements.",
};

const details = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "Address", value: site.address, icon: MapPin },
];

const socials = [
  { label: "Instagram", href: site.socials.instagram, icon: Instagram },
  { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin },
  { label: "YouTube", href: site.socials.youtube, icon: Youtube },
];

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="container"><span className="eyebrow">Contact Adscredence</span><h1 id="contact-heading" className="display">Let&apos;s Talk About Your YouTube Advertising Campaign.</h1><p>Whether you have a campaign ready to discuss or are starting with a question, we&apos;d be glad to hear from you.</p></div>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <div>
            <span className="eyebrow">Details</span>
            <h2 className="section-title display">Get in touch.</h2>
            <div className="contact-details">
              {details.map(({ label, value, href, icon: Icon }) => <div className="contact-detail" key={label}><Icon size={19} aria-hidden="true" /><div><h3>{label}</h3>{href ? <a href={href}>{value}</a> : <p>{value}</p>}</div></div>)}
            </div>
            <div className="socials" style={{ marginTop: 32 }}>
              {socials.map(({ label, href, icon: Icon }) => <a className="icon-link contact-social" key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={17} aria-hidden="true" /></a>)}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
