import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2022 - Pablo Gonzalez Salcido</p>
      <div class="socialMedia">
        <a
          href="https://open.spotify.com/show/0Giuw6eNbTzP9CDZODDrA2"
          target="_blank"
        >
          <i class="fab fa-spotify fa-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/front.endevelopment/"
          target="_blank"
        >
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://twitter.com/trabajofrontend" target="_blank">
          <i class="fab fa-twitter fa-2x"></i>
        </a>
        <a
          href="https://www.facebook.com/Front-End-576361916163262"
          target="_blank"
        >
          <i class="fab fa-facebook-f fa-2x"></i>
        </a>
        <a
          href="https://telegramchannels.me/channels/fedevelopment"
          target="_blank"
        >
          <i class="fab fa-telegram fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
