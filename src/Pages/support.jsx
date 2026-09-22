import React from "react";
import "./support.css";

function Support() {
  const supportChannels = [
    {
      icon: "📞",
      title: "Phone Support",
      desc: "Speak directly with our hotel experts",
      contact: "+91 7225962759",
      link: "tel:+917225962759",
      hours: "Mon-Sat: 9AM - 8PM",
    },
    {
      icon: "✉️",
      title: "Email Support",
      desc: "Get detailed responses within 24 hours",
      contact: "admin@ahaalo.com",
      link: "mailto:admin@ahaalo.com",
      hours: "24/7",
    },
    {
      icon: "💬",
      title: "WhatsApp Chat",
      desc: "Quick responses and instant support",
      contact: "Chat on WhatsApp",
      link: "https://wa.me/917225962759",
      hours: "Instant Response",
    },
    {
      icon: "📚",
      title: "Knowledge Base",
      desc: "Access tutorials and documentation",
      contact: "Browse Articles",
      link: "#",
      hours: "Available 24/7",
    },
  ];

  const resources = [
    {
      title: "Getting Started",
      items: ["Setup Guide", "First Day Checklist", "Creating Your First Booking", "User Accounts"],
    },
    {
      title: "Property Management",
      items: ["Room Configuration", "Rate Management", "Inventory Control", "Guest Profiles"],
    },
    {
      title: "Channels & Booking",
      items: ["Channel Manager Setup", "OTA Integration", "Direct Booking Engine", "Payment Gateway"],
    },
    {
      title: "Billing & Reports",
      items: ["Invoice Generation", "GST Handling", "Revenue Reports", "Financial Dashboard"],
    },
  ];

  const videoTutorials = [
    {
      title: "Cloud PMS Dashboard & Room Grid Walkthrough",
      duration: "15 min",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Channel Manager & Multi-OTA Rate Mapping",
      duration: "12 min",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Direct Booking Engine & Payment Flow Setup",
      duration: "10 min",
      thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Front Desk & Housekeeping Mobile App Operations",
      duration: "20 min",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bm-support-wrapper">
      {/* HEADER BANNER */}
      <header className="support-header-banner">
        <div className="header-overlay"></div>
        <div className="header-content">
          <span className="support-badge">HELP & SUPPORT</span>
          <h1>
            We're Here To <br />
            <span className="accent-orange">Help You Succeed</span>
          </h1>
          <p>Get instant support from our hotel management experts. We're available whenever you need us.</p>
        </div>
      </header>

      {/* SUPPORT CHANNELS */}
      <section className="support-channels-section">
        <div className="support-container">
          <div className="channels-intro">
            <h2>Multiple Ways To Get Help</h2>
            <p>Choose the support channel that works best for you</p>
          </div>

          <div className="channels-grid">
            {supportChannels.map((channel, idx) => (
              <a
                href={channel.link}
                key={idx}
                className="channel-card"
                target={channel.link.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
              >
                <div className="channel-icon">{channel.icon}</div>
                <h3>{channel.title}</h3>
                <p className="channel-desc">{channel.desc}</p>
                <div className="channel-footer">
                  <span className="contact-info">{channel.contact}</span>
                  <span className="hours">{channel.hours}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES SECTION */}
      <section className="resources-section">
        <div className="support-container">
          <div className="resources-intro">
            <h2>Learning Resources</h2>
            <p>Explore our comprehensive documentation and tutorials</p>
          </div>

          <div className="resources-grid">
            {resources.map((resource, idx) => (
              <div key={idx} className="resource-category">
                <h3>{resource.title}</h3>
                <ul>
                  {resource.items.map((item, i) => (
                    <li key={i}>
                      <a href="#">
                        <span className="arrow">→</span> {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TUTORIALS SECTION WITH FULL BLUR & BIG COMING SOON OVERLAY */}
      <section className="video-section">
        <div className="video-container">
          <h2>Video Tutorials &amp; Training</h2>
          <p className="video-subtitle">Learn at your own pace with our software walkthroughs</p>

          <div className="video-grid">
            {videoTutorials.map((video, idx) => (
              <div key={idx} className="video-card">
                <div className="video-placeholder-container">
                  {/* FULLY BLURRED BACKGROUND IMAGE */}
                  <div
                    className="video-blurred-bg"
                    style={{
                      backgroundImage: `url(${video.thumbnail})`,
                    }}
                  ></div>

                  {/* DARK SHADOW OVERLAY FOR CONTRAST */}
                  <div className="video-dark-scrim"></div>

                  {/* BIG PROMINENT COMING SOON BADGE */}
                  <div className="coming-soon-hero-box">
                    <div className="cs-icon-circle">🔒</div>
                    <span className="cs-big-text">COMING SOON</span>
                    <span className="cs-sub-text">Tutorial in Production</span>
                  </div>

                  <span className="video-duration">{video.duration}</span>
                </div>

                <div className="video-details">
                  <h4>{video.title}</h4>
                  <span className="watch-tutorial-btn disabled-btn">Available Soon →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="support-faq-section">
        <div className="faq-container">
          <h2>Common Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How do I report a technical issue?</h4>
              <p>Email us at info@ahaalo.in or call our support team. We typically respond within 2-4 hours for urgent issues.</p>
            </div>
            <div className="faq-item">
              <h4>Is training provided for my staff?</h4>
              <p>Yes! We provide comprehensive onboarding training for all staff members. Video tutorials and documentation are included.</p>
            </div>
            <div className="faq-item">
              <h4>What's the average response time?</h4>
              <p>Email: 2-4 hours. WhatsApp: 30 minutes. Phone: Immediate (during business hours).</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer migration assistance?</h4>
              <p>Absolutely! Our team handles 24-48 hour zero-downtime migration from your existing software.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="support-cta-section">
        <div className="cta-content">
          <h2>Stuck on something?</h2>
          <p>Our experts are ready to help. Connect with us now.</p>
          <div className="cta-actions">
            <a
              href="https://wa.me/917225962759"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Start Chat Now
            </a>
            <a href="tel:+917225962759" className="btn-secondary">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;