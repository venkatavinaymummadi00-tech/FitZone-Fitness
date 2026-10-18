import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Dumbbell, Send, MessageCircle } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';
import { gymConfig } from '../config/gymConfig';

export default function EnquiryModal() {
  const { isOpen, prefill, closeEnquiry } = useEnquiry();

  // Form Fields State
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    preferredPlan: '',
    preferredService: '',
    message: '',
  });

  // Validation Errors
  const [errors, setErrors] = useState({});
  // Submission Status: 'idle' | 'submitting' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const [submittedData, setSubmittedData] = useState(null);

  // Sync prefilled data when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        fullName: '',
        mobileNumber: '',
        preferredPlan: prefill.plan || 'Yearly Plan',
        preferredService: prefill.service || '',
        message: prefill.message || (prefill.trainer ? `Interested in training with ${prefill.trainer}` : ''),
      });
      setErrors({});
      setStatus('idle');
      setSubmittedData(null);
    }
  }, [isOpen, prefill]);

  if (!isOpen) return null;

  // Validation function
  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    // Indian Mobile Number Validation: 10 digits starting with 6, 7, 8, 9
    const cleanedMobile = formData.mobileNumber.replace(/\D/g, '');
    const indianMobileRegex = /^[6-9]\d{9}$/;

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!indianMobileRegex.test(cleanedMobile)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (status === 'submitting') return; // Prevent duplicate submission

    setStatus('submitting');

    // Simulate reliable enquiry capture
    setTimeout(() => {
      setStatus('success');
      setSubmittedData({ ...formData });
    }, 900);
  };

  // Build WhatsApp pre-filled message with visitor's enquiry
  const generateWhatsAppUrl = () => {
    if (!submittedData) return `https://wa.me/${gymConfig.contact.whatsappNumber}`;
    const text = `Hi FitZone Kukatpally! I have submitted an enquiry:
• Name: ${submittedData.fullName}
• Phone: ${submittedData.mobileNumber}
• Plan: ${submittedData.preferredPlan || 'General Inquiry'}
${submittedData.preferredService ? `• Service: ${submittedData.preferredService}\n` : ''}${submittedData.message ? `• Note: ${submittedData.message}` : ''}`;
    return `https://wa.me/${gymConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={closeEnquiry}
    >
      <div 
        className="relative w-full max-w-lg glass-panel border border-neutral-700/80 rounded-3xl shadow-2xl p-7 sm:p-9 my-8 text-white transition-all transform animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeEnquiry}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          /* Success Screen */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">
              Enquiry Submitted Successfully!
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-white">{submittedData?.fullName}</span>. Our Kukatpally club manager will contact you at <span className="text-gym-red font-medium">{submittedData?.mobileNumber}</span> shortly.
            </p>

            <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800 text-left text-xs space-y-2 mt-4">
              <div className="flex justify-between">
                <span className="text-neutral-400">Selected Plan:</span>
                <span className="font-semibold text-white">{submittedData?.preferredPlan || 'General'}</span>
              </div>
              {submittedData?.preferredService && (
                <div className="flex justify-between">
                  <span className="text-neutral-400">Interested Service:</span>
                  <span className="font-semibold text-white">{submittedData.preferredService}</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Club Location:</span>
                <a 
                  href={gymConfig.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gym-red hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  title="Click to start turn-by-turn navigation"
                >
                  <span>Near BJP Office, Kukatpally</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-950/40 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Fast-Track on WhatsApp Now</span>
              </a>
              <button
                onClick={closeEnquiry}
                className="w-full py-2.5 text-xs font-medium text-neutral-400 hover:text-white transition"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gym-red/20 border border-gym-red/40 flex items-center justify-center text-gym-red">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white tracking-wide">
                  Join FitZone Club
                </h3>
                <p className="text-xs text-neutral-400">
                  Fill in your details for exclusive club pricing & free trial pass.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-gym-red">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Kumar"
                  className={`w-full px-4 py-2.5 bg-neutral-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 transition ${
                    errors.fullName 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-neutral-700 focus:border-gym-red focus:ring-gym-red/20'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Mobile Number <span className="text-gym-red">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-sm font-medium text-neutral-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    maxLength="10"
                    placeholder="9876543210"
                    className={`w-full pl-14 pr-4 py-2.5 bg-neutral-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 transition ${
                      errors.mobileNumber 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : 'border-neutral-700 focus:border-gym-red focus:ring-gym-red/20'
                    }`}
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.mobileNumber}</span>
                  </p>
                )}
              </div>

              {/* Preferred Plan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Preferred Membership
                  </label>
                  <select
                    name="preferredPlan"
                    value={formData.preferredPlan}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-gym-red focus:ring-2 focus:ring-gym-red/20 transition"
                  >
                    <option value="Monthly Plan">Monthly Plan (₹1,499)</option>
                    <option value="Quarterly Plan">Quarterly Plan (₹3,999)</option>
                    <option value="Yearly Plan">Yearly Plan (₹11,999) - Recommended</option>
                    <option value="Personal Training Only">Personal Training Only</option>
                    <option value="Undecided / Walk-in Tour">Undecided / Walk-in Tour</option>
                  </select>
                </div>

                {/* Preferred Service */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Focus Program (Optional)
                  </label>
                  <select
                    name="preferredService"
                    value={formData.preferredService}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-gym-red focus:ring-2 focus:ring-gym-red/20 transition"
                  >
                    <option value="">Any / General Inquiry</option>
                    <option value="Weight Training">Weight Training</option>
                    <option value="Cardio Training">Cardio Training</option>
                    <option value="Personal Training">Personal Training</option>
                    <option value="Weight Loss Programs">Weight Loss Programs</option>
                    <option value="Muscle Building">Muscle Building</option>
                    <option value="Strength & Conditioning">Strength & Conditioning</option>
                    <option value="General Fitness">General Fitness</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Special Goals or Questions (Optional)
                </label>
                <textarea
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g. Morning timings, personal trainer availability, or weight goal..."
                  className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gym-red focus:ring-2 focus:ring-gym-red/20 transition resize-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-4 bg-gym-red hover:bg-gym-redHover disabled:opacity-60 text-white rounded-xl font-heading font-bold uppercase tracking-wider shadow-red-glow transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Membership Enquiry</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-neutral-500">
                🔒 Your privacy is respected. FitZone never shares your contact details.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
