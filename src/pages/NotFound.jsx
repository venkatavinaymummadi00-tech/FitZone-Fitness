import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowLeft, Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gym-dark text-white px-4 py-16">
      <div className="max-w-lg w-full text-center">
        {/* 404 Visual Icon */}
        <div className="w-20 h-20 rounded-2xl bg-gym-red/10 border border-gym-red/30 text-gym-red flex items-center justify-center mx-auto mb-6 shadow-red-glow">
          <Dumbbell className="w-10 h-10 transform -rotate-45" />
        </div>

        <h1 className="text-7xl sm:text-8xl font-heading font-black text-white tracking-wider">
          4<span className="text-gym-red">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-2">
          PAGE NOT FOUND
        </h2>

        <p className="mt-3 text-sm text-neutral-400 max-w-sm mx-auto leading-relaxed">
          Looks like this rep didn't count. The page you are looking for has been moved or does not exist.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-gym-red hover:bg-gym-redHover text-white font-heading font-bold uppercase tracking-wider text-xs rounded-xl shadow-red-glow transition flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-6 py-3 bg-neutral-900 border border-neutral-700 hover:border-neutral-600 text-neutral-300 hover:text-white font-heading font-semibold uppercase tracking-wider text-xs rounded-xl transition flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Programs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
