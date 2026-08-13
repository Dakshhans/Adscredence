import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CtaBandProps = { title?: string; copy?: string; buttonLabel?: string };

export function CtaBand({
  title = "Ready to put your business in the picture?",
  copy = "Tell us what you want to advertise and we’ll start with your goals, audience, and budget.",
  buttonLabel = "Run Ads on YouTube",
}: CtaBandProps) {
  return (
    <section className="cta-band" aria-label="Register to run YouTube ads">
      <div className="container">
        <div><h2 className="display">{title}</h2><p>{copy}</p></div>
        <Link className="button button-light" href="/register">{buttonLabel} <ArrowRight size={16} /></Link>
      </div>
    </section>
  );
}
