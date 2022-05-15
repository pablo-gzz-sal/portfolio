import React from "react";
import "./Header.css";
import DarkMode from "../darkMode/DarkMode";
import Language from "../language/Language";
import logo from "../../images/logo_transparent.png";
import bgImg from "../../images/bgImg.jpg";

function Header({ darkMode, setDarkMode, language, setLanguage }) {
  return (
    <section className="homePage">
      <img src={bgImg} alt="homepage Image" className="bgImg" />
      <h1 className="titleHP">Hi! I'm Pablo and I'm a front-end developer</h1>
      <span className="arrowHP">
        <a href="#aboutme" target="_self">
        <i class="fal fa-arrow-down arrow fa-2x"></i>
        </a>
      </span>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" className="logoImg" />
        </div>
        <div className="menuBar">
          <ul class="list">
            <li class="list_item">
              <a href="#episodios">About me</a>
            </li>
            <li class="list_item">
              <a href="#nosotros">Skills</a>
            </li>
            <li class="list_item">
              <a href="#entrevistas">Projects</a>
            </li>
            <li class="list_item">
              <a href="#topicos">Contact me</a>
            </li>
          </ul>
        </div>
        <div className="darkAndLan">
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          <Language language={language} setLanguage={setLanguage} />
        </div>
      </header>
    </section>
  );
}

export default Header;
