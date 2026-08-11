import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Send,
  Navigation,
  Clock,
  Car
} from 'lucide-react';
import { BUSINESS_INFO } from '../types';
import { getWhatsAppLink, getCallLink } from '../data';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    pickup: '',
    destination: '',
    date: '',
    passengers: '1-4 Passengers',
    serviceType: 'Airport Pickup & Drop'
  });

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*New Ride Inquiry for Mahi Travels Mangalore*
Name: ${formState.name || 'Traveler'}
Service: ${formState.serviceType}
Pickup: ${formState.pickup || 'Mangalore'}
Destination: ${formState.destination || 'Not specified'}
Travel Date: ${formState.date || 'Flexible'}
Passengers: ${formState.passengers}`;

    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 max-w-full h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 max-w-full h-96 bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-xs font-semibold uppercase tracking-wider shadow-md">
            <Phone className="w-3.5 h-3.5" />
            <span>Easy Booking & Contact</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Poppins']">
            Contact Mahi Travels
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Reach out via Call or WhatsApp for instant ride quotes, airport pickups, outstation travel plans, or temple visits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Cards (Left 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Address Card */}
            <div className="p-5 sm:p-6 rounded-2xl glass-card border border-slate-800 space-y-3 shadow-xl">
              <div className="flex items-center gap-3 text-orange-400">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white font-['Poppins']">Office Location</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed pl-2 sm:pl-13 font-light">
                {BUSINESS_INFO.address.street}<br />
                {BUSINESS_INFO.address.area}<br />
                {BUSINESS_INFO.address.city} – {BUSINESS_INFO.address.pincode}<br />
                <span className="text-xs text-slate-400">Karnataka, India</span>
              </p>
              <div className="pl-2 sm:pl-13 pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-amber-300 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Phone Numbers Card */}
            <div className="p-5 sm:p-6 rounded-2xl glass-card border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 text-emerald-400">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-['Poppins']">Direct Phone Numbers</h3>
                  <p className="text-xs text-slate-400">Tap to call instantly</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-1">
                {BUSINESS_INFO.phones.map((phone, pIdx) => (
                  <a
                    key={pIdx}
                    href={getCallLink(phone)}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition-all group"
                  >
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-amber-300 font-mono">
                      📞 +91 {phone}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-orange-500/20 text-orange-400 font-medium">
                      Call Now
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp Direct Card */}
            <div className="p-5 sm:p-6 rounded-2xl glass-card border border-emerald-500/30 bg-emerald-950/20 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-['Poppins']">WhatsApp Chat</h3>
                  <p className="text-xs text-slate-300">Fast response for ride inquiries</p>
                </div>
              </div>

              <a
                href={getWhatsAppLink('Hello Mahi Travels, I need a taxi in Mangalore.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp (+91 {BUSINESS_INFO.primaryWhatsApp})</span>
              </a>
            </div>

            {/* Social Links Card */}
            <div className="p-5 sm:p-6 rounded-2xl glass-card border border-slate-800 space-y-3 shadow-xl">
              <h3 className="text-sm font-bold text-slate-300 font-['Poppins'] uppercase tracking-wider">Social Channels</h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </a>
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-400" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Quick Inquiry Form & Embedded Map (Right 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Direct Ride Inquiry Generator */}
            <div className="p-5 sm:p-8 rounded-3xl glass-card border border-slate-800 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-['Poppins']">Quick WhatsApp Booking Form</h3>
                  <p className="text-xs text-slate-400 mt-1">Fill this brief form to instantly send formatted trip details to Mahi Travels</p>
                </div>
                <Car className="w-6 h-6 text-orange-400 flex-shrink-0" />
              </div>

              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Service Required</label>
                    <select
                      value={formState.serviceType}
                      onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500"
                    >
                      <option value="Airport Pickup & Drop">Airport Pickup & Drop</option>
                      <option value="Local Taxi Service">Local Taxi Service</option>
                      <option value="Outstation Trips">Outstation Trips</option>
                      <option value="Temple Visits">Temple Visits</option>
                      <option value="Family Tours">Family Tours</option>
                      <option value="Corporate Travel">Corporate Travel</option>
                      <option value="Custom Travel Plan">Custom Travel Plan</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Pickup Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Katipalla / Mangalore Airport / Hotel"
                      value={formState.pickup}
                      onChange={(e) => setFormState({ ...formState, pickup: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Destination / Places</label>
                    <input
                      type="text"
                      placeholder="e.g. Udupi / Dharmasthala / Bangalore"
                      value={formState.destination}
                      onChange={(e) => setFormState({ ...formState, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Travel Date & Time</label>
                    <input
                      type="text"
                      placeholder="e.g. Tomorrow 8:00 AM"
                      value={formState.date}
                      onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Passenger Count</label>
                    <select
                      value={formState.passengers}
                      onChange={(e) => setFormState({ ...formState, passengers: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500"
                    >
                      <option value="1-4 Passengers">1 - 4 Passengers</option>
                      <option value="5-7 Passengers">5 - 7 Passengers</option>
                      <option value="Family Group">Family Group</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm shadow-xl shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Booking Details to WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Embedded Google Map (Katipalla, Mangalore) */}
            <div className="rounded-3xl overflow-hidden glass-card border border-slate-800 h-56 sm:h-80 relative shadow-2xl">
              <iframe
                title="Mahi Travels Mangalore Location Map"
                src="https://maps.google.com/maps?q=Near+Katipalla+Sabha+Bhavana,+Katipalla,+Mangalore,+Karnataka+575030&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700 text-xs text-slate-200 flex items-center gap-1.5 shadow-md">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>Katipalla, Mangalore – 575030</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
