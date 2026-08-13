import { Clapperboard, Goal, Orbit, Presentation } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const reasons = [
  { title: "Massive video audience", text: "YouTube gives businesses an opportunity to reach people through the video content they choose to watch.", icon: Orbit },
  { title: "Visual storytelling", text: "Video can help demonstrate products, explain services, and bring a brand story into focus.", icon: Clapperboard },
  { title: "Audience reach", text: "YouTube advertising can be planned around relevant audiences and campaign targeting options.", icon: Presentation },
  { title: "Flexible campaign goals", text: "Campaigns can be structured around awareness, consideration, or conversion-focused objectives.", icon: Goal },
];

export function WhyYouTube() {
  return (
    <section className="section section-dark" aria-labelledby="why-heading">
      <div className="container">
        <SectionHeading eyebrow="The video advantage" title="Why advertise on YouTube?" intro="Video offers a flexible canvas for businesses that want to explain, demonstrate, and connect." />
        <div className="why-grid">
          {reasons.map(({ title, text, icon: Icon }) => (
            <article className="why-item" key={title}>
              <Icon className="why-icon" size={25} strokeWidth={1.7} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
