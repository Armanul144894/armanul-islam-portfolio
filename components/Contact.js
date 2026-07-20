import Reveal from "./Reveal";
import { socials } from "@/lib/data";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <Reveal className="contact-panel" as="div">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            LET&apos;S BUILD SOMETHING
          </div>
          <h2>Have a project or a role in mind?</h2>
          <p>
            I&apos;m currently open to full-time front-end opportunities and
            freelance work. Drop a message — I usually reply within a day.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${socials.email}`} className="btn btn-primary">
              {socials.email}
            </a>
            <a href={`tel:${socials.phone}`} className="btn btn-ghost">
              {socials.phoneDisplay}
            </a>
          </div>
          <div className="contact-socials">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={socials.portfolio} target="_blank" rel="noopener noreferrer">
              Portfolio
            </a>
            <a href={`mailto:${socials.email}`}>Email</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
