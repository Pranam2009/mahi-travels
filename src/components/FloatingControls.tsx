import React from 'react';
import { Phone, MessageCircle, Navigation, Play } from 'lucide-react';
import { BUSINESS_INFO } from '../types';
import { getWhatsAppLink, getCallLink } from '../data';

interface FloatingControlsProps {
  onOpenIntro?: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenIntro }) => {
  return (
    <>
      {/* Desktop Floating Action Buttons (Bottom Right) */}
      <div className="hidden md:flex flex-col gap-3 fixed bottom-6 right-6 z-40">
        
        {/* Floating Play Intro Button */}
        {onOpenIntro && (
          <button
            onClick={onOpenIntro}
            className="w-14 h-14 rounded-full bg-slate-900/90 border border-orange-500/50 text-orange-400 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform group relative cursor-pointer backdrop-blur-md"
            aria-label="Play Mahi Travels Logo Reveal Intro"
          >
            <Play className="w-6 h-6 fill-current ml-0.5 group-hover:scale-110 transition-transform" />
            
            {/* Tooltip */}
            <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-100 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 shadow-lg pointer-events-none">
              Watch Logo Intro 🎬
            </span>
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={getCallLink()}
          className="call-pulse w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform group relative"
          aria-label="Call Mahi Travels"
        >
          <Phone className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
          
          {/* Tooltip */}
          <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-100 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 shadow-lg pointer-events-none">
            Call: +91 {BUSINESS_INFO.phones[0]}
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={getWhatsAppLink('Hello Mahi Travels, I want to book a trip or inquire about taxi availability.')}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-pulse w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform group relative"
          aria-label="Chat on WhatsApp with Mahi Travels"
        >
          <MessageCircle className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
          
          {/* Tooltip */}
          <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-100 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 shadow-lg pointer-events-none">
            WhatsApp Inquiry
          </span>
        </a>

      </div>

      {/* Sticky Mobile Bottom Contact Bar (3 Fixed Equal Buttons) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-nav border-t border-slate-800 px-3 py-2.5 shadow-2xl">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          
          {/* 📞 Call */}
          <a
            href={getCallLink()}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all active:scale-95 shadow-md"
          >
            <Phone className="w-4 h-4 mb-0.5" />
            <span>Call</span>
          </a>

          {/* 💬 WhatsApp */}
          <a
            href={getWhatsAppLink('Hello Mahi Travels, I am contacting you from your mobile website.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all active:scale-95 shadow-md"
          >
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span>WhatsApp</span>
          </a>

          {/* 📍 Directions */}
          <a
            href={BUSINESS_INFO.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 transition-all active:scale-95 shadow-md"
          >
            <Navigation className="w-4 h-4 mb-0.5 text-amber-400" />
            <span>Directions</span>
          </a>

        </div>
      </div>
    </>
  );
};
