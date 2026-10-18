/**
 * FitZone Fitness Club - Membership Plans Data
 * 
 * References centralized gymConfig prices. Easily editable.
 */

import { gymConfig } from '../config/gymConfig';

export const membershipPlans = [
  {
    id: gymConfig.pricing.plans.monthly.id,
    name: gymConfig.pricing.plans.monthly.name,
    duration: gymConfig.pricing.plans.monthly.duration,
    price: gymConfig.pricing.plans.monthly.price,
    displayPrice: gymConfig.pricing.plans.monthly.displayPrice,
    billingCycle: gymConfig.pricing.plans.monthly.billingCycle,
    tagline: "Short-term trial & flexible commitment",
    badge: null,
    popular: false,
    colorAccent: "border-neutral-800",
    features: [
      { text: "Full access to strength & cardio floor", included: true },
      { text: "Locker room & clean shower facilities", included: true },
      { text: "Free gym orientation & fitness assessment", included: true },
      { text: "Mobile app workout tracker access", included: true },
      { text: "1 complimentary personal training consultation", included: true },
      { text: "Diet & nutrition guidance template", included: false },
      { text: "Guest workout passes", included: false },
      { text: "Freezing privilege during travel", included: false },
    ],
    idealFor: "Students and professionals seeking total month-to-month flexibility."
  },
  {
    id: gymConfig.pricing.plans.quarterly.id,
    name: gymConfig.pricing.plans.quarterly.name,
    duration: gymConfig.pricing.plans.quarterly.duration,
    price: gymConfig.pricing.plans.quarterly.price,
    displayPrice: gymConfig.pricing.plans.quarterly.displayPrice,
    billingCycle: gymConfig.pricing.plans.quarterly.billingCycle,
    tagline: "The 90-day habit & body transformation",
    badge: "Most Consistent",
    popular: false,
    colorAccent: "border-neutral-700",
    features: [
      { text: "Full access to strength & cardio floor", included: true },
      { text: "Locker room & clean shower facilities", included: true },
      { text: "Complete body composition analysis (BCA)", included: true },
      { text: "Mobile app workout tracker access", included: true },
      { text: "2 complimentary 1-on-1 personal coaching sessions", included: true },
      { text: "Customized macronutrient & diet consultation", included: true },
      { text: "1 complimentary guest workout pass", included: true },
      { text: "Membership freeze option (up to 15 days)", included: false },
    ],
    idealFor: "Individuals targeting visible physique transformation in 90 days."
  },
  {
    id: gymConfig.pricing.plans.yearly.id,
    name: gymConfig.pricing.plans.yearly.name,
    duration: gymConfig.pricing.plans.yearly.duration,
    price: gymConfig.pricing.plans.yearly.price,
    displayPrice: gymConfig.pricing.plans.yearly.displayPrice,
    billingCycle: gymConfig.pricing.plans.yearly.billingCycle,
    tagline: "Ultimate commitment with unmatched value",
    badge: "Recommended • Best Value",
    popular: true,
    colorAccent: "border-gym-red shadow-red-glow",
    features: [
      { text: "365 days unlimited club access", included: true },
      { text: "VIP locker & dedicated shower amenities", included: true },
      { text: "Monthly body composition & fitness re-evaluations", included: true },
      { text: "Full access to functional turf & cardio zone", included: true },
      { text: "4 complimentary 1-on-1 personal coaching sessions", included: true },
      { text: "Personalized diet & nutrition blueprint with coach", included: true },
      { text: "4 complimentary guest workout passes per year", included: true },
      { text: "Membership freeze privilege (up to 45 days)", included: true },
    ],
    idealFor: "Dedicated fitness enthusiasts seeking long-term lifestyle fitness at best rate."
  }
];

export const membershipFAQs = [
  {
    question: "Are these prices final or subject to change?",
    answer: "These are sample standard rates. FitZone Fitness Club periodically offers seasonal promotions and corporate packages. Contact our Kukatpally desk or submit an enquiry to confirm today's active deals."
  },
  {
    question: "Is there an additional registration or admission fee?",
    answer: "Registration fees are typically waived for Quarterly and Yearly memberships. For monthly plans, a nominal one-time registration may apply."
  },
  {
    question: "Can I freeze my membership if I travel or fall sick?",
    answer: "Yes, our Yearly Plan supports up to 45 days of complimentary membership freeze upon written or WhatsApp notice to our front desk."
  },
  {
    question: "Do you offer trial workouts before joining?",
    answer: "Absolutely! We invite prospective members in and around Kukatpally for a complimentary facility walk-through and introductory trial session."
  }
];
