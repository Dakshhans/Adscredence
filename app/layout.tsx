import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { organizationJsonLd } from "@/data/site";

export const metadata: Metadata = {
  title: { default: "Adscredence | YouTube Advertising Solutions", template: "%s | Adscredence" },
  description:
    "Adscredence helps businesses reach their audiences through YouTube advertising campaigns tailored to their goals, audience, and budget.",
  metadataBase: new URL("https://adscredence.example"),
  openGraph: {
    title: "Adscredence | YouTube Advertising Solutions",
    description:
      "YouTube advertising campaigns tailored to your goals, audience, and budget.",
    type: "website",
    siteName: "Adscredence",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  );
}
