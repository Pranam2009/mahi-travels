import React, { useState } from 'react';
import { X, Globe, FileText, Code2, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

interface SEOInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SEOInfoModal: React.FC<SEOInfoModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'sitemap' | 'robots' | 'schema'>('sitemap');

  if (!isOpen) return null;

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mahitravels.com/</loc>
    <lastmod>2026-08-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://mahitravels.com/#about</loc>
    <lastmod>2026-08-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mahitravels.com/#services</loc>
    <lastmod>2026-08-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://mahitravels.com/#contact</loc>
    <lastmod>2026-08-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  const robotsContent = `User-agent: *
Allow: /
Sitemap: https://mahitravels.com/sitemap.xml`;

  const schemaContent = JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Mahi Travels Mangalore",
      "telephone": BUSINESS_INFO.phones,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Katipalla Sabha Bhavana, Katipalla",
        "addressLocality": "Mangalore",
        "addressRegion": "Karnataka",
        "postalCode": "575030",
        "addressCountry": "IN"
      },
      "url": "https://mahitravels.com",
      "sameAs": [
        BUSINESS_INFO.instagramUrl,
        BUSINESS_INFO.facebookUrl
      ]
    },
    null,
    2
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl glass-card bg-slate-900 border border-slate-700 p-5 sm:p-8 shadow-2xl space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>Search Engine Optimization</span>
          </div>
          <h3 className="text-2xl font-bold text-white font-['Poppins']">
            SEO & Local Business Data
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Generated SEO Assets for Mahi Travels Mangalore
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-2 border-b border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'sitemap' ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Sitemap.xml
          </button>
          <button
            onClick={() => setActiveTab('robots')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'robots' ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Robots.txt
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'schema' ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Local Business Schema
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-amber-300 overflow-x-auto max-h-64 scrollbar-thin">
          <pre>
            {activeTab === 'sitemap' && sitemapContent}
            {activeTab === 'robots' && robotsContent}
            {activeTab === 'schema' && schemaContent}
          </pre>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Optimized for: Mangalore Taxi Service • Airport Taxi • Mahi Travels</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
