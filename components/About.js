import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <Reveal>
            <div className="eyebrow">ABOUT</div>
            <h2 style={{ fontSize: "clamp(26px,3vw,34px)", marginBottom: 22 }}>
              A developer who cares about the pixel and the performance budget.
            </h2>
            <div className="about-copy">
              <p>
                I&apos;m a <b>Front-End Developer</b> currently building production
                web apps at <b>Tech Cloud Ltd.</b>, where I work across React,
                Next.js and WordPress to turn designs into responsive,
                SEO-friendly experiences. My background is in Computer Science
                &amp; Engineering from Daffodil International University.
              </p>
              <p>
                I like the full loop — component architecture, API integration,
                and squeezing out the last bit of load-time performance — and I
                keep learning the tools that make that loop tighter, from
                TypeScript to TanStack Query.
              </p>
            </div>
            <div className="stat-row">
              <div className="stat-cell">
                <div className="num">1.5+</div>
                <div className="lbl">YEARS EXPERIENCE</div>
              </div>
              <div className="stat-cell">
                <div className="num">9+</div>
                <div className="lbl">PROJECTS SHIPPED</div>
              </div>
              <div className="stat-cell">
                <div className="num">3</div>
                <div className="lbl">LANGUAGES SPOKEN</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div id="skills">
              <div className="eyebrow">SKILLS &amp; STACK</div>
              <div className="skills-col">
                {skillGroups.map((g) => (
                  <div className="skill-group" key={g.cat}>
                    <div className="cat">{g.cat}</div>
                    <div className="chip-row">
                      {g.items.map((item) => (
                        <span className="chip" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
