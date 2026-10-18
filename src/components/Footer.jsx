import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Twitter, ChevronRight, Navigation } from 'lucide-react';
import { gymConfig } from '../config/gymConfig';
import { useEnquiry } from '../context/EnquiryContext';

export default function Footer() {
  const { openEnquiry } = useEnquiry();

  return (
    <footer className="bg-gym-charcoal border-t border-neutral-900 text-gym-gray pt-16 pb-8 relative overflow-hidden">
      {/* Red accent glow in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-gym-red to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-gym-red flex items-center justify-center text-white shadow-red-glow">
                <Dumbbell className="w-6 h-6 transform -rotate-45" />
              </div>
              <span className="text-2xl font-heading font-bold tracking-wider text-white">
                FIT<span className="text-gym-red">ZONE</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Kukatpally's premier luxury fitness club. Equipped with world-class Olympic lifting gear, advanced cardio machines, and personalized coaching to help you build your strongest self.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href={gymConfig.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-gym-red hover:border-gym-red transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={gymConfig.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-gym-red hover:border-gym-red transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={gymConfig.socials.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-gym-red hover:border-gym-red transition"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href={gymConfig.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-gym-red hover:border-gym-red transition"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-white tracking-wide border-l-2 border-gym-red pl-2.5">
              Explore FitZone
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About FitZone Club', path: '/about' },
                { name: 'Training Programs & Services', path: '/services' },
                { name: 'Membership Plans & Pricing', path: '/membership' },
                { name: 'Gym Photo Gallery', path: '/gallery' },
                { name: 'Certified Trainers', path: '/trainers' },
                { name: 'Member Reviews', path: '/reviews' },
                { name: 'Contact & Location', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="flex items-center gap-1.5 text-neutral-400 hover:text-gym-red transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-gym-red transition-transform group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Operating Timings */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-white tracking-wide border-l-2 border-gym-red pl-2.5">
              Gym Timings
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gym-red mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Monday – Saturday</p>
                  <p className="text-xs text-neutral-400">5:30 AM – 10:30 PM (Continuous)</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gym-red mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Sunday Sessions</p>
                  <p className="text-xs text-neutral-400">6:00 AM – 1:00 PM (Morning Only)</p>
                </div>
              </div>
              <div className="pt-2">
                <div className="p-3 bg-neutral-900/90 rounded-lg border border-neutral-800 text-xs text-neutral-300">
                  <span className="text-gym-red font-semibold">Special:</span> Free personal consultation included with every new club walk-in!
                </div>
              </div>
              <button
                onClick={() => openEnquiry({ message: 'Requesting a free club tour and consultation.' })}
                className="w-full mt-2 py-2 text-xs font-semibold uppercase tracking-wider bg-neutral-800 hover:bg-gym-red text-white rounded-md transition"
              >
                Book Free Trial Walk-in
              </button>
            </div>
          </div>

          {/* Col 4: Kukatpally Location & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-white tracking-wide border-l-2 border-gym-red pl-2.5">
              Kukatpally Club
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={gymConfig.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-neutral-300 hover:text-gym-red transition text-xs leading-relaxed group"
                  title="Click to start direct GPS navigation on Google Maps"
                >
                  <MapPin className="w-4 h-4 text-gym-red mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>
                    {gymConfig.location.fullAddress}
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${gymConfig.contact.phoneTel}`} 
                  className="flex items-center gap-2.5 text-neutral-300 hover:text-gym-red transition text-xs"
                >
                  <Phone className="w-4 h-4 text-gym-red shrink-0" />
                  <span>{gymConfig.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${gymConfig.contact.email}`} 
                  className="flex items-center gap-2.5 text-neutral-300 hover:text-gym-red transition text-xs"
                >
                  <Mail className="w-4 h-4 text-gym-red shrink-0" />
                  <span>{gymConfig.contact.email}</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={gymConfig.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gym-red hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Start Turn-by-Turn GPS Navigation</span>
                  <span>→</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} FitZone Fitness Club, Kukatpally. All rights reserved.</p>
          <p className="text-neutral-500 text-center md:text-right">
            Designed for high performance. All prices and trainer metrics are editable via <code className="text-neutral-400 bg-neutral-900 px-1 py-0.5 rounded">gymConfig.js</code>.
          </p>
        </div>
      </div>
    </footer>
  );
}
