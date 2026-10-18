import React from 'react';
import { Dumbbell, Flame, UserCheck, TrendingDown, Zap, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

const iconMap = {
  Dumbbell: Dumbbell,
  Flame: Flame,
  UserCheck: UserCheck,
  TrendingDown: TrendingDown,
  Zap: Zap,
  Biceps: Zap,
  Activity: Activity,
};

export default function ServiceCard({ service }) {
  const { openEnquiry } = useEnquiry();
  const IconComponent = iconMap[service.iconName] || Dumbbell;

  return (
    <div className="group glass-card rounded-3xl overflow-hidden hover:border-gym-red/50 hover:shadow-red-subtle transition-all duration-300 flex flex-col h-full relative">
      {/* Top Image Container */}
      <div className="relative h-56 sm:h-60 overflow-hidden bg-neutral-900">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
          loading="lazy"
        />
        {/* Dark gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/40 to-transparent"></div>
        
        {/* Top Badges */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between">
          <span className="px-3 py-1 bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-neutral-200 rounded-lg">
            {service.category}
          </span>
          <span className="px-2.5 py-1 bg-gym-red/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white rounded-lg shadow-md">
            {service.level}
          </span>
        </div>

        {/* Icon Floating Badge */}
        <div className="absolute bottom-3 right-4 w-12 h-12 rounded-2xl bg-gym-red text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-6 h-6" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[11px] font-semibold text-gym-red uppercase tracking-widest block mb-1">
            {service.duration}
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-black text-white group-hover:text-gym-red transition-colors tracking-wide">
            {service.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed">
            {service.shortDesc}
          </p>

          {/* Program Highlights */}
          <div className="mt-5 pt-4 border-t border-neutral-800/80 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block">
              Core Benefits:
            </span>
            <ul className="space-y-1.5">
              {service.benefits.slice(0, 3).map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gym-red shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={() => openEnquiry({ service: service.title })}
            className="w-full py-3 px-4 bg-neutral-900 border border-neutral-800 hover:bg-gym-red hover:border-gym-red text-white text-xs font-heading font-bold uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group-hover:border-gym-red shadow-sm cursor-pointer"
          >
            <span>Enquire This Program</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
