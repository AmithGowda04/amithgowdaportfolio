import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <span>© {new Date().getFullYear()} Amith Gowda S</span>
      <span className="footer__dot" />
      <span>B.E. Computer Science · SVCE 2019</span>
      <span className="footer__dot" />
      <span>Bangalore, India</span>
    </div>
  </footer>
);

export default Footer;
