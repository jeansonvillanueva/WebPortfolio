import Reveal from "./Reveal";
import mcdo from "../assets/images/mcdo.svg";
import spes from "../assets/images/peso.png";
import ymca from "../assets/images/ymca.png";
import sagility from "../assets/images/sagility.png";

function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <div className="section-head">
          <div>
            <p className="kicker">Where I've worked</p>
            <h2>Experience</h2>
          </div>
        </div>
      </Reveal>

      <div className="timeline">
      <Reveal>
          <article className="exp-card">
            <div className="ymca-mark">
              <img src={sagility} alt="Sagility" />
            </div>
            <div>
              <h3>Sagility</h3>
              <p className="muted">CSR Associate · October 2026 - Present</p>
              <p className="muted" style={{ marginTop: 10 }}>
                Under traing to provide better customer service to the clients of the specific company assigned.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={80}>
          <article className="exp-card">
            <div className="exp-logo">
              <img src={mcdo} alt="McDonald's" />
            </div>
            <div>
              <h3>McDonald's Philippines</h3>
              <p className="muted">Service Crew · June 2025 – October 2026</p>
              <p className="muted" style={{ marginTop: 10 }}>
                Provided customer service and assisted with food and drink
                preparation. Recognized as Employee of the Month for November 2025
                and February 2026.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal>
          <article className="exp-card">
            <div className="ymca-mark">
              <img src={ymca} alt="Young Men's Christian Association" />
            </div>
            <div>
              <h3>Young Men's Christian Association</h3>
              <p className="muted">Web Developer · July 2026 - September 2026</p>
              <p className="muted" style={{ marginTop: 10 }}>
                Developed, maintained, and updated the website and social media
                accounts of the Young Men's Christian Association.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={160}>
          <article className="exp-card">
            <div className="peso-mark">
              <img src={spes} alt="Public Employment Service Office (PESO) Manila" />
            </div>
            <div>
              <h3>Public Employment Service Office (PESO) Manila</h3>
              <p className="muted">Special Program for Employment of Students · 2022</p>
              <p className="muted" style={{ marginTop: 10 }}>
                Managed and organized paper tax documents at City Hall, including
                arranging and tracking filing dates to support efficient processing.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
