import React from 'react';

type BrandLogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface BrandLogoProps {
  size?: BrandLogoSize;
  className?: string;
}

const sizeClasses: Record<BrandLogoSize, string> = {
  xs: 'h-7 px-1.5 py-0.5 rounded-lg',
  sm: 'h-9 sm:h-10 px-2 py-1 rounded-xl',
  md: 'h-10 sm:h-11 px-2 py-1 rounded-xl',
  lg: 'h-12 sm:h-14 px-2.5 py-1.5 rounded-xl',
  xl: 'h-20 sm:h-24 px-3.5 py-2 rounded-2xl',
};

/** Renders the official Mahi Travels Mangalore brand logo on a crisp high-contrast badge. */
export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', className = '' }) => {
  return (
    <div
      className={`bg-white flex items-center justify-center shadow-lg shadow-orange-500/15 border border-white/80 overflow-hidden flex-shrink-0 ${sizeClasses[size]} ${className}`}
    >
      <img
        src="/logo.jpg"
        alt="Mahi Travels Mangalore Logo"
        className="h-full w-auto object-contain select-none"
      />
    </div>
  );
};

