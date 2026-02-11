import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS, BANNER_IMAGES, PROFILE_NAME } from './constants';
import SocialButton from './components/SocialButton';

const App: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-[#050505] pb-24">
      {/* Banner Section */}
      <div className="relative w-full h-[60vh] md:h-[65vh] overflow-hidden">
        {BANNER_IMAGES.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt="Banner"
              className={`w-full h-full object-cover object-top transition-all duration-[2000ms] ${
                index < 2 ? 'brightness-[0.8]' : 'brightness-100'
              }`}
            />
          </div>
        ))}
        {/* Premium blend - slightly lighter gradient to preserve image naturality */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-[#050505]"></div>
      </div>

      {/* Profile Header */}
      <div className="flex flex-col items-center z-10 px-4 -mt-28 mb-24 text-center">
        {/* Name - font-bold for impact. Added mb-3 for a slight gap. */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-[0.5em] text-white mb-3 uppercase drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
          {PROFILE_NAME}
        </h1>
        
        {/* Official Links Text - Font size maintained, gap slightly increased from the name above */}
        <div className="flex items-center justify-center opacity-40">
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.6em] text-zinc-100 font-medium">
            Official Links
          </p>
        </div>
      </div>

      {/* Links Section - Spaced further down from header */}
      <div className="w-full max-w-[400px] flex flex-col gap-6 px-6">
        {SOCIAL_LINKS.map((link) => (
          <SocialButton key={link.id} link={link} />
        ))}
      </div>

      {/* Premium Footer */}
      <footer className="mt-32 opacity-15 text-center">
        <div className="flex justify-center gap-3 mb-8">
          <div className="w-1 h-1 rounded-full bg-zinc-500"></div>
          <div className="w-1 h-1 rounded-full bg-zinc-500"></div>
          <div className="w-1 h-1 rounded-full bg-zinc-500"></div>
        </div>
        <p className="text-[9px] uppercase tracking-[0.55em] text-zinc-500 font-light">
          &copy; {new Date().getFullYear()} {PROFILE_NAME}
        </p>
      </footer>
    </main>
  );
};

export default App;