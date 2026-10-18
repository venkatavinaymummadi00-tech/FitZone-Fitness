import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/services';
import { useEnquiry } from '../context/EnquiryContext';
import { MessageCircle, HelpCircle, Sparkles } from 'lucide-react';
import { gymConfig } from '../config/gymConfig';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { openEnquiry } = useEnquiry();

  const categories = ['All', 'Strength', 'Endurance', 'Coaching', 'Transformation', 'Athletic', 'Wellness'];

  const filteredServices = activeCategory === 'All' 
    ? servicesData 
    : servicesData.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="bg-gym-dark text-white min-h-screen">
      {/* Page Header */}
      <div className="relative py-24 bg-gym-charcoal border-b border-neutral-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1920&auto=format&fit=crop"
            alt="FitZone Training Services"
            className="w-full h-full object-cover filter brightness-[0.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gym-charcoal via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-gym-red/20 text-gym-red border border-gym-red/30 mb-4">
            Training Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tight">
            OUR FITNESS <span className="text-gym-red">SERVICES</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            From heavy Olympic lifting and high-octane HIIT to customized 1-on-1 coaching — explore our 7 science-backed workout disciplines.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gym-red text-white shadow-red-glow'
                    : 'glass-panel text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Not Sure Where to Start Box */}
        <div className="mt-20 p-8 sm:p-10 glass-card rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-neutral-800">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gym-red/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gym-red mb-2">
              <HelpCircle className="w-4 h-4" />
              Need Personalized Guidance?
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-wide">
              Unsure which program fits your lifestyle?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Drop by our Kukatpally club or submit an enquiry. Our senior coaches will assess your daily schedule, past injuries, and fitness ambitions to suggest the ideal program.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full md:w-auto">
            <button
              onClick={() => openEnquiry({ message: 'I need advice choosing the right program for my fitness goals.' })}
              className="px-6 py-3.5 bg-gym-red hover:bg-gym-redHover text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-xl shadow-red-glow transition text-center cursor-pointer animate-shimmer"
            >
              Get Free Coach Consultation
            </button>
            <a
              href={`https://wa.me/${gymConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                'Hello FitZone! Could you guide me on which fitness program is best suited for me?'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 glass-panel hover:bg-neutral-800 text-white text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 border border-neutral-700"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
