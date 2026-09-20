import Reveal from "./Reveal";
import { ArrowIcon } from "./Icons";
import plm from "../assets/images/plm.png";
import dtahs from "../assets/images/dtahs.png";
import fbes from "../assets/images/fbes.png";

const certificateFiles = import.meta.glob("../assets/documents/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const certificates = [
  { title: "CS207: Fundamentals of Machine Learning", org: "Coursera" },
  { title: "CS302: Software Engineering", org: "Coursera" },
  { title: "Computer System Servicing NC II", org: "TESDA" },
];

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function findCertificateUrl(title: string) {
  const needle = normalize(title);
  for (const [path, url] of Object.entries(certificateFiles)) {
    const fileName = path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "";
    const haystack = normalize(fileName);
    if (haystack && (needle.includes(haystack) || haystack.includes(needle))) {
      return url;
    }
  }
  return undefined;
}

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
          <div className="plm-mark">
            <img src={plm} alt="PLM" />
          </div>
          <div>
            <h3>Pamantasan ng Lungsod ng Maynila</h3>
            <p className="muted">Bachelor of Science in Information Technology</p>
            <p className="muted">2022 – 2026 · Cum Laude</p>
          </div>
          </article>
        </Reveal>
        <Reveal delay={80}>
          <article className="edu-card">
          <div className="dtahs-mark">
            <img src={dtahs} alt="DTAHS" />
          </div>
          <div>
            <h3>Doña Teodora Alonso High School</h3>
            <p className="muted">Information and Communications Technology (ICT Strand)</p>
            <p className="muted">2020 – 2022 · With Honors</p>
          </div>
          </article>
        </Reveal>
        <Reveal delay={160}>
          <article className="edu-card">
          <div className="fbes-mark">
            <img src={fbes} alt="FBES" />
          </div>
            <h3>Francisco Balagtas Elementary School</h3>
            <p className="muted">Elementary</p>
            <p className="muted">2010 – 2016</p>
          </article>
        </Reveal>
      </div>

      <div className="cards" style={{ marginTop: 18 }}>
        {certificates.map((cert, index) => {
          const fileUrl = findCertificateUrl(cert.title);
          return (
            <Reveal key={cert.title} delay={index * 60}>
              <article className="edu-card">
                <p className="muted">Certificate of Completion</p>
                <h3>{cert.title}</h3>
                <p className="muted">{cert.org}</p>
                {fileUrl ? (
                  <a
                    className="ghost-btn cert-link"
                    href={fileUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Certificate
                    <ArrowIcon />
                  </a>
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default Education;
