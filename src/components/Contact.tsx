import React from "react";

const Contact = () => (
  <section className="contact" id="contact">
    <div className="contact__inner">
      <h2 className="section-heading">Let's Work Together</h2>
      <p className="contact__sub">
        Currently available for full-time Data Analyst positions. I'd love to discuss
        how my skills in SQL, Power BI, Tableau and Python can help your team make
        better data-driven decisions.
      </p>
      <div className="contact__buttons">
        <a
          href="mailto:gowdaamith62@gmail.com"
          className="contact__btn contact__btn--email"
        >
          ✉️ Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/amith-gowda"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__btn contact__btn--linkedin"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://github.com/AmithGowda04"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__btn contact__btn--github"
        >
          🐙 GitHub
        </a>
        <a
          href="tel:+919900251454"
          className="contact__btn contact__btn--phone"
        >
          📞 Call
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
