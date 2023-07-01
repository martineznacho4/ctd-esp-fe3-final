import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/useGlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { state, dispatch } = useGlobalContext();
  const { theme } = state;

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch({ type: "TOGGLE_THEME", payload: newTheme });
    document.documentElement.className = newTheme;
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="brand">
        <span className="brand-d">D</span>H ODONTO
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
      </button>
    </nav>
  );
};

export default Navbar;