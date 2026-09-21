import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    hotelName: "",
    rooms: "1-20",
    serviceNeeded: "Cloud PMS",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: "📞",
      title: "Sales & Demo Enquiries",
      desc: "Speak with our hotel software specialists for tailored setup.",
      contact: "+91 7225962759",
      link: "tel:+917225962759",
      badge: "Mon-Sat: 9AM - 8PM",
    },
    {
      icon: "✉️",
      title: "Email Support",
      desc: "Reach out for technical setup or documentation inquiries.",
      contact: "info@ahaalo.in",
      link: "mailto:info@ahaalo.in",
      badge: "24-48 Hr SLA",
    },
    {
      icon: "💬",
      title: "Quick WhatsApp Chat",
      desc: "Fast quotes, onboarding guidance, and instant support.",
      contact: "Chat on WhatsApp",
      link: "https://wa.me/917225962759",
      badge: "Instant Response",
    },
  ];

  return (
    <div className="bm-contact-wrapper">
      {/* TOP HEADER WITH BACKGROUND IMAGE */}
      <header className="bm-contact-header-banner">
        <div className="header-overlay"></div>
        <div className="header-content">
          <span className="contact-badge">GET IN TOUCH</span>
          <h1>
            Scale Your Hotel’s Growth With <br />
            <span className="accent-orange">Cloud Hospitality Tech</span>
          </h1>
          <p>
            Have questions about our Cloud PMS, OTA Channel Manager, or Direct Booking Engine?
            Connect with our hotel tech consultants today.
          </p>
        </div>
      </header>

      {/* BODY */}
      <main className="bm-contact-body">
        <div className="contact-grid-layout">
          {/* LEFT: FORM CARD (NO RADIUS) */}
          <div className="contact-form-card">
            <div className="form-head">
              <h2>Request a Free Live Demo</h2>
              <p>Fill in your hotel details and our team will prepare a custom walkthrough.</p>
            </div>

            {submitted && (
              <div className="success-banner">
                <span>✔</span> Thank you! Our hospitality consultant will contact you within 30 minutes.
              </div>
            )}

            <form onSubmit={handleSubmit} className="actual-form">
              <div className="input-row-2">
                <div className="field-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder=""
                    value={formState.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="field-group">
                  <label htmlFor="phone">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder=""
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-row-2">
                <div className="field-group">
                  <label htmlFor="email">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder=""
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="field-group">
                  <label htmlFor="hotelName">Property / Hotel Name *</label>
                  <input
                    type="text"
                    id="hotelName"
                    name="hotelName"
                    required
                    placeholder=""
                    value={formState.hotelName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-row-2">
                <div className="field-group">
                  <label htmlFor="rooms">Total Rooms</label>
                  <select
                    id="rooms"
                    name="rooms"
                    value={formState.rooms}
                    onChange={handleChange}
                  >
                    <option value="1-20">1 - 20 Rooms</option>
                    <option value="21-50">21 - 50 Rooms</option>
                    <option value="51-100">51 - 100 Rooms</option>
                  </select>
                </div>
                <div className="field-group">
                  <label htmlFor="serviceNeeded">Primary Requirement</label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    value={formState.serviceNeeded}
                    onChange={handleChange}
                  >
                    <option value="Cloud PMS">Cloud Hotel PMS</option>
                    <option value="Channel Manager">Channel Manager (OTA Sync)</option>
                    <option value="Booking Engine">Direct Booking Engine</option>
                    <option value="WhatsApp API">WhatsApp Automation</option>
                    <option value="Full Combo">All-In-One Hospitality Suite</option>
                  </select>
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="message">Key Requirements or Notes (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder=""
                  value={formState.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Book Live Walkthrough →
              </button>
            </form>
          </div>

          {/* RIGHT: CONTACT CARDS & INFO */}
          <div className="contact-info-panel">
            <div className="cards-stack">
              {contactMethods.map((method, idx) => (
                <a
                  href={method.link}
                  key={idx}
                  className="quick-card"
                  target={method.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  <div className="card-icon">{method.icon}</div>
                  <div className="card-text">
                    <div className="card-top-row">
                      <h4>{method.title}</h4>
                      <span className="timing-pill">{method.badge}</span>
                    </div>
                    <p>{method.desc}</p>
                    <span className="card-link-val">{method.contact} →</span>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;