import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
      {/* <Contact
        img={imageA}
        name="Fiji"
        phone="(212) 023 2890"
        mail="fiji@fiji.meow"
      />
      <Contact
        img={imageB}
        name="Maya"
        phone="(212) 948 4790"
        mail="maya@maya.meow"
      /> */}
    </div>
  );
}
