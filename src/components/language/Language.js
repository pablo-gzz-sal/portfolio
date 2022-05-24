import React  from "react";
import "./Language.css";

function Language( {language, setLanguage}) {
  
  const handleChange = () => {
    setLanguage(!language);
  };

  return (
    <div className="buttonMode buttonLan">
      <input
        id="language"
        className="checkbox"
        type={"checkbox"}
        onClick={handleChange}
      />
      <label for="language" className="label">
        <span class="spanish">Sp</span>
        <span class="english">En</span> <div class="ball"></div>
      </label>
    </div>
  );
}

export default Language;