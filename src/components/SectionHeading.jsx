import React from 'react';

export default function SectionHeading({ badge, title, highlight, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'text-left'}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-gym-red/15 text-gym-red border border-gym-red/30 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gym-red animate-pulse"></span>
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-wide">
        {title} {highlight && <span className="text-gym-red">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
