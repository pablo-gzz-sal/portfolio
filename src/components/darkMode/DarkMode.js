import React  from "react";
import "./DarkMode.css";

function DarkMode( {darkMode, setDarkMode}) {
  
  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="buttonMode">
      <input
        id="darkAndLight"
        className="checkbox"
        type={"checkbox"}
        onClick={handleChange}
      />
      <label for="darkAndLight" className="label">
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i> <div class="ball"></div>
      </label>
    </div>
  );
}

export default DarkMode;