import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Profile  from "./components/profile/Profile";
import Footer from "./components/footer/Footer"

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
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
