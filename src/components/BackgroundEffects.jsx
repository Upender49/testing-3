
export default function BackgroundEffects() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <img src="services_chatbot.png" alt="" className="absolute top-[4%] left-[20%] w-20 h-20 opacity-[0.12] animate-float-drift-1" />
        <img src="services_faculty.png" alt="" className="absolute top-[75%] left-[40%] w-18 h-18 opacity-[0.10] animate-float-drift-4" />
        <img src="services_admin.png" alt="" className="absolute top-[55%] left-[65%] w-16 h-16 opacity-[0.11] animate-float-drift-6" />
        <img src="services_exam.png" alt="" className="absolute top-[12%] left-[55%] w-14 h-14 opacity-[0.13] animate-float-drift-2" />
        <img src="services_department.png" alt="" className="absolute top-[30%] left-[75%] w-14 h-14 opacity-[0.10] animate-float-drift-5" />
        <img src="services_notifications.png" alt="" className="absolute top-[22%] left-[35%] w-12 h-12 opacity-[0.14] animate-float-drift-3" />
        <img src="services_discussion.png" alt="" className="absolute top-[50%] left-[25%] w-14 h-14 opacity-[0.11] animate-float-drift-1" />
        <img src="services_fee.png" alt="" className="absolute top-[40%] left-[50%] w-12 h-12 opacity-[0.12] animate-float-drift-4" />
        <img src="services_secure.png" alt="" className="absolute top-[8%] left-[82%] w-10 h-10 opacity-[0.15] animate-float-drift-3" />
        <img src="services_doc.png" alt="" className="absolute top-[60%] left-[12%] w-10 h-10 opacity-[0.13] animate-float-drift-2" />
        <img src="services_navigate.png" alt="" className="absolute top-[88%] left-[58%] w-9 h-9 opacity-[0.14] animate-float-drift-5" />
        <img src="services_efficiency.png" alt="" className="absolute top-[85%] left-[18%] w-8 h-8 opacity-[0.16] animate-float-drift-6" />

        <svg className="absolute inset-0 w-full h-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          <polygon className="hex-line-thick" points="120,80 200,40 280,80 280,160 200,200 120,160"/>
          <polygon className="hex-line" points="280,80 340,50 400,80 400,140 340,170 280,140"/>
          <polygon className="hex-line" points="120,160 200,200 200,280 120,320 40,280 40,200"/>
          <polygon className="hex-light" points="280,160 340,130 400,160 400,240 340,270 280,240"/>
          <polygon className="hex-line" points="400,80 440,55 480,80 480,130 440,155 400,130"/>
          <polygon className="hex-light" points="60,60 85,45 110,60 110,90 85,105 60,90"/>
          <polygon className="hex-line-thick" points="850,120 950,70 1050,120 1050,220 950,270 850,220"/>
          <polygon className="hex-line" points="1050,120 1120,80 1190,120 1190,200 1120,240 1050,200"/>
          <polygon className="hex-line" points="850,220 920,180 990,220 990,300 920,340 850,300"/>
          <polygon className="hex-light" points="780,90 805,75 830,90 830,120 805,135 780,120"/>
          <polygon className="hex-line" points="700,30 730,12 760,30 760,66 730,84 700,66"/>
          <polygon className="hex-line-thick" points="500,450 580,410 660,450 660,530 580,570 500,530"/>
          <polygon className="hex-line" points="660,450 720,420 780,450 780,510 720,540 660,510"/>
          <polygon className="hex-light" points="500,530 560,500 620,530 620,590 560,620 500,590"/>
          <line className="hex-line" x1="400" y1="130" x2="480" y2="130"/>
          <line className="hex-light" x1="760" y1="66" x2="780" y2="90"/>
          <line className="hex-line" x1="830" y1="120" x2="850" y2="120"/>
          <line className="hex-light" x1="530" y1="160" x2="700" y2="30"/>
          <line className="hex-light" x1="660" y1="450" x2="850" y2="300"/>
          <circle className="hex-dot" cx="200" cy="40" r="3.5"/><circle className="hex-dot" cx="280" cy="80" r="3"/>
          <circle className="hex-dot" cx="200" cy="200" r="4"/><circle className="hex-dot" cx="400" cy="80" r="2.5"/>
          <circle className="hex-dot" cx="950" cy="70" r="4"/><circle className="hex-dot" cx="1050" cy="120" r="3.5"/>
          <circle className="hex-dot" cx="580" cy="410" r="4"/><circle className="hex-dot" cx="730" cy="12" r="2.5"/>
        </svg>
      </div>

      <div className="absolute top-50 right-0 w-20 h-125 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 80 500" fill="none" className="w-full h-full">
          <path d="M80 0 C80 0,30 60,50 120 C70 180,20 220,35 280 C50 340,15 400,40 460 C55 490,80 500,80 500 Z" fill="url(#bw1)" opacity="0.35"/>
          <defs><linearGradient id="bw1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b82f6"/><stop offset="100%" stopColor="#2563eb"/></linearGradient></defs>
        </svg>
      </div>
      <div className="absolute top-200 left-0 w-17.5 h-112.5 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 70 450" fill="none" className="w-full h-full">
          <path d="M0 0 C0 0,45 50,30 110 C15 170,55 220,40 280 C25 340,50 380,35 420 C25 445,0 450,0 450 Z" fill="url(#vw1)" opacity="0.30"/>
          <defs><linearGradient id="vw1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#7c3aed"/></linearGradient></defs>
        </svg>
      </div>
      <div className="absolute top-375 right-0 w-22.5 h-137.5 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 90 550" fill="none" className="w-full h-full">
          <path d="M90 0 C90 0,35 70,55 140 C75 210,25 270,45 340 C65 410,20 470,50 520 C65 545,90 550,90 550 Z" fill="url(#ew1)" opacity="0.30"/>
          <defs><linearGradient id="ew1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981"/><stop offset="100%" stopColor="#059669"/></linearGradient></defs>
        </svg>
      </div>
      <div className="absolute top-550 left-0 w-18.75 h-125 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 75 500" fill="none" className="w-full h-full">
          <path d="M0 0 C0 0,50 60,35 130 C20 200,55 250,40 320 C25 390,60 430,40 470 C30 490,0 500,0 500 Z" fill="url(#aw1)" opacity="0.35"/>
          <defs><linearGradient id="aw1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#d97706"/></linearGradient></defs>
        </svg>
      </div>
    </>
  );
}