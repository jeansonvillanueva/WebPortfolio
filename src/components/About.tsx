import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <div className="section-head">
          <div>
            <p className="kicker">A little background</p>
            <h2>About Me</h2>
          </div>
        </div>
      </Reveal>
      <div className="cards">
        <Reveal>
          <article className="info-panel">
            <h3>Who I am</h3>
            <p className="muted">
              I'm an IT graduate focused on building digital experiences with
              technology, creativity, and purpose. I enjoy turning ideas into
              clean, responsive interfaces that feel easy to use. Pursuing to be a
              Network Engineer.
            </p>
          </article>
        </Reveal>
        <Reveal delay={80}>
          <article className="info-panel">
            <h3>What I do</h3>
            <p className="muted">
              I study and practice web development, networking, and information
              technology — from frontend interfaces to maintaining live sites
              and supporting day-to-day operations.
            </p>
          </article>
        </Reveal>
        <Reveal delay={160}>
          <article className="info-panel">
            <h3>How I work</h3>
            <p className="muted">
              I care about thoughtful layout, smooth motion, and details that
              make a product feel finished. I keep learning, iterating, and
              shipping work that people can actually use.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
