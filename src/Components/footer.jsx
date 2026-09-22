import React from "react";
import "./footer.css";
import logo from "../assets/logo-footer.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bm-footer">

      {/* =========================
          MAIN FOOTER BODY
      ========================= */}

      <div className="footer-main">

        {/* =========================
            COMPANY INFO
        ========================= */}

        <div className="footer-col brand-col">

          <a href="#home" className="footer-logo-link">
            <img
              src={logo}
              alt="Hāālo AI Hotel PMS"
              className="footer-logo"
            />
          </a>

          <p className="brand-description">
            Empowering hoteliers with modern management software, direct
            booking engines, and seamless channel management.
          </p>

          {/* =========================
              SOCIAL MEDIA
          ========================= */}

          <div className="social-links">

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.55.45-1 1-1z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="social-icon twitter"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.5 4.7c-.8.35-1.65.59-2.55.69a4.45 4.45 0 0 0 1.95-2.46 8.9 8.9 0 0 1-2.82 1.08 4.43 4.43 0 0 0-7.7 3.03c0 .35.04.69.11 1.01A12.58 12.58 0 0 1 3.35 3.43a4.43 4.43 0 0 0 1.37 5.91 4.4 4.4 0 0 1-2-.55v.06a4.43 4.43 0 0 0 3.55 4.34c-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08a4.44 4.44 0 0 0 4.14 3.08A8.9 8.9 0 0 1 2.98 18.2c-.35 0-.69-.02-1.03-.06a12.55 12.55 0 0 0 6.8 1.99c8.16 0 12.62-6.76 12.62-12.62 0-.19 0-.38-.01-.57a9.02 9.02 0 0 0 2.14-2.24z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon linkedin"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27zM5.34 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.56 8.98h3.56v11.47H3.56V8.98z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
              </svg>
            </a>

          </div>
        </div>


        {/* =========================
            SERVICES
        ========================= */}

        <div className="footer-col">

          <h4 className="footer-heading">
            Services
          </h4>

          <ul className="footer-links">
            <li>
              <a href="#property-management">
                Property Management (PMS)
              </a>
            </li>

            <li>
              <a href="#channel-manager">
                Channel Manager
              </a>
            </li>

            <li>
              <a href="#booking-engine">
                Direct Booking Engine
              </a>
            </li>


            <li>
              <a href="https://ahaalopms.com/">
                Hotel Website Design
              </a>
            </li>
          </ul>

        </div>


        {/* =========================
            QUICK LINKS
        ========================= */}

        <div className="footer-col">

          <h4 className="footer-heading">
            Quick Links
          </h4>

          <ul className="footer-links">


            <li>
              <a href="https://ahaalopms-com.vercel.app/">
                Free Trial
              </a>
            </li>

            <li>
              <a href="/support">
                Help &amp; Support
              </a>
            </li>

            <li>
              <a href="/contact">
                Contact Us
              </a>
            </li>

            <li>
              <a href="https://ahaalopms-com.vercel.app/">
                Client Login
              </a>
            </li>

          </ul>

        </div>


        {/* =========================
            CONTACT
        ========================= */}

        <div className="footer-col contact-col">

          <h4 className="footer-heading">
            Contact Us
          </h4>

          <ul className="contact-info">

            <li>
              <span className="info-icon">
                📍
              </span>

              <span>
               Hollister Inn, 152 San Felipe Rd, Hollister, CA 95023, United States
              </span>
            </li>

            <li>
              <span className="info-icon">
                📞
              </span>

              <a href="tel:+917225962759">
                 +91 72259 62759
              </a>
            </li>

            <li>
              <span className="info-icon">
                ✉️
              </span>

              <a href="mailto:admin@ahaalo.com">
               admin@ahaalo.com
              </a>
            </li>

          </ul>

        </div>

      </div>


      {/* =========================
          FOOTER BOTTOM
      ========================= */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p className="copyright">
            &copy; {new Date().getFullYear()} A Hāālo.
            All rights reserved.
          </p>

          <div className="legal-links">

            <a href="#privacy">
              Privacy Policy
            </a>

            <span className="divider">
              •
            </span>

            <a href="#terms">
              Terms of Service
            </a>

            <span className="divider">
              •
            </span>

            <a href="#security">
              Security
            </a>

          </div>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            ▲ Top
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;