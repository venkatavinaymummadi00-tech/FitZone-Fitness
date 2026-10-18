import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, CheckCircle2, AlertCircle, Navigation, Copy, Check } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { gymConfig } from '../config/gymConfig';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(gymConfig.location.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    
    const cleanedMobile = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(cleanedMobile)) {
      errs.phone = 'Enter valid 10-digit Indian mobile number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }

    if (!formData.message.trim()) errs.message = 'Please enter your message';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <div className="bg-gym-dark text-white min-h-screen">
      {/* Header */}
      <div className="relative py-24 bg-gym-charcoal border-b border-neutral-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop"
            alt="FitZone Contact & Location"
            className="w-full h-full object-cover filter brightness-[0.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gym-charcoal via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-gym-red/20 text-gym-red border border-gym-red/30 mb-4">
            Visit Or Call Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tight">
            CONTACT <span className="text-gym-red">FITZONE</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Conveniently located near BJP Office, Kukatpally, Hyderabad. Drop in for a facility tour or get in touch with our team directly.
          </p>
        </div>
      </div>

      {/* Main Grid: Contact Cards + Form */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gym-red block mb-1">
                Kukatpally Branch
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-wide">
                GET IN TOUCH
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We're always here to answer questions regarding memberships, training batches, personal training slots, and free trial passes.
              </p>
            </div>

            {/* Address Card */}
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-gym-red/10 border border-gym-red/30 text-gym-red flex items-center justify-center shrink-0 mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">Gym Location</h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {gymConfig.location.fullAddress}
                </p>
                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <a
                    href={gymConfig.location.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gym-red hover:bg-gym-redHover text-white rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition shadow-red-glow"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Start Turn-by-Turn GPS Navigation</span>
                  </a>
                  <button
                    onClick={copyAddress}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-900 border border-neutral-700/80 rounded-lg text-xs text-neutral-300 hover:text-white transition"
                    title="Copy full address"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Address'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-gym-red/10 border border-gym-red/30 text-gym-red flex items-center justify-center shrink-0 mt-1">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">Phone & WhatsApp</h4>
                <p className="text-xs sm:text-sm text-neutral-300">
                  Calling: <a href={`tel:${gymConfig.contact.phoneTel}`} className="text-white hover:text-gym-red font-semibold">{gymConfig.contact.phoneDisplay}</a>
                </p>
                <p className="text-xs sm:text-sm text-neutral-300">
                  WhatsApp: <a href={`https://wa.me/${gymConfig.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-semibold">Direct Chat Support</a>
                </p>
                <p className="text-[11px] text-neutral-500 pt-0.5">
                  Available Mon-Sat: 5:30 AM – 10:30 PM
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-gym-red/10 border border-gym-red/30 text-gym-red flex items-center justify-center shrink-0 mt-1">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">Email Inquiries</h4>
                <a href={`mailto:${gymConfig.contact.email}`} className="text-xs sm:text-sm text-neutral-300 hover:text-gym-red block">
                  {gymConfig.contact.email}
                </a>
                <p className="text-[11px] text-neutral-500">
                  General inquiries, corporate packages, and feedback
                </p>
              </div>
            </div>

            {/* Hours Schedule */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3 text-gym-red">
                <Clock className="w-4 h-4" />
                <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">Operating Hours</h4>
              </div>
              <div className="space-y-2 text-xs">
                {gymConfig.hours.schedule.map((slot, i) => (
                  <div key={i} className="flex justify-between pb-1.5 border-b border-neutral-800/80 last:border-0">
                    <span className="text-neutral-400">{slot.days}</span>
                    <span className="text-white font-medium">{slot.timing}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-7 sm:p-9 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gym-red block mb-1">
                Send a Direct Message
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-wide mb-2">
                HOW CAN WE HELP YOU?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
                Leave your details below. Our Kukatpally club manager will reach out within working hours.
              </p>

              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. We have received your inquiry and will contact you at <span className="text-gym-red font-medium">{formData.phone}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 bg-neutral-900 border border-neutral-700 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white rounded-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh"
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700/80 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gym-red focus:ring-1 focus:ring-gym-red"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Indian Mobile Number *
                      </label>
                      <input
                        type="tel"
                        maxLength="10"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="9876543210"
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700/80 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gym-red focus:ring-1 focus:ring-gym-red"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700/80 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gym-red focus:ring-1 focus:ring-gym-red"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-gym-red"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Membership Pricing">Membership Pricing</option>
                        <option value="Personal Training Consultation">Personal Training Consultation</option>
                        <option value="Free Trial Walk-in">Free Trial Walk-in</option>
                        <option value="Corporate Fitness Plans">Corporate Fitness Plans</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you're looking for, preferred workout times, or fitness goals..."
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700/80 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gym-red focus:ring-1 focus:ring-gym-red resize-none"
                    ></textarea>
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 px-6 bg-gym-red hover:bg-gym-redHover text-white font-heading font-bold uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow-red-glow transition flex items-center justify-center gap-2 cursor-pointer animate-shimmer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to FitZone</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Embedded Google Maps Location */}
        <div className="mt-16 glass-card rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gym-red block mb-1">
                Find Us on Map
              </span>
              <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wide">
                FITZONE FITNESS CLUB LOCATION
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                Near BJP Office, Kukatpally, Hyderabad, Telangana 500072
              </p>
            </div>
            <a
              href={gymConfig.location.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-gym-red hover:bg-gym-redHover text-white text-xs font-heading font-bold uppercase tracking-wider rounded-xl transition flex items-center gap-2 shrink-0 self-start sm:self-auto shadow-red-glow animate-shimmer"
            >
              <Navigation className="w-4 h-4" />
              <span>Start GPS Navigation to Gym</span>
            </a>
          </div>

          {/* Responsive Map Embed */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 relative">
            <iframe
              title="FitZone Fitness Club Kukatpally Location Map"
              src={gymConfig.location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
