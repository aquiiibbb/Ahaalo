import React, { useState, useEffect } from "react";
import "./home.css";

function Home() {
  const [activeTab, setActiveTab] = useState("pms");
  const [openFaq, setOpenFaq] = useState(null);

  // Thoda aur upar se kholne ke liye offset adjustment
  const scrollToDock = () => {
    setTimeout(() => {
      const dockEl = document.getElementById("product-dock-section");
      if (dockEl) {
        // Is value ko 180-220px ke beech rakha hai taaki card thoda aur neeche/upar se comfortably dikhe
        const topOffset = 190; 
        const elementPosition = dockEl.getBoundingClientRect().top;
        const targetPosition = elementPosition + window.pageYOffset - topOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  useEffect(() => {
    const handleSwitchTab = (e) => {
      const targetTab = e.detail;
      if (targetTab) {
        setActiveTab(targetTab);
        scrollToDock();
      }
    };

    window.addEventListener("haalo_switch_product_tab", handleSwitchTab);

    // Initial check agar URL hash ke saath open hua ho
    const hash = window.location.hash.replace("#", "");
    if (["pms", "channel", "engine", "website"].includes(hash)) {
      setActiveTab(hash);
      scrollToDock();
    }

    return () => {
      window.removeEventListener("haalo_switch_product_tab", handleSwitchTab);
    };
  }, []);

  const productTabs = [
    {
      id: "pms",
      title: "Cloud PMS",
      tagline: "Centralize Hotel Operations",
      desc: "Instant 30-second guest check-ins, automated night audits, housekeeping tracking, and error-free GST billing.",
      image: "https://hostsync.in/images/screenshots/dashboard.png",
      bullets: [
        "Front-desk digital check-in & automated folios",
        "Live room inventory status & housekeeping boards",
        "Daily night audit reports & revenue leak alerts"
      ]
    },
    {
      id: "channel",
      title: "Channel Manager",
      tagline: "INSTANT 2-WAY OTA SYNCHRONIZATION",
      desc: "Synchronize inventory and tariffs across Booking.com, MakeMyTrip, Agoda, and Expedia with zero double bookings.",
      image: "https://hostsync.in/images/screenshots/calendar.png",
      bullets: [
        "100% prevention of double bookings across channels",
        "Instant 2-way pooled inventory updates",
        "Single-click bulk rate & restriction management"
      ]
    },
    {
      id: "engine",
      title: "Direct Booking Engine",
      tagline: "0% COMMISSION DIRECT GUEST CONVERSIONS",
      desc: "Transform website visitors into paid direct reservations with integrated UPI, credit cards, and instant WhatsApp vouchers.",
      image: "https://hostsync.in/images/screenshots/financials.png",
      bullets: [
        "Zero commission on direct reservations",
        "Integrated UPI, cards, and net banking payment gateways",
        "Automated WhatsApp confirmation with Google Maps location"
      ]
    },
    {
      id: "website",
      title: "Website Development",
      tagline: "HIGH-CONVERTING HOTEL WEBSITES",
      desc: "Custom-crafted, lightning-fast hotel websites designed to elevate your brand presence and drive direct, commission-free reservations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      bullets: [
        "Mobile-first, conversion-optimized hotel design",
        "Integrated direct booking engine & secure checkout",
        "Local SEO-optimized to outrank OTAs on Google"
      ]
    }
  ];

  const faqs = [
    {
      q: "How long does it take to switch from our existing PMS to Haalo?",
      a: "Our onboarding team migrates all room categories, rate cards, and existing bookings within 24 to 48 hours without any downtime."
    },
    {
      q: "Do you take any commission on direct website bookings?",
      a: "No. Unlike third-party aggregators, Haalo charges zero commission on bookings made through your direct booking engine."
    },
    {
      q: "Is training provided for our front desk and accounts staff?",
      a: "Yes. Every setup includes personalized live video training, role-based workflows, and 24/7 support via WhatsApp and phone."
    },
    {
      q: "Can we manage multiple properties from one single master dashboard?",
      a: "Yes. Our multi-property module allows hotel owners to monitor occupancy, billing, and staff performance across multiple properties from one login."
    }
  ];

  const stats = [
    { num: "99.98%", label: "Platform Uptime SLA" },
    { num: "35%+", label: "Average Direct Booking Lift" },
    { num: "<1 Sec", label: "OTA Inventory Sync Speed" },
    { num: "100%", label: "Cloud & GST Compliant" }
  ];

  return (
    <div className="hl-home-wrapper">
      {/* 1. HERO SECTION */}
      <section className="hl-hero-section">
        <div className="hl-hero-container hl-slide-in">
          <span className="hl-pill-badge">ALL-IN-ONE HOSPITALITY TECHNOLOGY</span>
          <h1 className="hl-hero-heading">
            The Modern Hospitality OS <br />
            Built To <span className="hl-hero-highlight">Double Direct Bookings</span>
          </h1>
          <p className="hl-hero-subtext">
            Eliminate fragmented software. Unify your front desk, 2-way OTA distribution, zero-commission booking engine, and custom hotel websites in one unified cloud suite.
          </p>

          <div className="hl-hero-cta-group">
            <a href="/contact" className="hl-btn-navy">Schedule 15-Min Live Walkthrough →</a>
          </div>

          <div className="hl-hero-perks">
            <span>✓ 14-Day Free Trial</span>
            <span className="hl-divider">|</span>
            <span>✓ Zero Setup Fees</span>
            <span className="hl-divider">|</span>
            <span>✓ 24-Hr Migration Support</span>
          </div>

          {/* INTERACTIVE PRODUCT DOCK */}
          <div id="product-dock-section" className="hl-product-dock hl-slide-in-delay-1">
            <div className="hl-dock-tabs">
              {productTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`hl-dock-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {productTabs
              .filter((t) => t.id === activeTab)
              .map((tab) => (
                <div key={tab.id} className="hl-dock-content-card">
                  <div className="hl-dock-text">
                    <span className="hl-dock-tag">{tab.tagline}</span>
                    <h3>{tab.title}</h3>
                    <p>{tab.desc}</p>
                    <ul className="hl-dock-bullets">
                      {tab.bullets.map((b, i) => (
                        <li key={i}><span>✓</span> {b}</li>
                      ))}
                    </ul>
                    <a href="/contact" className="hl-dock-link">
                      Explore This Module In Live Demo →
                    </a>
                  </div>

                  <div className="hl-dock-media">
                    <div className="hl-browser-frame">
                      <div className="hl-browser-dots">
                        <span></span><span></span><span></span>
                      </div>

                      <div className="hl-dock-image-container">
                        <div
                          className="hl-dock-blurred-bg"
                          style={{
                            backgroundImage: `url(${tab.image})`,
                          }}
                        ></div>

                        <div className="hl-dock-dark-scrim"></div>

                        <div className="hl-dock-coming-soon-card">
                          <div className="hl-lock-icon">🔒</div>
                          <span className="hl-lock-title">COMING SOON</span>
                          <span className="hl-lock-sub">Interactive Preview in Production</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 2. OTA & GATEWAY INTEGRATIONS */}
      <section className="hl-partners-strip hl-slide-in-delay-2">
        <div className="hl-partners-inner">
          <p className="hl-partners-label">SEAMLESS 2-WAY SYNCHRONIZATION WITH LEADING OTAS &amp; PAYMENT ENGINES</p>
          <div className="hl-partners-logos">
            <span className="brand-logo brand-booking">Booking.com</span>
            <span className="brand-logo brand-agoda">
              <span className="agoda-a">a</span><span className="agoda-g">g</span><span className="agoda-o">o</span><span className="agoda-d">d</span><span className="agoda-last">a</span>
            </span>
            <span className="brand-logo brand-expedia">Expedia</span>
            <span className="brand-logo brand-airbnb">airbnb</span>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM VS SOLUTION */}
      <section className="hl-comparison-section hl-slide-in-delay-2">
        <div className="hl-section-wrap">
          <div className="hl-heading-center">
            <span className="hl-section-category">WHY HOTELS SWITCH</span>
            <h2>Why Hoteliers Replace Legacy Desktop Systems With Haalo</h2>
            <p>Traditional setups cause overbookings, human errors, and revenue leakage.</p>
          </div>

          <div className="hl-single-card-centered">
            <div className="hl-comp-card hl-comp-haalo">
              <div className="hl-comp-badge badge-haalo">The Haalo Cloud Way</div>
              <ul>
                <li><span className="hl-tick">✓</span> 100% Cloud-based: Control operations from your mobile or laptop.</li>
                <li><span className="hl-tick">✓</span> Sub-second 2-way OTA synchronization prevents double bookings.</li>
                <li><span className="hl-tick">✓</span> Direct website booking engine with 0% commissions.</li>
                <li><span className="hl-tick">✓</span> Automated daily night audits with instant owner WhatsApp alerts.</li>
                <li><span className="hl-tick">✓</span> 24/7 dedicated support via phone and WhatsApp.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS BANNER */}
      <section className="hl-metrics-banner hl-slide-in-delay-3">
        <div className="hl-metrics-grid">
          {stats.map((s, idx) => (
            <div key={idx} className="hl-metric-box">
              <div className="hl-m-val">{s.num}</div>
              <div className="hl-m-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ONBOARDING STEPS */}
      <section className="hl-steps-section">
        <div className="hl-section-wrap">
          <div className="hl-heading-center">
            <span className="hl-section-category">QUICK ONBOARDING</span>
            <h2>Go Live in 3 Simple Steps</h2>
            <p>No complex IT setup or local servers required.</p>
          </div>

          <div className="hl-steps-grid">
            <div className="hl-step-item">
              <div className="hl-step-num">01</div>
              <h4>Inventory &amp; Rate Mapping</h4>
              <p>Our specialists import your room categories, rate tiers, and existing bookings directly into your cloud PMS.</p>
            </div>
            <div className="step-item hl-step-item">
              <div className="hl-step-num">02</div>
              <h4>Channel Manager &amp; Gateways</h4>
              <p>We connect your Booking.com, MMT, and payment gateways with instant real-time sync and OTP security.</p>
            </div>
            <div className="step-item hl-step-item">
              <div className="hl-step-num">03</div>
              <h4>Staff Training &amp; Live Launch</h4>
              <p>Your team receives a tailored 45-minute live walkthrough, and operations switch over with 24/7 dedicated assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="hl-faq-section">
        <div className="hl-section-wrap">
          <div className="hl-heading-center">
            <span className="hl-section-category">FREQUENTLY ASKED</span>
            <h2>Common Questions About Switching</h2>
            <p>Everything you need to know about getting started with Haalo.</p>
          </div>

          <div className="hl-faq-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`hl-faq-card ${openFaq === idx ? "expanded" : ""}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="hl-faq-q-row">
                  <h4>{faq.q}</h4>
                  <span className="hl-faq-btn">{openFaq === idx ? "−" : "+"}</span>
                </div>
                {openFaq === idx && <div className="hl-faq-ans">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CONVERSION BANNER */}
      <section className="hl-final-cta-section">
        <div className="hl-section-wrap">
          <div className="hl-final-box">
            <h2>Ready to Modernize Your Hotel Operations?</h2>
            <p>
              Experience effortless check-ins, zero double bookings, and higher direct profit margins from one unified system.
            </p>
            <div className="hl-cta-action-row">
              <a href="/contact" className="hl-btn-navy">Book Free 15-Min Demo →</a>
              <a href="https://wa.me/917225962759" target="_blank" rel="noreferrer" className="hl-btn-secondary">
                Chat on WhatsApp
              </a>
            </div>
            <span className="hl-no-risk">No credit card required • 14-day instant trial access</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;