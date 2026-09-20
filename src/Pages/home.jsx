import React, { useState, useEffect } from "react";
import "./home.css";

function Home() {
  const heroImages = [
    "https://hostsync.in/images/screenshots/financials.png",
    "https://hostsync.in/images/screenshots/dashboard.png",
    "https://hostsync.in/images/screenshots/calendar.png",
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

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
    <div className="hl-home-wrapper">
      {/* FLOATING ACTION ICONS */}
      <div className="hl-floating-bar">
        <a
          href="https://wa.me/919230994738"
          target="_blank"
          rel="noreferrer"
          className="hl-fab-item hl-fab-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
        </a>
        <a href="tel:+919230994738" className="hl-fab-item hl-fab-phone" aria-label="Call Sales">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
            <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
          </svg>
        </a>
      </div>

      {/* 2. HERO SECTION */}
      <section className="hl-hero-section">
        <div className="hl-hero-overlay"></div>
        <div className="hl-hero-container">
          <div className="hl-hero-text-col">
            <span className="hl-pill-badge">All-in-One Hospitality Technology</span>
            <h1 className="hl-hero-heading">
              Powerful Hotel <br />
              Management System <br />
              <span className="hl-hero-highlight">Built To Increase Revenue</span>
            </h1>
            <p className="hl-hero-subtext">
              Manage all hotel operations from a single dashboard &amp; grow your
              business with an advanced Cloud Hotel Management System.
            </p>

            <div className="hl-hero-cta-group">
              <button className="hl-btn-gold">Request a Demo</button>
              <button className="hl-btn-secondary">Enquiry</button>
            </div>

            <p className="hl-hero-tagline">Effortless Control. Maximum Efficiency.</p>

            <div className="hl-hero-perks">
              <span>Easy to Use</span>
              <span className="hl-divider">|</span>
              <span>Best Value</span>
              <span className="hl-divider">|</span>
              <span>Enterprise Grade Security</span>
            </div>
          </div>

          {/* Desktop par screenshots slider dikhega, mobile par hidden */}
          <div className="hl-hero-preview-col">
            <div className="hl-hero-carousel-container">
              <div className="hl-carousel-slide-wrapper">
                {heroImages.map((imgSrc, index) => (
                  <div
                    key={index}
                    className={`hl-carousel-image-slide ${index === activeSlide ? "active" : ""}`}
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

              <div className="hl-slider-dots">
                {heroImages.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`hl-dot ${index === activeSlide ? "active" : ""}`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="hl-services-section">
        <div className="hl-section-title-wrap">
          <span className="hl-section-category">OUR SERVICES</span>
          <h2 className="hl-section-title">
            One Powerful Platform For Secure And <br />
            Effortless <span className="hl-text-navy">Hotel Management</span>
          </h2>
        </div>

        <div className="hl-services-grid">
          <div className="hl-service-card">
            <div className="hl-service-icon-wrap">🏢</div>
            <h3>HOTEL <span className="hl-text-navy">PMS</span></h3>
            <h4>Centralize all hotel operations</h4>
            <p>
              Haalo HMS automates operations from front desk check-ins to
              housekeeping, billing, and staff tracking to streamline guest experiences.
            </p>
            <button className="hl-btn-card-more">Learn More →</button>
          </div>

          <div className="hl-service-card">
            <div className="hl-service-icon-wrap">⚙️</div>
            <h3>CHANNEL <span className="hl-text-navy">MANAGER</span></h3>
            <h4>Centralized Booking Control</h4>
            <p>
              Synchronize inventory and rates across Booking.com, Agoda, MakeMyTrip, and Expedia in real-time to eliminate overbooking risks.
            </p>
            <button className="hl-btn-card-more">Learn More →</button>
          </div>

          <div className="hl-service-card">
            <div className="hl-service-icon-wrap">📅</div>
            <h3>BOOKING <span className="hl-text-navy">ENGINE</span></h3>
            <h4>Increase Direct Bookings</h4>
            <p>
              Turn your brand website into your primary booking channel. Capture zero-commission direct bookings and reduce high OTA fees.
            </p>
            <button className="hl-btn-card-more">Learn More →</button>
          </div>

          <div className="hl-service-card">
            <div className="hl-service-icon-wrap">📈</div>
            <h3>REVENUE <span className="hl-text-navy">MANAGEMENT</span></h3>
            <h4>Maximize Hotel Revenue</h4>
            <p>
              Outsmart competitors with demand-driven analytics. Adjust prices dynamically to maximize occupancy, ADR, and long-term RevPAR.
            </p>
            <button className="hl-btn-card-more">Learn More →</button>
          </div>

          <div className="hl-service-card">
            <div className="hl-service-icon-wrap">🌐</div>
            <h3>WEBSITE <span className="hl-text-navy">DEVELOPMENT</span></h3>
            <h4>Professional Hotel Websites</h4>
            <p>
              High-converting, responsive, SEO-ready hotel websites designed to elevate your brand presence and drive higher direct conversions.
            </p>
            <button className="hl-btn-card-more">Learn More →</button>
          </div>

          <div className="hl-service-card">
            <div className="hl-service-icon-wrap">💬</div>
            <h3>WHATSAPP <span className="hl-text-navy">API</span></h3>
            <h4>Hotel WhatsApp Automation</h4>
            <p>
              Automate booking confirmation messages, guest invoices, location sharing, and targeted promotional campaigns directly on WhatsApp.
            </p>
            <button className="hl-btn-card-more">Learn More →</button>
          </div>
        </div>
      </section>

      {/* 4. METRICS BANNER */}
      <section className="hl-metrics-banner">
        <h2 className="hl-metrics-title">
          Grow Your Business With <br />
          <span className="hl-text-navy">Haalo</span>
        </h2>
        <div className="hl-metrics-grid">
          <div className="hl-metric-box">
            <div className="hl-m-icon">🖥️</div>
            <div className="hl-m-val">1.05M+</div>
            <div className="hl-m-lbl">Monthly Bookings Processed</div>
          </div>
          <div className="hl-metric-box">
            <div className="hl-m-icon">🏨</div>
            <div className="hl-m-val">1,000+</div>
            <div className="hl-m-lbl">Rooms Managed</div>
          </div>
          <div className="hl-metric-box">
            <div className="hl-m-icon">💻</div>
            <div className="hl-m-val">50+</div>
            <div className="hl-m-lbl">Active Properties</div>
          </div>
          <div className="hl-metric-box">
            <div className="hl-m-icon">🚀</div>
            <div className="hl-m-val hl-text-navy">66%</div>
            <div className="hl-m-lbl">Average Revenue Growth</div>
          </div>
        </div>
      </section>

      {/* 5. HOTEL PMS HIGHLIGHT */}
      <section className="hl-highlight-section">
        <div className="hl-highlight-content">
          <div className="hl-highlight-info">
            <h2 className="hl-section-heading-lg">
              HOTEL <span className="hl-text-navy">PMS</span>
            </h2>
            <h4 className="hl-section-sub-tag">Complete Cloud Property Management System</h4>
            <p>
              Haalo automates every stage of property operations from reservation to settlement, ensuring fast, error-free management.
            </p>
            <p>
              Role-based OTP authorization safeguards hotel accounts against unauthorized edits and revenue leaks.
            </p>

            <div className="hl-pms-capsule-grid">
              <div className="hl-capsule"><span>⚙ Centralized Reservation</span><i>›</i></div>
              <div className="hl-capsule"><span>🪪 Front Desk Check-in</span><i>›</i></div>
              <div className="hl-capsule"><span>📄 Invoicing &amp; GST Accounts</span><i>›</i></div>
              <div className="hl-capsule"><span>🖥 Point of Sale (POS)</span><i>›</i></div>
              <div className="hl-capsule"><span>📦 Stock &amp; Inventory</span><i>›</i></div>
              <div className="hl-capsule"><span>🍽 Restaurant Management</span><i>›</i></div>
              <div className="hl-capsule"><span>🏛 Banquet Hall Booking</span><i>›</i></div>
              <div className="hl-capsule"><span>🧹 Housekeeping Operations</span><i>›</i></div>
            </div>

            <div className="hl-cta-action-row">
              <button className="hl-btn-gold">Explore Features</button>
              <button className="hl-btn-dark-grey">Talk to Sales</button>
            </div>
          </div>

          <div className="hl-highlight-visual">
            <div className="hl-visual-media-box">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                alt="Haalo Hotel Management Dashboard"
                className="hl-feature-preview-img"
              />
              <div className="hl-feature-floating-badge">
                <b>PMS Designed for Hospitality Growth</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI-DRIVEN HOTEL ANALYSIS */}
      <section className="hl-ai-analysis">
        <div className="hl-ai-container">
          <div className="hl-ai-left-visual">
            <div className="hl-ai-chip-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Mp7LVZFEkloKDvg6q5p-CcVoZURLnfMsz9b-XCWH6A&s=10"
                alt="AI-driven hotel intelligence visualization"
                className="hl-ai-visual-img"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1677442d019cecf8d0fc9c8b8d4f1d6c?auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className="hl-ai-chip-badge">
                <span>AI</span>
              </div>
            </div>
          </div>

          <div className="hl-ai-right-content">
            <h2>
              Make Smarter Decisions With <br />
              <span className="hl-text-navy">AI-Driven Hotel Intelligence</span>
            </h2>
            <p className="hl-ai-sub-desc">
              Harness predictive analytics to optimize room pricing and identify operational bottlenecks automatically.
            </p>

            <ul className="hl-bullet-list">
              <li>Smart 24/7 AI guest concierge bot</li>
              <li>Automated daily business audit &amp; discrepancy alerts</li>
              <li>Dynamic market demand and competitor tracking</li>
              <li>Instant revenue optimization recommendations</li>
            </ul>

            <div className="hl-ai-bottom-row">
              <button className="hl-btn-gold">Learn More →</button>
              <div className="hl-chatgpt-powered-badge">
                <span className="hl-gpt-icon">⬡</span>
                <span className="hl-gpt-text">
                  POWERED BY <br />
                  <b>Hospitality AI Engine</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CHANNEL MANAGER OVERVIEW */}
      <section className="hl-channel-section">
        <div className="hl-channel-diagram-card">
          <div className="hl-diagram-node">PMS</div>
          <div className="hl-diagram-arrow">➔</div>
          <div className="hl-diagram-center-wheel">
            <div className="hl-wheel-title">CHANNEL MANAGER</div>
            <span className="hl-wheel-sub">Instant 2-Way Sync</span>
          </div>
          <div className="hl-diagram-arrow">➔</div>
          <div className="hl-diagram-node">OTAs</div>
        </div>

        <div className="hl-channel-detail-grid">
          <div className="hl-channel-left">
            <h2><span className="hl-text-navy">Channel Manager</span></h2>
            <h4>Automated Multi-Channel Distribution</h4>
            <p>
              Connect your inventory directly with all major travel portals. Keep room availability and tariffs synchronized round the clock across every channel from one window.
            </p>
            <div className="hl-cta-action-row">
              <button className="hl-btn-gold">Connect Channels</button>
              <button className="hl-btn-dark-grey">Request Callback</button>
            </div>
          </div>

          <div className="hl-channel-right">
            <ul className="hl-bullet-list-tight">
              <li>Instant 2-way sync across 50+ global OTAs</li>
              <li>Complete prevention of double bookings</li>
              <li>Centralized single-screen rate management</li>
              <li>Real-time inventory and cancellation updates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. WEBSITE WITH BOOKING ENGINE */}
      <section className="hl-booking-engine-showcase">
        <div className="hl-be-inner-grid">
          <div className="hl-be-text-col">
            <h2 className="hl-be-main-title">
              WEBSITE WITH <br />
              <span className="hl-text-navy">DIRECT BOOKING ENGINE</span>
            </h2>
            <p className="hl-be-sub-tag">Zero-Commission Direct Revenue System</p>
            <p className="hl-be-desc">
              Convert website visitors into guaranteed guests with a fast, mobile-first booking experience equipped with integrated payment gateways and instant SMS/WhatsApp vouchers.
            </p>

            <ul className="hl-be-checklist">
              <li>Commission-free direct booking engine</li>
              <li>Integrated payment gateway (UPI, Cards, NetBanking)</li>
              <li>Responsive mobile-first user experience</li>
              <li>Direct rate &amp; promo code management</li>
            </ul>

            <button className="hl-btn-gold" style={{ marginTop: "20px" }}>
              Explore Booking Engine
            </button>
          </div>

          <div className="hl-be-mockup-col">
            <div className="hl-engine-showcase-box">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80"
                alt="Direct Booking Engine Preview"
                className="hl-booking-engine-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIAL BANNER */}
      <section className="hl-testimonial-section">
        <div className="hl-testi-header">
          <h2>
            Real Results. <span className="hl-text-navy">Real Revenue Growth.</span><br />
            Trusted By Independent Hoteliers.
          </h2>
        </div>

        <div className="hl-testi-card-wrapper">
          <div className="hl-testi-card">
            <div className="hl-testi-image-col">
              <div className="hl-resort-badge-card">
                <b>Sea Star Resort</b>
                <span>Verified Client</span>
              </div>
            </div>

            <div className="hl-testi-content-col">
              <div className="hl-quote-mark">"</div>
              <p className="hl-testi-quote-text">
                Switching to Haalo transformed our front office and restaurant billing. Inventory sync across channels is seamless, and billing disputes have dropped to zero.
              </p>
              <h3 className="hl-owner-name">Ms. Rajib Saha</h3>
              <p className="hl-owner-designation">Co-Owner, Sea Star Resort</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. GOOGLE REVIEWS SECTION */}
      <section className="hl-reviews-section">
        <div className="hl-reviews-header-block">
          <h2>Feedback From Our Valued <span className="hl-text-navy">Hoteliers</span></h2>
          <div className="hl-google-brand-title">
            <span className="hl-g-blue">G</span>
            <span className="hl-g-red">o</span>
            <span className="hl-g-yellow">o</span>
            <span className="hl-g-blue">g</span>
            <span className="hl-g-green">l</span>
            <span className="hl-g-red">e</span>
          </div>
          <span className="hl-reviews-sub-lbl">Verified Platform Reviews</span>

          <div className="hl-rating-pill-card">
            <b>4.9 / 5.0 Rating Across 450+ Properties</b>
            <div className="hl-star-rating">★★★★★</div>
          </div>
        </div>

        <div className="hl-reviews-scroll-container">
          <div className="hl-reviews-track">
            {reviews.concat(reviews).map((item, idx) => (
              <div className="hl-review-item-card" key={idx}>
                <div className="hl-client-logo-circle">🏨</div>
                <h4 className="hl-reviewer-name">{item.name}</h4>
                <div className="hl-reviewer-tag">{item.role}</div>
                <div className="hl-card-stars">
                  <b>{item.rating}</b> <span className="hl-stars-gold">★★★★★</span>
                </div>
                <p className="hl-review-body">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;