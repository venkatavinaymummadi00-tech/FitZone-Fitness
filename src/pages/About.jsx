import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Target, HeartHandshake, ShieldCheck, Flame, Users, ArrowRight, Sparkles, Navigation } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useEnquiry } from '../context/EnquiryContext';
import { gymConfig } from '../config/gymConfig';

export default function About() {
  const { openEnquiry } = useEnquiry();

  const facilities = [
    {
      title: "Strength & Power Zone",
      desc: "Commercial Olympic barbells, power cages, heavy squat racks, and deadlift platforms engineered with high-impact rubber flooring.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
      features: ["Heavy-duty power cages", "Olympic bumper plates & deadlift mats", "Specialty bars & bench presses"]
    },
    {
      title: "Endurance & Cardio Theater",
      desc: "High-spec commercial treadmills, assault air bikes, stairmasters, elliptical trainers, and rowing machines with interactive screens.",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=800&auto=format&fit=crop",
      features: ["Touchscreen commercial treadmills", "Assault bikes for HIIT intervals", "Low-impact cross-trainers"]
    },
    {
      title: "Free Weights & Dumbbell Floor",
      desc: "Extensive dumbbell selection ranging from 2.5 kg up to 50 kg, multiple multi-angle incline/decline benches, and cable crossover towers.",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop",
      features: ["Complete pairs from 2.5 kg to 50 kg", "Multi-angle adjustable benches", "Dual adjustable pulley stations"]
    },
    {
      title: "Functional Turf & Athletic Arena",
      desc: "High-density synthetic sled turf, battle ropes, kettlebells, medicine balls, and plyo boxes for dynamic athletic conditioning.",
      image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800&auto=format&fit=crop",
      features: ["Weighted sled turf track", "Battle ropes & slam balls", "Kettlebells & plyometric boxes"]
    }
  ];

  return (
    <div className="bg-gym-dark text-white min-h-screen">
      {/* Page Header Banner */}
      <div className="relative py-24 bg-gym-charcoal border-b border-neutral-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop"
            alt="About FitZone Club"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gym-charcoal via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-gym-red/20 text-gym-red border border-gym-red/30 mb-4">
            About Our Club
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tight">
            DISCOVER <span className="text-gym-red">FITZONE</span> FITNESS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Located near BJP Office in Kukatpally, Hyderabad — built on a relentless passion for authentic strength, conditioning, and sustainable transformation.
          </p>
        </div>
      </div>

      {/* Mission & Philosophy */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gym-red block mb-1">
                Our Fitness Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-wide uppercase">
                NOT JUST A GYM. <br />
                <span className="text-neutral-400">A COMMUNITY OF STRONGER LIVES.</span>
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              FitZone Fitness Club was founded with a singular conviction: real fitness isn't about trendy fads or extreme shortcuts. It is about consistency, proper bio-mechanics, progressive overload, and an energizing environment that pushes you to give your best each workout.
            </p>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Situated conveniently near BJP Office in Kukatpally, our facility is engineered for all stages of your fitness journey—whether you are lifting an Olympic barbell for the first time or training for competitive athletic milestones.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-card p-5 rounded-2xl">
                <Target className="w-7 h-7 text-gym-red mb-2" />
                <h4 className="text-base font-heading font-bold text-white uppercase">Our Mission</h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  To provide Kukatpally with elite-grade training equipment, transparent coaching, and uncompromised gym hygiene.
                </p>
              </div>

              <div className="glass-card p-5 rounded-2xl">
                <HeartHandshake className="w-7 h-7 text-gym-red mb-2" />
                <h4 className="text-base font-heading font-bold text-white uppercase">Our Values</h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Zero intimidation, personalized guidance, genuine member safety, and relentless progress tracking.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop"
                alt="FitZone Workout Facility"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-5 glass-panel rounded-2xl border border-white/10">
                <p className="text-sm sm:text-base font-heading font-black text-white uppercase">
                  "The only bad workout is the one that didn't happen."
                </p>
                <p className="text-xs text-gym-red font-semibold uppercase tracking-wider mt-1">
                  FitZone Coaching Motto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Breakdown */}
      <section className="py-24 bg-gym-charcoal border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Club Infrastructure"
            title="FOUR SPECIALIZED"
            highlight="TRAINING ZONES"
            subtitle="Every square foot at FitZone Kukatpally is purposefully designed for athletic movement and peak performance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl overflow-hidden hover:border-gym-red/50 transition-all duration-300 group flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/30 to-transparent"></div>
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-heading font-black text-white group-hover:text-gym-red transition-colors uppercase tracking-wide">
                      {fac.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-neutral-800/80 flex flex-wrap gap-2">
                    {fac.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-3 py-1 bg-neutral-900 text-[11px] text-neutral-300 border border-neutral-800 rounded-lg"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Visual Gallery Preview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          badge="Atmosphere & Gear"
          title="TAKE A LOOK"
          highlight="INSIDE"
          subtitle="A glimpse into the energy, heavy iron, and high-spec cardio machinery at FitZone."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop"
          ].map((imgUrl, i) => (
            <div key={i} className="h-48 sm:h-56 rounded-2xl overflow-hidden glass-card group relative">
              <img
                src={imgUrl}
                alt="FitZone club snapshot"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-7 py-3.5 glass-panel hover:bg-neutral-800 text-sm font-heading font-bold uppercase tracking-wider rounded-xl text-white transition border border-neutral-700"
          >
            <span>Explore Full Image Gallery & Lightbox</span>
            <ArrowRight className="w-4 h-4 text-gym-red" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-900 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase tracking-wide">
            EXPERIENCE FITZONE IN PERSON
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Come visit us near{' '}
            <a 
              href={gymConfig.location.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gym-red font-semibold underline underline-offset-4"
              title="Click to start direct GPS navigation"
            >
              BJP Office in Kukatpally ↗
            </a>
            . Our team is ready to show you the facilities and discuss the best plan for your targets.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/membership"
              className="px-8 py-3.5 bg-gym-red hover:bg-gym-redHover text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-xl shadow-red-glow transition animate-shimmer"
            >
              Explore Membership Plans
            </Link>
            <a
              href={gymConfig.location.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-neutral-900 border border-neutral-700/80 hover:border-gym-red hover:bg-neutral-800 text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Navigation className="w-4 h-4 text-gym-red" />
              <span>Navigate to Gym</span>
            </a>
            <button
              onClick={() => openEnquiry({ message: 'Requesting an introductory club visit' })}
              className="px-8 py-3.5 glass-panel hover:bg-neutral-800 text-neutral-200 text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider rounded-xl border border-neutral-700 transition"
            >
              Book Club Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
