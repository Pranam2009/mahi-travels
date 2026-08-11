import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, SkipForward, Sparkles, Film, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroVideoProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IntroVideo: React.FC<IntroVideoProps> = ({ isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      setIsExiting(false);
      setProgress(0);
      setIsMuted(true); // Default muted for browser autoplay policies
      setShowControls(true);

      // Lock body scroll when intro video is open
      document.body.style.overflow = 'hidden';
      
      // Auto-play video attempt
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((err) => {
              console.log('Autoplay deferred by browser:', err);
              setIsPlaying(false);
            });
        }
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle controls auto-hide after inactivity
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3500);
  };

  if (!isOpen && !isExiting) return null;

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      onClose();
    }, 300);
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const handlePlayPause = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowControls(true);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current && videoRef.current.duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  return (
    <AnimatePresence>
      {(isOpen || isExiting) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 0.98 : 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setShowControls(true)}
          className="fixed inset-0 z-[100] bg-black w-full h-full h-[100dvh] overflow-hidden flex flex-col justify-between select-none"
        >
          {/* Full Screen Edge-to-Edge Video Element with Ambient Blur for Mobile */}
          <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center overflow-hidden">
            {/* Ambient Blurred Video Background for Mobile Pillarboxing */}
            <video
              src="/intro.mp4"
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none sm:hidden"
              autoPlay
              playsInline
              muted
              aria-hidden="true"
            />

            {/* Primary Responsive Video Container */}
            <video
              ref={videoRef}
              src="/intro.mp4"
              className="relative z-10 w-full h-full max-h-[100dvh] max-w-full object-contain sm:object-cover cursor-pointer"
              autoPlay
              playsInline
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleClose}
              onClick={handlePlayPause}
            />

            {/* Subtle Gradient Overlays for readability of controls */}
            <div className="absolute inset-0 z-15 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none" />
          </div>

          {/* Top Bar Floating Controls */}
          <div
            className={`relative z-20 w-full px-3 sm:px-8 py-3 sm:py-6 flex items-center justify-between gap-2 transition-opacity duration-300 ${
              showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Brand Logo & Tag */}
            <div className="flex items-center gap-2 sm:gap-3 bg-slate-900/90 border border-slate-700/70 backdrop-blur-md px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-2xl">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md flex-shrink-0">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse text-amber-200" />
              </div>
              <div className="leading-tight">
                <h4 className="text-[11px] sm:text-sm font-extrabold text-white tracking-wide uppercase font-['Poppins']">
                  Mahi Travels
                </h4>
                <p className="text-[9px] sm:text-xs text-orange-400 font-semibold hidden xs:block">Mangalore • Official Video</p>
              </div>
            </div>

            {/* Action Controls Top Right */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Sound Toggle Button */}
              <button
                onClick={toggleMute}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full border text-xs font-bold backdrop-blur-md transition-all cursor-pointer shadow-xl ${
                  isMuted
                    ? 'bg-orange-500/30 text-orange-300 border-orange-500/60 hover:bg-orange-500/40 animate-pulse'
                    : 'bg-slate-900/85 text-slate-100 border-slate-700 hover:bg-slate-800'
                }`}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-orange-400" />
                    <span className="hidden sm:inline">Unmute Sound</span>
                    <span className="sm:hidden">Unmute</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-emerald-400" />
                    <span className="hidden sm:inline">Sound On</span>
                    <span className="sm:hidden">Muted Off</span>
                  </>
                )}
              </button>

              {/* Skip Intro Button */}
              <button
                onClick={handleClose}
                className="flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-extrabold shadow-xl shadow-orange-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Skip Intro</span>
                <SkipForward className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>

          {/* Center Play/Pause & Tap Sound Indicator */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-4">
            {!isPlaying && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={handlePlayPause}
                className="cursor-pointer group flex flex-col items-center gap-3"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-400 p-1 shadow-2xl shadow-orange-500/50 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full rounded-full bg-slate-950/90 backdrop-blur-md flex items-center justify-center">
                    <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-current ml-1 group-hover:text-amber-300 transition-colors" />
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-white font-semibold tracking-wider uppercase bg-black/60 px-4 py-1.5 rounded-full border border-slate-700 backdrop-blur-md">
                  Tap to Resume Video
                </span>
              </motion.div>
            )}

            {/* Persistent Muted Sound Banner Prompt when playing */}
            {isMuted && isPlaying && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={toggleMute}
                className={`cursor-pointer transition-opacity duration-300 ${
                  showControls ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <div className="bg-slate-900/90 border border-orange-500/50 backdrop-blur-md px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-orange-300 hover:bg-slate-800 transition-all hover:scale-105">
                  <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 animate-bounce" />
                  <span>Tap anywhere to enable sound 🔊</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Bottom Bar Controls & Full Width Progress Bar */}
          <div
            className={`relative z-20 w-full px-4 sm:px-8 pb-4 sm:pb-6 space-y-3 transition-opacity duration-300 ${
              showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Play/Pause Toggle & Info Header */}
            <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePlayPause}
                  className="p-2 rounded-full bg-slate-900/80 border border-slate-700 hover:bg-slate-800 text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <span className="flex items-center gap-2 text-slate-200 font-semibold">
                  <Film className="w-4 h-4 text-orange-400" />
                  <span className="hidden sm:inline">Mahi Travels Mangalore — Your Premium Travel Partner</span>
                  <span className="sm:hidden">Mahi Travels Video</span>
                </span>
              </div>

              <div className="flex items-center gap-2 text-orange-400 font-bold text-[11px] bg-slate-900/70 border border-slate-800 px-3 py-1 rounded-full">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Full Screen</span>
              </div>
            </div>

            {/* Clickable Full-Width Progress Track */}
            <div
              onClick={handleProgressClick}
              className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden cursor-pointer backdrop-blur-md relative group border border-slate-700/50"
            >
              <div
                className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 rounded-full transition-all duration-100 ease-linear shadow-lg shadow-orange-500/50"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
