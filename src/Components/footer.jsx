import React from "react";
import "./footer.css";
import logo from "../assets/logo-footer.png";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bm-footer">
      {/* Top Banner / Newsletter (Optional CTA) */}
      

      {/* Main Footer Body */}
      <div className="footer-main">
        {/* Company Info Column */}
        <div className="footer-col brand-col">
          <a href="#home" className="footer-logo-link">
            <img src={logo} alt="Hāālo AI Hotel PMS" className="footer-logo" />
          </a>
          <p className="brand-description">
            Empowering hoteliers with modern management software, direct booking engines, and seamless channel management.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><a href="#property-management">Property Management (PMS)</a></li>
            <li><a href="#channel-manager">Channel Manager</a></li>
            <li><a href="#booking-engine">Direct Booking Engine</a></li>
            <li><a href="#revenue-management">Revenue Management</a></li>
            <li><a href="#hotel-website">Hotel Website Design</a></li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#pricing">Pricing Plans</a></li>
            <li><a href="#hotelier-stories">Free Trial</a></li>
            <li><a href="#resources">Help & Support</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#login">Client Login</a></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="contact-info">
            <li>
              <span className="info-icon">📍</span>
              <span>123 Hospitality Hub, Business Park, India</span>
            </li>
            <li>
              <span className="info-icon">📞</span>
              <a href="tel:+911234567890">+91 12345 67890</a>
            </li>
            <li>
              <span className="info-icon">✉️</span>
              <a href="mailto:support@ahaalo.in">support@ahaalo.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Hāālo. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="divider">•</span>
            <a href="#terms">Terms of Service</a>
            <span className="divider">•</span>
            <a href="#security">Security</a>
          </div>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            ▲ Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;