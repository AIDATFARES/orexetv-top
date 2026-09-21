import React from "react";

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${compact ? "scale-90 origin-left" : ""}`}>
      {/* OREXETV Futuristic Screen & Signal Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 text-white shadow-md shadow-indigo-500/25 shrink-0">
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Modern TV Screen */}
          <rect x="2" y="4" width="20" height="13" rx="3" />
          {/* Signal / Play Beam */}
          <polygon points="10 8 16 10.5 10 13" fill="currentColor" stroke="none" />
          {/* TV Stand Base */}
          <path d="M8 20h8" />
          <path d="M12 17v3" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className="text-[20px] sm:text-[22px] font-black tracking-tighter text-slate-900 font-sans">
            OREXE<span className="text-indigo-600">TV</span>
          </span>
          <span className="bg-indigo-50 text-indigo-700 border border-indigo-200/80 font-extrabold text-[9px] px-1.5 py-0.5 rounded tracking-wider uppercase">
            4K ULTRA
          </span>
        </div>
        <span className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase mt-0.5">
          Next-Gen IPTV Streaming
        </span>
      </div>
    </div>
  );
}
