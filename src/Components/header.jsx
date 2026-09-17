import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import logo from "../assets/logo-header.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="navbar-container">
      {/* Brand Logo */}
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img
            src={logo}
            alt="Hāālo AI Hotel PMS"
            className="navbar-logo"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <div className="nav-item">
          <Link to="/" className="nav-link">HOME</Link>
        </div>

        <div className="nav-item">
          <Link to="/services" className="nav-link">SERVICES</Link>
        </div>

        <div className="nav-item">
          <Link to="/support" className="nav-link">HELP & SUPPORT</Link>
        </div>

        <div className="nav-item">
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </div>

        {/* Login button repeated inside the mobile drawer */}
        <div className="nav-item mobile-only-login">
          <a href="https://ahaalopms-com.vercel.app/login" className="login-btn">Log In</a>
        </div>
      </nav>

      {/* Action Button (desktop) */}
      <div className="header-actions">
        <a href="https://ahaalopms-com.vercel.app/login" className="login-btn">Log In</a>
      </div>

      {/* Hamburger Toggle (mobile) */}
      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)}></div>
      )}
    </header>
  );
}

export default Header;
