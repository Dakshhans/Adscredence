import { Crosshair, Lightbulb, MessageSquareMore, Target, Video, WalletCards } from "lucide-react";

const benefits = [
  { title: "Reach YouTube audiences", text: "Put your business in front of people as they watch video content.", icon: Video },
  { title: "Relevant video context", text: "Plan campaigns around the content and audiences that matter to you.", icon: Crosshair },
  { title: "Tell a visual story", text: "Use video to demonstrate products, services, and brand ideas clearly.", icon: MessageSquareMore },
  { title: "Support your objectives", text: "Shape activity around awareness, promotion, traffic, leads, or other goals.", icon: Target },
  { title: "Creative guidance", text: "Bring an existing ad, or discuss what you need with our team.", icon: Lightbulb },
  { title: "Budget-aware planning", text: "Campaigns are considered around the budget and scope you share.", icon: WalletCards },
];

export function YouTubeAdsSection() {
  return (
    <section className="section" aria-labelledby="single-service-heading">
      <div className="container service-grid">
        <div>
          <span className="eyebrow">Our single focus</span>
          <h2 id="single-service-heading" className="service-heading display">One Service. Focused on YouTube Advertising.</h2>
          <p className="service-copy">We help businesses advertise their products and services through YouTube. Keeping our focus in one place lets every conversation start with the right questions: your audience, your message, and what you want the campaign to do.</p>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ title, text, icon: Icon }) => (
            <article className="benefit" key={title}>
              <span className="benefit-icon"><Icon size={19} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
