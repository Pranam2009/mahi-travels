import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Sparkles,
  Wallet,
  Clock,
  HeartHandshake,
  Smile,
  Award,
  PhoneCall,
  CheckCircle,
  ThumbsUp,
  MapPin,
  Car
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';
import { FeatureItem } from '../types';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
  Wallet: <Wallet className="w-6 h-6 text-blue-400" />,
  Clock: <Clock className="w-6 h-6 text-orange-400" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-rose-400" />,
  Smile: <Smile className="w-6 h-6 text-yellow-400" />,
  Award: <Award className="w-6 h-6 text-purple-400" />,
  PhoneCall: <PhoneCall className="w-6 h-6 text-teal-400" />
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#0F172A] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-0 w-96 h-96 bg-orange-600/15 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.05, 0.15] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-xs font-semibold uppercase tracking-wider shadow-md">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>The Mahi Travels Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Poppins']">
            Why Choose Mahi Travels
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            We prioritize safety, comfort, and punctuality to ensure every passenger enjoys a smooth and restful journey.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item: FeatureItem, index: number) => {
            const icon = iconMap[item.iconName] || <CheckCircle className="w-6 h-6 text-orange-400" />;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 sm:p-7 rounded-2xl glass-card border border-slate-800 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-950/20 transition-all duration-300 space-y-4 group relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-800 transition-all shadow-md">
                  {icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-['Poppins']">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl text-center"
        >
          <div className="space-y-1">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              500+
            </h4>
            <p className="text-xs text-slate-400 font-medium">Successful Trips</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              100%
            </h4>
            <p className="text-xs text-slate-400 font-medium">On-Time Record</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              5.0 ★
            </h4>
            <p className="text-xs text-slate-400 font-medium">Customer Rating</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
              100%
            </h4>
            <p className="text-xs text-slate-400 font-medium">Direct Booking</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
