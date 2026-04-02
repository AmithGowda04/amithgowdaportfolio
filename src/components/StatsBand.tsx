import React from "react";

const stats = [
  { num: "4+", label: "Years Experience", color: "var(--blue)" },
  { num: "200+", label: "Officials Trained", color: "var(--teal)" },
  { num: "10+", label: "Dashboards Built", color: "var(--gold)" },
  { num: "15%", label: "Efficiency Gained", color: "var(--violet)" },
  { num: "6", label: "Certifications", color: "var(--rose)" },
  { num: "8+", label: "Projects Delivered", color: "var(--green)" },
];

const StatsBand = () => (
  <section className="stats">
    <div className="stats__inner">
      {stats.map((s, i) => (
        <div key={i} className="stats__item rv">
          <span className="stats__num" style={{ color: s.color }}>{s.num}</span>
          <span className="stats__label">{s.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBand;
