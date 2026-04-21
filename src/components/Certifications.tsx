import React from "react";
import { BarChart3, PieChart, Table2, Network, Cpu } from "lucide-react";

type IconSource =
  | { type: "cdn"; slug: string }
  | { type: "lucide"; icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }> };

interface Cert {
  icon: IconSource;
  iconBg: string;
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

const certs: Cert[] = [
  {
    icon: { type: "lucide", icon: BarChart3 },
    iconBg: "linear-gradient(145deg, #1565C0, #1E88E5)",
    name: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    year: "2023",
  },
  {
    icon: { type: "cdn", slug: "googleanalytics" },
    iconBg: "linear-gradient(145deg, #1B5E20, #2E7D32)",
    name: "Google Data Analytics",
    issuer: "Google / Coursera",
    year: "2022",
  },
  {
    icon: { type: "cdn", slug: "python" },
    iconBg: "linear-gradient(145deg, #0D47A1, #1565C0)",
    name: "Python for Data Analysis",
    issuer: "IBM / Coursera",
    year: "2022",
  },
  {
    icon: { type: "cdn", slug: "mysql" },
    iconBg: "linear-gradient(145deg, #00695C, #00897B)",
    name: "SQL for Data Science",
    issuer: "UC Davis / Coursera",
    year: "2021",
  },
  {
    icon: { type: "lucide", icon: Table2 },
    iconBg: "linear-gradient(145deg, #1B5E20, #388E3C)",
    name: "Advanced Excel for Business",
    issuer: "Linkedin",
    year: "2021",
  },
  {
    icon: { type: "lucide", icon: Network },
    iconBg: "linear-gradient(145deg, #CC785C, #7c3a1e)",
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    year: "2026",
    link: "https://verify.skilljar.com/c/dsdktxbt39gt",
  },
  {
    icon: { type: "lucide", icon: Cpu },
    iconBg: "linear-gradient(145deg, #9C5030, #5c2210)",
    name: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    year: "2026",
    link: "https://verify.skilljar.com/c/w4xcdqdmkt3z",
  },
  {
    icon: { type: "cdn", slug: "googleanalytics" },
    iconBg: "linear-gradient(145deg, #E37400, #F9AB00)",
    name: "Google Analytics Certification (GA4)",
    issuer: "Google SkillShop",
    year: "2026",
    link: "https://skillshop.credential.net/26b27555-9bd2-44d1-bb30-01bbac6237db#acc.keSz08tH",
  },
  {
    icon: { type: "cdn", slug: "googleanalytics" },
    iconBg: "linear-gradient(145deg, #C25E00, #E37400)",
    name: "Get Started using Google Analytics",
    issuer: "Google SkillShop",
    year: "2026",
    link: "https://skillshop.credential.net/1101df2d-3bcc-4a05-9fec-42140caa8d3e#acc.qki8pbJr",
  },
];

const IconBox = ({ icon }: { icon: IconSource }) => {
  if (icon.type === "lucide") {
    const LucideIcon = icon.icon;
    return <LucideIcon size={28} color="#ffffff" strokeWidth={1.8} />;
  }
  return (
    <img
      src={`https://cdn.simpleicons.org/${icon.slug}/ffffff`}
      alt=""
      width={28}
      height={28}
      onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
    />
  );
};

const Certifications = () => (
  <section className="certs" id="certifications">
    <div className="section-inner">
      <div className="certs__header">
        <span className="certs__label">Credentials</span>
        <h2 className="section-heading" style={{ marginBottom: 0 }}>Certifications</h2>
      </div>
      <div className="certs__grid">
        {certs.map((c, i) => (
          <div key={i} className="certs__item rv" style={{ transitionDelay: `${i * 70}ms` }}>
            <div className="certs__icon" style={{ background: c.iconBg }}>
              <IconBox icon={c.icon} />
            </div>
            <div className="certs__info">
              <h3 className="certs__name">{c.name}</h3>
              <p className="certs__issuer">{c.issuer} · {c.year}</p>
              {c.link && (
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="certs__verify">
                  Verify ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
