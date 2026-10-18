import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { gymConfig } from '../config/gymConfig';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  // Official wa.me URL with pre-filled encoded message
  const whatsappUrl = `https://wa.me/${gymConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    gymConfig.whatsappMessages.default
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {/* Friendly Tooltip / Chat Prompt */}
      {showTooltip && (
        <div className="glass-panel text-white text-xs px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-bounce border border-neutral-700/80">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <div>
            <p className="font-semibold text-white">Chat with Kukatpally Desk</p>
            <p className="text-[10px] text-neutral-400">Replies usually within minutes</p>
          </div>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white ml-2 p-1 rounded-full hover:bg-neutral-800"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact FitZone on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/80 hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-pulse pointer-events-none"></span>
        <MessageCircle className="w-7 h-7 fill-white" />
        
        {/* Hover label */}
        <span className="absolute right-16 bg-neutral-900 border border-neutral-800 text-white text-xs px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          WhatsApp: {gymConfig.contact.phoneDisplay}
        </span>
      </a>
    </div>
  );
}
