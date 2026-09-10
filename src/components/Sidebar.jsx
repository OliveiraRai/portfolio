import React from "react";

function Section({ title, children }) {
  return (
    <section className="sidebar-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
export function Sidebar({ profile, technologies, ai, statistics, feedback }) {
  return (
    <aside className="sidebar" aria-label="Informações profissionais">
      <Section title="Disponibilidade">
        <p className="availability">
          <span aria-hidden="true">●</span>
          {profile.availability.label}
        </p>
      </Section>
      <Section title="Tecnologias">
        <div className="technology-list">
          {technologies.map((item) => (
            <span className="technology" title={item.name} key={item.name}>
              <b>{item.short}</b>
              <span>{item.name}</span>
            </span>
          ))}
        </div>
      </Section><Section title="Ferramentas IA">
        <div className="technology-list">
          {ai.map((item) => (
            <span className="technology" title={item.name} key={item.name}>
              <b>{item.short}</b>
              <span>{item.name}</span>
            </span>
          ))}
        </div>
      </Section>
      <Section title="Estatísticas">
        <dl className="statistics">
          {statistics.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <Section title="Feedback">
        <div className="feedback-list">
          {feedback.map((item) => (
            <article className="feedback" key={item.name}>
              <img src={item.avatar} alt="" />
              <div>
                <strong>{item.name}</strong>
                <small>{item.role}</small>
              </div>
              <p>“{item.message}”</p>
            </article>
          ))}
        </div>
      </Section>
    </aside>
  );
}
