
import React from 'react';
import { ArrowRight } from 'lucide-react';
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
      className="group relative flex items-center w-full px-8 py-5 rounded-[40px] bg-[#0c0c0c] border border-white/[0.04] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:bg-[#111111] hover:border-white/20 active:translate-y-0.5 active:scale-[0.98] active:bg-[#080808] overflow-hidden"
      aria-label={link.name}
    >
      {/* 1. Animated Glint Sweep - Pure Premium Feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[40px]">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] ease-in-out bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      </div>

      {/* 2. Soft Background Glow on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* 3. Icon - Refined Scaling */}
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center relative z-10 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-active:scale-90">
        <div className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-all">
          {link.icon}
        </div>
      </div>
      
      {/* 4. Label - Adaptive Tracking and Position */}
      <span 
        className="flex-grow text-center text-[11px] font-semibold tracking-[0.25em] text-zinc-400 uppercase transition-all duration-500 group-hover:text-white group-hover:tracking-[0.35em]"
        style={{ transform: 'translateX(-6%)' }}
      >
        {link.name}
      </span>

      {/* 5. The "Pointer" - Elegant Slide */}
      <div className="flex-shrink-0 w-4 flex justify-end relative z-10">
        <div className="transition-all duration-500 transform group-hover:translate-x-1 group-hover:opacity-100 opacity-40">
          <ArrowRight className="w-4 h-4 text-white" strokeWidth={1.5} />
        </div>
      </div>

      {/* 6. Active State Depressed Effect (Inner Shadow) */}
      <div className="absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity duration-150 pointer-events-none rounded-[40px] shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),inset_0_0_2px_rgba(255,255,255,0.05)] ring-1 ring-black/50" />
    </a>
  );
};

export default SocialButton;
