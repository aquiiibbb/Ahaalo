import React from "react";
import "./services.css";

function Services() {
  const services = [
    {
      icon: "📊",
      title: "Cloud Property Management System",
      desc: "Complete hotel operations management from check-in to billing with real-time reporting and guest management.",
      features: [
        "Front Desk Operations",
        "Inventory Management",
        "Billing & Invoicing",
        "Housekeeping Module",
        "Real-time Dashboards",
      ],
    },
    {
      icon: "🛒",
      title: "Direct Booking Engine",
      desc: "Commission-free booking system integrated with payment gateways for direct reservations on your website.",
      features: [
        "Mobile Responsive",
        "Payment Gateway Integration",
        "Instant Confirmations",
        "SMS/WhatsApp Vouchers",
        "Direct Revenue",
      ],
    },
    {
      icon: "⚙️",
      title: "Channel Manager (OTA Sync)",
      desc: "Real-time 2-way distribution engine connecting your room inventory with major online travel agencies to prevent overbookings.",
      features: [
        "Instant 2-Way Sync",
        "Zero Overbooking Risk",
        "Pooled Inventory Control",
        "Bulk Rate Management",
        "Real-Time Cancellations",
      ],
    },
  ];

  const integrationLogos = [
    {
      name: "Booking.com",
      category: "OTA Channel",
      svg: (
        <svg viewBox="0 0 135 28" className="brand-svg">
          <text x="0" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" fill="#003580">
            Booking<tspan fill="#00baec">.com</tspan>
          </text>
        </svg>
      ),
    },
    {
      name: "Agoda",
      category: "OTA Channel",
      svg: (
        <svg viewBox="0 0 145 28" className="brand-svg">
          <circle cx="10" cy="14" r="4.5" fill="#f44336" />
          <circle cx="23" cy="14" r="4.5" fill="#f0b93d" />
          <circle cx="36" cy="14" r="4.5" fill="#4caf50" />
          <circle cx="49" cy="14" r="4.5" fill="#2196f3" />
          <circle cx="62" cy="14" r="4.5" fill="#9c27b0" />
          <text x="74" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" fill="#1e293b">agoda</text>
        </svg>
      ),
    },
    {
      name: "Airbnb",
      category: "OTA Channel",
      svg: (
        <svg viewBox="0 0 115 28" className="brand-svg">
          <path d="M12 2C8.5 2 7.2 4.8 7.2 7.2c0 2.9 3.1 7.2 4.8 10.7 1.7-3.5 4.8-7.8 4.8-10.7C16.8 4.8 15.5 2 12 2zm0 7.2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#FF5A5F" />
          <text x="26" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="17" fill="#FF5A5F">airbnb</text>
        </svg>
      ),
    },
    {
      name: "Expedia",
      category: "OTA Channel",
      svg: (
        <svg viewBox="0 0 135 28" className="brand-svg">
          <circle cx="12" cy="14" r="9" fill="#00355f" />
          <path d="M7 14.5l3.5-3 5.5 1-2.5 2 4 0.5-1 1.5-3.5-0.5-2 2z" fill="#ffcc00" />
          <text x="28" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontStyle="italic" fontWeight="900" fontSize="18" fill="#00355f">
            Expedia
          </text>
        </svg>
      ),
    },
  ];

  return (
    <div className="bm-services-wrapper">
      {/* HEADER BANNER */}
      <header className="services-header-banner">
        <div className="header-content">
          <span className="services-badge">OUR SERVICES</span>
          <h1>
            Complete Hospitality Management <br />
            <span className="accent-orange">Powered By Technology</span>
          </h1>
          <p>
            Everything you need to run your hotel efficiently and maximize revenue in one integrated platform.
          </p>
        </div>
      </header>

      {/* SERVICES GRID */}
      <section className="services-section">
        <div className="services-container">
          <div className="section-intro">
            <h2>Our Complete Suite of Services</h2>
            <p>From property management to multi-channel distribution, we've got you covered</p>
          </div>

          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-card-full">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="service-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REBUILT INTEGRATIONS SECTION */}
      <section className="integration-section">
        <div className="integration-container">
          <div className="section-intro">
            <span className="sub-badge">ECOSYSTEM</span>
            <h2>Seamless Integrations</h2>
            <p>Connect with all major OTA platforms and payment gateways</p>
          </div>

          <div className="integration-grid">
            {integrationLogos.map((item, index) => (
              <div key={index} className="integration-card">
                <div className="integration-logo-box">
                  {item.svg}
                </div>
                <div className="integration-meta">
                  <span className="integration-name">{item.name}</span>
                  <span className="integration-type">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="services-cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Hotel Operations?</h2>
          <div className="cta-buttons">
            <button className="btn-primary">Request a Demo</button>
            <button className="btn-secondary">Schedule Call</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;