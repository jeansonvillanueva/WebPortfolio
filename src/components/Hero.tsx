import Reveal from "./Reveal";
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";

function Hero() {
  return (
    <section id="home" className="section hero">
      <Reveal>
        <p className="eyebrow">Hello, I'm</p>
        <h1>
          Jeanson
          <br />
          <em>Villanueva</em>
        </h1>
        <div className="role-pill">BSIT – IT Professional</div>
        <p className="lead">
          I build modern, responsive, and user-friendly web applications with the help of modern technologies.
          Passionate about clean code, problem solving, and continuous learning.
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href="#projects">
            View My Projects <ArrowIcon />
          </a>
          <a className="ghost-btn" href="#contact">
            Contact Me <MailIcon />
          </a>
        </div>
        <div className="social-row">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href="mailto:jeanson.villanueva@gmail.com" aria-label="Email">
            <MailIcon size={18} />
          </a>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="portrait-wrap">
          <div className="portrait-card">
            <div className="portrait-fallback" aria-hidden="true" />
            <div className="available">
              <i /> Available for work
            </div>
            <div className="info-card">
              <div className="info-row">
                <PinIcon />
                <div>
                  <p>Location</p>
                  <strong>Philippines</strong>
                </div>
              </div>
              <div className="info-row">
                <MailIcon />
                <div>
                  <p>Email</p>
                  <strong>jeanson.villanueva@gmail.com</strong>
                </div>
              </div>
              <div className="info-row">
                <PhoneIcon />
                <div>
                  <p>Phone</p>
                  <strong>+63 961 715 ####</strong>
                </div>
              </div>
              <a className="more-link" href="#about">
                More About Me <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Hero;
