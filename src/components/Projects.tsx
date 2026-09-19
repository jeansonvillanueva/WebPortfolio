import { useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal";
import { ArrowIcon } from "./Icons";
import ContributionGraph from "./ContributionGraph";
import YMCAWeb from "../assets/images/ymcaweb.png";
import OptifiWeb from "../assets/images/oftifiweb.png";
import AlertoWebApp from "../assets/images/alertomnlwebapp.png";

type Project = {
  id: string;
  title: string;
  projectPreview: string;
  summary: string;
  tags: string[];
  overview: string;
  features: string[];
  projectTeam?: string[];
  demo: string;
  academicDemo?: boolean;
};

const projects: Project[] = [
  {
    id: "ymca",
    title: "YMCA Management System",
    projectPreview: YMCAWeb,
    summary: "Web-based system for managing members, events, schedules, and announcements.",
    tags: ["React", "TypeScript", "Tailwind CSS", "PHP", "MySQL"],
    overview:
      "A comprehensive web-based system built for YMCA organizations to manage members, events, schedules, and announcements efficiently. It streamlines operations and enhances communication within the organization.",
    features: [
      "Member management and profiles",
      "Event and schedule management",
      "Announcements and notifications",
      "Role-based access control",
      "Reports and analytics dashboard",
    ],
    demo: "https://ymca.ph/",
  },
  {
    id: "finance-management",
    title: "Optifi: A data intelligent financial tracking through OCR and AI-driven budget forecasting",
    projectPreview: OptifiWeb,
    summary: "Financial management system for forecasting and managing personal finances.",
    tags: ["Python", "Meta Prophet", "PHP", "MySQL", "PostgreSQL"],
    overview:
      "A financial management system for individuals to forecast and manage their finances. Summarizes the data provided by the user and tracks some anomalies through the use of machine learning.",
    features: [
      "Financial forecasting and management",
      "Machine learning for anomaly detection",
      "Data visualization and reporting",
      "User-friendly interface",
    ],
    projectTeam: ["G. Loterina (Project Lead and Designer)"],
    demo: "https://plm-library.pinnacle.edu.ph/cgi-bin/koha/opac-detail.pl?biblionumber=39712",
    academicDemo: true,
  },
  {
    id: "emergency-response",
    title: "ALERTO MNL: Crime Mapping & SOS Response System for Safer Manila City",
    projectPreview: AlertoWebApp,
    summary: "GPS tracking system for emergency response personnel.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    overview:
      "A GPS tracking system for emergency response personnel to track their location and status. It also allows the user to send and receive messages to and from the emergency response personnel.",
    features: [
      "GPS tracking and location sharing",
      "Message sending and receiving",
      "Emergency response personnel tracking",
      "User-friendly interface",
    ],
    projectTeam: [
      "R. Jimenez (Backend Developer)",
      "A. Abelarde (Project Lead and Designer)",
      "C. Moaje (Backend Developer)",
      "A. San Jose (Documentation and Testing)",
    ],
    demo: "https://www.studocu.com/ph/document/pamantasan-ng-lungsod-ng-maynila/methods-of-research/alerto-mnl-crime-mapping-sos-response-system-for-safer-manila-city/133738319?sid=01c6869b-9e81-4e53-825d-48178cd14d681789829879",
    academicDemo: true,
  },
];

function Projects() {
  const [active, setActive] = useState(0);
  const [openId, setOpenId] = useState<string | null>(null);
  const [tab, setTab] = useState("Overview");
  const selected = useMemo(
    () => projects.find((project) => project.id === openId) ?? null,
    [openId],
  );

  const teamTabs = selected?.projectTeam?.length
    ? ["Overview", "Features", "Technologies", "What I Learned", "Project Team"]
    : ["Overview", "Features", "Technologies", "What I Learned"];

  useEffect(() => {
    if (!openId) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openId]);

  const goTo = (index: number) => {
    const next = (index + projects.length) % projects.length;
    setActive(next);
  };

  return (
    <section id="projects" className="section">
      <Reveal>
        <div className="section-head">
          <div>
            <p className="kicker">Selected work</p>
            <h2>Featured Projects</h2>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="project-carousel">
          <button
            type="button"
            className="carousel-nav prev"
            aria-label="Previous project"
            onClick={() => goTo(active - 1)}
          >
            ‹
          </button>

          <div className="project-viewport">
            <div
              className="project-track"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="project-slide" key={project.id}>
                  <button
                    type="button"
                    className={`project-card ${active === index ? "is-active" : ""}`}
                    onClick={() => {
                      setOpenId(project.id);
                      setTab("Overview");
                      setActive(index);
                    }}
                  >
                    <div className="project-preview">
                      <img src={project.projectPreview} alt={`${project.title} preview`} />
                    </div>
                    <div className="project-body">
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                      <div className="chips">
                        {project.tags.map((tag) => (
                          <span className="chip" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="carousel-nav next"
            aria-label="Next project"
            onClick={() => goTo(active + 1)}
          >
            ›
          </button>
        </div>
      </Reveal>

      <div className="dots">
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            className={active === index ? "active" : ""}
            aria-label={`Show ${project.title}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>

      <Reveal>
        <div className="contrib-intro">
          <p className="kicker">GitHub activity</p>
          <h2>Contributions</h2>
        </div>
        <ContributionGraph />
      </Reveal>

      {selected && (
        <div
          className="overlay"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
        >
          <article className="detail" onClick={(event) => event.stopPropagation()}>
            <div className="detail-top">
              <div>
                <button
                  type="button"
                  className="ghost-btn"
                  onClick={() => setOpenId(null)}
                >
                  ← Back to Projects
                </button>

                <h2 id="project-title">{selected.title}</h2>
                <span className="badge">Featured Project</span>
              </div>

              {selected.demo && (
                <div className="hero-actions">
                  <a
                    className="red-btn"
                    href={selected.demo}
                    target={selected.demo.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              )}
            </div>

            <div className="detail-hero">
              {selected.academicDemo ? (
                <div className="academic-demo">
                  <p className="academic-demo-kicker">
                    Project Demo — {selected.title}
                  </p>

                  <h3>Academic Research Project</h3>

                  <p>
                    Developed as part of the BSIT thesis/research requirements at
                    Pamantasan ng Lungsod ng Maynila.
                  </p>
                </div>
              ) : (
                <img
                  src={selected.projectPreview}
                  alt={`${selected.title} preview`}
                />
              )}
            </div>

            <div className="chips" style={{ marginTop: 18 }}>
              {selected.tags.map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="tabs">
              {teamTabs.map((name) => (
                <button
                  key={name}
                  type="button"
                  className={tab === name ? "active" : ""}
                  onClick={() => setTab(name)}
                >
                  {name}
                </button>
              ))}
            </div>

            {tab === "Overview" && <p className="muted">{selected.overview}</p>}
            {tab === "Features" && (
              <ul className="feature-list">
                {selected.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            )}
            {tab === "Technologies" && (
              <p className="muted">{selected.tags.join(" · ")}</p>
            )}
            {tab === "What I Learned" && (
              <p className="muted">
                This project sharpened my focus on clear information architecture,
                reusable UI, and building flows that stay readable on both desktop
                and mobile.
              </p>
            )}
            {tab === "Project Team" && selected.projectTeam && (
              <ul className="feature-list">
                {selected.projectTeam.map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            )}

            <div className="section-head" style={{ marginTop: 32 }}>
              <h2 style={{ fontSize: "1.2rem" }}>Related Certificates</h2>
              <a href="#certificates" onClick={() => setOpenId(null)}>
                View All Certificates
              </a>
            </div>
            <a className="primary-btn" href="#contact" onClick={() => setOpenId(null)}>
              Get in Touch <ArrowIcon />
            </a>
          </article>
        </div>
      )}
    </section>
  );
}

export default Projects;
