import React from "react";
import "./Skills.css";
import firebase from "../../svg/firebase.svg";
import firebaseBlack from "../../images/firebaseBlack.png"
import woocommerce from "../../images/woocommerce.png";
import oxygen from "../../images/oxygenbuilder-logo.jpg";

function Skills({ darkMode, language }) {
  return (
    <section className={darkMode ? "skillsLight skills" : "skills"}>
      <h2 className="titleSkills">{language ? "Habilidades Técnicas" : "Technical Skills"}</h2>
      <div className="columnsSkills">
        <span
          className={darkMode ? "column column1stWhite" : "column column1st"}
        >
          <h3 className="titleColumn"></h3>
          <ul className="listColumn">
            <div className="textAndIcon">
              <li className="textSkills">HTML</li>
              <li className={`iconSkills iconHTML ${darkMode && "iconLight"}`}>
                <i class="fab fa-html5 fa-3x"></i>
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">CSS</li>
              <li className={`iconSkills iconCSS ${darkMode && "iconLight"}`}>
                <i class="fab fa-css3 fa-3x"></i>
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">JavaScript</li>
              <li className={`iconSkills iconJS ${darkMode && "iconLight"}`}>
                <i class="fab fa-js fa-3x"></i>
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">React</li>
              <li className={`iconSkills iconReact ${darkMode && "iconLight"}`}>
                <i class="fab fa-react fa-3x"></i>
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">Hooks</li>
              <li className={`iconSkills iconHooks ${darkMode && "iconLight"}`}>
                <i class="fab fa-react fa-3x"></i>
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">Firebase</li>
              <li className={`iconSkills iconFirebase ${darkMode && "iconLight"}`}>
                <img src={darkMode ? firebaseBlack : firebase} alt="firebase logo" />
              </li>
            </div>
          </ul>
        </span>
        <span className="column columnFreelance">
          <h3 className="titleColumn"></h3>
          <ul className="listColumn">
            <div className="textAndIcon">
              <li className="textSkills">Wordpress</li>
              <li className={`iconSkills iconWP ${darkMode && "iconLight"}`}>
                <i class="fab fa-wordpress fa-3x"></i>
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">Oxygen</li>
              <li className="iconSkills iconOxygen">
                <img src={oxygen} alt="firebase logo" />
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">Woocommerce</li>
              <li className={`iconSkills iconWoo ${darkMode && "iconLight"}`}>
                <img src={woocommerce} alt="woocommerce logo" />
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">Wix</li>
              <li className={`iconSkills iconWix ${darkMode && "iconLight"}`}>
                <i class="fab fa-wix fa-3x"></i>
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">Google Ads</li>
              <li className={`iconSkills iconGoogle ${darkMode && "iconLight"}`}>
                <i class="fab fa-google fa-3x"></i>
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">SEO</li>
              <li className={`iconSkills iconSEO ${darkMode && "iconLight"}`}>
                <i class="fab fa-yoast fa-3x"></i>
              </li>
            </div>
          </ul>
        </span>
      </div>
    </section>
  );
}

export default Skills;
