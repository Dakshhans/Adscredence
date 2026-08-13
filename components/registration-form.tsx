"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

type Status = "idle" | "success" | "error";

export function RegistrationForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setStatus("error");
      form.reportValidity();
      return;
    }

    // Connect a CRM, email provider, database, or API here before publishing.
    setStatus("success");
    form.reset();
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <h2>Campaign inquiry</h2>
      <p>Fields marked with <span className="required">*</span> are required.</p>
      <div className="form-grid">
        <div className="form-field"><label htmlFor="fullName">Full name <span className="required">*</span></label><input id="fullName" name="fullName" autoComplete="name" required /></div>
        <div className="form-field"><label htmlFor="businessName">Company / business name <span className="required">*</span></label><input id="businessName" name="businessName" autoComplete="organization" required /></div>
        <div className="form-field"><label htmlFor="email">Email address <span className="required">*</span></label><input id="email" name="email" type="email" autoComplete="email" required /></div>
        <div className="form-field"><label htmlFor="phone">Phone number <span className="required">*</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
        <div className="form-field"><label htmlFor="website">Business website</label><input id="website" name="website" type="url" placeholder="https://" /></div>
        <div className="form-field"><label htmlFor="youtubeChannel">YouTube channel</label><input id="youtubeChannel" name="youtubeChannel" type="url" placeholder="https://" /></div>
        <div className="form-field full"><label htmlFor="business">What does your business do? <span className="required">*</span></label><textarea id="business" name="business" required placeholder="A short introduction to your business, product, or service." /></div>
        <div className="form-field"><label htmlFor="audience">Target audience</label><input id="audience" name="audience" placeholder="Who do you want to reach?" /></div>
        <div className="form-field"><label htmlFor="advertise">What would you like to advertise? <span className="required">*</span></label><input id="advertise" name="advertise" required placeholder="Product, service, offer, or message" /></div>
        <fieldset className="form-field full">
          <legend>Do you already have a video advertisement?</legend>
          <div className="radio-set">
            <label className="radio-option"><input type="radio" name="videoStatus" value="yes" /> Yes</label>
            <label className="radio-option"><input type="radio" name="videoStatus" value="no" /> No</label>
            <label className="radio-option"><input type="radio" name="videoStatus" value="creative-help" /> We need help with the creative</label>
          </div>
        </fieldset>
        <div className="form-field full"><label htmlFor="videoUrl">YouTube ad video URL</label><input id="videoUrl" name="videoUrl" type="url" placeholder="https://youtube.com/..." /></div>
        <div className="form-field"><label htmlFor="budget">Estimated advertising budget</label><select id="budget" name="budget" defaultValue=""><option value="" disabled>Select an option</option><option>Not sure yet</option><option>Under ₹25,000</option><option>₹25,000 – ₹50,000</option><option>₹50,000 – ₹1,00,000</option><option>Over ₹1,00,000</option></select></div>
        <div className="form-field"><label htmlFor="goal">Campaign goal</label><select id="goal" name="goal" defaultValue=""><option value="" disabled>Select an option</option><option>Brand Awareness</option><option>Product/Service Promotion</option><option>Website Traffic</option><option>Lead Generation</option><option>Other</option></select></div>
        <div className="form-field full"><label htmlFor="additional">Additional information</label><textarea id="additional" name="additional" placeholder="Anything else that will help us understand your campaign requirements?" /></div>
      </div>
      {status === "success" ? <div className="form-status success" role="status">Thank you for registering with Adscredence. Your information has been validated in this frontend demo; connect a submission service to deliver it to our team.</div> : null}
      {status === "error" ? <div className="form-status error" role="alert">Please complete the required fields using valid information.</div> : null}
      <button className="button button-primary" type="submit" style={{ marginTop: 24 }}>Register to Run YouTube Ads <ArrowRight size={16} /></button>
      <p className="form-disclaimer">This form currently provides a complete front-end experience only. It does not send your details anywhere until a backend or form service is connected.</p>
    </form>
  );
}
