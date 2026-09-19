import Reveal from "./Reveal";
import lbci from "../assets/images/lbci.png";

function Religion() {
  return (
    <section id="religion" className="section">
      <Reveal>
        <div className="section-head">
          <div>
            <p className="kicker">Beyond Technology</p>
            <h2>About Him</h2>
          </div>
        </div>
      </Reveal>

      <div className="cards">
        <Reveal>
          <article className="info-panel">
            <h3>Who is He</h3>
            <p className="muted">
              I am a sinner and a Bible-believing Christian who believes in the
              righteous Lord God, Jesus Christ, and His Word. My faith shapes my
              commitment to integrity, humility, service, compassion, and
              excellence in both my personal life and professional work.
            </p>
          </article>
        </Reveal>
        <Reveal delay={80}>
          <article className="exp-card">
            <div className="lbci-mark">
              <img src={lbci} alt="La Loma Baptist Institute" />
            </div>
            <div>
              <h3>La Loma Baptist Institute</h3>
              <p className="muted">Graduate of Theology · 2020 - 2024</p>
              <p className="muted" style={{ marginTop: 10 }}>
                Studied at La Loma Baptist Institute for three years using the Baptist Asian Missions Association (BAMA) Curriculum under the ministry of La Loma Baptist Church.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default Religion;
