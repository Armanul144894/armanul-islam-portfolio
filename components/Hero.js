import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-tag">
            <span className="pulse"></span>
            Open to Front-End roles &amp; freelance projects
          </div>
          <h1>
            Md. Armanul Islam —<br />
            I build <span className="accent">fast</span>, clean interfaces
            <br />
            that ship.
          </h1>
          <p className="lede">
            Front-End Developer in Dhaka crafting responsive, high-performance web
            apps with React, Next.js, TypeScript and WordPress — from pixel-perfect
            UI to production deploys.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects →
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <b>Dhaka, Bangladesh</b> · UTC+6
            </span>
            <span>
              <b>Tech Cloud Ltd.</b> · Software Engineer
            </span>
            <span>
              <b>9+</b> shipped projects
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="browser-frame">
            <div className="browser-bar">
              <div className="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="browser-url">armanulislam.dev</div>
            </div>
            <div className="browser-body">
              <Image
                src="/armanul.jpg"
                alt="Portrait of Md. Armanul Islam"
                width={860}
                height={1075}
                priority
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
