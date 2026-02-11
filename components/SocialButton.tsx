
import React from 'react';
import { SocialLink } from '../types.ts';

interface SocialButtonProps {
  link: SocialLink;
}

const SocialButton: React.FC<SocialButtonProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center w-full px-5 py-5 rounded-[32px] bg-[#0c0c0c] border border-white/[0.12] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:bg-[#111111] hover:border-white/30 active:translate-y-0.5 active:scale-[0.98] active:bg-[#080808] overflow-hidden select-none cursor-pointer"
      aria-label={link.name}
    >
      {/* Premium Shine Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px]">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] ease-in-out bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      </div>

      {/* Subtle Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* Content Container */}
      <div className="flex items-center w-full relative z-10 gap-7">
        {/* Icon Section */}
        <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center transition-transform duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-active:scale-90">
          <div className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-all">
            {link.icon}
          </div>
        </div>
        
        {/* Label */}
        <span className="flex-none text-left text-[15px] font-normal tracking-[0.22em] text-zinc-400 uppercase transition-all duration-500 group-hover:text-white group-hover:tracking-[0.26em]">
          {link.name}
        </span>

        {/* Spacer to push arrow to the right */}
        <div className="flex-grow" />

        {/* Premium Arrow Indicator */}
        <div className="flex-shrink-0 relative w-8 h-8 flex items-center justify-center">
          {/* Circular reveal background */}
          <div className="absolute inset-0 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
          
          <div className="relative transition-all duration-500 transform group-hover:translate-x-0.5 group-hover:opacity-100 opacity-30">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className="w-5 h-5 text-white" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>

      {/* Active Depth Effect */}
      <div className="absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity duration-150 pointer-events-none rounded-[32px] shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),inset_0_0_2px_rgba(255,255,255,0.05)] ring-1 ring-black/50" />
    </a>
  );
};

export default SocialButton;
