import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import logo from "../assets/logo-header.mp4";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const handleNavClick = () => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/services", label: "SERVICES" },
    { to: "/support", label: "HELP & SUPPORT" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="navbar-container">

      {/* Logo */}
      <div className="logo-container">
        <Link
          to="/"
          className="logo-link"
          onClick={handleNavClick}
        >
          <video
            src={logo}
            className="navbar-logo"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((item) => (
          <div className="nav-item" key={item.to}>
            <Link
              to={item.to}
              onClick={handleNavClick}
              className={`nav-link ${
                location.pathname === item.to ? "active" : ""
              }`}
            >
              {item.label}
            </Link>
          </div>
        ))}

        {/* Mobile Login */}
        <div className="nav-item mobile-only-login">
          <a
            href="https://pms.ahaalo.com"
            className="login-btn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Log In
          </a>
        </div>
      </nav>

      {/* Desktop Login */}
      <div className="header-actions">
        <a
          href="https://pms.ahaalo.com"
          className="login-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log In
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

    </header>
  );
}

export default Header;