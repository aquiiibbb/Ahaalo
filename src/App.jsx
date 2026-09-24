import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/header";
import Footer from "./Components/footer";
import Chatbot from "./Components/chatbot";
import Home from "./Pages/home";
import Services from "./Pages/services";
import Support from "./Pages/support";
import Contact from "./Pages/contact";

// Har page switch hone par window ko top par scroll karne ke liye
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Bina kisi delay ke page seedhe top se khulega
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* Route change scroll handler */}
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      {/* AI Chatbot - Available on all pages */}
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;