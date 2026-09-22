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
      contact: "admin@ahaalo.com",
      link: "mailto:admin@ahaalo.com ",
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
      {/* 1. TOP HEADER BANNER */}
      <header className="bm-contact-header-banner">
        <div className="header-overlay"></div>
        <div className="header-content animate-fade-down">
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

      {/* 2. OVERLAPPING BODY */}
      <main className="bm-contact-body">
        <div className="contact-grid-layout">
          
          {/* LEFT: MINIMAL FORM CARD (SLIDES UP ON LOAD) */}
          <div className="contact-form-card animate-slide-up">
            <div className="form-head">
              <h2 className="minimal-heading">
                Contact <span className="muted-us">Us</span>
              </h2>
              <p className="minimal-sub">
                Leave your details and we will get back to you as soon as we can.
              </p>
            </div>

            {submitted && (
              <div className="success-banner">
                <span>✔</span> Thank you! Our hospitality consultant will contact you within 30 minutes.
              </div>
            )}

            <form onSubmit={handleSubmit} className="actual-form">
              <div className="minimal-input-field">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Name"
                  value={formState.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="minimal-input-field">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>

              <div className="minimal-input-field">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Phone"
                  value={formState.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="minimal-input-field">
                <input
                  type="text"
                  id="hotelName"
                  name="hotelName"
                  required
                  placeholder="Hotel / Property Name"
                  value={formState.hotelName}
                  onChange={handleChange}
                />
              </div>

              <div className="input-row-2">
                <div className="minimal-input-field">
                  <span className="minimal-select-label">Total Rooms</span>
                  <select
                    id="rooms"
                    name="rooms"
                    value={formState.rooms}
                    onChange={handleChange}
                  >
                    <option value="1-20">1 - 20 Rooms</option>
                    <option value="21-50">21 - 50 Rooms</option>
                    <option value="51-100">51 - 100 Rooms</option>
                    <option value="100+">100+ Rooms</option>
                  </select>
                </div>

                <div className="minimal-input-field">
                  <span className="minimal-select-label">Primary Requirement</span>
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

              <div className="minimal-input-field">
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  placeholder="How can we help?"
                  value={formState.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="submit-container">
                <button type="submit" className="minimal-submit-btn">
                  | SUBMIT |
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: CONTACT CARDS (STAGGERED SLIDE FROM RIGHT) */}
          <div className="contact-info-panel">
            <div className="cards-stack">
              {contactMethods.map((method, idx) => (
                <a
                  href={method.link}
                  key={idx}
                  className={`quick-card animate-slide-right delay-${idx + 1}`}
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