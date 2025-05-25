import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <Link to="/" onClick={closeMenu}>
        <h1>Salman.</h1>
      </Link>

      {/* Hamburger Menu Button */}
      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          About me
        </Link>
        <Link to="/projects" onClick={closeMenu}>
          My Work
        </Link>
        <Link to="/blog" onClick={closeMenu}>
          Blog
        </Link>
      </ul>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </div>
  );
}

export default Navbar;
