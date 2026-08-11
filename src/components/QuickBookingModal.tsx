import React, { useState } from 'react';
import { X, MessageCircle, Phone, Navigation, Car, Calendar, MapPin, Users } from 'lucide-react';
import { BUSINESS_INFO } from '../types';
import { getWhatsAppLink, getCallLink } from '../data';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceTitle?: string;
}

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({
  isOpen,
  onClose,
  selectedServiceTitle
}) => {
  const [service, setService] = useState(selectedServiceTitle || 'Airport Pickup & Drop');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  if (!isOpen) return null;

  const handleWhatsAppBooking = () => {
    const text = `*Booking Inquiry - Mahi Travels Mangalore*
Service: ${service}
Pickup Location: ${pickup || 'Mangalore'}
Destination: ${destination || 'Not specified'}
Date & Time: ${date || 'Immediate / Flexible'}`;

    window.open(getWhatsAppLink(text), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl glass-card bg-slate-900 border border-slate-700 p-5 sm:p-8 shadow-2xl space-y-5 sm:space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-wider">
            <Car className="w-3.5 h-3.5" />
            <span>Mahi Travels Instant Booking</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Poppins']">
            Book Your Ride
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm">
            Instant booking via WhatsApp or Call with Mahi Travels
          </p>
        </div>

        {/* Input Fields */}
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Service Type</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Pickup Location</label>
              <input
                type="text"
                placeholder="e.g. Katipalla / Mangalore Airport"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Destination</label>
              <input
                type="text"
                placeholder="e.g. Udupi / Dharmasthala"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Date & Time</label>
            <input
              type="text"
              placeholder="e.g. Today 4:00 PM / Tomorrow 9:00 AM"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <button
            onClick={handleWhatsAppBooking}
            className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book via WhatsApp Now</span>
          </button>

          <a
            href={getCallLink()}
            className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-xl shadow-orange-950/50 flex items-center justify-center gap-2 transition-all text-center"
          >
            <Phone className="w-4 h-4" />
            <span>Call Directly (+91 {BUSINESS_INFO.phones[0]})</span>
          </a>
        </div>

        <p className="text-[11px] text-center text-slate-400">
          Fast response guaranteed • Safe & comfortable vehicles
        </p>

      </div>
    </div>
  );
};
