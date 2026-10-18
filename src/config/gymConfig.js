/**
 * FitZone Fitness Club - Centralized Configuration
 * 
 * Update this single file to change gym contact details, pricing,
 * operating hours, location, and social media links across the entire website.
 */

export const gymConfig = {
  name: "FitZone Fitness Club",
  tagline: "BUILD YOUR STRONGER SELF",
  subTagline: "Train Hard. Stay Consistent. Transform Your Life.",
  
  // Location & Address
  location: {
    addressLine1: "Near BJP Office",
    locality: "Kukatpally",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    pincode: "500072",
    fullAddress: "Near BJP Office, Kukatpally, Hyderabad, Telangana 500072, India",
    // Embed map query URL for Google Maps iframe
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15222.993494793282!2d78.3908!3d17.4875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb919420786e01%3A0x6b77d612e4d08434!2sKukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    // Direct turn-by-turn GPS navigation link to reach the destination
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Near+BJP+Office,+Kukatpally,+Hyderabad,+Telangana+500072",
  },

  // Contact Information (Easily editable placeholders)
  contact: {
    phoneDisplay: "+91 98765 43210",
    phoneTel: "+919876543210",
    whatsappNumber: "919876543210", // Digits only with country code without +
    email: "contact@fitzonefitness.in",
    isConfirmedPhone: false, // Set to true once confirmed by gym owner
  },

  // Working Hours
  hours: {
    weekday: "Monday - Saturday: 5:30 AM – 10:30 PM",
    weekend: "Sunday: 6:00 AM – 1:00 PM",
    specialNotice: "Open on all national holidays with special morning hours (6:00 AM – 12:00 PM)",
    schedule: [
      { days: "Monday – Friday", timing: "5:30 AM – 10:30 PM" },
      { days: "Saturday", timing: "5:30 AM – 10:00 PM" },
      { days: "Sunday", timing: "6:00 AM – 1:00 PM" },
    ]
  },

  // Membership Pricing (Centralized Source of Truth)
  pricing: {
    currencySymbol: "₹",
    plans: {
      monthly: {
        id: "monthly",
        name: "Monthly Plan",
        duration: "1 Month",
        price: 1499,
        displayPrice: "₹1,499",
        billingCycle: "/month",
        description: "Ideal for short-term fitness goals and exploring our club facilities.",
        badge: null,
      },
      quarterly: {
        id: "quarterly",
        name: "Quarterly Plan",
        duration: "3 Months",
        price: 3999,
        displayPrice: "₹3,999",
        billingCycle: "/quarter",
        description: "Great for building consistent workout routines and visible progress.",
        badge: "Popular",
      },
      yearly: {
        id: "yearly",
        name: "Yearly Plan",
        duration: "12 Months",
        price: 11999,
        displayPrice: "₹11,999",
        billingCycle: "/year",
        description: "Maximum value for serious fitness enthusiasts committed to lasting health.",
        badge: "Best Value",
        recommended: true,
      }
    }
  },

  // Statistics (Marked sample metrics)
  stats: [
    { label: "Active Members", value: "1,500+", note: "sample figure" },
    { label: "Certified Trainers", value: "12+", note: "sample figure" },
    { label: "Modern Equipment", value: "60+", note: "sample figure" },
    { label: "Years of Excellence", value: "7+", note: "sample figure" },
  ],

  // Social Links
  socials: {
    instagram: "https://instagram.com/fitzone_kukatpally",
    facebook: "https://facebook.com/fitzonekukatpally",
    youtube: "https://youtube.com/@fitzonefitness",
    twitter: "https://twitter.com/fitzone_hyd",
  },

  // WhatsApp Pre-filled Messages
  whatsappMessages: {
    default: "Hello FitZone Fitness Club! I would like to know more about your gym and membership plans.",
    planInquiry: (planName) => `Hello FitZone Fitness Club! I am interested in joining the ${planName}. Could you please share more details?`,
    serviceInquiry: (serviceName) => `Hello FitZone Fitness Club! I would like to inquire about your ${serviceName} program.`,
    trainerBooking: (trainerName) => `Hello FitZone Fitness Club! I would like to book a personal training consultation with ${trainerName}.`,
  }
};
