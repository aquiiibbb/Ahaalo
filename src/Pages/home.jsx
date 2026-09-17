import React, { useState, useEffect } from "react";
import "./home.css";

function Home() {
  const [formData, setFormData] = useState({
    propertyType: "Hotel",
    mobile: "",
    email: "",
    companyName: "",
    rooms: "",
    city: "",
    lookingFor: "Property Management System",
  });

  const heroImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1758193783649-13371d7fb8dd?auto=format&fit=crop&w=1200&q=80",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo Request Submitted Successfully!");
  };

  const reviews = [
    {
      name: "The Dreams World Tourism",
      rating: "5.0",
      text: "Haalo is extremely user-friendly. The real-time dynamic pricing, automated analytical reports, and reputation management tools are world-class. Highly recommended!",
      role: "Luxury Chain Partner",
    },
    {
      name: "Traditional Hotel & Restaurant",
      rating: "5.0",
      text: "Our team had a smooth training experience. The PMS is easy to understand, billing is fast, and customer support is always quick and reliable.",
      role: "Boutique Hotel",
    },
    {
      name: "Madhu Mamata Hotel & Resorts",
      rating: "5.0",
      text: "An outstanding management platform. Streamlined our reservations and inventory management smoothly across all OTA platforms with zero double bookings.",
      role: "Resort Group",
    },
    {
      name: "Samudra Bilas Hotel",
      rating: "5.0",
      text: "Simplified our operations, optimized daily ADR, and helped organize staff shifts. Truly an indispensable investment for any hotelier.",
      role: "Beachfront Property",
    },
    {
      name: "Green Valley Heritage Resort",
      rating: "5.0",
      text: "Direct bookings increased by 35% within 3 months of integrating their booking engine and WhatsApp automation API.",
      role: "Heritage Stay",
    },
    {
      name: "Royal Palms Residency",
      rating: "5.0",
      text: "The cloud PMS eliminated operational leaks and billing errors. The automated audit reports provide clear visibility into daily revenues.",
      role: "City Hotel",
    },
  ];

  return (
    <div className="bm-home-wrapper">
      {/* 1. TOP ANNOUNCEMENT BAR (NAVY) */}
      <div className="bm-topbar">
        <div className="bm-topbar-content">
          <div className="bm-topbar-left">
            <a href="mailto:info@haalo.in" className="topbar-link">
              <span className="topbar-ico">✉</span> info@haalo.in
            </a>
            <a href="tel:+919230994738" className="topbar-link">
              <span className="topbar-ico">📞</span> Call (Sales): +91 92309 94738
            </a>
          </div>
          <button className="audit-btn">Audit Your Hotel</button>
        </div>
      </div>

      {/* FLOATING ACTION ICONS */}
      <div className="bm-floating-bar">
        <a
          href="https://wa.me/919230994738"
          target="_blank"
          rel="noreferrer"
          className="fab-item whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
        </a>
        <a href="tel:+919230994738" className="fab-item phone" aria-label="Call Sales">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
            <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
          </svg>
        </a>
      </div>

      {/* 2. HERO SECTION (NAVY) */}
      <section className="bm-hero">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-text-col">
            <span className="pill-badge">All-in-One Hospitality Technology</span>
            <h1 className="hero-heading">
              Powerful Hotel <br />
              Management System <br />
              <span className="text-highlight">Built To Increase Revenue</span>
            </h1>
            <p className="hero-subtext">
              Manage all hotel operations from a single dashboard & grow your
              business with an advanced Cloud Hotel Management System.
            </p>

            <div className="hero-cta-group">
              <button className="btn-primary">Request a Demo</button>
              <button className="btn-secondary">Enquiry</button>
            </div>

            <p className="hero-tagline">Effortless Control. Maximum Efficiency.</p>

            <div className="hero-perks">
              <span>Easy to Use</span>
              <span className="divider">|</span>
              <span>Best Value</span>
              <span className="divider">|</span>
              <span>Enterprise Grade Security</span>
            </div>
          </div>

          <div className="hero-preview-col">
            <div className="hero-carousel-container">
              <div className="carousel-slide-wrapper">
                {heroImages.map((imgSrc, index) => (
                  <div
                    key={index}
                    className={`carousel-image-slide ${index === activeSlide ? "active" : ""}`}
                  >
                    <img
                      src={imgSrc}
                      alt={`Haalo Preview ${index + 1}`}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80";
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="slider-dots">
                {heroImages.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`dot ${index === activeSlide ? "active" : ""}`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION (WHITE) */}
      <section className="bm-services">
        <div className="section-title-wrap">
          <span className="section-category">OUR SERVICES</span>
          <h2 className="section-title">
            One Powerful Platform For Secure And <br />
            Effortless <span className="accent-orange">Hotel Management</span>
          </h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon-wrap">🏢</div>
            <h3>HOTEL <span className="accent-orange">PMS</span></h3>
            <h4>Centralize all hotel operations</h4>
            <p>
              Haalo HMS automates operations from front desk check-ins to
              housekeeping, billing, and staff tracking to streamline guest experiences.
            </p>
            <button className="btn-card-more">Learn More →</button>
          </div>

          <div className="service-card">
            <div className="service-icon-wrap">⚙️</div>
            <h3>CHANNEL <span className="accent-orange">MANAGER</span></h3>
            <h4>Centralized Booking Control</h4>
            <p>
              Synchronize inventory and rates across Booking.com, Agoda, MakeMyTrip, and Expedia in real-time to eliminate overbooking risks.
            </p>
            <button className="btn-card-more">Learn More →</button>
          </div>

          <div className="service-card">
            <div className="service-icon-wrap">📅</div>
            <h3>BOOKING <span className="accent-orange">ENGINE</span></h3>
            <h4>Increase Direct Bookings</h4>
            <p>
              Turn your brand website into your primary booking channel. Capture zero-commission direct bookings and reduce high OTA fees.
            </p>
            <button className="btn-card-more">Learn More →</button>
          </div>

          <div className="service-card">
            <div className="service-icon-wrap">📈</div>
            <h3>REVENUE <span className="accent-orange">MANAGEMENT</span></h3>
            <h4>Maximize Hotel Revenue</h4>
            <p>
              Outsmart competitors with demand-driven analytics. Adjust prices dynamically to maximize occupancy, ADR, and long-term RevPAR.
            </p>
            <button className="btn-card-more">Learn More →</button>
          </div>

          <div className="service-card">
            <div className="service-icon-wrap">🌐</div>
            <h3>WEBSITE <span className="accent-orange">DEVELOPMENT</span></h3>
            <h4>Professional Hotel Websites</h4>
            <p>
              High-converting, responsive, SEO-ready hotel websites designed to elevate your brand presence and drive higher direct conversions.
            </p>
            <button className="btn-card-more">Learn More →</button>
          </div>

          <div className="service-card">
            <div className="service-icon-wrap">💬</div>
            <h3>WHATSAPP <span className="accent-orange">API</span></h3>
            <h4>Hotel WhatsApp Automation</h4>
            <p>
              Automate booking confirmation messages, guest invoices, location sharing, and targeted promotional campaigns directly on WhatsApp.
            </p>
            <button className="btn-card-more">Learn More →</button>
          </div>
        </div>
      </section>

      {/* 4. METRICS BANNER (WHITE / LIGHT SLATE WITH FLOATING CARDS) */}
      <section className="bm-metrics-banner">
        <h2 className="metrics-title">
          Grow Your Business With <br />
          <span>Haalo</span>
        </h2>
        <div className="metrics-grid">
          <div className="metric-box">
            <div className="m-icon">🖥️</div>
            <div className="m-val">1.05M+</div>
            <div className="m-lbl">Monthly Bookings Processed</div>
          </div>
          <div className="metric-box">
            <div className="m-icon">🏨</div>
            <div className="m-val">1,000+</div>
            <div className="m-lbl">Rooms Managed</div>
          </div>
          <div className="metric-box">
            <div className="m-icon">💻</div>
            <div className="m-val">50+</div>
            <div className="m-lbl">Active Properties</div>
          </div>
          <div className="metric-box">
            <div className="m-icon">🚀</div>
            <div className="m-val accent-growth">66%</div>
            <div className="m-lbl">Average Revenue Growth</div>
          </div>
        </div>
      </section>

      {/* 5. HOTEL PMS HIGHLIGHT (WHITE) */}
      <section className="bm-highlight-section">
        <div className="highlight-content">
          <div className="highlight-info">
            <h2 className="section-heading-lg">
              HOTEL <span className="accent-orange">PMS</span>
            </h2>
            <h4 className="section-sub-tag">Complete Cloud Property Management System</h4>
            <p>
              Haalo automates every stage of property operations from reservation to settlement, ensuring fast, error-free management.
            </p>
            <p>
              Role-based OTP authorization safeguards hotel accounts against unauthorized edits and revenue leaks.
            </p>

            <div className="pms-capsule-grid">
              <div className="capsule"><span>⚙ Centralized Reservation</span><i>›</i></div>
              <div className="capsule"><span>🪪 Front Desk Check-in</span><i>›</i></div>
              <div className="capsule"><span>📄 Invoicing & GST Accounts</span><i>›</i></div>
              <div className="capsule"><span>🖥 Point of Sale (POS)</span><i>›</i></div>
              <div className="capsule"><span>📦 Stock & Inventory</span><i>›</i></div>
              <div className="capsule"><span>🍽 Restaurant Management</span><i>›</i></div>
              <div className="capsule"><span>🏛 Banquet Hall Booking</span><i>›</i></div>
              <div className="capsule"><span>🧹 Housekeeping Operations</span><i>›</i></div>
            </div>

            <div className="cta-action-row">
              <button className="btn-primary">Explore Features</button>
              <button className="btn-dark-grey">Talk to Sales</button>
            </div>
          </div>

          <div className="highlight-visual">
            <div className="visual-media-box">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                alt="Haalo Hotel Management Dashboard"
                className="feature-preview-img"
              />
              <div className="feature-floating-badge">
                <b>PMS Designed for Hospitality Growth</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI-DRIVEN HOTEL ANALYSIS (NAVY) */}
      <section className="bm-ai-analysis">
        <div className="ai-container">
          <div className="ai-left-visual">
            <div className="ai-chip-card">
              <img
                src="https://images.unsplash.com/photo-1717501218198-816a64915f81?auto=format&fit=crop&w=900&q=80"
                alt="AI-driven hotel intelligence visualization"
                className="ai-visual-img"
                loading="lazy"
              />
              <div className="ai-chip-badge">
                <span>AI</span>
              </div>
            </div>
          </div>

          <div className="ai-right-content">
            <h2>
              Make Smarter Decisions With <br />
              <span className="accent-orange">AI-Driven Hotel Intelligence</span>
            </h2>
            <p className="ai-sub-desc">
              Harness predictive analytics to optimize room pricing and identify operational bottlenecks automatically.
            </p>

            <ul className="bullet-list">
              <li>Smart 24/7 AI guest concierge bot</li>
              <li>Automated daily business audit & discrepancy alerts</li>
              <li>Dynamic market demand and competitor tracking</li>
              <li>Instant revenue optimization recommendations</li>
            </ul>

            <div className="ai-bottom-row">
              <button className="btn-gold">Learn More →</button>
              <div className="chatgpt-powered-badge">
                <span className="gpt-icon">⬡</span>
                <span className="gpt-text">
                  POWERED BY <br />
                  <b>Hospitality AI Engine</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CHANNEL MANAGER OVERVIEW (WHITE) */}
      <section className="bm-channel-section">
        <div className="channel-diagram-card">
          <div className="diagram-node">PMS (Front Desk, Rates)</div>
          <div className="diagram-arrow">➔</div>
          <div className="diagram-center-wheel">
            <div className="wheel-title">CHANNEL MANAGER</div>
            <span className="wheel-sub">Instant 2-Way Sync</span>
          </div>
          <div className="diagram-arrow">➔</div>
          <div className="diagram-node">OTAs (Booking, Agoda, MMT)</div>
        </div>

        <div className="channel-detail-grid">
          <div className="channel-left">
            <h2><span className="accent-orange">Channel Manager</span></h2>
            <h4>Automated Multi-Channel Distribution</h4>
            <p>
              Connect your inventory directly with all major travel portals. Keep room availability and tariffs synchronized round the clock across every channel from one window.
            </p>
            <div className="cta-action-row">
              <button className="btn-primary">Connect Channels</button>
              <button className="btn-dark-grey">Request Callback</button>
            </div>
          </div>

          <div className="channel-right">
            <ul className="bullet-list-tight">
              <li>Instant 2-way sync across 50+ global OTAs</li>
              <li>Complete prevention of double bookings</li>
              <li>Centralized single-screen rate management</li>
              <li>Real-time inventory and cancellation updates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. WEBSITE WITH BOOKING ENGINE SECTION (WHITE WITH FRAMED MOCKUP) */}
      <section className="bm-booking-engine-showcase">
        <div className="be-inner-grid">
          <div className="be-text-col">
            <h2 className="be-main-title">
              WEBSITE WITH <br />
              <span className="accent-orange">DIRECT BOOKING ENGINE</span>
            </h2>
            <p className="be-sub-tag">Zero-Commission Direct Revenue System</p>
            <p className="be-desc">
              Convert website visitors into guaranteed guests with a fast, mobile-first booking experience equipped with integrated payment gateways and instant SMS/WhatsApp vouchers.
            </p>

            <ul className="be-checklist">
              <li>Commission-free direct booking engine</li>
              <li>Integrated payment gateway (UPI, Cards, NetBanking)</li>
              <li>Responsive mobile-first user experience</li>
              <li>Direct rate & promo code management</li>
            </ul>

            <button className="btn-primary" style={{ marginTop: "24px" }}>
              Explore Booking Engine
            </button>
          </div>

          <div className="be-mockup-col">
            <div className="engine-showcase-box">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80"
                alt="Direct Booking Engine Preview"
                className="booking-engine-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIAL BANNER (WHITE / LIGHT ELEVATED) */}
      <section className="bm-testimonial-section">
        <div className="testi-header">
          <h2>
            Real Results. <span className="accent-orange">Real Revenue Growth.</span><br />
            Trusted By Independent Hoteliers.
          </h2>
        </div>

        <div className="testi-card-wrapper">
          <div className="testi-card">
            <div
              className="testi-image-col"
              style={{
                background: `linear-gradient(rgba(15, 23, 42, 0.35), rgba(15, 23, 42, 0.7)), url("https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80") center/cover no-repeat`,
              }}
            >
              <div className="resort-badge-card">
                <b>Sea Star Resort</b>
                <span>Verified Client</span>
              </div>
            </div>

            <div className="testi-content-col">
              <div className="quote-mark">“</div>
              <p className="testi-quote-text">
                Switching to Haalo transformed our front office and restaurant billing. Inventory sync across channels is seamless, and billing disputes have dropped to zero.
              </p>
              <h3 className="owner-name">Ms. Rajib Saha</h3>
              <p className="owner-designation">Co-Owner, Sea Star Resort</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. GOOGLE REVIEWS SECTION (MARQUEE SCROLL) */}
      <section className="bm-reviews-section">
        <div className="reviews-header-block">
          <h2>Feedback From Our Valued <span className="accent-orange">Hoteliers</span></h2>
          <div className="google-brand-title">
            <span className="g-blue">G</span>
            <span className="g-red">o</span>
            <span className="g-yellow">o</span>
            <span className="g-blue">g</span>
            <span className="g-green">l</span>
            <span className="g-red">e</span>
          </div>
          <span className="reviews-sub-lbl">Verified Platform Reviews</span>

          <div className="rating-pill-card">
            <b>4.9 / 5.0 Rating Across 450+ Properties</b>
            <div className="star-rating">★★★★★</div>
          </div>
        </div>

        <div className="reviews-scroll-container">
          <div className="reviews-track">
            {reviews.concat(reviews).map((item, idx) => (
              <div className="review-item-card" key={idx}>
                <div className="client-logo-circle">🏨</div>
                <h4 className="reviewer-name">{item.name}</h4>
                <div className="reviewer-tag">{item.role}</div>
                <div className="card-stars">
                  <b>{item.rating}</b> <span>★★★★★</span>
                </div>
                <p className="review-body">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;