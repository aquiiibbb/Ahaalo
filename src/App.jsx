import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/header";
import Footer from "./Components/footer";
import Chatbot from "./Components/chatbot";
import Home from "./Pages/home";
import Services from "./Pages/services";
import Support from "./Pages/support";
import Contact from "./Pages/contact";

function App() {
  return (
    <BrowserRouter>
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