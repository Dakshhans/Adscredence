import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Brand } from "@/components/navbar";
import { site } from "@/data/site";

const socialLinks = [
  { label: "Instagram", href: site.socials.instagram, icon: Instagram },
  { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin },
  { label: "YouTube", href: site.socials.youtube, icon: Youtube },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Brand />
            <p className="footer-copy">{site.description}</p>
            <div className="socials">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a className="icon-link" key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-heading">Explore</p>
            <div className="footer-links">
              {site.nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
              <Link href="/register">Run YouTube Ads</Link>
            </div>
          </div>
          <div>
            <p className="footer-heading">Get in touch</p>
            <div className="footer-links">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              <span>{site.address}</span>
            </div>
          </div>
        </div>
        <div className="copyright">© 2026 Adscredence. All rights reserved.</div>
      </div>
    </footer>
  );
}
