import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import logo from "../assets/logo-header.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top and close menu when navigation occurs
  const handleNavClick = () => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // 'smooth' bhi use kar sakte hain agar smooth animation chahiye
    });
  };

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

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/services", label: "SERVICES" },
    { to: "/support", label: "HELP & SUPPORT" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="navbar-container">
      {/* Brand Logo */}
      <div className="logo-container">
        <Link to="/" className="logo-link" onClick={handleNavClick}>
          <img
            src={logo}
            alt="Hāālo AI Hotel PMS"
            className="navbar-logo"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((item) => (
          <div className="nav-item" key={item.to}>
            <Link
              to={item.to}
              onClick={handleNavClick}
              className={`nav-link ${location.pathname === item.to ? "active" : ""}`}
            >
              {item.label}
            </Link>
          </div>
        ))}

        {/* Login button inside mobile menu */}
        <div className="nav-item mobile-only-login">
          <a
            href="https://ahaalopms-com.vercel.app/"
            className="login-btn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Log In
          </a>
        </div>
      </nav>

      {/* Action Button - Desktop */}
      <div className="header-actions">
        <a
          href="https://ahaalopms-com.vercel.app/"
          className="login-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log In
        </a>
      </div>

      {/* Hamburger Toggle - Mobile */}
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

      {/* Blurred Backdrop Overlay */}
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