import React, { useState } from 'react';
import { Calculator, ArrowRight, Activity, Sparkles, CheckCircle2 } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

export default function BmiCalculator() {
  const [height, setHeight] = useState('175');
  const [weight, setWeight] = useState('72');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [recommendedService, setRecommendedService] = useState('');
  const { openEnquiry } = useEnquiry();

  const calculateBmi = (e) => {
    e?.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (h > 50 && w > 20) {
      const heightInMeters = h / 100;
      const bmiValue = (w / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setCategory('Underweight');
        setRecommendedService('Muscle Building');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Healthy / Ideal Weight');
        setRecommendedService('Strength & Conditioning');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Overweight');
        setRecommendedService('Weight Loss Programs');
      } else {
        setCategory('Obese');
        setRecommendedService('Personal Training');
      }
    }
  };

  return (
    <div className="bg-gym-charcoal border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Red ambient background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gym-red/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Col: Explainer & Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gym-red/15 text-gym-red border border-gym-red/30 mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Free Body Fitness Assessment</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight">
              CALCULATE YOUR <span className="text-gym-red">BMI SCORE</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed">
              Find out your Body Mass Index in seconds and receive an instant workout and nutrition recommendation tailored to your body type.
            </p>
          </div>

          <form onSubmit={calculateBmi} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Height (cm)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="100"
                    max="250"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 175"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700/80 rounded-xl text-white font-medium text-sm focus:outline-none focus:border-gym-red focus:ring-1 focus:ring-gym-red"
                  />
                  <span className="absolute right-4 top-3.5 text-xs text-neutral-500 font-medium">cm</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Weight (kg)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="30"
                    max="220"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 70"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700/80 rounded-xl text-white font-medium text-sm focus:outline-none focus:border-gym-red focus:ring-1 focus:ring-gym-red"
                  />
                  <span className="absolute right-4 top-3.5 text-xs text-neutral-500 font-medium">kg</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              onClick={calculateBmi}
              className="w-full sm:w-auto px-8 py-3.5 bg-gym-red hover:bg-gym-redHover text-white font-heading font-bold uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow-red-glow transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Activity className="w-4 h-4" />
              <span>Calculate My BMI</span>
            </button>
          </form>
        </div>

        {/* Right Col: Instant Result Card */}
        <div className="lg:col-span-5">
          <div className="glass-card rounded-2xl p-6 sm:p-7 border border-neutral-700/60 relative">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 block mb-1">
              Assessment Summary
            </span>

            {bmi ? (
              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-heading font-black text-white">
                    {bmi}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase font-bold tracking-wider text-neutral-400">BMI Index</span>
                    <span className={`text-sm font-semibold ${
                      category === 'Healthy / Ideal Weight' ? 'text-emerald-400' : 'text-gym-red'
                    }`}>
                      {category}
                    </span>
                  </div>
                </div>

                {/* Visual Scale Indicator */}
                <div className="w-full bg-neutral-900 rounded-full h-2.5 overflow-hidden flex">
                  <div className={`h-full ${parseFloat(bmi) < 18.5 ? 'bg-amber-400' : 'bg-neutral-800'} w-1/4`} title="Underweight"></div>
                  <div className={`h-full ${parseFloat(bmi) >= 18.5 && parseFloat(bmi) < 25 ? 'bg-emerald-500' : 'bg-neutral-800'} w-1/4`} title="Normal"></div>
                  <div className={`h-full ${parseFloat(bmi) >= 25 && parseFloat(bmi) < 30 ? 'bg-amber-500' : 'bg-neutral-800'} w-1/4`} title="Overweight"></div>
                  <div className={`h-full ${parseFloat(bmi) >= 30 ? 'bg-red-600' : 'bg-neutral-800'} w-1/4`} title="Obese"></div>
                </div>

                {/* Recommendation Box */}
                <div className="p-4 bg-neutral-900/90 rounded-xl border border-neutral-800 space-y-1.5">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-gym-red flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Recommended Program
                  </span>
                  <p className="text-sm font-heading font-bold text-white">
                    {recommendedService}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Designed to optimize your body composition, build functional strength, and elevate stamina safely.
                  </p>
                </div>

                <button
                  onClick={() => openEnquiry({ 
                    service: recommendedService,
                    message: `My calculated BMI is ${bmi} (${category}). I would like to get started with ${recommendedService}.`
                  })}
                  className="w-full py-3 bg-neutral-900 hover:bg-gym-red border border-neutral-700 hover:border-gym-red text-white text-xs font-heading font-bold uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 group"
                >
                  <span>Enquire For {recommendedService}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ) : (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-neutral-500">
                  <Calculator className="w-6 h-6" />
                </div>
                <p className="text-sm text-neutral-300 font-medium">
                  Enter your height & weight
                </p>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                  Click "Calculate My BMI" to see where you stand on the fitness scale and discover your custom training roadmap.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
