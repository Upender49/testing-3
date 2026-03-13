import { useState, useEffect } from "react";
import {
    Menu, MessageSquare, Bell, LayoutDashboard, UserCircle, ChevronDown, User, CloudUpload,
    GraduationCap, Pen, BookOpenCheck, FileSpreadsheet, FileText, CalendarDays, Clock, Trophy,
    Megaphone, BellRing, PartyPopper, LifeBuoy, Bus, Wallet, FilePlus, LogOut, Contact, KeyRound
} from "lucide-react";

export function StudentSidebar() {
    // --- STATE MANAGEMENT ---
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Desktop shrink toggle
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);           // Mobile slide-out toggle
    const [openDropdowns, setOpenDropdowns] = useState({
        profile: true,
        academics: true,
        announcements: true,
        services: true,
        requests: true
    }); // Tracks which accordions are open
    const [activeMenu, setActiveMenu] = useState("dashboard");           // Tracks the highlighted link

    // Responsive Behavior logic
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                // Mobile: Hide completely
                setIsSidebarOpen(false);
                setIsSidebarCollapsed(false);
            } else if (width < 768) {
                // Tablet: Show as mini-sidebar
                setIsSidebarCollapsed(true);
            } else {
                // Desktop: Show full sidebar
                setIsSidebarCollapsed(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Run once on mount

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // User Data State
    const [userdata, setUserData] = useState({
        "_id": "65f0a001c3d4e5f600000101",
        "first_name": "Aarav",
        "last_name": "Patel",
        "roll_no": "CS2023001",
        "password": "$2b$10$hashedpasswordstudent1",
        "phone_number": "+91-9876541111",
        "date_of_birth": "2005-04-12T00:00:00.000Z",
        "college_mail": "aarav.p@student.git.edu",
        "person_mail": "aarav.patel05@gmail.com",
        "city": "Bengaluru",
        "batch": 2023,
        "profile": "65f0a006c3d4e5f600000631",
        "college": "65f0a005c3d4e5f600000501",
        "gender": "male",
        "pin_code": "560037",
        "admission_type": "regular",
        "state": "Karnataka",
        "status": "active",
        "country": "india",
        "academic": {
            "_id": { "$oid": "69a2d579783b1d3cb7b43697" },
            "student_id": "65f0a001c3d4e5f600000101",
            "branch": "Computer Science",
            "aca_type": "major",
            "section": 1,
            "years": [
                {
                    "year": 1,
                    "from": "2023",
                    "to": "2024",
                    "semesters": {
                        "sem_number": 1,
                        "sem_month_from": "August",
                        "sem_month_to": "December",
                        "sem_date_from": "2023-08-16",
                        "sem_date_to": "2023-12-20",
                        "registerd_subjects": [
                            { "subject_id": "65f0a003c3d4e5f600000301", "attendance": "65f0a004c3d4e5f600000401", "teacher": "65f0a002c3d4e5f600000201" },
                            { "subject_id": "65f0a003c3d4e5f600000302", "attendance": "65f0a004c3d4e5f600000402", "teacher": "65f0a002c3d4e5f600000202" }
                        ]
                    },
                    "mentor": "65f0a002c3d4e5f600000205"
                }
            ],
            "college": "65f0a005c3d4e5f600000501"
        },
        "results": "65f0a011c3d4e5f600001101",
        "uploads": "65f0a006c3d4e5f600000632",
        "events_registered": ["65f0a012c3d4e5f600001201"],
        "ai_chat": ["65f0a007c3d4e5f600000711"],
        "address_line_1": "14 Cross, Marathahalli",
        "address_line_2": "Near Bridge",
        "createdAt": "2023-08-01T10:00:00.000Z",
        "updatedAt": "2023-09-15T10:00:00.000Z"
    });

    // --- HELPER FUNCTIONS ---
    // Toggles a specific dropdown
    const handleDropdownClick = (dropdownName) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [dropdownName]: !prev[dropdownName]
        }));
    };

    // Auto-close on mobile when selecting a menu
    const handleMenuSelection = (menuId) => {
        setActiveMenu(menuId);
        if (window.innerWidth < 640) {
            setIsSidebarOpen(false);
        }
    };

    // Generates the repeating Tailwind classes for the submenu links + handles active state
    const getSubMenuLinkClass = (menuId) => {
        const baseClass = "menu-link flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 ease-out hover:bg-white/[0.08] hover:translate-x-1.5 hover:brightness-110 text-white group";
        // Glassmorphism active styling
        const activeClass = activeMenu === menuId ? "!bg-white/20 backdrop-blur-md !text-white shadow-inner border border-white/10 brightness-110 translate-x-1" : "";
        return `${baseClass} ${activeClass}`;
    };

    return (
        <div className="bg-gray-50 flex flex-col h-dvh overflow-hidden font-body">
            {/* --- TOP HEADER --- */}
            <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4 lg:px-6 shrink-0 z-40 border-b border-gray-200">
                {/* Left Side: Logos and Toggle */}
                <div className="flex items-center gap-3 sm:gap-6">
                    {/* Hamburger Toggle & Logo Container */}
                    <div id="hamburger-container" className="flex items-center shrink-0 transition-all duration-300 border-r border-gray-200 pr-4 sm:pr-6 gap-3 sm:gap-4">
                        <button
                            onClick={() => {
                                // On mobile, toggle the slide-out overlay. On desktop/tablet, shrink the sidebar.
                                if (window.innerWidth < 640) setIsSidebarOpen(!isSidebarOpen);
                                else setIsSidebarCollapsed(!isSidebarCollapsed);
                            }}
                            className="p-2 -ml-2 sm:ml-0 cursor-pointer text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500/20"
                        >
                            <Menu className="w-5 h-5 stroke-[2.5]" />
                        </button>

                        {/* EduCore Logo */}
                        <div id="educore-logo" className="flex items-center gap-2 shrink-0 transition-all duration-300 group relative">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.827a1 1 0 00-.788 0l-7 3a1 1 0 000 1.846l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.846l-7-3zM3.172 10.757a1 1 0 011.105-.271l5.505 2.359 5.505-2.359a1 1 0 11.788 1.846l-6 2.571a1 1 0 01-.788 0l-6-2.571a1 1 0 01-.505-1.214z" />
                                </svg>
                            </div>
                            <span className="font-heading font-extrabold text-lg text-slate-800 tracking-tight">EDU<span className="text-blue-600">CORE</span></span>
                        </div>
                    </div>

                    {/* College Logo and Name */}
                    <div id="college-info" className="flex items-center gap-3 pl-2 sm:pl-0 group relative">
                        <div className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                            <img src="cvr_logo.png" alt="CVR" onError={(e) => e.currentTarget.src = 'https://ui-avatars.com/api/?name=CVR&background=0D8ABC&color=fff'} className="w-full h-full object-contain p-1" />
                        </div>
                        <span className="font-heading font-bold text-[#1130F8] tracking-wide text-sm sm:text-lg uppercase">CVR COLLEGE of engineering</span>
                    </div>
                </div>

                {/* Right Side: Actions */}
                <div className="flex items-center gap-2 sm:gap-4 font-body">
                    {/* Messages */}
                    <div className="group relative">
                        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
                            <MessageSquare className="w-5 h-5 stroke-2" />
                            <span className="absolute top-1.5 right-1.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full">0</span>
                        </button>
                        {/* Tooltip */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-slate-900 text-white text-[10px] font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl border border-white/10">
                            Messages
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-b-slate-900"></div>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="group relative">
                        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                            <Bell className="w-5 h-5 stroke-2" />
                            <span className="absolute top-1.5 right-1.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full">1</span>
                        </button>
                        {/* Tooltip */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-slate-900 text-white text-[10px] font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl border border-white/10">
                            Notifications
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-b-slate-900"></div>
                        </div>
                    </div>

                    {/* User Profile Thumbnail */}
                    <div className="group relative">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-blue-100 overflow-hidden cursor-pointer hover:border-blue-300 transition-colors shrink-0 ml-1 sm:ml-2">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userdata.first_name}&backgroundColor=b6e3f4`} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute top-full right-0 mt-2 px-3 py-2 bg-slate-900 text-white text-[10px] font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl border border-white/10">
                            User Settings
                            <div className="absolute bottom-full right-4 border-[6px] border-transparent border-b-slate-900"></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- APP BODY CONTAINER --- */}
            <div className="flex flex-1 overflow-hidden relative">

                {/* Mobile Overlay (Clicks to close the mobile sidebar) */}
                {isSidebarOpen && (
                    <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>
                )}

                {/* --- SIDEBAR CONTAINER --- */}
                {/* Notice the dynamic template literals to handle the collapse and mobile open states */}
                <aside id="sidebar" className={`bg-[#051F3E] text-white h-full flex flex-col transition-all duration-300 ease-in-out z-30 shadow-2xl shrink-0 absolute sm:relative group/sidebar w-60 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"} ${isSidebarCollapsed ? "sidebar-collapsed w-20!" : ""}`}>

                    {/* Profile Section */}
                    <div className="px-6 group-[.sidebar-collapsed]/sidebar:px-2 py-2 group-[.sidebar-collapsed]/sidebar:py-4 flex flex-col items-center border-b border-white/10 transition-all duration-300 shrink-0 relative">
                        <div className="relative cursor-pointer group/profile mb-4">
                            {/* Profile Image / Avatar */}
                            <div className="profile-img w-20 h-20 group-[.sidebar-collapsed]/sidebar:!w-12 group-[.sidebar-collapsed]/sidebar:!h-12 group-[.sidebar-collapsed]/sidebar:mb-0 rounded-full bg-slate-700/50 p-1 transition-all duration-300 relative flex items-center justify-center overflow-hidden border border-white/20 shadow-lg" onClick={() => handleMenuSelection("my-profile")}>
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userdata.first_name}&backgroundColor=b6e3f4`} alt="Student Profile" className="w-full h-full rounded-full object-cover z-10 relative" />
                            </div>
                            {/* Tenure Badge */}
                            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-blue-700 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full shadow-lg border border-white/20 z-20 whitespace-nowrap group-[.sidebar-collapsed]/sidebar:hidden transition-all duration-300 transform group-hover/profile:scale-105">
                                {userdata.batch} — {userdata.batch + 4}
                            </div>

                            {/* Tooltip for Profile (Visible when collapsed) */}
                            <div className="fixed left-20 ml-[6px] px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-[100] shadow-2xl pointer-events-none hidden group-[.sidebar-collapsed]/sidebar:block border border-white/10">
                                {userdata.first_name} {userdata.last_name}
                                <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-slate-900"></div>
                            </div>
                        </div>

                        <div className="profile-text group-[.sidebar-collapsed]/sidebar:hidden text-center flex flex-col items-center w-full pb-2">
                            <h2 className="font-heading font-bold text-[18px] tracking-tight text-white drop-shadow-sm leading-tight transition-colors duration-300 z-10">{userdata.first_name} {userdata.last_name}</h2>
                            <span className="text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 drop-shadow-md">{userdata.academic.branch} Dept</span>
                            <span className="text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 drop-shadow-md">{userdata.roll_no}</span>
                        </div>
                    </div>

                    {/* --- NAVIGATION MENU --- */}
                    <nav className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-[4px] hover:[&::-webkit-scrollbar-thumb]:bg-white/40 py-4 flex flex-col gap-1.5 relative overflow-x-hidden">

                        {/* Dashboard */}
                        <a href="#" className="menu-link flex items-center gap-3 py-3 group-[.sidebar-collapsed]/sidebar:py-2 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] hover:brightness-110 text-white hover:text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center" onclick="setActive(this)">
                            <div className="flex-col flex items-center justify-center">
                                <LayoutDashboard className="w-5 h-5 shrink-0 text-blue-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-100"/>
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80 leading-tight">Dash.</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm whitespace-nowrap">My Dashboard</span>
                            
                            {/* Tooltip (Mini Sidebar Only) */}
                            <div className="fixed left-20 ml-[6px] px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-[100] shadow-2xl pointer-events-none hidden group-[.sidebar-collapsed]/sidebar:block border border-white/10">
                                My Dashboard
                                <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-slate-900"></div>
                            </div>
                        </a>

                        {/* Profile Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button onClick={() => handleDropdownClick("profile")} className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center">
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <UserCircle className="w-5 h-5 shrink-0 text-indigo-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Profile</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-bold text-sm tracking-wide uppercase">Profile</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.profile ? "rotate-180" : "rotate-0"}`} />

                                {/* Tooltip */}
                                <div className="fixed left-20 ml-[6px] px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-[100] shadow-2xl pointer-events-none hidden group-[.sidebar-collapsed]/sidebar:block border border-white/10">
                                    Profile
                                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-slate-900"></div>
                                </div>
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.profile ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("my-profile"); }} className={getSubMenuLinkClass("my-profile")}>
                                    <User className="w-4 h-4 text-indigo-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">My Profile</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("upload-docs"); }} className={getSubMenuLinkClass("upload-docs")}>
                                    <CloudUpload className="w-4 h-4 text-cyan-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Upload Documents</span>
                                </a>
                            </div>
                        </div>

                        {/* Academics Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button onClick={() => handleDropdownClick("academics")} className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center">
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <GraduationCap className="w-5 h-5 shrink-0 text-emerald-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Acad.</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-bold text-sm tracking-wide uppercase">Academics</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.academics ? "rotate-180" : "rotate-0"}`} />

                                {/* Tooltip */}
                                <div className="fixed left-20 ml-[6px] px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-[100] shadow-2xl pointer-events-none hidden group-[.sidebar-collapsed]/sidebar:block border border-white/10 translate-x-2 group-hover:translate-x-0">
                                    Academics
                                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-slate-900"></div>
                                </div>
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.academics ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("attendance"); }} className={getSubMenuLinkClass("attendance")}>
                                    <Pen className="w-4 h-4 text-emerald-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Attendance Overview</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("assignments"); }} className={getSubMenuLinkClass("assignments")}>
                                    <BookOpenCheck className="w-4 h-4 text-orange-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Assignments</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("exam-info"); }} className={getSubMenuLinkClass("exam-info")}>
                                    <FileSpreadsheet className="w-4 h-4 text-violet-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Exam Information</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("results"); }} className={getSubMenuLinkClass("results")}>
                                    <FileText className="w-4 h-4 text-fuchsia-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Results</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("calendar"); }} className={getSubMenuLinkClass("calendar")}>
                                    <CalendarDays className="w-4 h-4 text-teal-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Academic Calendar</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("timetable"); }} className={getSubMenuLinkClass("timetable")}>
                                    <Clock className="w-4 h-4 text-cyan-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Timetable</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("achievements"); }} className={getSubMenuLinkClass("achievements")}>
                                    <Trophy className="w-4 h-4 text-amber-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Achievements</span>
                                </a>
                            </div>
                        </div>

                        {/* Announcements Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button onClick={() => handleDropdownClick("announcements")} className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center">
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <Megaphone className="w-5 h-5 shrink-0 text-amber-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Announ.</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-bold text-sm tracking-wide uppercase">Announcements</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.announcements ? "rotate-180" : "rotate-0"}`} />

                                {/* Tooltip */}
                                <div className="fixed left-20 ml-[6px] px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-[100] shadow-2xl pointer-events-none hidden group-[.sidebar-collapsed]/sidebar:block border border-white/10 translate-x-2 group-hover:translate-x-0">
                                    Announcements
                                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-slate-900"></div>
                                </div>
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.announcements ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("circulars"); }} className={getSubMenuLinkClass("circulars")}>
                                    <BellRing className="w-4 h-4 text-amber-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Circulars & Notifications</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("events"); }} className={getSubMenuLinkClass("events")}>
                                    <PartyPopper className="w-4 h-4 text-rose-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Events</span>
                                </a>
                            </div>
                        </div>

                        {/* Services Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button onClick={() => handleDropdownClick("services")} className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center">
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <LifeBuoy className="w-5 h-5 shrink-0 text-yellow-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Serv.</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-bold text-sm tracking-wide uppercase">Services</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.services ? "rotate-180" : "rotate-0"}`} />

                                {/* Tooltip */}
                                <div className="fixed left-20 ml-[6px] px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-[100] shadow-2xl pointer-events-none hidden group-[.sidebar-collapsed]/sidebar:block border border-white/10 translate-x-2 group-hover:translate-x-0">
                                    Services
                                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-slate-900"></div>
                                </div>
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.services ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("transport"); }} className={getSubMenuLinkClass("transport")}>
                                    <Bus className="w-4 h-4 text-yellow-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Transport</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("fee"); }} className={getSubMenuLinkClass("fee")}>
                                    <Wallet className="w-4 h-4 text-emerald-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Fee Overview</span>
                                </a>
                            </div>
                        </div>

                        {/* Requests Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button onClick={() => handleDropdownClick("requests")} className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center">
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <FilePlus className="w-5 h-5 shrink-0 text-pink-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Req.</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-bold text-sm tracking-wide uppercase">Requests</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.requests ? "rotate-180" : "rotate-0"}`} />

                                {/* Tooltip */}
                                <div className="fixed left-20 ml-[6px] px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-[100] shadow-2xl pointer-events-none hidden group-[.sidebar-collapsed]/sidebar:block border border-white/10 translate-x-2 group-hover:translate-x-0">
                                    Requests
                                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-slate-900"></div>
                                </div>
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.requests ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("out-pass"); }} className={getSubMenuLinkClass("out-pass")}>
                                    <LogOut className="w-4 h-4 text-lime-300 rotate-90" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Out Pass</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("id-card"); }} className={getSubMenuLinkClass("id-card")}>
                                    <Contact className="w-4 h-4 text-lime-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">ID Card</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("leave"); }} className={getSubMenuLinkClass("leave")}>
                                    <FileText className="w-4 h-4 text-blue-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Leave Application</span>
                                </a>
                            </div>
                        </div>
                    </nav>

                    {/* Footer Actions */}
                    <div className="p-2 group-[.sidebar-collapsed]/sidebar:pb-8 border-t border-white/20 bg-[#051F3E] shrink-0 relative z-50">
                        {/* Change Password */}
                        <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("password"); }} className={`flex items-center gap-3 px-3 py-2.5 mx-2 group-[.sidebar-collapsed]/sidebar:mx-0 rounded-xl transition-all duration-300 ease-out hover:bg-green-500 hover:shadow-lg text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center ${activeMenu === "password" ? "!bg-white/20 backdrop-blur-md !text-white shadow-inner border border-white/10" : ""}`}>
                            <div className="flex-col flex items-center justify-center">
                                <KeyRound className="w-5 h-5 shrink-0 text-teal-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-white" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Pass.</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm whitespace-nowrap">Change Password</span>

                            {/* Tooltip */}
                            <div className="fixed left-20 ml-[6px] px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-[100] shadow-2xl pointer-events-none hidden group-[.sidebar-collapsed]/sidebar:block border border-white/10 translate-x-2 group-hover:translate-x-0">
                                Change Password
                                <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-slate-900"></div>
                            </div>
                        </a>

                        {/* Sign Out */}
                        <a href="#" className="flex mt-1 items-center gap-3 px-3 py-2.5 mx-2 group-[.sidebar-collapsed]/sidebar:mx-0 rounded-xl transition-all duration-300 ease-out hover:bg-red-500/80 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center">
                            <div className="flex-col flex items-center justify-center">
                                <LogOut className="w-5 h-5 shrink-0 text-red-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-white relative z-10" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[8px] text-center mt-1 px-1 opacity-80">Sign out</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm whitespace-nowrap relative z-10">Sign Out</span>

                            {/* Tooltip */}
                            <div className="fixed left-20 ml-[6px] px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-[110] shadow-2xl pointer-events-none hidden group-[.sidebar-collapsed]/sidebar:block border border-white/10 translate-x-2 group-hover:translate-x-0">
                                Sign Out
                                <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-slate-900"></div>
                            </div>
                        </a>
                    </div>
                </aside>

                {/* Main Content Area (For Context) */}
                <main className="flex-1 flex flex-col min-w-0 transition-all duration-300 relative bg-gray-50">
                    <div className="p-8 flex-1 overflow-y-auto w-full h-full flex flex-col items-center justify-center text-gray-400">
                        {/* Your main page content will go here. You can eventually use `{activeMenu}` to decide what components to render here! */}
                        <p className="font-bold text-xl">Main Dashboard Content</p>
                        <p className="mt-2 text-sm text-gray-500">Currently viewing: <span className="text-blue-500 font-semibold">{activeMenu}</span></p>
                    </div>
                </main>
            </div>
        </div>
    );
}