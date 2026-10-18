import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function TestimonialCard({ item }) {
  return (
    <div className="glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-gym-red/40 transition-all duration-300 relative group">
      <div>
        {/* Rating Stars & Quote Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(item.rating || 5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <div className="w-9 h-9 rounded-xl bg-gym-red/10 border border-gym-red/30 flex items-center justify-center text-gym-red group-hover:scale-110 transition-transform">
            <Quote className="w-4 h-4" />
          </div>
        </div>

        {/* Milestone Headline */}
        <h4 className="text-base sm:text-lg font-heading font-black text-white mb-2 leading-snug">
          "{item.highlight}"
        </h4>

        {/* Review Body */}
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
          "{item.review}"
        </p>
      </div>

      {/* Member Profile */}
      <div className="mt-6 pt-5 border-t border-neutral-800/80 flex items-center gap-3.5">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-gym-red/40"
          loading="lazy"
        />
        <div>
          <div className="flex items-center gap-1.5">
            <h5 className="text-sm font-heading font-bold text-white tracking-wide">{item.name}</h5>
            {item.verified && (
              <CheckCircle2 className="w-3.5 h-3.5 text-gym-red shrink-0" title="Verified Member" />
            )}
          </div>
          <p className="text-[11px] text-neutral-400">
            {item.role} • {item.location}
          </p>
        </div>
      </div>
    </div>
  );
}
