import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Dumbbell, Users, Clock, ArrowRight, MessageCircle, Sparkles, CheckCircle2, Navigation } from 'lucide-react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import MembershipCard from '../components/MembershipCard';
import TrainerCard from '../components/TrainerCard';
import TestimonialSlider from '../components/TestimonialSlider';
import BmiCalculator from '../components/BmiCalculator';
import { servicesData } from '../data/services';
import { membershipPlans } from '../data/memberships';
import { trainersData } from '../data/trainers';
import { gymConfig } from '../config/gymConfig';
import { useEnquiry } from '../context/EnquiryContext';

export default function Home() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="bg-gym-dark text-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Gym Highlights & Club Standards */}
      <section className="py-24 bg-gym-charcoal border-y border-neutral-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why FitZone Kukatpally"
            title="THE ULTIMATE"
            highlight="FITNESS EXPERIENCE"
            subtitle="Engineered for serious lifters, everyday athletes, and beginners ready to turn ambition into real results."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Dumbbell,
                title: "World-Class Equipment",
                desc: "Olympic barbells, custom bumper plates, heavy power racks, and precision plate-loaded selectorized equipment.",
              },
              {
                icon: Users,
                title: "Certified Personal Coaches",
                desc: "Dedicated biomechanical supervision, posture correction, and tailored progressive workout plans.",
              },
              {
                icon: ShieldCheck,
                title: "Hygienic & Premium Vibe",
                desc: "Fully air-conditioned workout zones, clean showers, sanitized locker amenities, and focused ambient lighting.",
              },
              {
                icon: Clock,
                title: "Convenient Club Hours",
                desc: "Open 6 days from 5:30 AM to 10:30 PM, plus Sunday sessions to fit any demanding corporate routine.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-7 hover:border-gym-red/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gym-red/10 border border-gym-red/30 text-gym-red flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gym-red group-hover:text-white transition-all duration-300 shadow-lg">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-black text-white group-hover:text-gym-red transition-colors tracking-wide">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Services Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-gym-red/15 text-gym-red border border-gym-red/30 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gym-red animate-pulse"></span>
              Our Specialized Programs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-wide">
              TARGETED <span className="text-gym-red">TRAINING</span>
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl">
              Scientifically backed workout disciplines designed to achieve measurable strength, endurance, and transformation.
            </p>
          </div>
          <Link
            to="/services"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-gym-red hover:text-gym-redHover group"
          >
            <span>View All 7 Programs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 4. Interactive BMI Calculator Section */}
      <section className="py-20 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BmiCalculator />
        </div>
      </section>

      {/* 5. Membership Plans Preview */}
      <section className="py-24 bg-gym-charcoal border-b border-neutral-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Simple, Transparent Pricing"
            title="FIND YOUR"
            highlight="MEMBERSHIP PLAN"
            subtitle="No hidden gym fees. Flexible payment options. All prices configured directly from our central management system."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
            {membershipPlans.map((plan) => (
              <MembershipCard key={plan.id} plan={plan} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white underline underline-offset-4"
            >
              <span>Compare all features, facilities & read membership FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Trainer Spotlight Preview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-gym-red/15 text-gym-red border border-gym-red/30 mb-3">
              Elite Coaching Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-wide">
              TRAIN WITH <span className="text-gym-red">THE BEST</span>
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl">
              Our certified coaches near BJP Office Kukatpally provide proper bio-mechanics, progressive overload, and lifestyle guidance.
            </p>
          </div>
          <Link
            to="/trainers"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-gym-red hover:text-gym-redHover group"
          >
            <span>Meet All Coaches</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainersData.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </section>

      {/* 7. Customer Testimonials */}
      <section className="py-24 bg-gym-charcoal border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Real Journeys • Sample Reviews"
            title="WHAT OUR"
            highlight="MEMBERS SAY"
            subtitle="Explore how trainees in Kukatpally are achieving their weight loss and muscle building goals at FitZone."
          />
          <TestimonialSlider />

          <div className="mt-12 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gym-red hover:text-gym-redHover"
            >
              <span>Read More Member Stories & Write a Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Final Conversion Banner */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-neutral-950 via-gym-dark to-neutral-900 border-b border-neutral-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gym-red/20 text-gym-red text-xs font-bold uppercase tracking-widest rounded-full border border-gym-red/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Your Fitness Journey Today</span>
          </span>
          
          <h2 className="text-4xl sm:text-6xl font-heading font-black text-white uppercase tracking-tight">
            READY TO BUILD YOUR <span className="text-gym-red">STRONGER SELF?</span>
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Visit FitZone Fitness Club{' '}
            <a 
              href={gymConfig.location.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gym-red font-semibold underline underline-offset-4"
              title="Click to start direct GPS navigation"
            >
              near BJP Office, Kukatpally ↗
            </a>
            . Meet our trainers, tour the strength and cardio floors, and claim your introductory consultation pass.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openEnquiry({ plan: 'Yearly Plan' })}
              className="w-full sm:w-auto px-8 py-4 bg-gym-red hover:bg-gym-redHover text-white font-heading font-bold uppercase tracking-wider text-sm rounded-xl shadow-red-glow hover:shadow-red-subtle transform hover:-translate-y-0.5 transition cursor-pointer animate-shimmer"
            >
              Claim Free Club Walk-in Pass
            </button>
            <a
              href={gymConfig.location.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 glass-panel hover:bg-neutral-800 text-white font-heading font-bold uppercase tracking-wider text-sm rounded-xl transition flex items-center justify-center gap-2 border border-neutral-700 cursor-pointer shadow-sm"
              title="Click to start direct GPS navigation"
            >
              <Navigation className="w-4 h-4 text-gym-red" />
              <span>Navigate to Gym</span>
            </a>
            <a
              href={`https://wa.me/${gymConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                gymConfig.whatsappMessages.default
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold uppercase tracking-wider text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-2xl shadow-emerald-950/60"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
