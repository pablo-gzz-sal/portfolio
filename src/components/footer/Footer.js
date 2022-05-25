import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2022 - Pablo Gonzalez Salcido</p>
      <div class="socialMedia">
        <a
          href="https://github.com/pablo-gzz-sal"
          target="_blank"
        >
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/pablo-gonzalez-salcido-bb1a491a9/"
          target="_blank"
        >
          <i class="fab fa-linkedin-in fa-2x"></i>
        </a>
        <a href="https://twitter.com/salcidopablo7" target="_blank">
          <i class="fab fa-twitter fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
