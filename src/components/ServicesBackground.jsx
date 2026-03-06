
export default function ServicesBackground() {
  return (
    <>
      {/* ═══════ FLOATING ERP BACKGROUND IMAGES ═══════ */}
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

        {/* ── Hexagonal network pattern (SVG) ── */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          <polygon className="hex-line-thick" points="120,80 200,40 280,80 280,160 200,200 120,160"/>
          <polygon className="hex-line" points="280,80 340,50 400,80 400,140 340,170 280,140"/>
          <polygon className="hex-line" points="120,160 200,200 200,280 120,320 40,280 40,200"/>
          <polygon className="hex-light" points="280,160 340,130 400,160 400,240 340,270 280,240"/>
          <polygon className="hex-line" points="400,80 440,55 480,80 480,130 440,155 400,130"/>
          <polygon className="hex-light" points="340,170 380,145 420,170 420,220 380,245 340,220"/>
          <polygon className="hex-line" points="200,280 240,255 280,280 280,330 240,355 200,330"/>
          <polygon className="hex-light" points="60,60 85,45 110,60 110,90 85,105 60,90"/>
          <polygon className="hex-line" points="480,130 505,115 530,130 530,160 505,175 480,160"/>
          <polygon className="hex-light" points="330,290 350,278 370,290 370,314 350,326 330,314"/>
          <polygon className="hex-line" points="40,280 60,268 80,280 80,304 60,316 40,304"/>
          <polygon className="hex-line-thick" points="850,120 950,70 1050,120 1050,220 950,270 850,220"/>
          <polygon className="hex-line" points="1050,120 1120,80 1190,120 1190,200 1120,240 1050,200"/>
          <polygon className="hex-line" points="850,220 920,180 990,220 990,300 920,340 850,300"/>
          <polygon className="hex-light" points="1050,220 1100,190 1150,220 1150,280 1100,310 1050,280"/>
          <polygon className="hex-line" points="1190,120 1230,95 1270,120 1270,170 1230,195 1190,170"/>
          <polygon className="hex-light" points="780,90 805,75 830,90 830,120 805,135 780,120"/>
          <polygon className="hex-line" points="1120,240 1145,225 1170,240 1170,270 1145,285 1120,270"/>
          <polygon className="hex-light" points="920,340 940,328 960,340 960,364 940,376 920,364"/>
          <polygon className="hex-line" points="1270,170 1295,155 1320,170 1320,200 1295,215 1270,200"/>
          <polygon className="hex-line" points="700,30 730,12 760,30 760,66 730,84 700,66"/>
          <polygon className="hex-light" points="600,70 620,58 640,70 640,94 620,106 600,94"/>
          <polygon className="hex-line" points="1300,50 1325,35 1350,50 1350,80 1325,95 1300,80"/>
          <polygon className="hex-line-thick" points="500,450 580,410 660,450 660,530 580,570 500,530"/>
          <polygon className="hex-line" points="660,450 720,420 780,450 780,510 720,540 660,510"/>
          <polygon className="hex-light" points="500,530 560,500 620,530 620,590 560,620 500,590"/>
          <polygon className="hex-line" points="780,450 820,425 860,450 860,500 820,525 780,500"/>
          <polygon className="hex-light" points="660,530 700,505 740,530 740,580 700,605 660,580"/>
          <polygon className="hex-line" points="420,420 445,405 470,420 470,450 445,465 420,450"/>
          <polygon className="hex-light" points="860,500 880,488 900,500 900,524 880,536 860,524"/>
          <polygon className="hex-line" points="350,500 370,488 390,500 390,524 370,536 350,524"/>
          <line className="hex-line" x1="400" y1="130" x2="480" y2="130"/>
          <line className="hex-light" x1="530" y1="145" x2="600" y2="80"/>
          <line className="hex-line" x1="280" y1="280" x2="330" y2="290"/>
          <line className="hex-light" x1="760" y1="66" x2="780" y2="90"/>
          <line className="hex-line" x1="830" y1="120" x2="850" y2="120"/>
          <line className="hex-light" x1="640" y1="94" x2="700" y2="66"/>
          <line className="hex-line" x1="470" y1="420" x2="500" y2="450"/>
          <line className="hex-light" x1="780" y1="500" x2="860" y2="500"/>
          <line className="hex-line" x1="390" y1="500" x2="500" y2="530"/>
          <line className="hex-light" x1="1190" y1="170" x2="1270" y2="170"/>
          <line className="hex-line" x1="960" y1="340" x2="1050" y2="280"/>
          <line className="hex-light" x1="110" y1="90" x2="120" y2="160"/>
          <line className="hex-light" x1="530" y1="160" x2="700" y2="30"/>
          <line className="hex-light" x1="400" y1="240" x2="420" y2="420"/>
          <line className="hex-light" x1="660" y1="450" x2="850" y2="300"/>
          <line className="hex-light" x1="1120" y1="270" x2="1050" y2="380" strokeDasharray="4,4"/>
          <line className="hex-light" x1="80" y1="304" x2="200" y2="330"/>
          <circle className="hex-dot" cx="200" cy="40" r="3.5"/>
          <circle className="hex-dot" cx="280" cy="80" r="3"/>
          <circle className="hex-dot" cx="120" cy="160" r="3"/>
          <circle className="hex-dot" cx="200" cy="200" r="4"/>
          <circle className="hex-dot" cx="400" cy="80" r="2.5"/>
          <circle className="hex-dot" cx="340" cy="170" r="3"/>
          <circle className="hex-dot" cx="480" cy="130" r="2.5"/>
          <circle className="hex-dot" cx="530" cy="130" r="2"/>
          <circle className="hex-dot" cx="85" cy="45" r="2"/>
          <circle className="hex-dot" cx="40" cy="280" r="2.5"/>
          <circle className="hex-dot" cx="950" cy="70" r="4"/>
          <circle className="hex-dot" cx="1050" cy="120" r="3.5"/>
          <circle className="hex-dot" cx="850" cy="220" r="3"/>
          <circle className="hex-dot" cx="1120" cy="80" r="3"/>
          <circle className="hex-dot" cx="1190" cy="120" r="2.5"/>
          <circle className="hex-dot" cx="1270" cy="120" r="2"/>
          <circle className="hex-dot" cx="805" cy="75" r="2"/>
          <circle className="hex-dot" cx="730" cy="12" r="2.5"/>
          <circle className="hex-dot" cx="1325" cy="35" r="2"/>
          <circle className="hex-dot" cx="580" cy="410" r="4"/>
          <circle className="hex-dot" cx="660" cy="450" r="3.5"/>
          <circle className="hex-dot" cx="500" cy="530" r="3"/>
          <circle className="hex-dot" cx="780" cy="450" r="2.5"/>
          <circle className="hex-dot" cx="720" cy="540" r="3"/>
          <circle className="hex-dot" cx="445" cy="405" r="2"/>
          <circle className="hex-dot" cx="860" cy="500" r="2.5"/>
          <circle className="hex-dot" cx="370" cy="488" r="2"/>
          <circle className="hex-dot" cx="350" cy="290" r="2"/>
          <circle className="hex-dot" cx="240" cy="355" r="2.5"/>
          <circle className="hex-dot" cx="620" cy="58" r="2"/>
        </svg>
      </div>

      {/* ═══════ WAVY EDGE SHAPES (scroll with page) ═══════ */}
      <div className="absolute top-50 right-0 w-20 h-125 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 80 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M80 0 C80 0, 30 60, 50 120 C70 180, 20 220, 35 280 C50 340, 15 400, 40 460 C55 490, 80 500, 80 500 Z" fill="url(#blueWave)" opacity="0.35"/>
          <defs><linearGradient id="blueWave" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b82f6"/><stop offset="100%" stopColor="#2563eb"/></linearGradient></defs>
        </svg>
      </div>
      <div className="absolute top-200 left-0 w-17.5 h-112.5 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 70 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 C0 0, 45 50, 30 110 C15 170, 55 220, 40 280 C25 340, 50 380, 35 420 C25 445, 0 450, 0 450 Z" fill="url(#violetWave)" opacity="0.30"/>
          <defs><linearGradient id="violetWave" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#7c3aed"/></linearGradient></defs>
        </svg>
      </div>
      <div className="absolute top-375 right-0 w-22.5 h-137.5 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 90 550" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M90 0 C90 0, 35 70, 55 140 C75 210, 25 270, 45 340 C65 410, 20 470, 50 520 C65 545, 90 550, 90 550 Z" fill="url(#emeraldWave)" opacity="0.30"/>
          <defs><linearGradient id="emeraldWave" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981"/><stop offset="100%" stopColor="#059669"/></linearGradient></defs>
        </svg>
      </div>
      <div className="absolute top-550 left-0 w-18.75 h-125 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 75 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 C0 0, 50 60, 35 130 C20 200, 55 250, 40 320 C25 390, 60 430, 40 470 C30 490, 0 500, 0 500 Z" fill="url(#amberWave)" opacity="0.35"/>
          <defs><linearGradient id="amberWave" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#d97706"/></linearGradient></defs>
        </svg>
      </div>
      <div className="absolute top-725 right-0 w-17.5 h-120 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 70 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M70 0 C70 0, 25 55, 40 120 C55 185, 15 240, 35 310 C55 380, 20 420, 40 455 C50 472, 70 480, 70 480 Z" fill="url(#roseWave)" opacity="0.30"/>
          <defs><linearGradient id="roseWave" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f43f5e"/><stop offset="100%" stopColor="#e11d48"/></linearGradient></defs>
        </svg>
      </div>
      <div className="absolute top-900 left-0 w-21.25 h-130 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 85 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 C0 0, 55 65, 40 140 C25 215, 60 270, 45 340 C30 410, 65 450, 45 490 C35 510, 0 520, 0 520 Z" fill="url(#tealWave)" opacity="0.30"/>
          <defs><linearGradient id="tealWave" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#14b8a6"/><stop offset="100%" stopColor="#0d9488"/></linearGradient></defs>
        </svg>
      </div>
      <div className="absolute top-1075 right-0 w-20 h-125 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 80 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M80 0 C80 0, 30 60, 50 130 C70 200, 20 260, 40 330 C60 400, 25 450, 50 480 C60 492, 80 500, 80 500 Z" fill="url(#indigoWave)" opacity="0.28"/>
          <defs><linearGradient id="indigoWave" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#4f46e5"/></linearGradient></defs>
        </svg>
      </div>
      <div className="absolute top-1250 left-0 w-18.75 h-112.5 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 75 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 C0 0, 48 50, 35 120 C22 190, 55 230, 40 300 C25 370, 50 400, 35 430 C25 445, 0 450, 0 450 Z" fill="url(#orangeWave)" opacity="0.35"/>
          <defs><linearGradient id="orangeWave" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f97316"/><stop offset="100%" stopColor="#ea580c"/></linearGradient></defs>
        </svg>
      </div>
    </>
  );
}