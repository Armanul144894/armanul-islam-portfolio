"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { clientSites } from "@/lib/data";

const INITIAL_COUNT = 18;

function displayUrl(href) {
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function ClientWork() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? clientSites : clientSites.slice(0, INITIAL_COUNT);

  return (
    <section className="section" id="client-work">
      <div className="wrap">
        <Reveal className="sec-head" as="div">
          <div className="eyebrow">MORE WORDPRESS WORK</div>
          <h2>{clientSites.length}+ client sites built on WordPress.</h2>
          <p>
            Beyond the flagship projects above, I&apos;ve built and customized
            WordPress sites for agencies and clients across trades, real
            estate, retail, NGOs and more — most through Tech Cloud Ltd.
          </p>
        </Reveal>

        <Reveal className="client-grid" as="div">
          {visible.map((site) => (
            <a
              key={site.href}
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              className="client-card"
            >
              <div className="client-card-top">
                <span className="client-name">{site.name}</span>
                <span className="client-arrow">↗</span>
              </div>
              <div className="client-url">{displayUrl(site.href)}</div>
              <span className="client-tag">{site.tag}</span>
            </a>
          ))}
        </Reveal>

        {clientSites.length > INITIAL_COUNT && (
          <div className="client-toggle-row">
            <button className="filter-btn" onClick={() => setExpanded((v) => !v)}>
              {expanded
                ? "Show fewer"
                : `Show all ${clientSites.length} sites →`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
