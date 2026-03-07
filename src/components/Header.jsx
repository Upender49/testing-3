import { useEffect, useRef, useState } from "react";

export function Header() {
  const navLinks = ['Home', 'About Us', 'Services', 'Contact'];

  const navItemRefs = useRef([]);
  const pillRef = useRef(null);
  const navBarRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const movePill = (index) => {
    const el = navItemRefs.current[index];
    if (!el || !navBarRef.current || !pillRef.current || navBarRef.current.offsetWidth === 0) return;
    
    const navRect = navBarRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    
    pillRef.current.style.left = `${elRect.left - navRect.left}px`;
    pillRef.current.style.width = `${elRect.width}px`;
  };

  useEffect(() => {
    movePill(activeIndex);

    const handleResize = () => {
      movePill(activeIndex);
      if (window.innerWidth >= 900) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  const handleNavClick = (index) => {
    setActiveIndex(index);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-2 mx-4 lg:mx-17.5 z-50 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/60 shadow-sm transition-all duration-300">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-14 h-16 flex items-center justify-between">
        
        <div className="flex items-center gap-2 shrink-0 cursor-pointer">
          <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.827a1 1 0 00-.788 0l-7 3a1 1 0 000 1.846l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.846l-7-3zM3.172 10.757a1 1 0 011.105-.271l5.505 2.359 5.505-2.359a1 1 0 11.788 1.846l-6 2.571a1 1 0 01-.788 0l-6-2.571a1 1 0 01-.505-1.214z" />
            </svg>
          </div>
          <span className="font-heading font-extrabold text-base text-slate-800 tracking-tight">
            EDU<span className="text-blue-600">CORE</span>
          </span>
        </div>

        <nav
          ref={navBarRef}
          className="hidden nav:flex relative bg-slate-100 rounded-full px-1 py-1 border border-slate-200 gap-1 md:gap-2 shrink"
        >
          <div
            ref={pillRef}
            className="absolute top-1 h-[calc(100%-8px)] bg-white rounded-full border border-slate-200 shadow-sm pointer-events-none z-0 transition-all duration-300 ease-in-out"
          ></div>
          
          {navLinks.map((item, index) => (
            <a
              key={item}
              ref={(el) => (navItemRefs.current[index] = el)}
              onClick={(e) => { e.preventDefault(); handleNavClick(index); }}
              href="#"
              className={`relative z-10 px-2 lg:px-7 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 whitespace-nowrap ${
                index === activeIndex ? "text-blue-600" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
          <a
            href="#"
            className="hidden sm:inline-flex border-2 border-blue-600 text-blue-600 px-3 md:px-4 py-1.5 rounded-lg text-sm font-heading font-semibold hover:bg-blue-50 transition-all active:scale-95 whitespace-nowrap"
          >
            Explore/Demo
          </a>
          <a
            href="#"
            className="hidden sm:inline-flex bg-blue-600 text-white px-3 md:px-4 py-2 rounded-lg text-sm font-heading font-semibold hover:bg-blue-700 transition-all active:scale-95 whitespace-nowrap"
          >
            Login
          </a>
          <a
            href="#"
            className="hidden md:inline-flex bg-blue-600 text-white px-3 md:px-4 py-2 rounded-lg text-sm font-heading font-semibold hover:bg-blue-700 transition-all active:scale-95 whitespace-nowrap"
          >
            Register College
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="nav:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`block w-5 h-0.5 bg-slate-700 rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? 'translate-y-1.75 rotate-45' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-slate-700 rounded-full transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-slate-700 rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? '-translate-y-1.75 -rotate-45 mt-1.5' : 'mt-1.5'}`}></span>
          </button>
        </div>
      </div>

      <div 
        className={`nav:hidden border-t border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-2 bg-white rounded-b-lg shadow-xl">
          {navLinks.map((item, index) => (
            <a
              key={item}
              onClick={(e) => { e.preventDefault(); handleNavClick(index); }}
              href="#"
              className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                index === activeIndex 
                  ? "text-blue-600 bg-blue-50" 
                  : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {item}
            </a>
          ))}

          <div className="md:hidden pt-2 border-t border-slate-200 mt-2 space-y-2">
            <a
              href="#"
              className="block text-center border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-heading font-semibold hover:bg-blue-50 transition-all active:scale-95"
            >
              Explore/Demo
            </a>
            <a
              href="#"
              className="block text-center bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-heading font-semibold hover:bg-blue-700 transition-all active:scale-95"
            >
              Login
            </a>
            <a
              href="#"
              className="block text-center bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-heading font-semibold hover:bg-blue-700 transition-all active:scale-95"
            >
              Register College
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}