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
      icon: "🌐",
      title: "Channel Manager",
      desc: "Synchronize your rates and availability across 50+ OTA platforms instantly to prevent double bookings.",
      features: [
        "Multi-OTA Sync",
        "Rate Management",
        "Instant Updates",
        "Booking Confirmation",
        "Cancellation Handling",
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
      icon: "💬",
      title: "WhatsApp Automation API",
      desc: "Automated guest communication, confirmations, and support through WhatsApp for better engagement.",
      features: [
        "Auto Confirmations",
        "Booking Reminders",
        "Guest Support",
        "Promotions & Offers",
        "24/7 Availability",
      ],
    },
    {
      icon: "🤖",
      title: "AI-Driven Hotel Intelligence",
      desc: "Leverage AI for predictive analytics, dynamic pricing, and automated business audits.",
      features: [
        "Price Optimization",
        "Demand Forecasting",
        "Competitor Tracking",
        "Revenue Recommendations",
        "Smart Analytics",
      ],
    },
    {
      icon: "📱",
      title: "Mobile Staff Application",
      desc: "Give housekeeping and staff real-time access to room status, tasks, and guest information on mobile devices.",
      features: [
        "Room Status Updates",
        "Task Management",
        "Guest Info Access",
        "Real-time Sync",
        "Offline Mode",
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
      name: "MakeMyTrip",
      category: "OTA Channel",
      svg: (
        <svg viewBox="0 0 135 28" className="brand-svg">
          <text x="0" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="17" fill="#d9232d">
            make<tspan fill="#0f172a">my</tspan><tspan fill="#d9232d">trip</tspan>
          </text>
        </svg>
      ),
    },
    {
      name: "Razorpay",
      category: "Payment Gateway",
      svg: (
        <svg viewBox="0 0 125 28" className="brand-svg">
          <path d="M11 2H4.8a1 1 0 0 0-.97.77L1 14.5h4.8l-.8 7.5 8.8-9.6H8.9L11 2z" fill="#0C2340" />
          <path d="M12.2 2l-4.8 6.4h4L6.6 18l1.6-4.8H5l1.6-11.2h5.6z" fill="#3395FF" />
          <text x="24" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="15" fill="#0C2340">Razorpay</text>
        </svg>
      ),
    },
    {
      name: "PayU",
      category: "Payment Gateway",
      svg: (
        <svg viewBox="0 0 85 28" className="brand-svg">
          <text x="0" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="21" fill="#a4c639">
            Pay<tspan fill="#1e293b">U</tspan>
          </text>
        </svg>
      ),
    },
    {
      name: "PhonePe",
      category: "UPI & Wallets",
      svg: (
        <svg viewBox="0 0 120 28" className="brand-svg">
          <circle cx="12" cy="14" r="11" fill="#5f259f" />
          <text x="7.5" y="19.5" fill="#ffffff" fontFamily="system-ui, sans-serif" fontWeight="bold" fontSize="14">पे</text>
          <text x="30" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" fill="#5f259f">PhonePe</text>
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      category: "Direct Channel",
      svg: (
        <svg viewBox="0 0 130 28" className="brand-svg">
          <path d="M11 2a9.5 9.5 0 0 0-8.2 14.3L1.5 22l5.8-1.5A9.5 9.5 0 1 0 11 2zm0 17.5c-1.4 0-2.8-.4-4-1.1l-.3-.2-2.9.8.8-2.8-.2-.3a8 8 0 1 1 6.6 3.6z" fill="#25D366" />
          <text x="28" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" fill="#1e293b">WhatsApp</text>
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
            <p>From property management to guest communication, we've got you covered</p>
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
          <p>Join 450+ hotels already using Haalo to streamline operations and increase revenue</p>
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