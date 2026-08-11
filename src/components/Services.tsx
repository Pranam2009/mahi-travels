import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  PlaneTakeoff,
  Car,
  MapPin,
  Users,
  Building2,
  Briefcase,
  Compass,
  Palmtree,
  Sliders,
  MessageCircle,
  ChevronRight,
  Sparkles,
  Filter
} from 'lucide-react';
import { SERVICES_LIST, getWhatsAppLink } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenBookingModal: (serviceTitle?: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  PlaneTakeoff: <PlaneTakeoff className="w-6 h-6 text-amber-400" />,
  Car: <Car className="w-6 h-6 text-orange-400" />,
  MapPin: <MapPin className="w-6 h-6 text-emerald-400" />,
  Users: <Users className="w-6 h-6 text-blue-400" />,
  Building2: <Building2 className="w-6 h-6 text-yellow-400" />,
  Briefcase: <Briefcase className="w-6 h-6 text-indigo-400" />,
  Compass: <Compass className="w-6 h-6 text-rose-400" />,
  Palmtree: <Palmtree className="w-6 h-6 text-teal-400" />,
  Sliders: <Sliders className="w-6 h-6 text-violet-400" />
};

export const Services: React.FC<ServicesProps> = ({ onOpenBookingModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Services' },
    { id: 'airport', label: 'Airport' },
    { id: 'outstation', label: 'Outstation' },
    { id: 'local', label: 'Local & Sightseeing' },
  ];

  const filteredServices = SERVICES_LIST.filter((service) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'airport') return service.id.includes('airport');
    if (activeFilter === 'outstation') return service.id.includes('outstation') || service.id.includes('getaways');
    if (activeFilter === 'local') return service.id.includes('local') || service.id.includes('temple') || service.id.includes('tourist');
    return true;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-900/90 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] max-w-full h-[800px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Travel Offerings</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Poppins']">
            Our Travel Services
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Whether you need a quick airport drop, a sacred temple pilgrimage, or a multi-day outstation road trip, Mahi Travels provides clean vehicles and professional driving.
          </p>
        </motion.div>

        {/* Interactive Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12"
        >
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shadow-md ${
                activeFilter === opt.id
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-orange-500/25 scale-105'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </motion.div>

        {/* Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service: ServiceItem, index: number) => {
            const icon = iconMap[service.iconName] || <Car className="w-6 h-6 text-orange-400" />;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="rounded-2xl glass-card p-5 sm:p-6 border border-slate-800 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-950/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Card Glow on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/15 transition-colors pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  
                  {/* Top Icon & Badge Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-800 transition-all shadow-md">
                      {icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase bg-slate-800/70 px-2.5 py-1 rounded-full border border-slate-700/60">
                      Mahi Travels
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-['Poppins']">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Popular Route / Feature Tags */}
                  {service.popularPlaces && (
                    <div className="pt-2">
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Highlights / Routes:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.popularPlaces.map((place, pIdx) => (
                          <span
                            key={pIdx}
                            className="text-[11px] bg-slate-800/90 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60 font-medium"
                          >
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom Card Action */}
                <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-slate-800/80 flex items-center justify-between gap-3 relative z-10">
                  <button
                    onClick={() => onOpenBookingModal(service.title)}
                    className="text-xs font-bold text-orange-400 hover:text-amber-300 flex items-center gap-1 group/btn cursor-pointer transition-colors"
                  >
                    <span>Inquire Details</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={getWhatsAppLink(`Hi Mahi Travels, I would like to inquire about booking: ${service.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-semibold transition-all hover:scale-105 shadow-md shadow-emerald-950/30"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Custom Package CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden text-center md:text-left"
        >
          <div className="space-y-2 relative z-10">
            <h3 className="text-lg sm:text-2xl font-bold text-white font-['Poppins']">Need a Custom Travel Route or Multi-Day Tour?</h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light">Send us your locations, dates, and passengers. We will organize the smoothest journey for you.</p>
          </div>
          <button
            onClick={() => onOpenBookingModal('Custom Itinerary Inquiry')}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-orange-500/25 whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95 transition-all relative z-10 border border-amber-300/30"
          >
            Request Custom Plan
          </button>
        </motion.div>

      </div>
    </section>
  );
};
