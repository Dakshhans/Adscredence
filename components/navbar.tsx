"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Adscredence home">
      <span className="brand-mark" aria-hidden="true" />
      Adscredence
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav-wrap">
      <nav className="container nav" aria-label="Primary navigation">
        <Brand />
        <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X size={21} /> : <Menu size={23} />}
        </button>
        <ul id="site-navigation" className={`nav-list ${open ? "open" : ""}`}>
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link className="nav-link" href={item.href} onClick={close}>{item.label}</Link>
            </li>
          ))}
          <li className="mobile-cta">
            <Link className="button button-primary" href="/register" onClick={close}>Run Ads on YouTube</Link>
          </li>
        </ul>
        <Link className="button button-primary nav-cta" href="/register">Run YouTube Ads</Link>
      </nav>
    </header>
  );
}
