import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, Instagram, ShieldCheck, MapPin, Star, Play, Award, Sparkles, CheckCircle2, Clock, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../types';
import { getWhatsAppLink, getCallLink } from '../data';

interface HeroProps {
  onOpenBookingModal: () => void;
  onOpenIntro?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onOpenIntro }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Image with Dynamic Parallax-style Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: [1.1, 1.03, 1.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000"
          alt="Mangalore Road Trip & Coastal Travel - Mahi Travels"
          className="w-full h-full object-cover object-center filter brightness-90"
          referrerPolicy="no-referrer"
        />
        
        {/* Layered cinematic dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/70 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0F172A] to-transparent" />
        
        {/* Animated Background Glowing Orbs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[140px] pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[160px] pointer-events-none"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs font-bold backdrop-blur-md shadow-xl max-w-full"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400 animate-pulse flex-shrink-0" />
              <span className="truncate">Trusted Independent Travel Service in Mangalore</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-['Poppins']"
            >
              Travel Comfortably, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 drop-shadow-sm">
                Travel Safely
              </span>{' '}
              with Mahi Travels
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light"
            >
              Reliable Taxi & Travel Services from Mangalore for Airport Transfers, Local Taxi, Outstation Trips, Family Tours, Temple Visits, Business Travel, and Custom Travel Packages.
            </motion.p>

            {/* Key Quick Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2 max-w-xl text-xs font-medium text-slate-300"
            >
              <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-2 bg-slate-900/80 p-2.5 sm:p-3 rounded-xl border border-slate-800 backdrop-blur-md shadow-md">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>Mangalore & Outstation</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-2 bg-slate-900/80 p-2.5 sm:p-3 rounded-xl border border-slate-800 backdrop-blur-md shadow-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Safe Driving</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-2 bg-slate-900/80 p-2.5 sm:p-3 rounded-xl border border-slate-800 backdrop-blur-md shadow-md col-span-2 sm:col-span-1">
                <Star className="w-4 h-4 text-amber-400 flex-shrink-0 fill-current" />
                <span>Punctual Pickups</span>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4"
            >
              {/* Watch Intro Button */}
              {onOpenIntro && (
                <button
                  onClick={onOpenIntro}
                  className="flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-orange-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer group border border-amber-300/30"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white fill-current ml-0.5" />
                  </div>
                  <span>Watch Full Screen Intro</span>
                </button>
              )}

              {/* Book on WhatsApp */}
              <a
                href={getWhatsAppLink('Hi Mahi Travels, I would like to book a trip or inquire about taxi availability.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/50 transition-all hover:scale-105 active:scale-95 group"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:rotate-12 transition-transform" />
                <span>Book on WhatsApp</span>
              </a>

              {/* Call Now */}
              <a
                href={getCallLink()}
                className="flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-bold text-xs sm:text-sm border border-slate-700/80 shadow-xl transition-all hover:scale-105 active:scale-95 group"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                <span>Call Now</span>
              </a>
            </motion.div>

            {/* Contact Bar Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pt-4 sm:pt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-400 border-t border-slate-800/80 max-w-md"
            >
              <span>Based in Katipalla, Mangalore</span>
              <span className="h-3 w-[1px] bg-slate-700 hidden sm:inline" />
              <span>Direct Phone & WhatsApp Booking</span>
            </motion.div>

          </div>

          {/* Right Hero Column: Animated Highlights Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-6 border border-slate-700/70 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white font-['Poppins']">Mahi Travels</h3>
                    <p className="text-xs text-orange-400 font-medium">Mangalore Taxi Service</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-amber-300 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                  <span>5.0 Rating</span>
                </div>
              </div>

              {/* Floating Feature Pills */}
              <div className="space-y-3">
                <motion.div whileHover={{ scale: 1.02 }} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold text-slate-200">Airport & Outstation Pickups</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase bg-emerald-950/60 px-2 py-0.5 rounded font-mono">Punctual</span>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-semibold text-slate-200">Spotless Clean Vehicles</span>
                  </div>
                  <span className="text-[10px] text-amber-400 font-bold uppercase bg-amber-950/60 px-2 py-0.5 rounded">Sanitized</span>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-orange-400" />
                    <span className="text-xs font-semibold text-slate-200">No Hidden Costs</span>
                  </div>
                  <span className="text-[10px] text-orange-400 font-bold uppercase bg-orange-950/60 px-2 py-0.5 rounded">Transparent</span>
                </motion.div>
              </div>

              {/* Quick Action Bar inside Hero Box */}
              <button
                onClick={onOpenBookingModal}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Quick Booking Inquiry
              </button>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
        <a href="#about" className="text-xs text-slate-400 hover:text-orange-400 flex flex-col items-center gap-1">
          <span className="text-[10px] tracking-wider uppercase">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-orange-400 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
