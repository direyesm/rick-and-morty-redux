import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__made">
      Made with{" "}
      <span role="img" aria-label="hand">
        🤙🏻
      </span>{" "}
      by
      <a
        href="https://www.linkedin.com/in/diegomrm/"
        real="noopener noreferrer"
        target="_blamk"
        className="logo"
      >
        <span className="logo-img">&lt;&gt;</span> <span>Diego Reyes</span>
      </a>
    </div>
    <div className="footer__location">
      CH,
      <span>Santiago</span>, 2021
    </div>
  </footer>
);

export default Footer;
