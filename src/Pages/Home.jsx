import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import BackgroundEffects  from '../components/BackgroundEffects';

// Array for the dynamic feature carousel
const features = [
  {
    mainImg: 'home_chat.jpg',
    f1Img: "services_realtime.webp", f1L1: 'Live Module', f1L2: 'Secure Messaging',
    f2Img: "services_attendance.jpeg", f2L1: "Today's Avg", f2L2: '94.2%'
  },
  {
    mainImg: 'home_exam.jpg',
    f1Img: 'services_exams.jpg', f1L1: 'Automated', f1L2: 'Exam Processing',
    f2Img: 'home_doc.png', f2L1: 'Reports Gen.', f2L2: '1,204 DBs'
  },
  {
    mainImg: 'home_discussion.jpg',
    f1Img: 'services_discussion.jpg', f1L1: 'Active', f1L2: 'Community Forum',
    f2Img: 'home_student.jpg', f2L1: 'Users Online', f2L2: '342 Active'
  }
];

const logos = [
  { src: 'cvr_logo.png', name: 'CVRH' },
  { src: 'vasavi_logo.gif', name: 'VCE' },
  { src: 'cbit_logo.png', name: 'CBIT' },
  { src: 'jntuh_logo.png', name: 'JNTUH' },
  { src: 'ou_logo.png', name: 'OUCE' },
  { src: 'vnrvjiet_logo.png', name: 'VJIT' },
  { src: 'griet_logo.png', name: 'GRRR' },
  { src: 'mgit_logo.jpeg', name: 'MGIT' },
  { src: 'snist_logo.png', name: 'SNIST' },
  { src: 'kitsw_logo.png', name: 'KITS' },
  { src: 'vardhaman_logo.jpeg', name: 'VARDHAM' },
  { src: 'bvrit_logo.png', name: 'BVRIT' },
  { src: 'anurag_logo.png', name: 'ANURAG' },
];

export function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '30px',
      duration: 800,
      delay: 100,
      easing: 'cubic-bezier(0.5, 0, 0, 1)'
    });
    sr.reveal('.reveal');
    sr.reveal('.reveal-delay-2', { delay: 300 });

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
        setIsFading(false); 
      }, 500); 
      
    }, 5000);

    return () => {
      sr.destroy();
      clearInterval(interval);
    };
  }, []);

  const currentFeature = features[currentIndex];

  return (
    <div className="bg-slate-50 font-body text-slate-600 antialiased selection:bg-brand-100 selection:text-brand-900 flex flex-col min-h-screen">
      
      {/* ═══════════════════════════════ HERO SECTION ═══════════════════════════════ */}
      <main className="grow flex items-center relative overflow-hidden mt-8 md:mt-12 lg:mt-24 mb-16">
        
        <BackgroundEffects />

        <div className="p-10 relative w-full max-w-7xl mx-auto px-6 lg:px-10 z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal pt-10 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-200 shadow-sm mb-6 scale-95 origin-left">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">ERP is Live</span>
            </div>

            <h1 className="text-[2.5rem] sm:text-5xl md:text-4xl font-heading font-extrabold text-slate-900 leading-[1.1] mb-2 tracking-tight">
              Manage your Campus with <br className="hidden sm:block"/>
              <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-linear-to-br from-brand-700 via-brand-900 to-slate-900 bg-clip-text text-transparent">Intelligent Precision</span>
              </span>
            </h1>

            <p className="text-slate-600 font-body text-lg md:text-sm leading-relaxed mb-10 max-w-xl font-light">
              A centralized, Web-Based AI integrated platform designed to simplify academic operations, connect stakeholders, and automate administration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/services" className="bg-brand-600 text-white font-heading font-semibold shadow-lg shadow-brand-100 hover:bg-brand-700 hover:shadow-brand-200 hover:-translate-y-0.5 transition-all active:scale-95 px-2 py-3 rounded-xl flex items-center justify-center gap-2 group">
                Explore Website/Demo Login
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
              </a>
              <a href="/colleges" className="border-2 border-slate-200 text-slate-700 font-heading font-semibold bg-white shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-all active:scale-95 px-6 py-3 rounded-xl flex items-center justify-center gap-2 group">
                <span className="group-hover:text-brand-700 transition-colors">Register</span>
              </a>
            </div>
          </div>

          {/* Right: Dynamic Feature Carousel */}
          <div className="relative hidden lg:block reveal reveal-delay-2 group" id="hero-feature-container">
            <div className="absolute inset-0 bg-linear-to-tr from-brand-100 to-white rounded-[2.5rem] transform rotate-3 scale-105 border border-brand-200/50 shadow-lg transition-transform duration-700"></div>
            
            <div className="relative bg-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl animate-float-slow border-4 border-slate-800 z-10 transition-transform duration-500 hover:scale-[1.02]">
              <div className="aspect-4/3 w-full rounded-4xl overflow-hidden relative bg-white border border-slate-200">
                
                <img 
                  src={currentFeature.mainImg} 
                  alt="ERP Dashboard Mockup" 
                  className={`w-full h-full object-cover object-top-left transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-30' : 'opacity-100'}`} 
                />
                
                <div className="absolute top-0 left-0 right-0 h-14 bg-linear-to-b from-slate-900/40 to-transparent flex items-center px-4">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                   </div>
                </div>
              </div>
            </div>

            <div className={`absolute -left-12 top-20 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-xl shadow-brand-900/10 border border-brand-100 z-20 animate-float-delayed flex items-center gap-3 transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center p-2">
                <img src={currentFeature.f1Img} className="w-full h-full object-contain" alt="Feature Icon 1" />
              </div>
              <div>
                <p className="text-[10px] text-brand-600 font-bold uppercase tracking-wider mb-0.5">{currentFeature.f1L1}</p>
                <p className="font-heading font-bold text-sm text-slate-800">{currentFeature.f1L2}</p>
              </div>
            </div>

            <div className={`absolute -right-8 bottom-24 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-xl shadow-emerald-900/10 border border-emerald-100 z-20 animate-float flex items-center gap-3 transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
               <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center p-2.5">
                <img src={currentFeature.f2Img} className="w-full h-full object-contain" alt="Feature Icon 2" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-medium mb-0.5">{currentFeature.f2L1}</p>
                <p className="font-heading font-extrabold text-lg text-emerald-600 leading-none">{currentFeature.f2L2}</p>
              </div>
            </div>
          </div>

        </div>
      </main>
        
      {/* ═══════════════════════════════ LOGO TICKER ═══════════════════════════════ */}
      <section className="w-full overflow-hidden bg-white border-y border-slate-200 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-6 text-center">
          <p className="text-[11px] font-heading font-bold uppercase tracking-widest text-slate-400">Trusted by Leading Institutions</p>
        </div>
        
        <div className="flex animate-marquee pause-on-hover w-max items-center gap-16 md:gap-24 px-8">
          
          {logos.map((logo, index) => (
            <div key={`set1-${index}`} className="flex flex-col items-center justify-center gap-2 max-w-30 cursor-pointer group">
              <img src={logo.src} className="h-14 w-auto object-contain group-hover:scale-110 transition-transform duration-300" alt={logo.name} />
              <span className="text-[11px] font-bold text-slate-600 tracking-widest uppercase text-center mt-1 group-hover:text-brand-600 transition-colors duration-300">{logo.name}</span>
            </div>
          ))}

          {logos.map((logo, index) => (
            <div key={`set2-${index}`} className="flex flex-col items-center justify-center gap-2 max-w-30 cursor-pointer group">
              <img src={logo.src} className="h-14 w-auto object-contain group-hover:scale-110 transition-transform duration-300" alt={logo.name} />
              <span className="text-[11px] font-bold text-slate-600 tracking-widest uppercase text-center mt-1 group-hover:text-brand-600 transition-colors duration-300">{logo.name}</span>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}