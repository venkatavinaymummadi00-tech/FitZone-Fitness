import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import { testimonialsData } from '../data/testimonials';
import { Star, MessageSquarePlus, CheckCircle, Send, X } from 'lucide-react';

export default function Reviews() {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewsList, setReviewsList] = useState(testimonialsData);
  const [userRating, setUserRating] = useState(5);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    role: 'Club Member',
    highlight: '',
    review: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.review.trim()) return;

    const newReview = {
      id: Date.now(),
      name: formData.name,
      location: formData.location || 'Kukatpally, Hyderabad',
      role: formData.role,
      rating: userRating,
      highlight: formData.highlight || 'Great experience at FitZone',
      review: formData.review,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      verified: true
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setShowReviewForm(false);
      setSubmitted(false);
      setFormData({ name: '', location: '', role: 'Club Member', highlight: '', review: '' });
    }, 1500);
  };

  return (
    <div className="bg-gym-dark text-white min-h-screen">
      {/* Header */}
      <div className="relative py-24 bg-gym-charcoal border-b border-neutral-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop"
            alt="FitZone Reviews"
            className="w-full h-full object-cover filter brightness-[0.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gym-charcoal via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-gym-red/20 text-gym-red border border-gym-red/30 mb-4">
            Member Feedback
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tight">
            MEMBER <span className="text-gym-red">REVIEWS</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Read authentic stories from trainees who made FitZone Kukatpally their second home and fitness sanctuary.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="text-lg font-heading font-bold text-white">4.9 / 5.0</span>
            <span className="text-xs text-neutral-400">• Over 200+ Member Ratings</span>
          </div>
        </div>
      </div>

      {/* Main Reviews Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-wide">
              LATEST EXPERIENCES
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Sample feedback showcasing community satisfaction and body transformation progress.
            </p>
          </div>

          <button
            onClick={() => setShowReviewForm(true)}
            className="px-6 py-3 bg-neutral-900 border border-neutral-700 hover:border-gym-red hover:bg-neutral-800 text-white rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition flex items-center gap-2 shrink-0 cursor-pointer animate-shimmer"
          >
            <MessageSquarePlus className="w-4 h-4 text-gym-red" />
            <span>Write a Member Review</span>
          </button>
        </div>

        {/* Modal for Writing a Review */}
        {showReviewForm && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="glass-panel border border-neutral-700/80 rounded-3xl max-w-md w-full p-7 text-white relative shadow-2xl">
              <button
                onClick={() => setShowReviewForm(false)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1 rounded-full hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-heading font-black text-white mb-1 uppercase tracking-wide">
                Share Your FitZone Experience
              </h3>
              <p className="text-xs text-neutral-400 mb-5">
                Let others know about the training atmosphere, coaching, and equipment near BJP Office Kukatpally.
              </p>

              {submitted ? (
                <div className="py-8 text-center text-emerald-400 space-y-2">
                  <CheckCircle className="w-12 h-12 mx-auto" />
                  <p className="font-heading text-lg font-bold">Review Added Successfully!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Your Rating</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setUserRating(star)}
                          className="p-1 focus:outline-none cursor-pointer"
                        >
                          <Star className={`w-6 h-6 ${star <= userRating ? 'fill-amber-400 text-amber-400' : 'text-neutral-700'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Harish Chandra"
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-gym-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Area / Locality</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Kukatpally, Hyderabad"
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-gym-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Highlight Headline</label>
                    <input
                      type="text"
                      value={formData.highlight}
                      onChange={(e) => setFormData({ ...formData, highlight: e.target.value })}
                      placeholder="e.g. Lost 8 kg in 3 months with Vikram's coaching"
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-gym-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Detailed Review *</label>
                    <textarea
                      required
                      rows="3"
                      value={formData.review}
                      onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                      placeholder="Share your thoughts on the trainers, equipment, and club vibe..."
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-gym-red resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex justify-end gap-2.5">
                    <button
                      type="button"
                      onClick={() => setShowReviewForm(false)}
                      className="px-4 py-2.5 text-xs font-heading font-bold uppercase text-neutral-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-gym-red hover:bg-gym-redHover text-white text-xs font-heading font-bold uppercase tracking-wider rounded-xl shadow-red-glow flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Post Review</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {reviewsList.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-16 p-4 glass-card rounded-2xl text-center text-xs text-neutral-400 max-w-xl mx-auto">
          ⭐ Note: Reviews displayed are sample testimonials for preview. Once verified Google reviews or customer survey results are received, simply update <span className="text-gym-red font-mono">src/data/testimonials.js</span>.
        </div>
      </section>
    </div>
  );
}
