import React from 'react';
import { Check, X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

export default function MembershipCard({ plan }) {
  const { openEnquiry } = useEnquiry();

  // Calculate approximate per-day cost for visual perspective
  const getPerDayCost = () => {
    if (plan.id === 'yearly') return '₹33 / day';
    if (plan.id === 'quarterly') return '₹44 / day';
    return '₹50 / day';
  };

  return (
    <div
      className={`relative glass-card rounded-3xl flex flex-col justify-between transition-all duration-300 ${
        plan.popular
          ? 'border-2 border-gym-red shadow-red-glow lg:-translate-y-3 bg-gradient-to-b from-[#1c1213] to-[#121212]'
          : 'border border-neutral-800 hover:border-neutral-700'
      }`}
    >
      {/* Recommended Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider bg-gym-red text-white shadow-lg shadow-red-950/80 animate-shimmer">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            {plan.badge}
          </span>
        </div>
      )}

      {/* Header Info */}
      <div className="p-7 sm:p-8">
        <div className="text-center pb-6 border-b border-neutral-800/80">
          <span className="text-[11px] uppercase font-bold tracking-widest text-gym-red">
            {plan.duration} Unlimited Access
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mt-1 uppercase tracking-wide">
            {plan.name}
          </h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-xs mx-auto">
            {plan.tagline}
          </p>

          {/* Pricing Display */}
          <div className="mt-5 flex items-baseline justify-center gap-1.5">
            <span className="text-4xl sm:text-5xl font-heading font-black text-white">
              {plan.displayPrice}
            </span>
            <span className="text-xs text-neutral-400 font-semibold uppercase">
              {plan.billingCycle}
            </span>
          </div>

          {/* Per-Day Perspective */}
          <div className="mt-2 inline-block px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-[11px] font-semibold text-neutral-300">
            Works out to approximately <span className="text-gym-red font-bold">{getPerDayCost()}</span>
          </div>
        </div>

        {/* Benefits Checklist */}
        <div className="mt-6 space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block">
            Membership Privileges:
          </span>
          <ul className="space-y-2.5">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                {feature.included ? (
                  <div className="w-4 h-4 rounded-full bg-gym-red/20 text-gym-red flex items-center justify-center shrink-0 mt-0.5 border border-gym-red/40">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                ) : (
                  <div className="w-4 h-4 rounded-full bg-neutral-900 text-neutral-600 flex items-center justify-center shrink-0 mt-0.5 border border-neutral-800">
                    <X className="w-2.5 h-2.5" />
                  </div>
                )}
                <span className={feature.included ? 'text-neutral-200' : 'text-neutral-600 line-through'}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="p-7 sm:p-8 pt-0">
        <button
          onClick={() => openEnquiry({ plan: plan.name })}
          className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
            plan.popular
              ? 'bg-gym-red hover:bg-gym-redHover text-white shadow-red-glow hover:shadow-red-subtle transform hover:-translate-y-0.5'
              : 'bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700/80'
          }`}
        >
          <span>Choose {plan.name}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
