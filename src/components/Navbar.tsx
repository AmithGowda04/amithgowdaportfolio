import React from "react";
import { useActiveNav } from "@/hooks/use-active-nav";

const NAV_SECTIONS = ["home", "skills", "experience", "projects", "certifications", "contact"];

const Navbar = () => {
  const active = useActiveNav(NAV_SECTIONS);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__brand">
          <span className="nav__brand-dot" />
          Amith Gowda S
        </div>

        <ul className="nav__links">
          {NAV_SECTIONS.map(id => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={e => {
                  e.preventDefault();
                  scrollTo(id);
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="nav__hire"
          onClick={e => {
            e.preventDefault();
            scrollTo("contact");
          }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
