
import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS, BANNER_IMAGES, PROFILE_NAME } from './constants.tsx';
import SocialButton from './components/SocialButton.tsx';

const App: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, 10000); // 10 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-[#050505] overflow-x-hidden select-none cursor-default">
      {/* Banner Section - Reverted to original taller height: 45vh and 350px min-height */}
      <div className="relative w-full h-[45vh] min-h-[350px] overflow-hidden">
        {BANNER_IMAGES.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt="Banner"
              className="w-full h-full object-cover object-top"
            />
            {/* Specific tint for the second image (index 1) */}
            {index === 1 && (
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
            )}
            
            {(index === 0 || index === 1) && (
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, transparent 30%, rgba(0, 0, 0, 0.5) 100%)'
                }}
              />
            )}
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>
        
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-premium font-normal tracking-[0.25em] text-white mb-3 uppercase text-center px-4">
            {PROFILE_NAME}
          </h1>
          <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-semibold opacity-90">
            OFFICIAL LINKS
          </p>
        </div>
      </div>

      {/* Links Section */}
      <div className="w-full max-w-[440px] flex flex-col gap-4 px-6 pb-24 mt-10">
        {SOCIAL_LINKS.map((link) => (
          <SocialButton key={link.id} link={link} />
        ))}
      </div>

      <footer className="mt-auto pb-8">
        <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-800 font-bold">
          Rifat Hassan &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
};

export default App;
