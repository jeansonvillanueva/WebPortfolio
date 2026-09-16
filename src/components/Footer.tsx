import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner footer-grid">
        <div>
          <a href="#home" className="logo">
            JV<span>.</span>
          </a>
          <p className="muted" style={{ marginTop: 12, maxWidth: 280 }}>
            Building digital experiences with technology, creativity, and purpose.
          </p>
          <div className="social-row" style={{ marginTop: 16 }}>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="mailto:jeanson.villanueva@gmail.com" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
        <div>
          <h3>Navigation</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h3>Services</h3>
          <a href="#skills">Web Development</a>
          <a href="#skills">Frontend Development</a>
          <a href="#skills">UI/UX Design</a>
          <a href="#skills">Responsive Design</a>
        </div>
        <div>
          <h3>Contact Me</h3>
          <a href="mailto:jeanson.villanueva@gmail.com">jeanson.villanueva@gmail.com</a>
          <a href="tel:+639123456789">+63 961 715 ####</a>
          <p className="muted">Philippines</p>
          <h3 style={{ marginTop: 22 }}>Let's Connect</h3>
          <p className="muted">I'm open to new opportunities and collaborations.</p>
          <a className="primary-btn" href="#contact" style={{ marginTop: 14, display: "inline-flex" }}>
            Get In Touch
          </a>
        </div>
      </div>
      <p className="footer-copy">© {currentYear} Jeanson Villanueva. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
