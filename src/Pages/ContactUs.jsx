import { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

// We put the background in a local component to keep the main code clean
const ContactBackground = () => (
  <>
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="blob-1 absolute -top-32 -left-32 w-125 h-125 rounded-full blur-3xl" style={{ background: 'rgba(59,130,246,0.12)' }}></div>
      <div className="blob-2 absolute top-1/4 -right-40 w-100 h-100 rounded-full blur-3xl" style={{ background: 'rgba(139,92,246,0.10)' }}></div>
      <div className="blob-3 absolute top-1/2 left-1/4 w-87.5 h-87.5 rounded-full blur-3xl blob-pulse" style={{ background: 'rgba(16,185,129,0.08)' }}></div>
      <div className="blob-4 absolute bottom-20 right-1/4 w-112.5 h-112.5 rounded-full blur-3xl" style={{ background: 'rgba(59,130,246,0.10)' }}></div>
      <div className="blob-2 absolute -bottom-40 -left-20 w-95 h-95 rounded-full blur-3xl blob-pulse" style={{ background: 'rgba(245,158,11,0.08)' }}></div>

      {/* Floating ERP images */}
      <img src="services_chatbot.png" alt="" className="absolute top-[4%] left-[20%] w-20 h-20 opacity-[0.12] animate-float-drift-1" />
      <img src="services_faculty.png" alt="" className="absolute top-[75%] left-[40%] w-18 h-18 opacity-[0.10] animate-float-drift-4" />
      <img src="services_administration.jpg" alt="" className="absolute top-[55%] left-[65%] w-16 h-16 opacity-[0.11] animate-float-drift-6" />
      <img src="sevices_exams.png" alt="" className="absolute top-[12%] left-[55%] w-14 h-14 opacity-[0.13] animate-float-drift-2" />
      <img src="../images/notifications.png" alt="" className="absolute top-[22%] left-[35%] w-12 h-12 opacity-[0.14] animate-float-drift-3" />
      <img src="services_discussion.png" alt="" className="absolute top-[50%] left-[25%] w-14 h-14 opacity-[0.11] animate-float-drift-1" />
      <img src="../images/fee.png" alt="" className="absolute top-[40%] left-[50%] w-12 h-12 opacity-[0.12] animate-float-drift-4" />
      <img src="../images/secure.png" alt="" className="absolute top-[8%] left-[82%] w-10 h-10 opacity-[0.15] animate-float-drift-3" />
      <img src="../images/doc.png" alt="" className="absolute top-[60%] left-[12%] w-10 h-10 opacity-[0.13] animate-float-drift-2" />
      <img src="../images/navigate.png" alt="" className="absolute top-[88%] left-[58%] w-9 h-9 opacity-[0.14] animate-float-drift-5" />
      <img src="../images/efficiency.png" alt="" className="absolute top-[85%] left-[18%] w-8 h-8 opacity-[0.16] animate-float-drift-6" />

      {/* Hexagonal network SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
        <polygon className="hex-line-thick" points="120,80 200,40 280,80 280,160 200,200 120,160" />
        <polygon className="hex-line" points="280,80 340,50 400,80 400,140 340,170 280,140" />
        <polygon className="hex-line" points="120,160 200,200 200,280 120,320 40,280 40,200" />
        <polygon className="hex-light" points="280,160 340,130 400,160 400,240 340,270 280,240" />
        <polygon className="hex-line" points="400,80 440,55 480,80 480,130 440,155 400,130" />
        <polygon className="hex-light" points="60,60 85,45 110,60 110,90 85,105 60,90" />
        <polygon className="hex-line-thick" points="850,120 950,70 1050,120 1050,220 950,270 850,220" />
        <polygon className="hex-line" points="1050,120 1120,80 1190,120 1190,200 1120,240 1050,200" />
        <polygon className="hex-line" points="850,220 920,180 990,220 990,300 920,340 850,300" />
        <polygon className="hex-light" points="780,90 805,75 830,90 830,120 805,135 780,120" />
        <polygon className="hex-line" points="700,30 730,12 760,30 760,66 730,84 700,66" />
        <polygon className="hex-line-thick" points="500,450 580,410 660,450 660,530 580,570 500,530" />
        <polygon className="hex-line" points="660,450 720,420 780,450 780,510 720,540 660,510" />
        <line className="hex-line" x1="400" y1="130" x2="480" y2="130" />
        <line className="hex-light" x1="760" y1="66" x2="780" y2="90" />
        <line className="hex-line" x1="830" y1="120" x2="850" y2="120" />
        <line className="hex-light" x1="530" y1="160" x2="700" y2="30" />
        <line className="hex-light" x1="660" y1="450" x2="850" y2="300" />
        <circle className="hex-dot" cx="200" cy="40" r="3.5" /><circle className="hex-dot" cx="280" cy="80" r="3" />
        <circle className="hex-dot" cx="200" cy="200" r="4" /><circle className="hex-dot" cx="400" cy="80" r="2.5" />
        <circle className="hex-dot" cx="950" cy="70" r="4" /><circle className="hex-dot" cx="1050" cy="120" r="3.5" />
        <circle className="hex-dot" cx="580" cy="410" r="4" /><circle className="hex-dot" cx="730" cy="12" r="2.5" />
      </svg>
    </div>

    {/* WAVY EDGE SHAPES */}
    <div className="absolute top-50 right-0 w-20 h-125 pointer-events-none z-0 overflow-hidden">
      <svg viewBox="0 0 80 500" fill="none" className="w-full h-full"><path d="M80 0 C80 0,30 60,50 120 C70 180,20 220,35 280 C50 340,15 400,40 460 C55 490,80 500,80 500 Z" fill="url(#cbw1)" opacity="0.35" /><defs><linearlinear id="cbw1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#2563eb" /></linearlinear></defs></svg>
    </div>
    <div className="absolute top-200 left-0 w-17.5 h-112.5 pointer-events-none z-0 overflow-hidden">
      <svg viewBox="0 0 70 450" fill="none" className="w-full h-full"><path d="M0 0 C0 0,45 50,30 110 C15 170,55 220,40 280 C25 340,50 380,35 420 C25 445,0 450,0 450 Z" fill="url(#cvw1)" opacity="0.30" /><defs><linearlinear id="cvw1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="#7c3aed" /></linearlinear></defs></svg>
    </div>
    <div className="absolute top-375 right-0 w-22.5 h-137.5 pointer-events-none z-0 overflow-hidden">
      <svg viewBox="0 0 90 550" fill="none" className="w-full h-full"><path d="M90 0 C90 0,35 70,55 140 C75 210,25 270,45 340 C65 410,20 470,50 520 C65 545,90 550,90 550 Z" fill="url(#cew1)" opacity="0.30" /><defs><linearlinear id="cew1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#059669" /></linearlinear></defs></svg>
    </div>
    <div className="absolute top-550 left-0 w-18.75 h-125 pointer-events-none z-0 overflow-hidden">
      <svg viewBox="0 0 75 500" fill="none" className="w-full h-full"><path d="M0 0 C0 0,50 60,35 130 C20 200,55 250,40 320 C25 390,60 430,40 470 C30 490,0 500,0 500 Z" fill="url(#caw1)" opacity="0.35" /><defs><linearlinear id="caw1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f59e0b" /><stop offset="100%" stopColor="#d97706" /></linearlinear></defs></svg>
    </div>
  </>
);

export  function ContactUs() {
  // State to manage which FAQ is currently open
  const [openFaq, setOpenFaq] = useState(null);

  // Initialize ScrollReveal
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

    return () => sr.destroy();
  }, []);

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    // Add your form submission logic here
  };

  // FAQ Data Array (Makes rendering much cleaner in React)
  const faqs = [
    {
      question: "How long does it take to deploy CampusIQ?",
      answer: "Typical deployment takes 2–4 weeks depending on data volume and customization requirements. Our team handles the complete setup, data migration, and training for your staff."
    },
    {
      question: "Is CampusIQ suitable for small colleges?",
      answer: "Absolutely! Our Basic plan is specifically designed for smaller institutions looking to digitize their operations. You can always scale up as your needs grow."
    },
    {
      question: "What kind of support do you provide after deployment?",
      answer: "All plans include email support and documentation access. Pro and Premium plans include priority support with dedicated account managers and faster response times."
    },
    {
      question: "Is the AI Chatbot customizable to our college?",
      answer: "Yes! The AI assistant is trained on your college's specific data — including faculty details, department info, timetables, exam schedules, and campus locations — so it gives accurate, context-aware responses."
    },
    {
      question: "How secure is our data on CampusIQ?",
      answer: "We use industry-standard encryption (SSL/TLS), role-based access controls, and regular security audits. All data is stored on secure cloud infrastructure with regular backups and compliance with data protection regulations."
    },
    {
      question: "Can we try CampusIQ before purchasing?",
      answer: "Yes! We offer a free guided demo where our team walks your institution through the entire platform. You can also request a 14-day pilot program to test with real data."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="mesh-bg font-body text-slate-600 antialiased selection:bg-brand-100 selection:text-brand-900 relative min-h-screen">
      
      {/* Renders our separated animated background elements */}
      <ContactBackground />

      {/* ═══════════════════ PAGE HEADER ═══════════════════ */}
      <section className="relative pt-28 pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="badge-light mb-3 inline-block shadow-sm">Contact & Support</span>
              <h1 className="font-heading font-bold text-3xl md:text-4xl text-slate-900 tracking-tight">Get in touch with <span className="linear-text">CampusIQ</span></h1>
              <p className="text-slate-500 text-sm mt-2 max-w-lg">Schedule a demo, ask about pricing, or reach our support team — we typically respond within 24 hours.</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-emerald-700 text-xs font-heading font-bold uppercase tracking-wider">Online</span>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-xs text-slate-400 font-body">Response time</p>
                <p className="text-sm font-heading font-bold text-slate-900">Under 24h</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"></div>
      </section>

      {/* ═══════════════════ CONTACT FORM ═══════════════════ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="reveal">
            <div className="bg-white rounded-4xl p-8 lg:p-10 border border-slate-200 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-bl from-brand-100/40 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="relative z-10">
                <p className="section-label mb-2">Get In Touch</p>
                <h2 className="font-heading font-bold text-3xl text-slate-900 mb-2">Request a Demo or Ask a Question</h2>
                <p className="text-slate-500 font-body text-sm mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

                <form className="space-y-5" onSubmit={handleFormSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-heading font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Full Name</label>
                      <input type="text" placeholder="John Doe" className="input-field" id="contact-name" />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Institution Name</label>
                      <input type="text" placeholder="e.g. ABC Engineering College" className="input-field" id="contact-institution" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-heading font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Email Address</label>
                      <input type="email" placeholder="you@institution.edu" className="input-field" id="contact-email" />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Phone Number</label>
                      <input type="tel" placeholder="+91 98765 43210" className="input-field" id="contact-phone" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Inquiry Type</label>
                    <select className="input-field" id="contact-inquiry" defaultValue="">
                      <option value="" disabled>Select an option</option>
                      <option value="demo">Schedule a Demo</option>
                      <option value="pricing">Pricing & Plans</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea rows="4" placeholder="Tell us about your requirements or questions..." className="input-field resize-none" id="contact-message"></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full py-3.5 rounded-xl text-sm flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ INFO CARDS 2×2 ═══════════════════ */}
      <section className="py-16 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12 reveal">
            <p className="section-label mb-3">Reach Us Directly</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-4">Other Ways to Connect</h2>
            <p className="text-slate-500 font-body max-w-xl mx-auto">Choose the right channel for your needs — from sales inquiries to technical help.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Sales */}
            <div className="card-base rounded-2xl p-6 border-l-[3px] border-l-brand-500 bg-linear-to-r from-brand-50/30 to-white reveal">
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-brand-200/30 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">Sales & Demos</h3>
                <p className="text-slate-500 text-sm mb-3">Interested in CampusIQ for your institution?</p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    sales@campusiq.com
                  </p>
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Support */}
            <div className="card-base rounded-2xl p-6 border-l-[3px] border-l-emerald-500 bg-linear-to-r from-emerald-50/30 to-white reveal reveal-delay-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-emerald-200/30 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.96m-5.1 5.11h13.02M4.93 19.07A10 10 0 1119.07 4.93 10 10 0 014.93 19.07z" /></svg>
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">Technical Support</h3>
                <p className="text-slate-500 text-sm mb-3">Already a customer? Our support team is here for you.</p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    support@campusiq.com
                  </p>
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Mon – Sat, 9 AM – 6 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* Partnership */}
            <div className="card-base rounded-2xl p-6 border-l-[3px] border-l-violet-500 bg-linear-to-r from-violet-50/30 to-white reveal reveal-delay-2">
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-violet-200/30 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">Partnerships</h3>
                <p className="text-slate-500 text-sm mb-3">Interested in reselling or integrating CampusIQ?</p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-700 flex items-center gap-2">
                    <svg className="w-4 h-4 text-violet-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    partners@campusiq.com
                  </p>
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="card-base rounded-2xl p-6 border-l-[3px] border-l-amber-500 bg-linear-to-r from-amber-50/30 to-white reveal reveal-delay-3">
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-amber-200/30 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">Our Office</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  CampusIQ Technologies<br />
                  Hyderabad, Telangana<br />
                  India — 500081
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent mx-10 lg:mx-32"></div>

      {/* ═══════════════════ FAQ SECTION ═══════════════════ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">FAQ</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-body max-w-xl mx-auto">Quick answers to common questions about CampusIQ — from onboarding to security.</p>
          </div>

          <div className="space-y-4 reveal reveal-delay-1">
            {/* We map through our array of FAQs rather than writing out all 6 manually! */}
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className={`faq-item bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden ${
                    isOpen ? 'ring-2 ring-brand-200 border-brand-300' : 'border-slate-200'
                  }`}
                >
                  <button 
                    onClick={() => toggleFaq(index)} 
                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
                  >
                    <h3 className="font-heading font-semibold text-slate-900 text-[15px]">{faq.question}</h3>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-brand-50 transition-colors">
                      <svg 
                        className="w-4 h-4 text-slate-500 group-hover:text-brand-600 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        viewBox="0 0 24 24"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="faq-content px-6 pb-5">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}