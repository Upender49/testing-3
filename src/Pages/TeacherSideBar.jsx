import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
    Menu, MessageSquare, Bell, LayoutDashboard, UserCircle, ChevronDown, User,
    GraduationCap, BookOpen, CalendarCheck, FileCheck, CloudUpload, Users, Heart,
    Megaphone, Calendar, PartyPopper, FilePlus, ShieldCheck, FileCheck2,
    Briefcase, Wallet, Truck, KeyRound, LogOut
} from "lucide-react";

export function TeacherSidebar() {
    // --- STATE MANAGEMENT ---
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Desktop shrink toggle
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);           // Mobile slide-out toggle
    const [openDropdowns, setOpenDropdowns] = useState({                 // Initially all dropdowns are open
        profile: true,
        academic: true,
        support: true,
        announcements: true,
        requests: true,
        services: true
    });
    const [activeMenu, setActiveMenu] = useState("teacher-dashboard");   // Tracks the highlighted link
    
    // --- DYNAMIC TOOLTIP STATE ---
    const [tooltip, setTooltip] = useState({
        visible: false,
        text: "",
        top: 0,
        left: 0,
        position: "right"
    });

    // --- RESPONSIVE BEHAVIOR ---
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                // Mobile: Sidebar hidden by default
                setIsSidebarCollapsed(false);
                setIsSidebarOpen(false);
            } else if (width >= 640 && width < 768) {
                // Tablet: Mini-sidebar (collapsed)
                setIsSidebarCollapsed(true);
                setIsSidebarOpen(false);
            } else {
                // Desktop: Full sidebar
                setIsSidebarCollapsed(false);
                setIsSidebarOpen(false);
            }
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // --- DYNAMIC DATA ---
    const [teacherData, setTeacherData] = useState({
        "_id": "65f0a002c3d4e5f600000201",
        "first_name": "Robert",
        "last_name": "Fox",
        "title": "Dr.",
        "roll_no": "TCH-2018-042",
        "designation": "Associate Prof",
        "joining_year": "2018"
    });

    // --- HELPER FUNCTIONS ---
    // Handle Tooltip Positioning
    const handleMouseEnter = (e, text, position = "right") => {
        const isHeaderItem = e.currentTarget.closest('header');
        if (!isSidebarCollapsed && !isHeaderItem) return;

        const rect = e.currentTarget.getBoundingClientRect();
        
        if (position === "bottom") {
            setTooltip({
                visible: true,
                text,
                top: rect.bottom + 8,
                left: rect.left + rect.width / 2,
                position: "bottom"
            });
        } else {
            setTooltip({
                visible: true,
                text,
                top: rect.top + rect.height / 2,
                left: rect.right + 6,
                position: "right"
            });
        }
    };

    const handleMouseLeave = () => {
        setTooltip(prev => ({ ...prev, visible: false }));
    };

    // Toggles the dropdowns in the object state
    const handleDropdownClick = (dropdownName) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [dropdownName]: !prev[dropdownName]
        }));
    };

    // Handle menu selection and auto-close sidebar on mobile
    const handleMenuSelection = (menuId) => {
        setActiveMenu(menuId);
        if (window.innerWidth < 640) {
            setIsSidebarOpen(false);
        }
    };

    // Generates the repeating Tailwind classes for the submenu links + handles active state
    const getSubMenuLinkClass = (menuId) => {
        const baseClass = "menu-link flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 ease-out hover:bg-white/[0.08] hover:translate-x-1 hover:brightness-110 text-white group";
        const activeClass = activeMenu === menuId ? "bg-white/[0.08] brightness-110 translate-x-1" : "";
        return `${baseClass} ${activeClass}`;
    };

    return (
        <div className="bg-[#012029] flex flex-col h-[100dvh] overflow-hidden font-body">
            {/* --- TOP HEADER --- */}
            <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4 lg:px-6 shrink-0 z-40 border-b border-gray-200">
                {/* Left Side: Logos and Toggle */}
                <div className="flex items-center gap-3 sm:gap-6">
                    {/* Hamburger Toggle & Logo Container */}
                    <div id="hamburger-container" className="flex items-center flex-shrink-0 transition-all duration-300 border-r border-gray-200 pr-4 sm:pr-6 gap-3 sm:gap-4">
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
                        <div id="educore-logo" className="flex items-center gap-2 flex-shrink-0 transition-all duration-300">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.827a1 1 0 00-.788 0l-7 3a1 1 0 000 1.846l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.846l-7-3zM3.172 10.757a1 1 0 011.105-.271l5.505 2.359 5.505-2.359a1 1 0 11.788 1.846l-6 2.571a1 1 0 01-.788 0l-6-2.571a1 1 0 01-.505-1.214z" />
                                </svg>
                            </div>
                            <span className="font-heading font-extrabold text-lg text-slate-800 tracking-tight">EDU<span className="text-blue-600">CORE</span></span>
                        </div>
                    </div>

                    {/* College Logo and Name */}
                    <div id="college-info" className="flex items-center gap-3 pl-2 sm:pl-0">
                        <div className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                            <img src="cvr_logo.png" alt="CVR" onError={(e) => e.currentTarget.src = 'https://ui-avatars.com/api/?name=CVR&background=0D8ABC&color=fff'} className="w-full h-full object-contain p-1" />
                        </div>
                        <span className="font-heading font-bold text-blue-700 tracking-wide text-sm sm:text-lg uppercase">CVR COLLEGE of engineering</span>
                    </div>
                </div>

                {/* Right Side: Actions */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Messages */}
                    <button 
                        onMouseEnter={(e) => handleMouseEnter(e, "Messages", "bottom")}
                        onMouseLeave={handleMouseLeave}
                        className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors hidden sm:block"
                    >
                        <MessageSquare className="w-5 h-5 stroke-[2]" />
                        <span className="absolute top-1.5 right-1.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full">0</span>
                    </button>

                    {/* Notifications */}
                    <button 
                        onMouseEnter={(e) => handleMouseEnter(e, "Notifications", "bottom")}
                        onMouseLeave={handleMouseLeave}
                        className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <Bell className="w-5 h-5 stroke-[2]" />
                        <span className="absolute top-1.5 right-1.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full">1</span>
                    </button>

                    {/* User Profile Thumbnail */}
                    <div 
                        onMouseEnter={(e) => handleMouseEnter(e, "User Settings", "bottom")}
                        onMouseLeave={handleMouseLeave}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-blue-100 overflow-hidden cursor-pointer hover:border-blue-300 transition-colors shrink-0 ml-1 sm:ml-2"
                    >
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${teacherData.first_name}&backgroundColor=b6e3f4`} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
            </header>

            {/* --- APP BODY CONTAINER --- */}
            <div className="flex flex-1 overflow-hidden relative">

                {/* Mobile Overlay (Clicks to close the mobile sidebar) */}
                {isSidebarOpen && (
                    <div className="fixed inset-0 bg-black/50 z-20 sm:hidden" onClick={() => setIsSidebarOpen(false)}></div>
                )}

                {/* --- SIDEBAR CONTAINER --- */}
                <aside id="sidebar" className={`bg-[#012029] text-white h-full flex flex-col transition-all duration-300 ease-in-out z-30 shadow-2xl shrink-0 absolute sm:relative group/sidebar w-60 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"} ${isSidebarCollapsed ? "sidebar-collapsed w-20!" : ""}`}>

                    {/* Profile Section */}
                    <div className="px-6 group-[.sidebar-collapsed]/sidebar:px-2 py-2 group-[.sidebar-collapsed]/sidebar:py-4 flex flex-col items-center border-b border-white/10 transition-all duration-300 shrink-0 relative overflow-hidden">
                        <div 
                            className="relative cursor-pointer group/profile mb-4"
                            onMouseEnter={(e) => handleMouseEnter(e, `${teacherData.title} ${teacherData.first_name} ${teacherData.last_name}`)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Profile Image / Avatar */}
                            <div className="profile-img w-20 h-20 group-[.sidebar-collapsed]/sidebar:!w-12 group-[.sidebar-collapsed]/sidebar:!h-12 group-[.sidebar-collapsed]/sidebar:mb-0 rounded-full bg-slate-700/50 p-1 transition-all duration-300 relative flex items-center justify-center overflow-hidden border border-white/20 shadow-lg">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${teacherData.first_name}&backgroundColor=b6e3f4`} alt="Teacher Profile" className="w-full h-full rounded-full object-cover z-10 relative" />
                            </div>
                            {/* Tenure Badge */}
                            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full shadow-lg border border-white/20 z-20 whitespace-nowrap group-[.sidebar-collapsed]/sidebar:hidden transition-all duration-300 transform group-hover/profile:scale-105">
                                Est. {teacherData.joining_year}
                            </div>
                        </div>

                        <div className="profile-text group-[.sidebar-collapsed]/sidebar:hidden text-center flex flex-col items-center w-full pb-2">
                            <h2 className="font-heading font-bold text-[18px] tracking-tight text-white drop-shadow-sm leading-tight transition-colors duration-300 z-10">{teacherData.title} {teacherData.first_name} {teacherData.last_name}</h2>
                            <span className="text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 drop-shadow-md">{teacherData.designation}</span>
                            <span className="text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 drop-shadow-md">{teacherData.roll_no}</span>
                        </div>
                    </div>

                    {/* --- NAVIGATION MENU --- */}
                    <nav className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-[4px] hover:[&::-webkit-scrollbar-thumb]:bg-white/40 py-4 flex flex-col gap-1.5 relative overflow-x-hidden">

                        {/* Teacher Dashboard */}
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); handleMenuSelection("teacher-dashboard"); }} 
                            onMouseEnter={(e) => handleMouseEnter(e, "My Dashboard")}
                            onMouseLeave={handleMouseLeave}
                            className={`menu-link flex items-center gap-3 py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] hover:brightness-110 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center ${activeMenu === "teacher-dashboard" ? "bg-white/[0.08] brightness-110" : ""}`}>
                            <div className="flex-col flex items-center justify-center">
                                <LayoutDashboard className="w-5 h-5 shrink-0 text-blue-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-100" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80 leading-tight">Dash.</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm whitespace-nowrap">My Dashboard</span>
                        </a>

                        {/* Profile Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button 
                                onClick={() => handleDropdownClick("profile")} 
                                onMouseEnter={(e) => handleMouseEnter(e, "Profile")}
                                onMouseLeave={handleMouseLeave}
                                className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                            >
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <UserCircle className="w-5 h-5 shrink-0 text-indigo-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Profile</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-bold text-sm tracking-wide uppercase">Profile</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.profile ? "rotate-180" : "rotate-0"}`} />
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.profile ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("my-profile"); }} className={getSubMenuLinkClass("my-profile")}>
                                    <User className="w-4 h-4 text-indigo-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">My Profile</span>
                                </a>
                            </div>
                        </div>

                        {/* Academic Management Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button 
                                onClick={() => handleDropdownClick("academic")} 
                                onMouseEnter={(e) => handleMouseEnter(e, "Academic Management")}
                                onMouseLeave={handleMouseLeave}
                                className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                            >
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <GraduationCap className="w-5 h-5 shrink-0 text-emerald-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Acad.</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-bold text-sm tracking-wide uppercase">Academic Management</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.academic ? "rotate-180" : "rotate-0"}`} />
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.academic ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("academic-overview"); }} className={getSubMenuLinkClass("academic-overview")}>
                                    <BookOpen className="w-4 h-4 text-emerald-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Academic Overview</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("mark-attendance"); }} className={getSubMenuLinkClass("mark-attendance")}>
                                    <CalendarCheck className="w-4 h-4 text-emerald-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Mark Attendance</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("assignments-review"); }} className={getSubMenuLinkClass("assignments-review")}>
                                    <FileCheck className="w-4 h-4 text-emerald-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Assignments Review</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("upload-resources"); }} className={getSubMenuLinkClass("upload-resources")}>
                                    <CloudUpload className="w-4 h-4 text-emerald-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Upload Resources</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("results-management"); }} className={getSubMenuLinkClass("results-management")}>
                                    <GraduationCap className="w-4 h-4 text-emerald-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Results Management</span>
                                </a>
                            </div>
                        </div>

                        {/* Student Support Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button 
                                onClick={() => handleDropdownClick("support")} 
                                onMouseEnter={(e) => handleMouseEnter(e, "Student Support")}
                                onMouseLeave={handleMouseLeave}
                                className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                            >
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <Users className="w-5 h-5 shrink-0 text-rose-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Supp.</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-bold text-sm tracking-wide uppercase">Student Support</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.support ? "rotate-180" : "rotate-0"}`} />
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.support ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("mentorship"); }} className={getSubMenuLinkClass("mentorship")}>
                                    <Heart className="w-4 h-4 text-rose-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Student Mentorship</span>
                                </a>
                            </div>
                        </div>

                        {/* Announcements Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button 
                                onClick={() => handleDropdownClick("announcements")} 
                                onMouseEnter={(e) => handleMouseEnter(e, "Announcements")}
                                onMouseLeave={handleMouseLeave}
                                className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                            >
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <Megaphone className="w-5 h-5 shrink-0 text-amber-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Announ.</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-bold text-sm tracking-wide uppercase">Announcements</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.announcements ? "rotate-180" : "rotate-0"}`} />
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.announcements ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("teacher-circulars"); }} className={getSubMenuLinkClass("teacher-circulars")}>
                                    <Bell className="w-4 h-4 text-amber-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Circulars & Notifications</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("teacher-calendar"); }} className={getSubMenuLinkClass("teacher-calendar")}>
                                    <Calendar className="w-4 h-4 text-amber-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Academic Calendar</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("events-coordination"); }} className={getSubMenuLinkClass("events-coordination")}>
                                    <PartyPopper className="w-4 h-4 text-amber-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Events Coordination</span>
                                </a>
                            </div>
                        </div>

                        {/* Requests Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button 
                                onClick={() => handleDropdownClick("requests")} 
                                onMouseEnter={(e) => handleMouseEnter(e, "Requests")}
                                onMouseLeave={handleMouseLeave}
                                className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                            >
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <FilePlus className="w-5 h-5 shrink-0 text-pink-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Req.</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-bold text-sm tracking-wide uppercase">Requests</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.requests ? "rotate-180" : "rotate-0"}`} />
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.requests ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("request-access"); }} className={getSubMenuLinkClass("request-access")}>
                                    <ShieldCheck className="w-4 h-4 text-pink-300" />
                                    <span className="nav-text font-medium text-md whitespace-nowrap">Request Access</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("leaves-approval"); }} className={getSubMenuLinkClass("leaves-approval")}>
                                    <FileCheck2 className="w-4 h-4 text-pink-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Leaves Approval</span>
                                </a>
                            </div>
                        </div>

                        {/* Staff Services Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button 
                                onClick={() => handleDropdownClick("services")} 
                                onMouseEnter={(e) => handleMouseEnter(e, "Staff Services")}
                                onMouseLeave={handleMouseLeave}
                                className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                            >
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <Briefcase className="w-5 h-5 shrink-0 text-yellow-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Serv.</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-bold text-sm tracking-wide uppercase">Staff Services</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.services ? "rotate-180" : "rotate-0"}`} />
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.services ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("salary-payroll"); }} className={getSubMenuLinkClass("salary-payroll")}>
                                    <Wallet className="w-4 h-4 text-yellow-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Salary & Payroll</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("teacher-transport"); }} className={getSubMenuLinkClass("teacher-transport")}>
                                    <Truck className="w-4 h-4 text-yellow-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Transport</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex-grow min-h-[1rem]"></div>
                    </nav>

                    {/* Footer Actions */}
                    <div className="p-2 group-[.sidebar-collapsed]/sidebar:pb-12 border-t border-white/20 shrink-0 relative z-50">
                        {/* Change Password */}
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); handleMenuSelection("password"); }} 
                            onMouseEnter={(e) => handleMouseEnter(e, "Change Password")}
                            onMouseLeave={handleMouseLeave}
                            className={`flex items-center gap-3 px-3 py-2.5 mx-2 group-[.sidebar-collapsed]/sidebar:mx-0 rounded-xl transition-all duration-300 ease-out hover:bg-amber-500 hover:shadow-lg text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center ${activeMenu === "password" ? "!bg-white/20 backdrop-blur-md !text-white shadow-inner border border-white/10" : ""}`}>
                            <div className="flex-col flex items-center justify-center">
                                <KeyRound className="w-5 h-5 shrink-0 text-teal-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-white" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Pass.</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm whitespace-nowrap">Change Password</span>
                        </a>

                        {/* Sign Out */}
                        <a 
                            href="#" 
                            onMouseEnter={(e) => handleMouseEnter(e, "Sign Out")}
                            onMouseLeave={handleMouseLeave}
                            className="flex mt-1 items-center gap-3 px-3 py-2.5 mx-2 group-[.sidebar-collapsed]/sidebar:mx-0 rounded-xl transition-all duration-300 ease-out hover:bg-red-500/80 text-white hover:text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center">
                            <div className="flex-col flex items-center justify-center">
                                <LogOut className="w-5 h-5 shrink-0 text-red-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-white relative z-10" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[8px] text-center mt-1 px-1 opacity-80">Sign out</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm whitespace-nowrap relative z-10">Sign Out</span>
                        </a>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col min-w-0 transition-all duration-300 relative bg-gray-50">
                    <div className="p-8 flex-1 overflow-y-auto w-full h-full flex flex-col items-center justify-center text-gray-400">
                        {/* Your main page content will go here */}
                        <p className="font-bold text-xl text-slate-700">Teacher Dashboard Content</p>
                        <p className="mt-2 text-sm text-slate-500">Currently viewing: <span className="font-semibold text-blue-600">{activeMenu}</span></p>
                    </div>
                </main>
            </div>

            {/* --- PORTAL TOOLTIP --- */}
            {tooltip.visible && createPortal(
                <div 
                    style={{ 
                        top: tooltip.top, 
                        left: tooltip.position === "bottom" ? tooltip.left : undefined,
                        marginLeft: tooltip.position === "bottom" ? 0 : "6px"
                    }}
                    className={`fixed px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg transition-all duration-200 whitespace-nowrap z-[1000] shadow-2xl pointer-events-none border border-white/10 flex items-center ${tooltip.position === "bottom" ? "-translate-x-1/2" : "left-20 -translate-y-1/2"}`}
                >
                    {tooltip.text}
                    {/* Tooltip Arrow */}
                    <div className={`absolute border-[6px] border-transparent ${tooltip.position === "bottom" ? "bottom-full left-1/2 -translate-x-1/2 border-b-slate-900" : "right-full top-1/2 -translate-y-1/2 border-r-slate-900"}`}></div>
                </div>,
                document.body
            )}
        </div>
    );
}