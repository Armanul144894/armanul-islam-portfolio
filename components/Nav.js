"use client";

import { useEffect, useState } from "react";
import { socials } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <a href="#top" className="brand">
            Armanul<span className="dot">.</span>dev
          </a>
          <nav className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a href="#contact" className="btn btn-ghost">
              Say hello
            </a>
            <a href={`mailto:${socials.email}`} className="btn btn-primary">
              Hire me
            </a>
            <button
              className="burger"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          Say hello
        </a>
      </div>
    </>
  );
}
