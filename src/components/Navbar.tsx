import { useEffect, useState } from "react";
import { DownloadIcon } from "./Icons";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="nav">
        <a href="#home" className="logo">
          JV<span>.</span>
        </a>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? "active" : ""}
              onClick={() => {
                setActive(link.href);
                setOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="resume-btn" href="#contact">
            <DownloadIcon />
            <span>Download Resume</span>
          </a>
          <button
            className="icon-btn theme-btn"
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
          >
            {theme === "dark" ? "☾" : "☀"}
          </button>
          <button
            className="icon-btn menu-btn"
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((current) => !current)}
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
