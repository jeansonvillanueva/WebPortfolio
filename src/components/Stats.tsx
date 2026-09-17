import Reveal from "./Reveal";

const stats = [
  { value: "3+", label: "Projects Completed" },
  { value: "1+", label: "Years of Experience" },
  { value: "3+", label: "Certificates Earned" },
];

function Stats() {
  return (
    <div className="stats">
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 80}>
          <article className="stat-card">
            <div className="stat-icon">◆</div>
            <div>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export default Stats;
