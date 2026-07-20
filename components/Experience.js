import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal className="sec-head" as="div">
          <div className="eyebrow">EXPERIENCE</div>
          <h2>Where I&apos;ve been building.</h2>
          <p>
            Two roles, one company — growing from intern to full-time engineer
            at Tech Cloud Ltd.
          </p>
        </Reveal>

        <Reveal className="timeline">
          {experience.map((job) => (
            <div className={`tl-item${job.current ? " current" : ""}`} key={job.role}>
              <div className="tl-top">
                <div className="tl-role">{job.role}</div>
                <div className="tl-date">{job.date}</div>
              </div>
              <div className="tl-org">{job.org}</div>
              <ul className="tl-list">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
