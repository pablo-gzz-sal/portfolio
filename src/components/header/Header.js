import React from "react";
import "./Header.css";
import DarkMode from "../darkMode/DarkMode";
import Language from "../language/Language";
import logo from "../../images/logo_transparent.png";
import bgImg from "../../images/bgImg.jpg";
import bgWhite from "../../images/bgWhite.jpg";

function Header({ darkMode, setDarkMode, language, setLanguage }) {
  return (
    <section className="homePage">
      <img
        src={darkMode ? bgWhite : bgImg}
        alt="homepage Image"
        className="bgImg"
      />
      <h1 className={`titleHP ${darkMode && "titleHPLight"}`}>
        {language
          ? "Hola! Soy Pablo y soy un desarrollador front-end."
          : "Hi! I'm Pablo and I'm a front-end developer."}
      </h1>
      <span className="arrowHP">
        <a href="#aboutme" target="_self">
          <i class= {darkMode ? "fal fa-arrow-down arrowLight fa-2x" : "fal fa-arrow-down arrow fa-2x"}></i>
        </a>
      </span>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" className="logoImg" />
        </div>
        <div className="menuBar">
          <ul class="list">
            <li class={`list_item ${darkMode ? "list_itemLight" : ""}`}>
              <a href="#episodios">{language ? "Sobre mí" : "About me"}</a>
            </li>
            <li class={`list_item ${darkMode ? "list_itemLight" : ""}`}>
              <a href="#nosotros">{language ? "Habilidades" : "Skills"}</a>
            </li>
            <li class={`list_item ${darkMode ? "list_itemLight" : ""}`}>
              <a href="#entrevistas">{language ? "Proyectos" : "Projects"}</a>
            </li>
            <li class={`list_item ${darkMode ? "list_itemLight" : ""}`}>
              <a href="#topicos">{language ? "Contactame" : "Contact me"}</a>
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
