import React from "react";
import "./Skills.css";
import firebase from "../../svg/firebase.svg";

function Skills() {
  return (
    <section className="skills">
      <h2 className="titleSkills">Technical Skills</h2>
      <div className="columnsSkills">
        <span className="column">
          <h3 className="titleColumn"></h3>
          <ul className="listColumn">
            <div className="textAndIcon">
              <li className="textSkills">HTML</li>
              <li className="iconSkills iconHTML">
                <i class="fab fa-html5 fa-3x"></i>
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">CSS</li>
              <li className="iconSkills iconCSS">
                <i class="fab fa-css3 fa-3x"></i>
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">JavaScript</li>
              <li className="iconSkills iconJS">
                <i class="fab fa-js fa-3x"></i>
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">React</li>
              <li className="iconSkills iconReact">
                <i class="fab fa-react fa-3x"></i>
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">Hooks</li>
              <li className="iconSkills iconHooks">
                <i class="fab fa-react fa-3x"></i>
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">Firebase</li>
              <li className="iconSkills iconFirebase">
                <img src={firebase} alt="firebase logo" />
              </li>
            </div>
          </ul>
        </span>
        <span className="column">
          <h3 className="titleColumn"></h3>
          <ul className="listColumn">
            <div className="textAndIcon">
              <li className="textSkills">Wordpress</li>
              <li className="iconSkills iconFirebase">
                <i class="fab fa-wordpress fa-3x"></i>
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">Oxygen</li>
              <li className="iconSkills iconFirebase">
                <img src={firebase} alt="firebase logo" />
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">Woocommerce</li>
              <li className="iconSkills iconFirebase">
                <img src={firebase} alt="firebase logo" />
              </li>
            </div>
            <div className="textAndIcon">
              <li className="textSkills">Wix</li>
              <li className="iconSkills iconFirebase">
                <i class="fab fa-wix fa-3x"></i>
              </li>
            </div>
          </ul>
        </span>
      </div>
    </section>
  );
}

export default Skills;
