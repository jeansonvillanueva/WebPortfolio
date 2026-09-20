import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, TwitterIcon } from "./Icons";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner footer-grid">
        <div>
          <a href="#home" className="logo">
            <img src="./JV.png" alt="logo" />
          </a>
          
          <p className="muted" style={{ marginTop: 12, maxWidth: 280 }}>
            Building digital experiences with technology, creativity, and purpose.
          </p>
          <div className="social-row" style={{ marginTop: 16 }}>
            <a href="https://www.facebook.com/jeanson.villanueva.1" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/jeansonvillanueva7/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://x.com/Edi_wow_123" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="https://www.linkedin.com/in/jeanson-villanueva-95924732a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="https://github.com/jeansonvillanueva" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="mailto:jeansonvillanueva11@gmail.com" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
        <div>
          <h3>Services</h3>
          <a href="#skills">Web Development</a>
          <a href="#skills">Networking</a>
          <a href="#skills">Information Technology</a>
        </div>
        <div>
          <h3>Contact Me</h3>
          <a href="mailto:jeansonvillanueva11@gmail.com">jeansonvillanueva11@gmail.com</a>
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
