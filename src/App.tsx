import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";

import WhatsAppButton from "./components/WhatsAppButton";
import ScrollManager from "./utils/ScrollManager";
import StickyDemoButton from "./components/StickyDemoButton";
import DemoModal from "./components/DemoModal";
import { useState } from "react";

function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <BrowserRouter>
      <ScrollManager />

      {/* Sticky Button (available everywhere) */}
      <StickyDemoButton onClick={() => setDemoOpen(true)} />

      {/* Demo Modal (single instance) */}
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      <Header onClick={() => setDemoOpen(true)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
