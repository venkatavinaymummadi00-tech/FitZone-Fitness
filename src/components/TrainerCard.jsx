import React from 'react';
import { Award, Calendar, ArrowRight, Instagram, Dumbbell } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

export default function TrainerCard({ trainer }) {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="group glass-card rounded-3xl overflow-hidden hover:border-gym-red/50 hover:shadow-red-subtle transition-all duration-300 flex flex-col h-full relative">
      {/* Photo with zoom effect */}
      <div className="relative h-72 sm:h-80 overflow-hidden bg-neutral-900">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover object-top transform group-hover:scale-108 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/30 to-transparent"></div>

        {/* Experience Badge */}
        <span className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-neutral-700/60 text-[11px] font-bold text-gym-red rounded-lg">
          {trainer.experience}
        </span>
      </div>

      {/* Info Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gym-red block mb-1">
            {trainer.specialization}
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-black text-white group-hover:text-gym-red transition-colors tracking-wide">
            {trainer.name}
          </h3>
          <p className="text-xs text-neutral-400 font-medium mt-0.5">
            {trainer.role}
          </p>
          <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3">
            {trainer.bio}
          </p>

          {/* Certifications Preview */}
          {trainer.certifications && (
            <div className="mt-3 pt-3 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
              {trainer.certifications.map((cert, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 text-[10px] text-neutral-300 bg-neutral-900/90 border border-neutral-800 px-2.5 py-1 rounded-md"
                >
                  <Award className="w-3 h-3 text-gym-red" />
                  {cert}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={() => openEnquiry({ trainer: trainer.name, service: 'Personal Training', message: `Interested in booking 1-on-1 coaching with ${trainer.name}.` })}
            className="w-full py-2.5 px-4 bg-neutral-900 border border-neutral-800 hover:bg-gym-red hover:border-gym-red text-white text-xs font-heading font-bold uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group-hover:border-gym-red cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book 1-on-1 Session</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
