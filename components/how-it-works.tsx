import { SectionHeading } from "@/components/section-heading";

const steps = [
  ["01", "Register your business", "Tell us about your business, product or service, target audience, and advertising goals."],
  ["02", "Share your ad", "Provide an existing YouTube or video ad, or discuss creative requirements with our team."],
  ["03", "Campaign setup", "We help prepare the campaign around your objectives, audience, and budget."],
  ["04", "Launch", "Your YouTube campaign is launched once the details and creative are finalized."],
  ["05", "Monitor & optimize", "Campaign performance is monitored and optimized where appropriate."],
] as const;

export function HowItWorks() {
  return (
    <section className="section process" aria-labelledby="process-heading">
      <div className="container">
        <SectionHeading eyebrow="A clear process" title="How YouTube advertising with Adscredence works." intro="A straightforward way to move from your business brief to an active YouTube campaign." />
        <div className="process-grid">
          {steps.map(([number, title, copy]) => (
            <article className="process-step" key={number}>
              <span className="process-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
