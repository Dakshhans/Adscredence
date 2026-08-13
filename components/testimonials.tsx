import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  return (
    <section className="section testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionHeading eyebrow="Client perspectives" title="What Our Clients Say" intro="Sample review layouts ready for approved client testimonials. These are not presented as real reviews." />
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial" key={`${testimonial.name}-${index}`}>
              <div className="stars" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, star) => <Star key={star} size={16} fill="currentColor" aria-hidden="true" />)}
              </div>
              <blockquote>“{testimonial.quote}”</blockquote>
              <div className="testimonial-person">
                <span className="avatar" aria-hidden="true">{testimonial.initials}</span>
                <div><div className="testimonial-name">{testimonial.name}</div><div className="testimonial-company">{testimonial.company}</div></div>
              </div>
            </article>
          ))}
        </div>
        <p className="notice">Demo testimonial placeholders — replace with real, client-approved reviews before publishing.</p>
      </div>
    </section>
  );
}
