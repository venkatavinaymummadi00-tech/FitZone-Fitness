import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import MembershipCard from '../components/MembershipCard';
import { membershipPlans, membershipFAQs } from '../data/memberships';
import { Check, X, ChevronDown, ChevronUp, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';
import { gymConfig } from '../config/gymConfig';

export default function Membership() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const { openEnquiry } = useEnquiry();

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Detailed feature comparison matrix data
  const comparisonFeatures = [
    { name: "Full Gym & Equipment Floor Access", monthly: true, quarterly: true, yearly: true },
    { name: "Cardio Zone & HIIT Equipment Access", monthly: true, quarterly: true, yearly: true },
    { name: "Sanitized Lockers & Changing Rooms", monthly: true, quarterly: true, yearly: true },
    { name: "Body Composition Analysis (BCA)", monthly: "1 Assessment", quarterly: "Bi-Monthly", yearly: "Monthly Tracking" },
    { name: "Complimentary 1-on-1 PT Sessions", monthly: "1 Session", quarterly: "2 Sessions", yearly: "4 Sessions" },
    { name: "Personalized Diet & Nutrition Guidance", monthly: false, quarterly: true, yearly: true },
    { name: "Guest Workout Passes", monthly: false, quarterly: "1 Pass", yearly: "4 Passes" },
    { name: "Membership Freeze Privilege", monthly: false, quarterly: false, yearly: "Up to 45 Days" },
    { name: "Exclusive FitZone Apparel / Shaker Kit", monthly: false, quarterly: false, yearly: true },
  ];

  return (
    <div className="bg-gym-dark text-white min-h-screen">
      {/* Header */}
      <div className="relative py-24 bg-gym-charcoal border-b border-neutral-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
            alt="FitZone Membership Plans"
            className="w-full h-full object-cover filter brightness-[0.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gym-charcoal via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-gym-red/20 text-gym-red border border-gym-red/30 mb-4">
            Direct & Transparent Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tight">
            MEMBERSHIP <span className="text-gym-red">PLANS</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Choose the commitment level that matches your ambition. No lock-in traps or hidden fees. All prices managed directly in our central configuration.
          </p>
        </div>
      </div>

      {/* Main 3 Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {membershipPlans.map((plan) => (
            <MembershipCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="mt-12 p-4 glass-card rounded-2xl text-center text-xs text-neutral-400 max-w-2xl mx-auto">
          ℹ️ Note: These rates are sample indicative pricing for FitZone Fitness Club, Kukatpally. Prices can be updated in real time via <span className="text-gym-red font-mono font-medium">gymConfig.js</span>.
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gym-charcoal border-y border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Side-by-Side Breakdown"
            title="PLAN FEATURE"
            highlight="COMPARISON"
            subtitle="Review what is included in each membership tier before making your selection."
          />

          <div className="overflow-x-auto rounded-2xl border border-neutral-800/90 glass-card shadow-2xl">
            <table className="w-full text-left text-sm text-neutral-300">
              <thead className="bg-neutral-900/90 text-xs uppercase tracking-wider text-neutral-400 border-b border-neutral-800 font-heading">
                <tr>
                  <th scope="col" className="py-4 px-6">Features & Facilities</th>
                  <th scope="col" className="py-4 px-4 text-center">Monthly ({gymConfig.pricing.plans.monthly.displayPrice})</th>
                  <th scope="col" className="py-4 px-4 text-center">Quarterly ({gymConfig.pricing.plans.quarterly.displayPrice})</th>
                  <th scope="col" className="py-4 px-4 text-center text-gym-red font-black">
                    Yearly ({gymConfig.pricing.plans.yearly.displayPrice}) ★
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/70 text-xs sm:text-sm">
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/60 transition-colors">
                    <td className="py-4 px-6 font-medium text-white flex items-center gap-2.5">
                      <Zap className="w-3.5 h-3.5 text-gym-red shrink-0" />
                      <span>{row.name}</span>
                    </td>

                    {/* Monthly */}
                    <td className="py-4 px-4 text-center">
                      {typeof row.monthly === 'boolean' ? (
                        row.monthly ? (
                          <Check className="w-4 h-4 text-gym-red mx-auto stroke-[2.5]" />
                        ) : (
                          <X className="w-4 h-4 text-neutral-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-neutral-300 font-medium">{row.monthly}</span>
                      )}
                    </td>

                    {/* Quarterly */}
                    <td className="py-4 px-4 text-center">
                      {typeof row.quarterly === 'boolean' ? (
                        row.quarterly ? (
                          <Check className="w-4 h-4 text-gym-red mx-auto stroke-[2.5]" />
                        ) : (
                          <X className="w-4 h-4 text-neutral-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-neutral-300 font-medium">{row.quarterly}</span>
                      )}
                    </td>

                    {/* Yearly */}
                    <td className="py-4 px-4 text-center bg-gym-red/5">
                      {typeof row.yearly === 'boolean' ? (
                        row.yearly ? (
                          <Check className="w-4 h-4 text-gym-red mx-auto stroke-[3]" />
                        ) : (
                          <X className="w-4 h-4 text-neutral-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-white font-bold">{row.yearly}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => openEnquiry({ plan: 'Yearly Plan' })}
              className="px-8 py-4 bg-gym-red hover:bg-gym-redHover text-white font-heading font-bold uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow-red-glow transition cursor-pointer animate-shimmer"
            >
              Choose Recommended Yearly Plan (₹33/day)
            </button>
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="MEMBERSHIP"
          highlight="FAQS"
          subtitle="Everything you need to know about joining FitZone Fitness Club near BJP Office, Kukatpally."
        />

        <div className="space-y-4">
          {membershipFAQs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-neutral-900/50 transition focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <span className="p-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-gym-red shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
