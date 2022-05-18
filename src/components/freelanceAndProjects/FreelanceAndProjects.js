import React from "react";
import "./FreelanceAndProjects.css";
import helloProject from "../../images/helloProject.png"
import hotelProject from "../../images/hotelProject.png"
import gifsProject from "../../images/gifsProject.png"
import devsProject from "../../images/devsProject.png"

function FreelanceAndProjects() {
  return (
    <section className="freelanceAndProjects">
      <div className="projectsSection">
        <h2 className="titleProjects">Projects</h2>
        <div className="projects">
          <span className="individualProject">
            <a href="https://vigorous-goldberg-d63323.netlify.app/" target="_blank"  className="projectImg">
              <img src={helloProject} alt="project image" className="projectImg" />
              <h3 className="titleProjectInd"></h3>
              <span className="languageProjects">
                <lu>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://csb-ro4pj.netlify.app/" target="_blank">
              <img src={hotelProject} alt="" className="projectImg" />
              <h3 className="titleProjectInd"></h3>
              <span className="languageProjects">
                <lu>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://proyecto-prueba-e30fa.web.app/" target="_blank">
              <img src={gifsProject} alt="" className="projectImg" />
              <h3 className="titleProjectInd"></h3>
              <span className="languageProjects">
                <lu>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualProject">
            <a href="https://csb-efggn.netlify.app/" target="_blank">
              <img src={devsProject} alt="" className="projectImg" />
              <h3 className="titleProjectInd"></h3>
              <span className="languageProjects">
                <lu>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
                </lu>
              </span>
            </a>
          </span>
        </div>
      </div>
      <div className="freelanceSection">
        <h2 className="titleFreelance">Freelance</h2>
        <div className="freelance">
          <span className="individualFreelance">
            <a href="" target="_blank">
              <img src="" alt="" className="freelanceImg" />
              <h3 className="titleFreelanceInd"></h3>
              <span className="languageFreelance">
                <lu>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualFreelance">
            <a href="" target="_blank">
              <img src="" alt="" className="freelanceImg" />
              <h3 className="titleFreelanceInd"></h3>
              <span className="languageFreelance">
                <lu>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualFreelance">
            <a href="" target="_blank">
              <img src="" alt="" className="freelanceImg" />
              <h3 className="titleFreelanceInd"></h3>
              <span className="languageFreelance">
                <lu>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
                </lu>
              </span>
            </a>
          </span>
          <span className="individualFreelance">
            <a href="" target="_blank">
              <img src="" alt="" className="freelanceImg" />
              <h3 className="titleFreelanceInd"></h3>
              <span className="languageFreelance">
                <lu>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
                  <li className="languageInd"></li>
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
