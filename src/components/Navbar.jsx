import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell, Phone, MapPin, Sparkles, ChevronRight, Navigation } from 'lucide-react';
import { gymConfig } from '../config/gymConfig';
import { useEnquiry } from '../context/EnquiryContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openEnquiry } = useEnquiry();
  const location = useLocation();

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Track scroll position for navbar background transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Membership', path: '/membership' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#0e0e0e] border-b border-neutral-800/80 text-xs text-neutral-400 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href={gymConfig.location.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-gym-red transition cursor-pointer group"
              title="Navigate directly to FitZone Kukatpally on Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-gym-red group-hover:scale-110 transition-transform" />
              <span>{gymConfig.location.addressLine1}, {gymConfig.location.locality}, {gymConfig.location.city}</span>
              <span className="text-[10px] text-gym-red font-semibold ml-1 flex items-center gap-0.5">
                <Navigation className="w-2.5 h-2.5" /> Navigate ↗
              </span>
            </a>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open Today: 5:30 AM – 10:30 PM
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <span className="text-neutral-400 text-[11px]">
              🔥 Limited Trial Passes Available This Week
            </span>
            <a 
              href={`tel:${gymConfig.contact.phoneTel}`} 
              className="flex items-center gap-1.5 text-neutral-300 hover:text-gym-red transition font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-gym-red" />
              <span>{gymConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-neutral-800/90 shadow-2xl py-3'
            : 'bg-black/75 backdrop-blur-md border-b border-neutral-900 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gym-red flex items-center justify-center text-white shadow-red-glow transform group-hover:scale-105 transition-transform duration-200">
                <Dumbbell className="w-6 h-6 transform -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-heading font-black tracking-wider text-white flex items-center gap-0.5">
                  FIT<span className="text-gym-red">ZONE</span>
                </span>
                <span className="text-[9px] tracking-widest text-neutral-400 font-semibold uppercase -mt-1">
                  Fitness Club • Kukatpally
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 rounded-lg relative ${
                      isActive
                        ? 'text-white bg-neutral-900/90 border border-neutral-800'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-gym-red rounded-full shadow-red-glow" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Join Now CTA & Mobile Hamburger */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => openEnquiry({ plan: 'Yearly Plan' })}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-heading font-bold tracking-wider uppercase bg-gym-red text-white rounded-xl hover:bg-gym-redHover shadow-red-glow hover:shadow-red-subtle transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 animate-shimmer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Join Now</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 rounded-xl text-neutral-300 hover:text-white hover:bg-neutral-800/80 transition focus:outline-none border border-neutral-800"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6 text-gym-red" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0c0c0c]/98 border-b border-neutral-800 backdrop-blur-2xl shadow-2xl transition-all duration-300 max-h-[calc(100vh-65px)] overflow-y-auto">
            <div className="px-5 pt-4 pb-8 space-y-2">
              <a 
                href={gymConfig.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 mb-3 bg-neutral-900/90 hover:bg-neutral-800 rounded-xl border border-neutral-800 hover:border-gym-red/50 text-xs text-neutral-400 flex items-center justify-between transition cursor-pointer group"
                title="Navigate directly to FitZone Kukatpally on Google Maps"
              >
                <span className="flex items-center gap-1.5 font-medium text-white group-hover:text-gym-red transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-gym-red" />
                  Near BJP Office, Kukatpally
                </span>
                <span className="text-gym-red font-bold text-[11px] uppercase tracking-wider flex items-center gap-1">
                  <Navigation className="w-3 h-3" />
                  Navigate ↗
                </span>
              </a>

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-heading font-bold uppercase tracking-wider transition-all ${
                      isActive
                        ? 'bg-gym-red/10 text-gym-red border-l-4 border-gym-red pl-3'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-900/80'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-600" />
                </NavLink>
              ))}

              <div className="pt-4 border-t border-neutral-800/80 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openEnquiry({ plan: 'Yearly Plan' });
                  }}
                  className="w-full py-3.5 text-center text-xs font-heading font-bold tracking-wider uppercase bg-gym-red text-white rounded-xl hover:bg-gym-redHover shadow-red-glow transition"
                >
                  Join FitZone Now
                </button>
                <a
                  href={`tel:${gymConfig.contact.phoneTel}`}
                  className="w-full py-2.5 text-center text-xs font-medium text-neutral-300 border border-neutral-800 rounded-xl hover:text-white hover:border-neutral-700 transition flex items-center justify-center gap-2 bg-neutral-900/60"
                >
                  <Phone className="w-4 h-4 text-gym-red" />
                  Call Gym: {gymConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
