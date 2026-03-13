import { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import BackgroundEffects  from '../components/BackgroundEffects';

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
      <BackgroundEffects />

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
                <div className="w-16 h-16 rounded-2xl Icon-wrap overflow-hidden p-2">
                <img src="contact_sales.png" alt="Student Icon" className="w-full h-full object-contain" />
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
                <div className="w-16 h-16 rounded-2xl Icon-wrap overflow-hidden p-2">
                <img src="contact_support.jpg" alt="Student Icon" className="w-full h-full object-contain" />
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
                <div className="w-16 h-16 rounded-2xl Icon-wrap overflow-hidden p-2">
                <img src="contact_partnership.png" alt="Student Icon" className="w-full h-full object-contain" />
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
                <div className="w-16 h-16 rounded-2xl Icon-wrap overflow-hidden p-2">
                <img src="contact_office.png" alt="Student Icon" className="w-full h-full object-contain" />
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