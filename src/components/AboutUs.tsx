import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, Sparkles, Clock, HeartHandshake, MapPin, Award, CheckCircle2, Car, Compass, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

export const AboutUs: React.FC = () => {
  const highlights = [
    { title: 'Personally Managed', desc: 'Direct owner care with complete personal accountability on every trip.' },
    { title: 'Safe Driving', desc: 'Defensive, steady driving with strict highway safety and smooth braking.' },
    { title: 'Affordable Service', desc: 'Fair, transparent rates with maximum value and zero hidden costs.' },
    { title: 'Clean & Sanitized Vehicle', desc: 'Fresh, spotless, and regularly serviced car for hygiene and peace of mind.' },
    { title: 'Friendly Customer Service', desc: 'Courteous host focused on making your travel experience stress-free.' },
    { title: 'Punctual Pickups', desc: 'Always early at your doorstep or airport arrival terminal.' },
    { title: 'Comfortable Journeys', desc: 'Relaxed AC rides with comfortable seating and smooth suspension.' },
    { title: 'Local Travel Expertise', desc: 'In-depth knowledge of Mangalore, shortcuts, traffic, and best food spots.' },
  ];

  return (
    <section id="about" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background ambient light effects with smooth animations */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.05, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none"
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-md">
            <UserCheck className="w-4 h-4 text-orange-400" />
            <span>About Mahi Travels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Poppins']">
            Your Trusted Independent Travel Partner in Mangalore
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Mahi Travels is a personally managed travel service dedicated to delivering safe, comfortable, and punctual journeys across Mangalore and beyond.
          </p>
        </motion.div>

        {/* Content Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Authentic Brand Showcase Card (No fake person photo background) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-4 border border-slate-700/80 shadow-2xl group hover:border-orange-500/50 transition-all duration-500">
              
              {/* Card Frame with Scenic Highway Backdrop & Glowing Crest */}
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-black overflow-hidden flex flex-col items-center justify-center p-6 text-center border border-slate-800">
                
                {/* Real Scenic Coastal Highway Image Backdrop (No Fake Man Photo!) */}
                <img
                  src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=1000"
                  alt="Mangalore Scenic Coastal Highway - Mahi Travels Service Route"
                  className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity group-hover:scale-110 transition-transform duration-1000"
                />

                {/* Dark Vignette and Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />

                {/* Content Overlay */}
                <div className="relative z-10 space-y-5 flex flex-col items-center">
                  
                  {/* Glowing Animated Crest Badge */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    className="w-24 h-24 rounded-full bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-400 p-1 shadow-2xl shadow-orange-500/30 relative"
                  >
                    <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center border border-slate-800">
                      <Car className="w-10 h-10 text-amber-400" />
                    </div>
                    {/* Glowing pulse ring */}
                    <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping -z-10" />
                  </motion.div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-extrabold text-white tracking-wide font-['Poppins']">
                      Mahi Travels Mangalore
                    </h3>
                    <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 uppercase tracking-widest">
                      Owner-Operated • Independent Service
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 italic max-w-xs leading-relaxed font-light px-2 bg-slate-900/60 py-2.5 rounded-xl border border-slate-800/80 backdrop-blur-md">
                    "Every journey with Mahi Travels is personally taken care of with extreme attention to your comfort, schedule, and safety."
                  </p>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-200 shadow-md">
                    <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span>Based at Yeyyady, Mangalore</span>
                  </div>

                  {/* Verification Features Badges */}
                  <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                      <Navigation className="w-3 h-3 text-emerald-400" />
                      GPS Tracked
                    </span>
                    <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                      <Clock className="w-3 h-3 text-amber-400" />
                      Punctual Service
                    </span>
                  </div>
                </div>

                {/* Decorative Corner Badge */}
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-orange-500 to-amber-600 px-3.5 py-1.5 rounded-xl text-white font-bold text-xs shadow-xl flex items-center gap-1.5 border border-amber-400/30">
                  <Award className="w-4 h-4 text-amber-200" />
                  <span>100% Personal Service</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Business Details & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Poppins']">
                Why Travelers Trust Mahi Travels
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Unlike impersonal app aggregators or large agencies, Mahi Travels gives you direct access to an independent, professional driver. You know who is driving you, what vehicle to expect, and can rest assured knowing your safety and time come first.
              </p>
            </div>

            {/* Highlights Grid with Hover Animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  whileHover={{ scale: 1.02, translateX: 4 }}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-orange-500/40 hover:bg-slate-900/90 transition-all duration-300 flex items-start gap-3 group shadow-md"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:text-amber-300 transition-all" />
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Address Banner */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-4 sm:p-5 rounded-2xl bg-emerald-950/30 border border-emerald-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-emerald-200 backdrop-blur-sm shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <span><strong>Office Address:</strong> {BUSINESS_INFO.address.full}</span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md shadow-emerald-950/40 flex-shrink-0 hover:scale-105"
              >
                Get Directions
              </a>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
