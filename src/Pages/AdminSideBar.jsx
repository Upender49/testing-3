import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
    Menu, MessageSquare, Bell, LayoutDashboard, Users, ChevronDown, UserCog, ShieldCheck,
    GraduationCap, Settings2, CalendarCheck, FileSpreadsheet, CalendarDays, Briefcase, Wallet,
    Bus, Megaphone, ShieldAlert, Workflow, History, KeyRound, LogOut
} from "lucide-react";

export function AdminSidebar() {
    // --- STATE MANAGEMENT ---
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Desktop shrink toggle
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);           // Mobile slide-out toggle
    const [openDropdowns, setOpenDropdowns] = useState({
        access: true,
        academic: true,
        finance: true,
        communication: true,
        system: true
    });                // Tracks which accordions are open
    const [activeMenu, setActiveMenu] = useState("admin-dashboard");     // Tracks the highlighted link
    const [tooltip, setTooltip] = useState({ visible: false, text: "", top: 0, left: 0 }); // Shared portal tooltip state

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

    // --- DYNAMIC DATA ---
    const [adminData, setAdminData] = useState({
        "_id": "65f0a008c3d4e5f600000801",
        "first_name": "Sarah",
        "last_name": "Jenkins",
        "roll_no": "ADM-2024-001",
        "dept": "System Admin",
        "position": "Full Access",
        "profile": "65f0a006c3d4e5f600000601"
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

    // Tooltip Handlers
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

    // Generates the repeating Tailwind classes for the submenu links + handles active state
    const getSubMenuLinkClass = (menuId) => {
        const baseClass = "menu-link flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 ease-out hover:bg-white/[0.08] hover:translate-x-1 hover:brightness-110 text-white group";
        const activeClass = activeMenu === menuId ? "bg-white/[0.08] brightness-110 translate-x-1" : "";
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
                        <div id="educore-logo" className="flex items-center gap-2 shrink-0 transition-all duration-300">
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
                        <MessageSquare className="w-5 h-5 stroke-2" />
                        <span className="absolute top-1.5 right-1.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full">0</span>
                    </button>

                    {/* Notifications */}
                    <button 
                        onMouseEnter={(e) => handleMouseEnter(e, "Notifications", "bottom")}
                        onMouseLeave={handleMouseLeave}
                        className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <Bell className="w-5 h-5 stroke-2" />
                        <span className="absolute top-1.5 right-1.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full">1</span>
                    </button>

                    {/* User Profile Thumbnail */}
                    <div 
                        onMouseEnter={(e) => handleMouseEnter(e, "User Settings", "bottom")}
                        onMouseLeave={handleMouseLeave}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-blue-100 overflow-hidden cursor-pointer hover:border-blue-300 transition-colors shrink-0 ml-1 sm:ml-2"
                    >
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${adminData.first_name}&backgroundColor=b6e3f4`} alt="Profile" className="w-full h-full object-cover" />
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
                <aside id="sidebar" className={`bg-[#100636] text-white h-full flex flex-col transition-all duration-300 ease-in-out z-30 shadow-2xl shrink-0 absolute sm:relative group/sidebar w-60 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"} ${isSidebarCollapsed ? "sidebar-collapsed w-20!" : ""}`}>

                    {/* Profile Section */}
                    <div className="px-6 group-[.sidebar-collapsed]/sidebar:px-2 py-2 group-[.sidebar-collapsed]/sidebar:py-4 flex flex-col items-center border-b border-white/10 transition-all duration-300 shrink-0 relative overflow-hidden">
                        <div 
                            className="relative cursor-pointer group/profile mb-4"
                            onMouseEnter={(e) => handleMouseEnter(e, `${adminData.first_name} ${adminData.last_name}`)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Profile Image / Avatar */}
                            <div className="profile-img w-20 h-20 group-[.sidebar-collapsed]/sidebar:w-12! group-[.sidebar-collapsed]/sidebar:h-12! group-[.sidebar-collapsed]/sidebar:mb-0 rounded-full bg-slate-700/50 p-1 transition-all duration-300 relative flex items-center justify-center overflow-hidden border border-white/20 shadow-lg">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${adminData.first_name}&backgroundColor=b6e3f4`} alt="Admin Profile" className="w-full h-full rounded-full object-cover z-10 relative" />
                            </div>
                            {/* Tenure Badge */}
                            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full shadow-lg border border-white/20 z-20 whitespace-nowrap group-[.sidebar-collapsed]/sidebar:hidden transition-all duration-300 transform group-hover/profile:scale-105">
                                {adminData.position}
                            </div>
                        </div>

                        <div className="profile-text group-[.sidebar-collapsed]/sidebar:hidden text-center flex flex-col items-center w-full pb-2">
                            <h2 className="font-heading font-bold text-[18px] tracking-tight text-white drop-shadow-sm leading-tight transition-colors duration-300 z-10">{adminData.first_name} {adminData.last_name}</h2>
                            <span className="text-green-300 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 drop-shadow-md">{adminData.dept}</span>
                            <span className="text-green-300 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 drop-shadow-md">{adminData.roll_no}</span>
                        </div>
                    </div>

                    {/* --- NAVIGATION MENU --- */}
                    <nav className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-[4px] hover:[&::-webkit-scrollbar-thumb]:bg-white/40 py-4 flex flex-col gap-1.5 relative overflow-x-hidden">

                        {/* Admin Dashboard */}
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); handleMenuSelection("admin-dashboard"); }} 
                            onMouseEnter={(e) => handleMouseEnter(e, "Admin Dashboard")}
                            onMouseLeave={handleMouseLeave}
                            className={`menu-link flex items-center gap-3 py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] hover:brightness-110 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center ${activeMenu === "admin-dashboard" ? "bg-white/[0.08] brightness-110" : ""}`}
                        >
                            <div className="flex-col flex items-center justify-center">
                                <LayoutDashboard className="w-5 h-5 shrink-0 text-blue-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-100" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80 leading-tight">Dash.</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm whitespace-nowrap">Admin Dashboard</span>
                        </a>

                        {/* User & Access Management Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button 
                                onClick={() => handleDropdownClick("access")} 
                                onMouseEnter={(e) => handleMouseEnter(e, "User & Access Management")}
                                onMouseLeave={handleMouseLeave}
                                className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                            >
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <Users className="w-5 h-5 shrink-0 text-indigo-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Access</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-semibold text-sm tracking-wide uppercase">User & Access Management</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.access ? "rotate-180" : "rotate-0"}`} />
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.access ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("user-management"); }} className={getSubMenuLinkClass("user-management")}>
                                    <UserCog className="w-4 h-4 text-indigo-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">User Management</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("doc-verification"); }} className={getSubMenuLinkClass("doc-verification")}>
                                    <ShieldCheck className="w-4 h-4 text-indigo-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Document Verification</span>
                                </a>
                            </div>
                        </div>

                        {/* Academic Administration Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button 
                                onClick={() => handleDropdownClick("academic")} 
                                onMouseEnter={(e) => handleMouseEnter(e, "Academic Administration")}
                                onMouseLeave={handleMouseLeave}
                                className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                            >
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <GraduationCap className="w-5 h-5 shrink-0 text-emerald-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Acad.</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-semibold text-sm tracking-wide uppercase">Academic Administration</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.academic ? "rotate-180" : "rotate-0"}`} />
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.academic ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("academic-config"); }} className={getSubMenuLinkClass("academic-config")}>
                                    <Settings2 className="w-4 h-4 text-emerald-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Academic Configuration</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("attendance-oversight"); }} className={getSubMenuLinkClass("attendance-oversight")}>
                                    <CalendarCheck className="w-4 h-4 text-emerald-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Attendance Oversight</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("exam-cell"); }} className={getSubMenuLinkClass("exam-cell")}>
                                    <FileSpreadsheet className="w-4 h-4 text-emerald-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Examination Cell</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("academic-calendar"); }} className={getSubMenuLinkClass("academic-calendar")}>
                                    <CalendarDays className="w-4 h-4 text-emerald-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Academic Calendar</span>
                                </a>
                            </div>
                        </div>

                        {/* Finance & Operations Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button 
                                onClick={() => handleDropdownClick("finance")} 
                                onMouseEnter={(e) => handleMouseEnter(e, "Finance & Operations")}
                                onMouseLeave={handleMouseLeave}
                                className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                            >
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <Briefcase className="w-5 h-5 shrink-0 text-amber-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Ops.</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-semibold text-sm tracking-wide uppercase">Finance & Operations</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.finance ? "rotate-180" : "rotate-0"}`} />
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.finance ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("financial-hub"); }} className={getSubMenuLinkClass("financial-hub")}>
                                    <Wallet className="w-4 h-4 text-amber-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Financial Hub</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("transport-logistics"); }} className={getSubMenuLinkClass("transport-logistics")}>
                                    <Bus className="w-4 h-4 text-amber-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Transport & Logistics</span>
                                </a>
                            </div>
                        </div>

                        {/* Communication Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button 
                                onClick={() => handleDropdownClick("communication")} 
                                onMouseEnter={(e) => handleMouseEnter(e, "Communication")}
                                onMouseLeave={handleMouseLeave}
                                className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                            >
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <Megaphone className="w-5 h-5 shrink-0 text-violet-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Comm.</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-semibold text-sm tracking-wide uppercase">Communication</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.communication ? "rotate-180" : "rotate-0"}`} />
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.communication ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("comm-center"); }} className={getSubMenuLinkClass("comm-center")}>
                                    <MessageSquare className="w-4 h-4 text-violet-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Communication Center</span>
                                </a>
                            </div>
                        </div>

                        {/* System Management Dropdown */}
                        <div className="relative border-t border-white/20">
                            <button 
                                onClick={() => handleDropdownClick("system")} 
                                onMouseEnter={(e) => handleMouseEnter(e, "System Management")}
                                onMouseLeave={handleMouseLeave}
                                className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                            >
                                <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                    <div className="flex-col flex items-center justify-center">
                                        <ShieldAlert className="w-5 h-5 shrink-0 text-pink-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Sys.</span>
                                    </div>
                                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-semibold text-sm tracking-wide uppercase">System Management</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.system ? "rotate-180" : "rotate-0"}`} />
                            </button>
                            <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.system ? "flex mb-2" : "hidden"}`}>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("workflows"); }} className={getSubMenuLinkClass("workflows")}>
                                    <Workflow className="w-4 h-4 text-pink-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">System Workflows</span>
                                </a>
                                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuSelection("system-logs"); }} className={getSubMenuLinkClass("system-logs")}>
                                    <History className="w-4 h-4 text-pink-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">System Logs & Security</span>
                                </a>
                            </div>
                        </div>

                        <div className="grow min-h-4"></div>
                    </nav>

                    {/* Footer Actions */}
                    <div className="p-2 group-[.sidebar-collapsed]/sidebar:pb-12 border-t border-white/20 shrink-0 relative z-50">
                        {/* Change Password */}
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); handleMenuSelection("password"); }} 
                            onMouseEnter={(e) => handleMouseEnter(e, "Change Password")}
                            onMouseLeave={handleMouseLeave}
                            className={`flex items-center gap-3 px-3 py-2.5 mx-2 group-[.sidebar-collapsed]/sidebar:mx-0 rounded-xl transition-all duration-300 ease-out hover:bg-green-500 hover:shadow-lg text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center ${activeMenu === "password" ? "!bg-white/20 backdrop-blur-md !text-white shadow-inner border border-white/10" : ""}`}>
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
                            className="flex mt-1 items-center gap-3 px-3 py-2.5 mx-2 group-[.sidebar-collapsed]/sidebar:mx-0 rounded-xl transition-all duration-300 ease-out hover:bg-red-500/80 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center">
                            <div className="flex-col flex items-center justify-center">
                                <LogOut className="w-5 h-5 shrink-0 text-red-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-white relative z-10" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[8px] text-center mt-1 px-1 opacity-80">Sign out</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm whitespace-nowrap relative z-10">Sign Out</span>
                        </a>
                    </div>
                </aside>

                {/* Main Content Area (For Context) */}
                <main className="flex-1 flex flex-col min-w-0 transition-all duration-300 relative bg-gray-50">
                    <div className="p-8 flex-1 overflow-y-auto w-full h-full flex flex-col items-center justify-center text-gray-400">
                        {/* Your main page content will go here */}
                        <p className="font-bold text-xl text-slate-700">Admin Dashboard Content</p>
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