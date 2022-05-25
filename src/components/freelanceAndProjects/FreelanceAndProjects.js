import React from "react";
import "./FreelanceAndProjects.css";
import firebase from "../../svg/firebase.svg";
import woocommerce from "../../images/woocommerce.png";
import oxygen from "../../images/oxygenbuilder-logo.jpg";
import helloProject from "../../images/helloProject.png";
import hotelProject from "../../images/hotelProject.png";
import gifsProject from "../../images/gifsProject.png";
import devsProject from "../../images/devsProject.png";
import daltonist from "../../images/daltonist.PNG"
import fetivi from "../../images/fetivi.PNG"
import diocletians from "../../images/diocletians.PNG"

function FreelanceAndProjects({darkMode, language}) {
  return (
    <section className="freelanceAndProjects" id="freelanceAndProjects">
      <div className="projectsSection">
        <h2 className="titleProjects">{language ? "Proyectos" : "Projects"}</h2>
        <div className="projects">
          <span className="individualProject">
            <a
              href="https://vigorous-goldberg-d63323.netlify.app/"
              target="_blank"
            >
              <img
                src={helloProject}
                alt="project image"
                className="projectImg"
              />
              <h3 className="titleProjectInd">Hello Pale Blue Dot</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-html5 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-css3 fa-3x"></i>
                  </li>
                  <li className="languageInd"></li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://csb-ro4pj.netlify.app/" target="_blank">
              <img src={hotelProject} alt="" className="projectImg" />
              <h3 className="titleProjectInd">Hotel Rooms Reservations</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-html5 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-css3 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-js fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-react fa-3x"></i>
                  </li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://csb-efggn.netlify.app/" target="_blank">
              <img src={gifsProject} alt="" className="projectImg" />
              <h3 className="titleProjectInd">GIFOS</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-html5 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-css3 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-js fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-react fa-3x"></i>
                  </li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://proyecto-prueba-e30fa.web.app/" target="_blank">
              <img src={devsProject} alt="" className="projectImg" />
              <h3 className="titleProjectInd">Devs United</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-html5 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-css3 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-js fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-react fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <img src={firebase} alt="firebase logo" />
                  </li>
                </lu>
              </span>
            </a>
          </span>
        </div>
      </div>
      <div className="projectsSection freelanceSection">
        <h2 className="titleProjects titleFreelance">Freelance</h2>
        <div className="projects">
          <span className="individualProject">
            <a
              href="https://thedaltonist.com/en/"
              target="_blank"
            >
              <img
                src={daltonist}
                alt="project image"
                className="projectImg"
              />
              <h3 className="titleProjectInd">The Daltonist</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-html5 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-css3 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-wordpress fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-google fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-yoast fa-3x"></i>
                  </li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://www.fetiviandfuresti.com/" target="_blank">
              <img src={fetivi} alt="" className="projectImg" />
              <h3 className="titleProjectInd">Fetivi and Furesti</h3>
              <span className="languageProjects">
                <lu className="listLan">
                  <li className="languageInd">
                    <i class="fab fa-wix fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-google fa-3x"></i>
                  </li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://www.diocletiansdream.com/" target="_blank">
              <img src={diocletians} alt="" className="projectImg" />
              <h3 className="titleProjectInd">Diocletian's Dream</h3>
              <span className="languageProjects">
                <lu className="listLan">
                <li className="languageInd">
                    <i class="fab fa-html5 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-css3 fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-wordpress fa-3x"></i>
                  </li>
                  <li className="languageInd">
                    <i class="fab fa-yoast fa-3x"></i>
                  </li>
                </lu>
              </span>
            </a>
          </span>
          
        </div>
      </div>
    </section>
  );
}

export default FreelanceAndProjects;
