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

function getInitialTheme(): "dark" | "light" {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sectionIds = links.map((link) => link.href.slice(1));

    const syncActive = () => {
      const header = document.querySelector(".site-header");
      const offset = (header instanceof HTMLElement ? header.offsetHeight : 78) + 12;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= offset + 2) current = id;
      }

      const doc = document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 4;
      if (atBottom) current = sectionIds[sectionIds.length - 1];

      setActive(`#${current}`);
    };

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        syncActive();
      });
    };

    syncActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", syncActive);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", syncActive);
    };
  }, []);

  return (
    <header className="site-header">
      <nav className="nav">
        <a href="#home" className="logo">
          <img src="./JV.png" alt="logo" />
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
          <a className="resume-btn"
          href="/assets/Jeanson-Villanueva-Resume.pdf"
          download="Jeanson-Villanueva-Resume.pdf"
          >
            <DownloadIcon />
            <span>Download Resume</span>
          </a>
          <button
            className="icon-btn theme-btn"
            type="button"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
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
