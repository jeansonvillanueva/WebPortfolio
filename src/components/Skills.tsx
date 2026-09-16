import Reveal from "./Reveal";

const skills = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "HTML", "CSS", "Vite"],
  },
  {
    title: "Backend",
    items: ["PHP", "MySQL", "PostgreSQL"],
  },
  {
    title: "Design",
    items: ["UI systems"],
  },
  {
    title: "IT Operations",
    items: ["Networking", "Documentation", "Site maintenance"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <div className="section-head">
          <div>
            <p className="kicker">What I use</p>
            <h2>Skills</h2>
          </div>
        </div>
      </Reveal>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <Reveal key={skill.title} delay={index * 70}>
            <article className="skill-card">
              <h3>{skill.title}</h3>
              <div className="chips">
                {skill.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
