import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Dumbbell, Users, Flame, MapPin, ArrowRight, Star, Sparkles, CheckCircle2, Navigation } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';
import { gymConfig } from '../config/gymConfig';

export default function Hero() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center bg-gym-dark overflow-hidden pt-8 pb-20">
      {/* Background Image with Dark Vignette & Multi-Layer Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          alt="FitZone Fitness Club Gym Floor"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-125 scale-105 animate-pulse-slow"
        />
        {/* Layered Overlays for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-gym-dark via-gym-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gym-dark via-gym-dark/60 to-transparent"></div>
        <div className="absolute inset-0 radial-red-mesh opacity-70"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs (7 Cols) */}
          <div className="lg:col-span-8 text-center sm:text-left space-y-6">
            
            {/* Top Badges Row */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              <a 
                href={gymConfig.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs text-neutral-300 shadow-lg hover:border-gym-red/60 transition cursor-pointer group"
                title="Click to start direct GPS navigation to FitZone Kukatpally on Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-gym-red shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-white group-hover:text-gym-red transition-colors">Near BJP Office, Kukatpally</span>
                <span className="text-[10px] text-gym-red font-bold uppercase tracking-wider flex items-center gap-0.5 ml-0.5">
                  <Navigation className="w-2.5 h-2.5" /> Navigate ↗
                </span>
              </a>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Open Now: 5:30 AM – 10:30 PM</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-white tracking-tight leading-[1.05] uppercase">
              BUILD YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-gym-red text-glow">
                STRONGER SELF.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto sm:mx-0">
              Train Hard. Stay Consistent. Transform Your Life. Experience world-class Olympic lifting gear, certified personal coaches, and an electric atmosphere in the heart of Kukatpally.
            </p>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-xs text-neutral-300">
              <div className="flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-lg border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-gym-red" />
                <span>Olympic Lifting Gear</span>
              </div>
              <div className="flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-lg border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-gym-red" />
                <span>Certified Coaches</span>
              </div>
              <div className="flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-lg border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-gym-red" />
                <span>100% Sanitized & AC Floor</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
              <button
                onClick={() => openEnquiry({ plan: 'Yearly Plan', message: 'Claiming my complimentary 1-Day Trial Pass.' })}
                className="w-full sm:w-auto px-8 py-4 bg-gym-red hover:bg-gym-redHover text-white font-heading font-bold uppercase tracking-wider text-sm rounded-xl shadow-red-glow hover:shadow-red-subtle transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer animate-shimmer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Claim Free 1-Day Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 glass-panel hover:bg-neutral-800/80 text-neutral-200 hover:text-white font-heading font-semibold uppercase tracking-wider text-sm rounded-xl border border-neutral-700/80 transition flex items-center justify-center gap-2"
              >
                <span>Explore 7 Programs</span>
              </Link>
            </div>

            {/* Social Proof Quote */}
            <div className="pt-2 flex items-center justify-center sm:justify-start gap-3">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-neutral-400">
                <strong className="text-white">4.9/5 Rating</strong> from 200+ verified Kukatpally members
              </span>
            </div>

          </div>

          {/* Right Column: Floating Luxury Feature Card (4 Cols) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gym-red/30 to-amber-500/20 rounded-3xl blur-xl"></div>
              
              <div className="relative glass-card border border-neutral-700/60 rounded-3xl p-7 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gym-red flex items-center justify-center text-white shadow-red-glow">
                      <Dumbbell className="w-5 h-5 -rotate-45" />
                    </div>
                    <div>
                      <h4 className="text-base font-heading font-bold text-white tracking-wider">
                        FITZONE VIP PASS
                      </h4>
                      <p className="text-[11px] text-gym-red font-semibold uppercase">
                        Introductory Offer
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-gym-red/20 text-gym-red text-[10px] font-bold uppercase rounded-md border border-gym-red/30">
                    Complimentary
                  </span>
                </div>

                <div className="space-y-3 text-xs text-neutral-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Free 1-on-1 Fitness Assessment & BCA report</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Full workout trial on Olympic lifting floor</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Cardio theater & functional turf session</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>No membership commitment required to trial</span>
                  </div>
                </div>

                <div className="p-4 bg-neutral-900/90 rounded-2xl border border-neutral-800/80">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-400">Membership Starts At:</span>
                    <span className="text-base font-heading font-black text-white">₹1,499<span className="text-xs text-neutral-500 font-normal">/mo</span></span>
                  </div>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">
                    Yearly pass works out to only ₹33/day
                  </span>
                </div>

                <button
                  onClick={() => openEnquiry({ plan: 'Yearly Plan' })}
                  className="w-full py-3 bg-gym-red hover:bg-gym-redHover text-white text-xs font-heading font-bold uppercase tracking-wider rounded-xl shadow-red-glow transition flex items-center justify-center gap-2"
                >
                  <span>Book Free Club Tour Today</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Statistics Cards Row */}
        <div className="mt-16 pt-10 border-t border-neutral-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {gymConfig.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-5 hover:border-gym-red/50 transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-4xl font-heading font-black text-white group-hover:text-gym-red transition-colors flex items-center gap-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">
                {stat.note}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
