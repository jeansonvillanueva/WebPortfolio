import Reveal from "./Reveal";

const certificates = [
  { title: "Web Development", org: "Udemy" },
  { title: "React – The Complete Guide", org: "Udemy" },
  { title: "JavaScript Algorithms and Data Structures", org: "freeCodeCamp" },
  { title: "Responsive Web Design", org: "freeCodeCamp" },
];

function Education() {
  return (
    <section id="certificates" className="section">
      <Reveal>
        <div className="section-head">
          <div>
            <p className="kicker">Learning path</p>
            <h2>Education & Certificates</h2>
          </div>
        </div>
      </Reveal>

      <div className="cards">
        <Reveal>
          <article className="edu-card">
            <h3>Pamantasan ng Lungsod ng Maynila</h3>
            <p className="muted">Bachelor of Science in Information Technology</p>
            <p className="muted">2022 – 2026 · Cum Laude</p>
          </article>
        </Reveal>
        <Reveal delay={80}>
          <article className="edu-card">
            <h3>Doña Teodora Alonso High School</h3>
            <p className="muted">Information and Communications Technology</p>
            <p className="muted">2020 – 2022 · With Honors</p>
          </article>
        </Reveal>
        <Reveal delay={160}>
          <article className="edu-card">
            <h3>Francisco Balagtas Elementary School</h3>
            <p className="muted">Elementary</p>
            <p className="muted">2010 – 2016</p>
          </article>
        </Reveal>
      </div>

      <div className="cards" style={{ marginTop: 18 }}>
        {certificates.map((cert, index) => (
          <Reveal key={cert.title} delay={index * 60}>
            <article className="edu-card">
              <p className="muted">Certificate of Completion</p>
              <h3>{cert.title}</h3>
              <p className="muted">{cert.org}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Education;
