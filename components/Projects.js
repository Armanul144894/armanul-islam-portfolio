"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

const filters = [
  { key: "all", label: "All Work" },
  { key: "nextjs", label: "Next.js" },
  { key: "wp", label: "WordPress" },
  { key: "other", label: "HTML/PHP" },
];

export default function Projects() {
  const [active, setActive] = useState("all");
  const visible =
    active === "all" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <Reveal className="sec-head" as="div">
          <div className="eyebrow">SELECTED WORK</div>
          <h2>Nine live products, three stacks.</h2>
          <p>
            A mix of Next.js applications, WordPress builds, and hand-coded
            HTML/CSS/JS sites — filter by category below.
          </p>
        </Reveal>

        <Reveal className="filter-row" as="div">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${active === f.key ? " active" : ""}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <Reveal className="proj-grid" as="div">
          {visible.map((p) => (
            <div className="proj-card" key={p.title}>
              <div className="proj-chrome">
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="url">{p.url}</div>
              </div>
              <div className="proj-body">
                <span className="proj-cat-badge">{p.catLabel}</span>
                <h3>
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    {p.title}
                  </a>
                </h3>
                <p>{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
