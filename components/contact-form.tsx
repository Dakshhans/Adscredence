"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

type Status = "idle" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setStatus("error");
      form.reportValidity();
      return;
    }

    // Add the required delivery integration here before a public launch.
    setStatus("success");
    form.reset();
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <h2>Send a message</h2>
      <p>Tell us a little about what you&apos;d like to advertise.</p>
      <div className="form-grid">
        <div className="form-field"><label htmlFor="contact-name">Name <span className="required">*</span></label><input id="contact-name" name="name" autoComplete="name" required /></div>
        <div className="form-field"><label htmlFor="contact-email">Email <span className="required">*</span></label><input id="contact-email" name="email" type="email" autoComplete="email" required /></div>
        <div className="form-field"><label htmlFor="contact-phone">Phone</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" /></div>
        <div className="form-field"><label htmlFor="contact-business">Business name</label><input id="contact-business" name="business" autoComplete="organization" /></div>
        <div className="form-field full"><label htmlFor="contact-message">Message <span className="required">*</span></label><textarea id="contact-message" name="message" required placeholder="How can we help with your YouTube advertising campaign?" /></div>
      </div>
      {status === "success" ? <div className="form-status success" role="status">Thanks — your message is validated in this frontend demo. Connect a delivery integration before publishing to receive messages.</div> : null}
      {status === "error" ? <div className="form-status error" role="alert">Please complete the required fields using valid information.</div> : null}
      <button className="button button-primary" type="submit" style={{ marginTop: 24 }}>Contact Adscredence <ArrowRight size={16} /></button>
      <p className="form-disclaimer">This form currently does not transmit messages to an inbox or CRM.</p>
    </form>
  );
}
