import React, { useState } from "react";
import "./footer.css";
import logo from "../assets/logo-footer.png";

function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleServiceClick = (e, tabId) => {
    e.preventDefault();
    if (window.location.pathname === "/" || window.location.pathname === "") {
      window.dispatchEvent(
        new CustomEvent("haalo_switch_product_tab", { detail: tabId })
      );
    } else {
      window.location.href = `/#${tabId}`;
    }
  };

  const legalContent = {
    privacy: {
      title: "Privacy Policy",
      content: (
        <>
          <p>
            At <strong>Hāālo AI Hotel PMS</strong>, we are committed to safeguarding guest, hotelier, and transaction data across all cloud operations.
          </p>
          <h4>1. Information We Collect</h4>
          <p>
            We process hotel reservations, guest check-in folios, OTA sync payloads, GST invoicing details, and property configuration metrics strictly to deliver PMS services.
          </p>
          <h4>2. Data Security & Storage</h4>
          <p>
            All communications, API transfers, and cloud database instances utilize end-to-end 256-bit encryption. Payment transactions are routed directly through PCI-DSS compliant gateways.
          </p>
          <h4>3. No Third-Party Resale</h4>
          <p>
            We never monetize, sell, or rent guest information or property revenue metrics to third-party data brokers or marketing agencies.
          </p>
        </>
      ),
    },
    terms: {
      title: "Terms of Service",
      content: (
        <>
          <p>
            By accessing or using the Hāālo Cloud PMS, 2-Way Channel Manager, and Direct Booking Engine, you agree to these operational terms.
          </p>
          <h4>1. 0% Commission Guarantee</h4>
          <p>
            Direct reservations generated via our integrated booking engine carry zero commission fees from Hāālo. Payment processing rates are governed by your configured payment gateway.
          </p>
          <h4>2. Channel Synchronization & Availability</h4>
          <p>
            Inventory and rate updates are pushed in sub-second 2-way cycles. Property managers remain responsible for maintaining valid credentials and base contract rules with connected OTAs.
          </p>
          <h4>3. Service Level Agreement</h4>
          <p>
            We commit to an industry-standard 99.98% platform uptime backed by automated continuous cloud redundancy and daily secure night audit logs.
          </p>
        </>
      ),
    },
    security: {
      title: "Platform Security & Compliance",
      content: (
        <>
          <p>
            Enterprise-grade security controls safeguard your hotel operations, booking channels, and customer financial transactions.
          </p>
          <h4>1. Cloud Encryption & Backups</h4>
          <p>
            Continuous real-time database replication, automated daily night audit backups, and TLS 1.3 encryption across all communication endpoints.
          </p>
          <h4>2. Role-Based Access Control (RBAC)</h4>
          <p>
            Granular permission safeguards allow managers to restrict front-desk folios, night audit financial data, and housekeeping status by specific staff user roles.
          </p>
          <h4>3. Incident Monitoring & Redundancy</h4>
          <p>
            24/7 automated monitoring prevents unauthorized administrative attempts, data leaks, and race conditions during high-volume OTA inventory synchronization.
          </p>
        </>
      ),
    },
  };

  return (
    <>
      <footer className="bm-footer">
        <div className="footer-main">
          {/* BRAND COLUMN */}
          <div className="footer-col brand-col">
            <a href="/" className="footer-logo-link">
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

            {/* SOCIAL MEDIA */}
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.55.45-1 1-1z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-icon twitter"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 4.7c-.8.35-1.65.59-2.55.69a4.45 4.45 0 0 0 1.95-2.46 8.9 8.9 0 0 1-2.82 1.08 4.43 4.43 0 0 0-7.7 3.03c0 .35.04.69.11 1.01A12.58 12.58 0 0 1 3.35 3.43a4.43 4.43 0 0 0 1.37 5.91 4.4 4.4 0 0 1-2-.55v.06a4.43 4.43 0 0 0 3.55 4.34c-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08a4.44 4.44 0 0 0 4.14 3.08A8.9 8.9 0 0 1 2.98 18.2c-.35 0-.69-.02-1.03-.06a12.55 12.55 0 0 0 6.8 1.99c8.16 0 12.62-6.76 12.62-12.62 0-.19 0-.38-.01-.57a9.02 9.02 0 0 0 2.14-2.24z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon linkedin"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27zM5.34 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.56 8.98h3.56v11.47H3.56V8.98z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* SERVICES LINKED DIRECTLY TO HOME PRODUCT TABS */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="#pms"
                  onClick={(e) => handleServiceClick(e, "pms")}
                >
                  Property Management (PMS)
                </a>
              </li>

              <li>
                <a
                  href="#channel"
                  onClick={(e) => handleServiceClick(e, "channel")}
                >
                  Channel Manager
                </a>
              </li>

              <li>
                <a
                  href="#engine"
                  onClick={(e) => handleServiceClick(e, "engine")}
                >
                  Direct Booking Engine
                </a>
              </li>

              <li>
                <a
                  href="#website"
                  onClick={(e) => handleServiceClick(e, "website")}
                >
                  Hotel Website Design
                </a>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/support">Help &amp; Support</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="https://pms.ahaalo.com" target="_blank" rel="noreferrer">
                  Client Login
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-info">
              <li>
                <span className="info-icon">📍</span>
                <span>152 San Felipe Rd, Hollister, CA 95023, United States</span>
              </li>
              <li>
                <span className="info-icon">📞</span>
                <a href="tel:+917225962759">+91 72259 62759</a>
              </li>
              <li>
                <span className="info-icon">✉️</span>
                <a href="mailto:admin@ahaalo.com">admin@ahaalo.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <p className="copyright">
              &copy; {new Date().getFullYear()} A Hāālo. All rights reserved.
            </p>

            <div className="legal-links">
              <button
                type="button"
                className="legal-link-btn"
                onClick={() => setActiveModal("privacy")}
              >
                Privacy Policy
              </button>

              <span className="divider">•</span>

              <button
                type="button"
                className="legal-link-btn"
                onClick={() => setActiveModal("terms")}
              >
                Terms of Service
              </button>

              <span className="divider">•</span>

              <button
                type="button"
                className="legal-link-btn"
                onClick={() => setActiveModal("security")}
              >
                Security
              </button>
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

      {/* POPUP MODAL */}
      {activeModal && (
        <div className="bm-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="bm-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="bm-modal-header">
              <h3>{legalContent[activeModal].title}</h3>
              <button
                type="button"
                className="bm-modal-close"
                onClick={() => setActiveModal(null)}
              >
                ✕
              </button>
            </div>
            <div className="bm-modal-body">
              {legalContent[activeModal].content}
            </div>
            <div className="bm-modal-footer">
              <button
                type="button"
                className="bm-modal-btn-close"
                onClick={() => setActiveModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;