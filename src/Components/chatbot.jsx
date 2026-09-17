import React, { useState } from "react";
import "./chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! 👋 I'm Haalo AI Assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const botResponses = {
    pricing: [
      "Our Starter plan is ₹999/month for up to 20 rooms. Professional plan is ₹2,499/month for up to 100 rooms. Enterprise plans are custom. Would you like more details?",
    ],
    freetrial: [
      "Yes! You can start a 14-day free trial with full access to all features. No credit card required. Head to the Free Trial page to get started!",
    ],
    features: [
      "Haalo includes: Cloud PMS, Channel Manager, Direct Booking Engine, WhatsApp Automation, AI Analytics, and Staff Mobile App. Which one interests you most?",
    ],
    support: [
      "We offer 24/7 support via Phone (+91 92309 94738), Email (info@haalo.in), and WhatsApp. Our average response time is 30 minutes!",
    ],
    setup: [
      "Setup is quick! Most hotels go live within 24-48 hours. We handle zero-downtime migration from your existing system. Would you like to schedule a setup call?",
    ],
    integration: [
      "We integrate with 50+ OTA platforms including Booking.com, Agoda, Airbnb, MakeMyTrip, and all major payment gateways like Razorpay, PayU, and PhonePe.",
    ],
    demo: [
      "Absolutely! We can schedule a live walkthrough of Haalo tailored to your hotel's needs. When would be a good time for you?",
    ],
    default: [
      "That's a great question! For specific details, I'd recommend visiting our Services or FAQ page, or connecting with our team directly. Would you like their contact info?",
    ],
  };

  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes("price") || message.includes("cost") || message.includes("plan")) {
      return botResponses.pricing[0];
    } else if (message.includes("free trial") || message.includes("trial")) {
      return botResponses.freetrial[0];
    } else if (message.includes("feature") || message.includes("what can")) {
      return botResponses.features[0];
    } else if (message.includes("support") || message.includes("help")) {
      return botResponses.support[0];
    } else if (message.includes("setup") || message.includes("implement") || message.includes("migrate")) {
      return botResponses.setup[0];
    } else if (message.includes("integrat") || message.includes("ota") || message.includes("booking")) {
      return botResponses.integration[0];
    } else if (message.includes("demo") || message.includes("call") || message.includes("meeting")) {
      return botResponses.demo[0];
    } else {
      return botResponses.default[0];
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getAIResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          className="chatbot-floating-btn"
          onClick={() => setIsOpen(true)}
          title="Chat with AI Assistant"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      )}

      {/* Chat Modal */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="header-content">
              <h3>Haalo AI</h3>
              <p>Always here to help</p>
            </div>
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
              title="Close Chat"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <div className="message-content">
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="message bot">
                <div className="message-content">
                  <span className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="chatbot-input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              className="chatbot-input"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="chatbot-send-btn"
              disabled={isLoading || inputValue.trim() === ""}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16151496 C3.50612381,-0.1 2.40999899,-0.0429026 1.77946707,0.52 C0.994623095,1.16151496 0.837654326,2.09 1.15159189,2.99 L3.03521743,9.4309927 C3.03521743,9.58809012 3.34915502,9.7451875 3.50612381,9.7451875 L16.6915026,10.5306731 C16.6915026,10.5306731 17.1624089,10.5306731 17.1624089,11.0019653 C17.1624089,11.4732575 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;
