import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowUpRight, Facebook, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 via-slate-950 to-[#0F172A] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl glass-card border border-pink-500/20 shadow-2xl relative overflow-hidden space-y-6"
        >
          {/* Ambient background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center shadow-lg shadow-rose-500/25">
            <Instagram className="w-8 h-8 text-white" />
          </div>

          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Poppins']">
              Connect with Mahi Travels on Social Media
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Follow our official Instagram and Facebook pages for travel updates, customer announcements, coastal road insights, and direct messaging support.
            </p>
          </div>

          {/* Social Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            
            {/* Instagram Button */}
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:from-amber-600 hover:via-rose-600 hover:to-purple-700 text-white font-bold text-sm shadow-xl shadow-rose-500/25 hover:scale-105 active:scale-95 transition-all"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow on Instagram</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>

            {/* Facebook Button */}
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all"
            >
              <Facebook className="w-5 h-5" />
              <span>Visit Facebook Page</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>

          </div>

          <div className="pt-2 text-xs text-slate-400">
            <span>@mahitravelsmangalore • Official Independent Account</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
