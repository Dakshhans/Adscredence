import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { RegistrationForm } from "@/components/registration-form";

export const metadata: Metadata = {
  title: "Run YouTube Ads",
  description: "Register your business with Adscredence to discuss a YouTube advertising campaign tailored to your requirements.",
};

export default function RegisterPage() {
  return (
    <div className="page-shell">
      <section className="page-hero" aria-labelledby="register-heading">
        <div className="container">
          <span className="eyebrow">Campaign registration</span>
          <h1 id="register-heading" className="display">Ready to Run Your Ads on YouTube?</h1>
          <p>Tell us about your business and advertising requirements. Our team will review your information and get in touch about your YouTube advertising campaign.</p>
        </div>
      </section>
      <section className="section" aria-label="YouTube ads registration form">
        <div className="container register-layout">
          <aside className="register-note">
            <span className="eyebrow">What happens next</span>
            <h2 className="display">Start with the details that matter.</h2>
            <p>Share as much context as you can. It helps shape a more useful first conversation about your YouTube advertising needs.</p>
            <div className="note-card"><strong><CheckCircle2 size={16} style={{ verticalAlign: "-3px", marginRight: 6 }} aria-hidden="true" />One focused service</strong><p>Adscredence specializes in YouTube advertising — nothing else competing for attention.</p></div>
          </aside>
          <RegistrationForm />
        </div>
      </section>
    </div>
  );
}
