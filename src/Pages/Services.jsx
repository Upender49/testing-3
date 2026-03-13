import  { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import BackgroundEffects from '../components/BackgroundEffects';

export  function Services() {
  useEffect(() => {
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
    sr.reveal('.reveal-delay-4', { delay: 750 });

    // Note: The Navbar scroll effect from your HTML was removed here 
    // because it should ideally be placed inside your actual <Navbar /> component in React.

    return () => sr.destroy();
  }, []);

  return (
    <div className="mesh-bg font-body text-slate-600 antialiased selection:bg-brand-100 selection:text-brand-900 relative min-h-screen">
      
      {/* 1. RENDER SEGREGATED BACKGROUND COMPONENT */}
      <BackgroundEffects />

      {/* ═══════════════════════════════ HERO SECTION ═══════════════════════════════ */}
      <section className="relative pt-36 pb-28 dot-grid overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Content */}
            <div className="reveal">
              <div className="flex justify-start mb-4">
                <span className="badge-light mb-1 shadow-sm">
                  ◆ Enterprise College ERP Platform
                </span>
              </div>
              
              <p className="text-slate-600 text-base md:text-lg font-body font-light max-w-xl leading-relaxed mb-8">
                CampusIQ unifies attendance, faculty workflows, exams, and real-time communication into a single, secure web platform designed for modern excellence.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 text-white">
                <a href="#services" className="btn-primary px-3 py-2 rounded-xl text-base flex items-center gap-2">
                  Explore All Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
                </a>
                <a href="#ai" className="btn-outline px-3 py-2 rounded-xl text-base flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                  See AI Chatbot
                </a>
              </div>
            </div>

            {/* Right Column: Product-in-Context Visual */}
            <div className="relative group hidden lg:block reveal reveal-delay-2">
              <div className="absolute -inset-10 bg-brand-200/20 blur-3xl rounded-full"></div>
              
              <div className="relative bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl animate-float overflow-hidden border-[6px] border-slate-800">
                <div className="relative aspect-16/10 overflow-hidden rounded-4xl bg-slate-100">
                  <img src="login2.jpg" className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700" alt="Campus Life" />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute inset-x-4 top-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="text-[10px] font-bold text-white tracking-widest uppercase">System Live</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <p className="text-white/70 text-[10px] font-bold uppercase tracking-wider mb-1">Active Module</p>
                    <h4 className="text-white font-heading font-bold text-lg">Student Life & Graduation</h4>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -bottom-8 -left-12 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white p-5 w-60 animate-float-delayed">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-slate-900">AI Assistant</p>
                    <p className="text-[10px] text-emerald-600 font-bold uppercase">Online Now</p>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100 italic text-[11px] text-slate-500">
                  "How can I help you today?"
                </div>
              </div>

              <div className="absolute -top-10 -right-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white p-5 w-52 animate-float-slow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-slate-900">Live Attendance</p>
                    <p className="text-[10px] text-slate-400 font-medium">Real-time sync</p>
                  </div>
                </div>
                <div className="flex items-end gap-1.5">
                  <p className="text-2xl font-heading font-bold text-emerald-600">96.8%</p>
                  <div className="flex flex-col mb-1.5">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7l-4 4-2-2a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" clipRule="evenodd"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 pt-16 border-t border-slate-100 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto reveal">
            <div className="stat-card">
              <p className="font-heading font-extrabold text-4xl linear-text">3</p>
              <p className="text-slate-500 text-[11px] font-body uppercase tracking-wider mt-1">User Roles</p>
            </div>
            <div className="stat-card">
              <p className="font-heading font-extrabold text-4xl linear-text">15+</p>
              <p className="text-slate-500 text-[11px] font-body uppercase tracking-wider mt-1">Core Modules</p>
            </div>
            <div className="stat-card">
              <p className="font-heading font-extrabold text-4xl linear-text">24/7</p>
              <p className="text-slate-500 text-[11px] font-body uppercase tracking-wider mt-1">AI Assistance</p>
            </div>
            <div className="stat-card">
              <p className="font-heading font-extrabold text-4xl linear-text">100%</p>
              <p className="text-slate-500 text-[11px] font-body uppercase tracking-wider mt-1">Web-Based</p>
            </div>
            <div className="stat-card">
              <p className="font-heading font-extrabold text-4xl linear-text">50+</p>
              <p className="text-slate-500 text-[11px] font-body uppercase tracking-wider mt-1">Colleges</p>
            </div>
            <div className="stat-card">
              <p className="font-heading font-extrabold text-4xl linear-text">4.9/5</p>
              <p className="text-slate-500 text-[11px] font-body uppercase tracking-wider mt-1">Avg Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ WHO IT'S FOR ═══════════════════════════════ */}
      <section id="roles" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-3">Who It Serves</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 mb-5">Three Portals. One System.</h2>
            <p className="text-slate-600 font-body max-w-xl mx-auto text-lg">Every stakeholder gets a purpose-built experience — tailored access, relevant data, and streamlined workflows.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-7">
            {/* Student */}
            <div className="card-base rounded-3xl overflow-hidden reveal">
              <div className="h-1 bg-linear-to-r from-emerald-500 to-emerald-400"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-20 h-20 rounded-2xl icon-wrap overflow-hidden p-2">
                <img src="services_student.png" alt="Student Icon" className="w-full h-full " />
                  </div>
                  <span className="role-student text-[10px] font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider">For Students</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Student Portal</h3>
                <p className="text-slate-600 font-body text-sm leading-relaxed mb-6">Your entire college life, digitally organized. Access everything you need — from attendance to assignments — in one clean, personal dashboard.</p>
                <ul className="space-y-2.5 text-sm font-body text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>Personal profile & academic records</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>Attendance, results & exam registration</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>Circulars, events & academic calendar</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>Fee overview, transport & document requests</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>Discussion forum & faculty chat</li>
                </ul>
              </div>
            </div>

            {/* Faculty */}
            <div className="card-base rounded-3xl overflow-hidden reveal reveal-delay-2">
              <div className="h-1 bg-linear-to-r from-amber-500 to-yellow-400"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl icon-wrap overflow-hidden p-2">
                <img src="services_faculty.jpg" alt="Faculty Icon" className="w-full h-full object-contain" />
                  </div>
                  <span className="role-faculty text-[10px] font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider">For Faculty</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Faculty Portal</h3>
                <p className="text-slate-600 font-body text-sm leading-relaxed mb-6">Teach smarter, manage easier. A dedicated workspace for managing classes, tracking student progress, and fulfilling academic responsibilities efficiently.</p>
                <ul className="space-y-2.5 text-sm font-body text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>Attendance creation, marking & management</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>Upload internal marks & generate reports</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>Assigned class overview & timetable</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>Create timed exams & upload assignments</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>Student remarks, mentoring & secure chat</li>
                </ul>
              </div>
            </div>

            {/* Admin */}
            <div className="card-base rounded-3xl overflow-hidden reveal reveal-delay-4">
              <div className="h-1 bg-linear-to-r from-violet-500 to-violet-400"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl icon-wrap overflow-hidden p-2">
                <img src="services_admin.png" alt="Admin Icon" className="w-full h-full object-contain" />
                  </div>
                  <span className="role-admin text-[10px] font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider">For Administrators</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Admin Portal</h3>
                <p className="text-slate-600 font-body text-sm leading-relaxed mb-6">Complete institutional control at your fingertips. Manage users, structure academics, monitor activity, and broadcast information — all from one secure panel.</p>
                <ul className="space-y-2.5 text-sm font-body text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0"></span>Add, update, manage all users & roles</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0"></span>Timetables, exam scheduling & result upload</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0"></span>Publish circulars & broadcast announcements</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0"></span>Fee structure definition & due monitoring</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0"></span>Chat moderation & activity audit logs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-10 lg:mx-32"></div>

      {/* ═══════════════════════════════ CORE SERVICES ═══════════════════════════════ */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-3">Core Services</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 mb-5">What CampusIQ Does for You</h2>
            <p className="text-slate-600 font-body max-w-2xl mx-auto text-lg">Six powerful service pillars that cover the complete operational lifecycle of a college — from classroom to administration.</p>
          </div>

          <div className="space-y-8">
            {/* Service 1: Attendance */}
            <div className="card-base rounded-3xl p-6 lg:p-8 reveal border-l-[3px] border-l-emerald-500 bg-linear-to-r from-emerald-50/40 to-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-emerald-50 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="flex flex-col md:flex-row gap-6 items-center relative z-10">
                <div className="w-32 h-32 rounded-3xl bg-slate-50/80 border border-slate-100 shadow-sm shadow-brand-100/20 overflow-hidden shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <img src="services_attendance.jpeg" alt="Attendance System" className="w-full h-full" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Smart Attendance System</h3>
                  <p className="text-slate-600 font-body text-sm mb-4">Eliminate paperwork with digital session marking, automated percentage calculations, and instant low-attendance alerts for students.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">Digital Marking</span>
                    <span className="tag">Auto-Alerts</span>
                    <span className="tag">Reports</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: Exams */}
            <div className="card-base rounded-3xl p-6 lg:p-8 reveal border-l-[3px] border-l-violet-400 bg-linear-to-r from-violet-50/40 to-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-violet-50 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="flex flex-col md:flex-row gap-6 items-center relative z-10">
                <div className="w-32 h-32 rounded-3xl bg-slate-50/80 border border-slate-100 shadow-sm shadow-brand-100/20 overflow-hidden shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <img src="services_exams.jpg" alt="Examination & Results" className="w-full h-full" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Examination & Results</h3>
                  <p className="text-slate-600 font-body text-sm mb-4">Complete exam lifecycle management from scheduling and registration to automated result publication and progress tracking.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">Scheduling</span>
                    <span className="tag">Result Upload</span>
                    <span className="tag">GPA Tracking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3: Circulars */}
            <div className="card-base rounded-3xl p-6 lg:p-8 reveal border-l-[3px] border-l-amber-400 bg-linear-to-r from-amber-50/40 to-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-amber-50 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="flex flex-col md:flex-row gap-6 items-center relative z-10">
                <div className="w-32 h-32 rounded-3xl bg-slate-50/80 border border-slate-100 shadow-sm shadow-brand-100/20 overflow-hidden shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <img src="services_circulars.webp" alt="Circulars & Notifications" className="w-full h-full" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Circulars & Notifications</h3>
                  <p className="text-slate-600 font-body text-sm mb-4">Instant official communication for events, exams, and notices directly to every stakeholder's dashboard.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">Push Alerts</span>
                    <span className="tag">Event Feed</span>
                    <span className="tag">Archive</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4: Communication */}
            <div className="card-base rounded-3xl p-6 lg:p-8 reveal border-l-[3px] border-l-brand-400 bg-linear-to-r from-brand-50/40 to-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-brand-50 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="flex flex-col md:flex-row gap-6 items-center relative z-10">
                <div className="w-32 h-32 rounded-3xl bg-slate-50/80 border border-slate-100 shadow-sm shadow-brand-100/20 overflow-hidden shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <img src="services_realtime.webp" alt="Real-Time Communication" className="w-full h-full" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Real-Time Communication</h3>
                  <p className="text-slate-600 font-body text-sm mb-4">Secure, privacy-first messaging for faculty and students without exposing personal contact details.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">Encrypted Chat</span>
                    <span className="tag">Class Groups</span>
                    <span className="tag">Privacy First</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 5: Forum */}
            <div className="card-base rounded-3xl p-6 lg:p-8 reveal border-l-[3px] border-l-rose-400 bg-linear-to-r from-rose-50/40 to-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-rose-50 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="flex flex-col md:flex-row gap-6 items-center relative z-10">
                <div className="w-32 h-32 rounded-3xl bg-slate-50/80 border border-slate-100 shadow-sm shadow-brand-100/20 overflow-hidden shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <img src="services_discussion.jpg" alt="Student Discussion Forum" className="w-full h-full" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Student Discussion Forum</h3>
                  <p className="text-slate-600 font-body text-sm mb-4">A moderated community space for Doubts, academic collaboration, and placement preparation.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">Academic Q&A</span>
                    <span className="tag">Placements</span>
                    <span className="tag">Moderated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 6: Documents */}
            <div className="card-base rounded-3xl p-6 lg:p-8 reveal border-l-[3px] border-l-teal-400 bg-linear-to-r from-teal-50/40 to-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-teal-50 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="flex flex-col md:flex-row gap-6 items-center relative z-10">
                <div className="w-32 h-32 rounded-3xl bg-slate-50/80 border border-slate-100 shadow-sm shadow-brand-100/20 overflow-hidden shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <img src="services_file.webp" alt="Document Management" className="w-full h-full" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Document Management</h3>
                  <p className="text-slate-600 font-body text-sm mb-4">Paperless portal for credential uploads and official document requests with real-time status tracking.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">Requests</span>
                    <span className="tag">Upload Portal</span>
                    <span className="tag">Digital TC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-10 lg:mx-32"></div>

      {/* ═══════════════════════════════ AI CHATBOT ═══════════════════════════════ */}
      <section id="ai" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="reveal">
              <p className="section-label mb-3">AI-Powered Feature</p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 mb-5 leading-tight">
                24/7 College<br/>
                <span className="linear-text">AI Assistant</span>
              </h2>
              <p className="text-slate-600 font-body leading-relaxed mb-8 text-lg">
                The most powerful feature of the platform — an intelligent chatbot powered by Google Gemini AI, trained specifically on your college's data. It provides instant, accurate answers to common queries around the clock, dramatically reducing dependency on office staff and manual processes.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl icon-wrap flex items-center justify-center shrink-0 mt-0.5 overflow-hidden p-1.5">
                <img src="services_department.png" alt="Dept Icon" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-slate-900 text-sm">Faculty & Department Info</p>
                    <p className="text-slate-600 font-body text-sm">Instantly know any faculty's cabin number, department, designation, and status.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl icon-wrap flex items-center justify-center shrink-0 mt-0.5 overflow-hidden p-1.5">
                <img src="services_examschedule.png" alt="Exam Icon" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-slate-900 text-sm">Exam Schedules & Timetables</p>
                    <p className="text-slate-600 font-body text-sm">Get upcoming exam dates, today's class schedule, and academic calendar details.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl icon-wrap flex items-center justify-center shrink-0 mt-0.5 overflow-hidden p-1.5">
                <img src="services_navigate.png" alt="Nav Icon" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-slate-900 text-sm">Room & Campus Navigation</p>
                    <p className="text-slate-600 font-body text-sm">Find any classroom, block, lab, or facility location across the campus instantly.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl icon-wrap flex items-center justify-center shrink-0 mt-0.5 overflow-hidden p-1.5">
                <img src="services_rules.png" alt="Circular Icon" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-slate-900 text-sm">College Rules & Circulars</p>
                    <p className="text-slate-600 font-body text-sm">Ask about regulations, recent circulars, attendance policies, and event details at any time.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-brand-50/50 border border-brand-100/50">
                <svg className="w-5 h-5 text-brand-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                <p className="text-slate-700 font-body text-sm"><span className="text-brand-700 font-semibold">Impact:</span> Reduces repetitive office queries by over 70%, frees staff for higher-value work, and provides students immediate help 24/7.</p>
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="rounded-3xl overflow-hidden bg-slate-50 border border-brand-200/50 shadow-2xl shadow-brand-100/20">
                {/* Chat header */}
                <div className="bg-linear-to-r from-brand-600 to-brand-500 px-6 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                <img src="services_chatbot.png" alt="AI Icon" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-bold text-white text-sm">CampusIQ Assistant</p>
                    <p className="text-brand-50 text-[10px] font-body">Powered by Gemini AI · Always available</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-emerald-400 text-xs font-body">Online</span>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-6 space-y-4 min-h-72">
                  <div className="flex justify-start">
                    <div className="bubble-user rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                      <p className="text-sm font-body text-slate-800">Where is Prof. Sharma's cabin?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bubble-bot rounded-2xl rounded-tr-sm px-4 py-3 max-w-sm">
                      <p className="text-sm font-body text-brand-900">Prof. Sharma — <strong className="text-brand-950 font-bold">HOD, Computer Science</strong> is located at <strong className="text-brand-950 font-bold">Block A, Cabin 204</strong>. Office hours are <strong className="text-brand-950 font-bold">Mon–Fri, 10am–1pm</strong>.</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bubble-user rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                      <p className="text-sm font-body text-slate-800">When is the mid-semester exam?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bubble-bot rounded-2xl rounded-tr-sm px-4 py-3 max-w-sm">
                      <p className="text-sm font-body text-brand-900">Mid-semester exams for CSE are scheduled from <strong className="text-brand-950 font-bold">March 10 – 18, 2025</strong>. Your full exam schedule is also available in your portal dashboard.</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bubble-user rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                      <p className="text-sm font-body text-slate-800">What are today's classes?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bubble-bot rounded-2xl rounded-tr-sm px-4 py-3 max-w-sm">
                      <p className="text-sm font-body text-brand-900">Today (Thursday) you have: <strong className="text-brand-950 font-bold">DBMS at 9am (Block B-301)</strong>, <strong className="text-brand-950 font-bold">OS Lab at 11am (Lab 102)</strong>, and <strong className="text-brand-950 font-bold">CN at 2pm (Block A-105)</strong>.</p>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="border-t px-5 py-4 flex items-center gap-3 border-slate-100">
                  <div className="flex-1 flex items-center gap-2 rounded-xl px-4 py-2.5 bg-slate-50 border border-slate-200">
                    <input type="text" placeholder="Ask anything about college…" className="bg-transparent flex-1 text-sm font-body text-slate-900 placeholder-slate-400 focus:outline-none" />
                  </div>
                  <button className="btn-primary w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-10 lg:mx-32"></div>

      {/* ═══════════════════════════════ PRICING SECTION ═══════════════════════════════ */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-3">Pricing Plans</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 mb-5">Flexible Plans for Every Institution</h2>
            <p className="text-slate-600 font-body max-w-2xl mx-auto text-lg">Choose the perfect tier to modernize your campus operations and enhance student experience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            
            <div className="card-base plan-basic rounded-4xl p-8 flex flex-col reveal">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl icon-slate flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Basic</h3>
                <p className="text-slate-500 font-body text-sm">Essential digital tools for small colleges looking to start their digital journey.</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-heading font-extrabold text-slate-900">$199</span>
                <span className="text-slate-500 text-sm font-body">/month</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-sm font-body text-slate-600">
                  <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Smart Attendance
                </li>
                <li className="flex items-center gap-3 text-sm font-body text-slate-600">
                  <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Student Portal
                </li>
                <li className="flex items-center gap-3 text-sm font-body text-slate-600">
                  <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Circulars & Notices
                </li>
              </ul>
              <button className="btn-outline w-full py-4 rounded-xl text-sm">Start Basic</button>
            </div>

            <div className="card-base plan-pro rounded-4xl p-8 flex flex-col reveal reveal-delay-2 scale-105 z-10 border-brand-400 shadow-2xl">
              <div className="absolute top-6 right-8">
                <span className="bg-brand-600 text-white text-[10px] font-heading font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">Most Popular</span>
              </div>
              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl icon-indigo flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.143-7.714L1 12l7.714-2.143L11 3z"/></svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Pro</h3>
                <p className="text-slate-500 font-body text-sm">The sweet spot for growing campuses needing AI automation.</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-heading font-extrabold text-brand-600">$499</span>
                <span className="text-slate-500 text-sm font-body">/month</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-sm font-body text-slate-800 font-medium">
                  <svg className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Google Gemini AI Assistant
                </li>
                <li className="flex items-center gap-3 text-sm font-body text-slate-600">
                  <svg className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Exam & Results System
                </li>
                <li className="flex items-center gap-3 text-sm font-body text-slate-600">
                  <svg className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Real-time Communication
                </li>
              </ul>
              <button className="btn-primary w-full py-4 rounded-xl text-sm shadow-xl">Upgrade to Pro</button>
            </div>

            <div className="card-base plan-premium rounded-4xl p-8 flex flex-col reveal reveal-delay-4 border-amber-300 shadow-amber-50">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl icon-gold flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Premium</h3>
                <p className="text-slate-500 font-body text-sm">Full enterprise suite for large universities and multi-campus setups.</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-heading font-extrabold text-amber-600">$999</span>
                <span className="text-slate-500 text-sm font-body">/month</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-sm font-body text-slate-800 font-medium">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Student Discussion Forum
                </li>
                <li className="flex items-center gap-3 text-sm font-body text-slate-800 font-medium">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Priority Enterprise Support
                </li>
                <li className="flex items-center gap-3 text-sm font-body text-slate-600">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  White-labeled Mobile App
                </li>
              </ul>
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-heading font-semibold py-4 rounded-xl text-sm transition-all shadow-lg shadow-amber-200">Go Premium</button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}