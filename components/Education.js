import Reveal from "./Reveal";
import { education, training, achievements } from "@/lib/data";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <Reveal className="sec-head" as="div">
          <div className="eyebrow">EDUCATION &amp; BEYOND</div>
          <h2>Foundations.</h2>
        </Reveal>

        <Reveal className="edu-grid" as="div">
          {education.map((e) => (
            <div className="edu-card" key={e.deg}>
              <div className="deg">{e.deg}</div>
              <div className="inst">{e.inst}</div>
              <div className="score">{e.score}</div>
              <div className="yr">{e.yr}</div>
            </div>
          ))}
        </Reveal>

        <Reveal className="misc-grid" as="div">
          <div className="misc-card">
            <h4>TRAINING</h4>
            <ul>
              {training.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="misc-card">
            <h4>ACHIEVEMENTS &amp; ACTIVITY</h4>
            <ul>
              {achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
