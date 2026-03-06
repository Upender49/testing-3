import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import BackgroundEffects from '../components/BackgroundEffects';

export  function AboutUs() {
  useEffect(() => {
    // Initialize ScrollReveal safely inside the hook
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '30px',
      duration: 800,
      delay: 150,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      interval: 100
    });

    sr.reveal('.reveal');
    sr.reveal('.reveal-delay-1', { delay: 300 });
    sr.reveal('.reveal-delay-2', { delay: 450 });
    sr.reveal('.reveal-delay-3', { delay: 600 });
    
    // Cleanup on component unmount
    return () => sr.destroy();
  }, []);

  return (
    <div className="mesh-bg font-body text-slate-600 antialiased selection:bg-brand-100 selection:text-brand-900 relative min-h-screen">
      
      <BackgroundEffects
       />

      <section className="relative pt-32 pb-20 dot-grid overflow-hidden border-b border-slate-100">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <span className="badge-light mb-4 inline-block shadow-sm">About CampusIQ</span>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-4">
            CampusIQ Technologies is on a mission to eliminate administrative chaos in higher education through intelligent, unified software — so colleges can focus on what matters most: their students.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 1: OUR VISION ═══════ */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-base p-8 rounded-3xl reveal text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl icon-wrap overflow-hidden p-2">
                  <img src="about_efficiency.png" alt="Efficiency Icon" className="w-full h-full object-contain" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Centralized Efficiency</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Moving away from multiple independent systems and manual methods that cause data inconsistency.</p>
            </div>
            
            <div className="card-base p-8 rounded-3xl reveal reveal-delay-1 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl icon-wrap overflow-hidden p-2">
                  <img src="about_admin.png" alt="Admin Icon" className="w-full h-full object-contain" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Reducing Administrative Burden</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Minimizing paperwork and high workloads for staff through automated digital solutions.</p>
            </div>
            
            <div className="card-base p-8 rounded-3xl reveal reveal-delay-2 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl icon-wrap overflow-hidden p-2">
                  <img src="about_instant.png" alt="Instant Access Icon" className="w-full h-full object-contain" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Instant Information Access</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Eliminating delays for students seeking exam schedules, faculty details, or classroom locations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 2: THE INTEGRATED SOLUTION ═══════ */}
      <section className="py-20 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute -right-20 top-20 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-3">The Engine</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900">The Integrated Solution</h2>
            <p className="text-slate-600 font-body max-w-2xl mx-auto text-lg mt-4">What makes this Web-Based College Management System uniquely powerful.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 reveal relative overflow-hidden group">
              <div className="h-1 bg-linear-to-r from-brand-500 to-brand-300 absolute top-0 left-0 right-0"></div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-4 mt-2">Unified Modules</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">A single application integrating student management, faculty tracking, attendance, exams, and result processing.</p>
              <ul className="space-y-2 mt-auto">
                <li className="flex items-center gap-2 text-sm text-slate-500"><svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Student CRM</li>
                <li className="flex items-center gap-2 text-sm text-slate-500"><svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Attendance Engine</li>
                <li className="flex items-center gap-2 text-sm text-slate-500"><svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Result Processing</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 reveal reveal-delay-1 relative overflow-hidden group">
              <div className="h-1 bg-linear-to-r from-violet-500 to-violet-300 absolute top-0 left-0 right-0"></div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-4 mt-2">Role-Based Experience</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">A secure environment where students, faculty, and admins access only the information relevant to their specific roles.</p>
              <ul className="space-y-2 mt-auto">
                <li className="flex items-center gap-2 text-sm text-slate-500"><svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Data Privacy</li>
                <li className="flex items-center gap-2 text-sm text-slate-500"><svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Permission Checks</li>
                <li className="flex items-center gap-2 text-sm text-slate-500"><svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Audited Views</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 reveal reveal-delay-2 relative overflow-hidden group">
              <div className="h-1 bg-linear-to-r from-pink-500 to-pink-300 absolute top-0 left-0 right-0"></div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-4 mt-2">AI-First Approach</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Featuring a 24/7 virtual assistant—the College Chatbot—to provide instant responses to common campus queries.</p>
              <ul className="space-y-2 mt-auto">
                <li className="flex items-center gap-2 text-sm text-slate-500"><svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>LLM Integration</li>
                <li className="flex items-center gap-2 text-sm text-slate-500"><svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Real-time Context</li>
                <li className="flex items-center gap-2 text-sm text-slate-500"><svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Always Available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3: OUR STORY ═══════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="reveal">
              <p className="section-label mb-2">Our Story</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-6">From a Problem to a <span className="gradient-text">Platform</span></h2>
              <p className="text-slate-600 mb-5 leading-relaxed text-lg">CampusIQ was born from a simple observation: colleges across India still run on spreadsheets, paper registers, and disconnected legacy software.</p>
              <p className="text-slate-600 mb-5 leading-relaxed">Founded in 2024, our team of engineers and educators set out to build a single, intelligent platform that connects every stakeholder — students, faculty, and administrators — into one seamless experience.</p>
              <p className="text-slate-600 leading-relaxed">Today, CampusIQ powers 50+ institutions, automates thousands of administrative hours, and brings AI-driven insights to campus management — all from a single dashboard.</p>
            </div>

            <div className="reveal reveal-delay-1">
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white border border-slate-200 rounded-3xl p-7 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="font-heading font-extrabold text-4xl text-brand-600 mb-2">50+</div>
                  <p className="text-slate-500 text-sm font-heading font-medium">Institutions Onboarded</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-3xl p-7 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="font-heading font-extrabold text-4xl text-emerald-600 mb-2">10K+</div>
                  <p className="text-slate-500 text-sm font-heading font-medium">Active Users</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-3xl p-7 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="font-heading font-extrabold text-4xl text-amber-600 mb-2">99.9%</div>
                  <p className="text-slate-500 text-sm font-heading font-medium">Platform Uptime</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-3xl p-7 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="font-heading font-extrabold text-4xl text-violet-600 mb-2">24/7</div>
                  <p className="text-slate-500 text-sm font-heading font-medium">Support & AI Chatbot</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: OUR VALUES ═══════ */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">What Drives Us</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm text-center card-base reveal">
              <div className="w-14 h-14 mx-auto mb-4 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-lg mb-2">Innovation</h4>
              <p className="text-slate-500 text-sm">We integrate AI and modern tech to solve real campus problems, not theoretical ones.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm text-center card-base reveal reveal-delay-1">
              <div className="w-14 h-14 mx-auto mb-4 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-lg mb-2">Security-First</h4>
              <p className="text-slate-500 text-sm">Student and institutional data is encrypted, audited, and protected at every layer.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm text-center card-base reveal reveal-delay-2">
              <div className="w-14 h-14 mx-auto mb-4 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-lg mb-2">User-Centric</h4>
              <p className="text-slate-500 text-sm">Every feature is designed around real feedback from students, teachers, and admins.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm text-center card-base reveal reveal-delay-3">
              <div className="w-14 h-14 mx-auto mb-4 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-lg mb-2">Transparency</h4>
              <p className="text-slate-500 text-sm">Clear pricing, open communication, and honest reporting — no hidden surprises.</p>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}