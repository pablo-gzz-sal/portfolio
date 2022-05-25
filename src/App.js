import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import FreelanceAndProjects from "./components/freelanceAndProjects/FreelanceAndProjects";
import Contact from "./components/contact/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState(false);
  return (
    <div className="App">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <Profile darkMode={darkMode} language={language} />
      <Skills darkMode={darkMode} language={language} />
      <FreelanceAndProjects darkMode={darkMode} language={language} />
      <Contact darkMode={darkMode} language={language} />
      <Footer darkMode={darkMode} language={language} />
    </div>
  );
}

export default App;
