import React from "react";
import pp from "../../images/pabloPicPort.png";
import "./Profile.css"

function Profile() {
  return (
    <section className="profile">
      <div className="profilePicture">
        <img className="imageAbout" src={pp} alt="profilePicture" />
      </div>
      <div className="aboutInfo">
        <h1 className="titleAbout">
          Hi! I'm Pablo and I'm a front-end developer
        </h1>
        <p className="paragraphAbout">
          I value simple content structure, clean design patterns, and
          thoughtful interactions. Websites for desktop, tablet and mobile
          versions with an excellent UX and UI experience.
        </p>
        <button
          className="buttonAbout"
          type="button"
          onClick="https://drive.google.com/file/d/1eZe57OVcyFXj2HZbgENzWio6LfOvX7Ef/view?usp=sharing"
          target="_blank"
        >
          Resume
        </button>
      </div>
    </section>
  );
}

export default Profile;
