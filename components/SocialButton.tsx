import React from 'react';
import { SocialLink } from '../types';

interface SocialButtonProps {
  link: SocialLink;
}

const SocialButton: React.FC<SocialButtonProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center w-full h-[80px] px-8 rounded-[32px] bg-[#0d0d0d] border border-white/[0.08] shadow-[0_15px_35px_-15px_rgba(0,0,0,0.9)] transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:bg-[#111111] hover:border-white/20 active:translate-y-0 active:scale-[0.98] overflow-hidden select-none cursor-pointer"
      aria-label={link.name}
    >
      {/* Inner Glow Effect */}
      <div className="absolute inset-0 rounded-[32px] border border-white/[0.02] pointer-events-none" />
      
      {/* Premium Shine Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px]">
        <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[2000ms] ease-in-out bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
      </div>

      {/* Content Container */}
      <div className="flex items-center w-full relative z-10 gap-6">
        {/* Icon Section - Brighter and Larger */}
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
          <div className="opacity-100 transition-all filter drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">
            <div className="scale-[1.0]">
              {link.icon}
            </div>
          </div>
        </div>
        
        {/* Label - spacing for luxury feel */}
        <span className="flex-none text-left text-[13px] font-light tracking-[0.35em] text-zinc-300 uppercase transition-all duration-500 group-hover:text-white group-hover:tracking-[0.38em]">
          {link.name}
        </span>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Premium Stylized Arrow Indicator - Circle Background Removed */}
        <div className="flex-shrink-0 relative w-8 h-8 flex items-center justify-center">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className="w-4 h-4 text-white opacity-40 group-hover:opacity-100 transition-all duration-700 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* North East Premium Arrow */}
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default SocialButton;