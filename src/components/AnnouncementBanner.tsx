import React from 'react';
import { Sparkles, X } from 'lucide-react';

interface AnnouncementBannerProps {
  onClose: () => void;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ onClose }) => {
  return (
    <div className="glass-dark backdrop-blur-md border-b border-white/10 text-white py-2 text-center relative z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-center items-center">
          <div className="relative overflow-hidden w-full">
            <div className="animate-marquee whitespace-nowrap flex items-center justify-center">
              <span className="mx-4 font-medium flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-mba-teal" />
                <span className="text-sm md:text-base">20% OFF ANALYTICS COACHING</span>
              </span>
              <span className="mx-4 font-medium flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-mba-pink" />
                <span className="text-sm md:text-base">NEW: POWER BI & SQL COURSE</span>
              </span>
              <span className="mx-4 font-medium flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-mba-teal" />
                <span className="text-sm md:text-base">20% OFF ANALYTICS COACHING</span>
              </span>
              <span className="mx-4 font-medium flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-mba-pink" />
                <span className="text-sm md:text-base">NEW: POWER BI & SQL COURSE</span>
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full h-7 w-7 flex items-center justify-center"
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
