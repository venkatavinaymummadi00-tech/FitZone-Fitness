import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { EnquiryProvider } from './context/EnquiryContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import EnquiryModal from './components/EnquiryModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Membership from './pages/Membership';
import Gallery from './pages/Gallery';
import Trainers from './pages/Trainers';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Automatic scroll restoration on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <EnquiryProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-gym-dark text-white selection:bg-gym-red selection:text-white">
          {/* Main Top Navigation */}
          <Navbar />

          {/* Main Page Routes */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Main Footer */}
          <Footer />

          {/* Global WhatsApp Floating Action Button */}
          <WhatsAppButton />

          {/* Global Membership / Service Enquiry Modal */}
          <EnquiryModal />
        </div>
      </EnquiryProvider>
    </Router>
  );
}
