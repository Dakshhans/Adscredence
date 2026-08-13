"use client";

import { Play, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { portfolio, type PortfolioItem } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function WorkSection() {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selected) return;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <section id="our-work" className="section work-section" aria-labelledby="work-heading">
      <div className="container">
        <SectionHeading eyebrow="Selected creative" title="Ads We&apos;ve Created" intro="A small, clearly labelled demo gallery. Replace these records with approved client campaigns when they are ready to share." />
        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <article className="portfolio-card" key={item.title}>
              <div className="portfolio-visual">
                <Image src={item.image} alt={`${item.title} demo advertisement thumbnail`} fill sizes="(max-width: 720px) 100vw, (max-width: 900px) 50vw, 33vw" />
                <button className="portfolio-play" type="button" onClick={() => setSelected(item)} aria-label={`View ${item.title} details`}>
                  <Play size={17} fill="currentColor" aria-hidden="true" />
                </button>
              </div>
              <div className="portfolio-info">
                <span className="portfolio-meta">{item.clientName} · {item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selected ? (
        <div className="work-modal" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}>
          <div className="work-dialog" role="dialog" aria-modal="true" aria-labelledby="work-dialog-title" aria-describedby="work-dialog-description">
            <button ref={closeRef} type="button" onClick={() => setSelected(null)} aria-label="Close advertisement details"><X size={18} /></button>
            <span className="portfolio-meta">{selected.clientName} · {selected.category}</span>
            <h2 id="work-dialog-title">{selected.title}</h2>
            <p id="work-dialog-description">{selected.description}</p>
            <p className="work-dialog-note">This is demo portfolio content. Add an approved <code>videoUrl</code> in <code>data/portfolio.ts</code> to connect a real campaign video.</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
