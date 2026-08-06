import React from 'react';
import { Car, Phone, MessageCircle, MapPin, Instagram, Facebook, Globe, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../types';
import { getWhatsAppLink, getCallLink } from '../data';

interface FooterProps {
  onOpenSEOModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSEOModal }) => {
  const seoKeywords = [
    'Mangalore Taxi Service',
    'Mangalore Travels',
    'Airport Taxi Mangalore',
    'Outstation Taxi Mangalore',
    'Mahi Travels',
    'Temple Visit Taxi Mangalore',
    'Yeyyady Taxi Service'
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 pb-24 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block leading-tight font-['Poppins']">
                  Mahi Travels
                </span>
                <span className="text-xs font-medium text-orange-400 tracking-wider uppercase block">
                  Mangalore
                </span>
              </div>
            </a>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Personally managed travel service in Mangalore offering safe, comfortable, and punctual taxi rides for airport transfers, temple visits, family tours, and outstation trips.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
                aria-label="Instagram Page"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppLink('Hello Mahi Travels')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Poppins']">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-orange-400 transition-colors">Home Page</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About Mahi Travels</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Our Travel Services</a></li>
              <li><a href="#why-us" className="hover:text-orange-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          {/* Contact Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Poppins']">Contact Details</h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={getCallLink(BUSINESS_INFO.phones[0])} className="hover:text-amber-300 font-mono">
                  +91 {BUSINESS_INFO.phones[0]}
                </a>
                <span>/</span>
                <a href={getCallLink(BUSINESS_INFO.phones[1])} className="hover:text-amber-300 font-mono">
                  +91 {BUSINESS_INFO.phones[1]}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={getWhatsAppLink('Hello Mahi Travels')} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                  WhatsApp: +91 {BUSINESS_INFO.primaryWhatsApp}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Local SEO Keyword Bar */}
        <div className="pt-8 border-t border-slate-900 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-slate-300">Search Keywords & Service Areas:</p>
            <button
              onClick={onOpenSEOModal}
              className="text-xs font-medium text-orange-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>View SEO Sitemap & Schema</span>
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {seoKeywords.map((kw, idx) => (
              <span key={idx} className="text-[10px] bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800">
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-3">
          <p>© {new Date().getFullYear()} Mahi Travels Mangalore. All Rights Reserved.</p>
          <p className="text-[11px] text-slate-300">Personally Managed Travel & Taxi Services • Yeyyady, Mangalore</p>
        </div>

      </div>
    </footer>
  );
};
