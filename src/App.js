import logo from "./logo.svg";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetail from "./pages/CountryDetail";
import MenuBar from "./components/MenuBar";

import { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);
  return (
    <Router>
      <MenuBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          }
        />
        <Route
          path="/country/:countryName"
          element={<CountryDetail isDarkMode={isDarkMode} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
