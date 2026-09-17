import Reveal from "./Reveal";
import { ArrowIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon, TwitterIcon } from "./Icons";
import profile from "../assets/images/ProfilePic.png"

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
          <a href="https://www.facebook.com/jeanson.villanueva.1" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FacebookIcon size={18} />
          </a>
          <a href="https://www.instagram.com/jeansonvillanueva7/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon size={18} />
          </a>
          <a href="https://x.com/Edi_wow_123" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <TwitterIcon size={18} />
          </a>
          <a href="https://github.com/jeansonvillanueva" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href="mailto:jeansonvillanueva11@gmail.com" aria-label="Email">
            <MailIcon size={18} />
          </a>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img className="portrait-photo" src={profile} alt="Jeanson Villanueva" />
            <div className="available">
              <i /> Available for work
            </div>
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
                <strong>jeansonvillanueva11@gmail.com</strong>
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
      </Reveal>
    </section>
  );
}

export default Hero;
