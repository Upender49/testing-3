export function Footer() {
  return (
    <footer class="bg-blue-200/70 text-slate-500 py-16 px-6 font-sans border-t border-slate-200">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-blue-200">
              A
            </div>
            <h2 class="text-slate-800 text-lg font-bold leading-tight uppercase tracking-tight">
              Amazing Grace
              <br />
              <span class="text-blue-600 text-[10px] font-bold tracking-[0.3em]">
                College ERP
              </span>
            </h2>
          </div>
          <p class="text-sm leading-relaxed text-slate-500">
            A centralized, Web-Based AI integrated platform designed to simplify
            college operations and enhance communication across all
            stakeholders.
          </p>
          <div class="flex gap-4 ">
            <span class="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer text-slate-600 text-xs shadow-sm">
              FB
            </span>
            <span class="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all cursor-pointer text-slate-600 text-xs shadow-sm">
              LN
            </span>
          </div>
        </div>

        <div>
          <h3 class="text-slate-800 font-semibold mb-6 text-sm uppercase tracking-widest border-l-4 border-blue-600 pl-3">
            Access Portals
          </h3>
          <ul class="space-y-4 text-sm ">
            <li>
              <a
                href="#"
                class="hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                Student Login Portal
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                Faculty Dashboard Access
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                Administration Login
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-slate-800 font-semibold mb-6 text-sm uppercase tracking-widest border-l-4 border-blue-600 pl-3">
            Innovations
          </h3>
          <ul class="space-y-4 text-sm ">
            <li class="group">
              <span class="block text-slate-700 font-medium group-hover:text-blue-600 transition-colors">
                AI College Chatbot{" "}
              </span>
              <span class="text-[11px] text-slate-400 mt-0.5 block">
                24/7 Virtual Assistance for Queries{" "}
              </span>
            </li>
            <li class="group">
              <span class="block text-slate-700 font-medium group-hover:text-blue-600 transition-colors">
                Discussion Forum{" "}
              </span>
              <span class="text-[11px] text-slate-400 mt-0.5 block">
                Academic Collaboration & Engagement
              </span>
            </li>
            <li class="group">
              <span class="block text-slate-700 font-medium group-hover:text-blue-600 transition-colors">
                Digital Tracking
              </span>
              <span class="text-[11px] text-slate-400 mt-0.5 block">
                Automated Attendance & Results
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-slate-800 font-semibold mb-6 text-sm uppercase tracking-widest border-l-4 border-blue-600 pl-3">
            Design & Credits
          </h3>
          <p class="text-xs mb-4 italic leading-relaxed text-slate-500">
            To maintain design integrity and respect copyright, we credit our
            visual sources:
          </p>
          <ul class="space-y-3 text-[11px]">
            <li>
              <a
                href="https://www.freepik.com/"
                target="_blank"
                class="text-blue-600 font-medium hover:underline"
              >
                Freepik - Icons{" "}
              </a>
            </li>
            <li>
              <a
                href="http://lottiefiles.com/"
                target="_blank"
                class="text-blue-600 font-medium hover:underline"
              >
                LottieFiles - Animations{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col lg:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-slate-500">
        <div class="text-center lg:text-left">
          <p>© 2026 AI Integrated College ERP.</p>
          <p class="mt-1 text-slate-400">
            Securely Built with Bcrypt Hashing & OAuth 2.0.
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-8">
          <a href="#" class="hover:text-blue-600 transition-colors font-medium">
            Privacy Policy
          </a>
          <a href="#" class="hover:text-blue-600 transition-colors font-medium">
            Data Security
          </a>
          <a href="#" class="hover:text-blue-600 transition-colors font-medium">
            Terms of Service
          </a>
          <a href="#" class="hover:text-blue-600 transition-colors font-medium">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
