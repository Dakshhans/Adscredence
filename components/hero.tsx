import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">YouTube advertising, made focused</span>
          <h1 id="hero-heading" className="display">Get Your Business Seen on YouTube.</h1>
          <p className="hero-copy">Adscredence helps businesses reach their audience through targeted YouTube advertising campaigns designed around their goals, audience, and budget.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/register">Run Ads on YouTube <ArrowRight size={16} /></Link>
            <Link className="button button-ghost" href="#our-work">View Our Work</Link>
          </div>
          <p className="hero-note"><span>✓</span> Focused solely on YouTube advertising.</p>
        </div>
        <div className="hero-art" aria-label="Illustration of a YouTube advertising video player" role="img">
          <div className="frame-shadow" />
          <div className="video-frame">
            <span className="video-label">Your story, in motion</span>
            <p className="video-title">Make the next view count.</p>
            <span className="video-play"><Play size={28} fill="currentColor" aria-hidden="true" /></span>
            <div className="video-timeline"><span>00:12</span><div className="video-progress" /><span>00:30</span></div>
          </div>
          <div className="floating-card"><span><i className="signal" />Campaign direction</span><strong>Built around your audience &amp; objectives.</strong></div>
        </div>
      </div>
    </section>
  );
}
