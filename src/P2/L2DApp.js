import React, { useState, useEffect } from "react";
import "./L2D.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <div className="container">
      <h1>No LoL</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : " Dark Mode"}
      </button>
    </div>
  );
}

export default App;
