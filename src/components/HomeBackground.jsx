import React from 'react';

export default function HomeBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Glow Orbs */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-brand-200/40 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-10 right-[10%] w-[600px] h-[600px] bg-brand-100/50 rounded-full blur-[120px]"></div>
      
      {/* Hexagonal SVG Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.25]" xmlns="http://www.w3.org/2000/svg">
        <polygon className="hex-line-thick" stroke="#94a3b8" strokeWidth="1.8" fill="none" points="120,80 200,40 280,80 280,160 200,200 120,160"/>
        <polygon className="hex-line" stroke="#94a3b8" strokeWidth="1.2" fill="none" points="280,80 340,50 400,80 400,140 340,170 280,140"/>
        <polygon className="hex-line-thick" stroke="#94a3b8" strokeWidth="1.8" fill="none" points="850,120 950,70 1050,120 1050,220 950,270 850,220"/>
        <circle className="hex-dot" fill="#94a3b8" cx="200" cy="40" r="3.5"/>
        <circle className="hex-dot" fill="#94a3b8" cx="280" cy="80" r="3"/>
        <circle className="hex-dot" fill="#94a3b8" cx="950" cy="70" r="4"/>
        <circle className="hex-dot" fill="#94a3b8" cx="1050" cy="120" r="3.5"/>
      </svg>

      {/* Wavy Edges */}
      <div className="absolute top-[10%] left-0 w-[80px] h-[500px] pointer-events-none">
        <svg viewBox="0 0 80 500" fill="none" className="w-full h-full opacity-40">
          <path d="M0 0 C0 0, 45 60, 25 120 C5 180, 55 220, 35 280 C15 340, 60 400, 30 460 C15 490, 0 500, 0 500 Z" fill="url(#wave1)"/>
          <defs><linearGradient id="wave1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b82f6"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient></defs>
        </svg>
      </div>

      {/* Floating Icons */}
      <img src="../images/admin.png" alt="" className="absolute top-[15%] left-[20%] w-16 h-16 opacity-[0.2] animate-float-drift-1" />
      <img src="../images/faculty.png" alt="" className="absolute top-[75%] left-[15%] w-20 h-20 opacity-[0.15] animate-float-drift-4" />
      <img src="../images/exam.png" alt="" className="absolute top-[25%] right-[25%] w-14 h-14 opacity-[0.25] animate-float-drift-2" />
      <img src="../images/chatbot.png" alt="" className="absolute bottom-[20%] right-[15%] w-16 h-16 opacity-[0.2] animate-float-drift-5" />
    </div>
  );
}