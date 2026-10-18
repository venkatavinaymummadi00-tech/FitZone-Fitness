import React from 'react';
import SectionHeading from '../components/SectionHeading';
import TrainerCard from '../components/TrainerCard';
import { trainersData } from '../data/trainers';
import { ShieldCheck, Dumbbell, Trophy, Heart, ArrowRight, Sparkles } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

export default function Trainers() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="bg-gym-dark text-white min-h-screen">
      {/* Header */}
      <div className="relative py-24 bg-gym-charcoal border-b border-neutral-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop"
            alt="FitZone Coaches"
            className="w-full h-full object-cover filter brightness-[0.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gym-charcoal via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-gym-red/20 text-gym-red border border-gym-red/30 mb-4">
            Coaching Excellence
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tight">
            EXPERT <span className="text-gym-red">TRAINERS</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Our certified personal coaches in Kukatpally bring deep knowledge of movement science, nutrition programming, and daily accountability.
          </p>
        </div>
      </div>

      {/* Trainers Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Coaching Roster"
          title="MEET YOUR"
          highlight="FITNESS MENTORS"
          subtitle="Click on any trainer to book a 1-on-1 personal consultation or trial workout."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {trainersData.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>

        <div className="mt-14 p-4 glass-card rounded-2xl text-center text-xs text-neutral-400 max-w-xl mx-auto">
          📋 Trainer profiles shown are sample representative coaching staff for FitZone Fitness Club. Actual coach bios can be configured in <span className="text-gym-red font-mono">src/data/trainers.js</span>.
        </div>
      </section>

      {/* Why Choose 1-on-1 Personal Training */}
      <section className="py-24 bg-gym-charcoal border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The 1-on-1 Difference"
            title="WHY CHOOSE"
            highlight="PERSONAL TRAINING"
            subtitle="Accelerate your transformation with targeted workouts and scientific precision."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl">
              <ShieldCheck className="w-10 h-10 text-gym-red mb-4" />
              <h3 className="text-xl font-heading font-black text-white uppercase tracking-wide">
                Biomechanical Precision
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Eliminate lower back strain, shoulder pinches, and common lifting mistakes with meticulous form coaching on every repetition.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <Trophy className="w-10 h-10 text-gym-red mb-4" />
              <h3 className="text-xl font-heading font-black text-white uppercase tracking-wide">
                Accelerated Milestones
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Trainees with dedicated 1-on-1 coaches reach their fat loss and muscle hypertrophy targets up to 3x faster through structured progressive overload.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <Heart className="w-10 h-10 text-gym-red mb-4" />
              <h3 className="text-xl font-heading font-black text-white uppercase tracking-wide">
                Nutritional Synergy
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Coaching doesn't stop at the gym door. Receive realistic macronutrient advice and meal timing strategies tailored to South Indian food culture.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => openEnquiry({ service: 'Personal Training', message: 'I would like to inquire about 1-on-1 Personal Training packages.' })}
              className="px-8 py-4 bg-gym-red hover:bg-gym-redHover text-white font-heading font-bold uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow-red-glow transition cursor-pointer animate-shimmer"
            >
              Book a Free Personal Training Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
