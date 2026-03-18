import { useState } from "react";
import {
    LayoutDashboard, Users, ChevronDown, UserCog, ShieldCheck, GraduationCap, 
    Settings2, CalendarCheck, FileSpreadsheet, CalendarDays, Briefcase, Wallet,
    Bus, Megaphone, MessageSquare, ShieldAlert, Workflow, History, KeyRound, LogOut, UserCircle
} from "lucide-react";

export function AdminSidebar({
    uiState,
    adminData,
    expandSidebar,
    handleMenuSelection,
    handleMouseEnter,
    handleMouseLeave
}) {    const defaultDropdowns = {
        access: true,
        academic: true,
        finance: true,
        communication: true,
        system: true
    };

    const [openDropdowns, setOpenDropdowns] = useState(defaultDropdowns);                

    function handleDropdownClick(dropdownName) {
        setOpenDropdowns(prev => ({
            ...prev,
            [dropdownName]: !prev[dropdownName]
        }));
    }

    function handleLinkClick(e, menuId) {
        e.preventDefault();
        e.stopPropagation();
        handleMenuSelection(menuId);
    }

    function handleProfileEnter(e) {
        handleMouseEnter(e, `${adminData.first_name} ${adminData.last_name}`);
    }

    function handleProfileViewEnter(e) {
        handleMouseEnter(e, "View Profile");
    }

    function handleSignOutEnter(e) {
        handleMouseEnter(e, "Sign Out");
    }

    function handleSidebarContainerClick() {
        expandSidebar();
    }

    function preventFooterPropagation(e) {
        e.stopPropagation();
    }

    function getSubMenuLinkClass(menuId) {
        const baseClass = "menu-link flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 ease-out hover:bg-white/[0.08] hover:translate-x-1 hover:brightness-110 text-white group";
        const activeClass = uiState.activeMenu === menuId ? "bg-white/[0.08] brightness-110 translate-x-1" : "";
        return `${baseClass} ${activeClass}`;
    }

    return (
        <aside 
            id="sidebar" 
            onClick={handleSidebarContainerClick}
            className={`bg-[#100636] text-white h-full flex flex-col transition-all duration-300 ease-in-out z-30 shadow-2xl shrink-0 absolute sm:relative group/sidebar w-60 ${uiState.isSidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"} ${uiState.isSidebarCollapsed ? "sidebar-collapsed w-20! cursor-pointer" : ""} overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-sm hover:[&::-webkit-scrollbar-thumb]:bg-white/40 overflow-x-hidden`}
        >

            <div className="px-6 group-[.sidebar-collapsed]/sidebar:px-2 py-2 group-[.sidebar-collapsed]/sidebar:py-4 flex flex-col items-center border-b border-white/10 transition-all duration-300 shrink-0 relative overflow-hidden">
                <div 
                    className="relative cursor-pointer group/profile mb-4"
                    onMouseEnter={handleProfileEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="profile-img w-20 h-20 group-[.sidebar-collapsed]/sidebar:w-12! group-[.sidebar-collapsed]/sidebar:h-12! group-[.sidebar-collapsed]/sidebar:mb-0 rounded-full bg-slate-700/50 p-1 transition-all duration-300 relative flex items-center justify-center overflow-hidden border border-white/20 shadow-lg">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${adminData.first_name}&backgroundColor=b6e3f4`} alt="Admin Profile" className="w-full h-full rounded-full object-cover z-10 relative" />
                    </div>
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full shadow-lg border border-white/20 z-20 whitespace-nowrap group-[.sidebar-collapsed]/sidebar:hidden transition-all duration-300 transform group-hover/profile:scale-105">
                        {adminData.position}
                    </div>
                </div>

                <div className="profile-text group-[.sidebar-collapsed]/sidebar:hidden text-center flex flex-col items-center w-full pb-2">
                    <h2 className="font-heading font-bold text-[18px] tracking-tight text-white drop-shadow-sm leading-tight transition-colors duration-300 z-10">{adminData.first_name} {adminData.last_name}</h2>
                    <span className="text-green-300 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 drop-shadow-md">{adminData.dept}</span>
                    <span className="text-green-300 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 drop-shadow-md">{adminData.roll_no}</span>

                    <div className="flex items-center gap-4 w-full justify-center mt-2">
                        <button 
                            onClick={(e) => handleLinkClick(e, "my-profile")}
                            onMouseEnter={handleProfileViewEnter}
                            onMouseLeave={handleMouseLeave}
                            className="p-1.5 hover:text-green-400 transition-all duration-300 group/icon"
                        >
                            <UserCircle className="w-5 h-5 transition-transform duration-300 group-hover/icon:scale-110" />
                        </button>
                        <button 
                            onClick={(e) => handleLinkClick(e, "logout")}
                            onMouseEnter={handleSignOutEnter}
                            onMouseLeave={handleMouseLeave}
                            className="p-1.5 hover:text-rose-400 transition-all duration-300 group/icon"
                        >
                            <LogOut className="w-5 h-5 transition-transform duration-300 group-hover/icon:scale-110" />
                        </button>
                    </div>
                </div>
            </div>

            <nav className="py-4 flex flex-col gap-1.5 relative">

                <a 
                    href="#" 
                    onClick={(e) => handleLinkClick(e, "admin-dashboard")} 
                    onMouseEnter={(e) => handleMouseEnter(e, "Admin Dashboard")}
                    onMouseLeave={handleMouseLeave}
                    className={`menu-link flex items-center gap-3 py-3 px-4 transition-all duration-300 ease-out hover:bg-white/8 hover:brightness-110 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center ${uiState.activeMenu === "admin-dashboard" ? "bg-white/8 brightness-110" : ""}`}
                >
                    <div className="flex-col flex items-center justify-center">
                        <LayoutDashboard className="w-5 h-5 shrink-0 text-blue-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-100" />
                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80 leading-tight">Dash.</span>
                    </div>
                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm whitespace-nowrap">Admin Dashboard</span>
                </a>

                <div className="relative border-t border-white/20">
                    <button 
                        onClick={() => handleDropdownClick("access")} 
                        onMouseEnter={(e) => handleMouseEnter(e, "User & Access Management")}
                        onMouseLeave={handleMouseLeave}
                        className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/8 focus:bg-white/8 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                    >
                        <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                            <div className="flex-col flex items-center justify-center">
                                <Users className="w-5 h-5 shrink-0 text-indigo-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Access</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide">User & Access Management</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.access ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.access ? "flex mb-2" : "hidden"}`}>
                        <a href="#" onClick={(e) => handleLinkClick(e, "user-management")} className={getSubMenuLinkClass("user-management")}>
                            <UserCog className="w-4 h-4 text-indigo-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">User Management</span>
                        </a>
                        <a href="#" onClick={(e) => handleLinkClick(e, "doc-verification")} className={getSubMenuLinkClass("doc-verification")}>
                            <ShieldCheck className="w-4 h-4 text-indigo-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Document Verification</span>
                        </a>
                    </div>
                </div>

                <div className="relative border-t border-white/20">
                    <button 
                        onClick={() => handleDropdownClick("academic")} 
                        onMouseEnter={(e) => handleMouseEnter(e, "Academic Administration")}
                        onMouseLeave={handleMouseLeave}
                        className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/8 focus:bg-white/8 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                    >
                        <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                            <div className="flex-col flex items-center justify-center">
                                <GraduationCap className="w-5 h-5 shrink-0 text-emerald-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Acad.</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide">Academic Administration</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.academic ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.academic ? "flex mb-2" : "hidden"}`}>
                        <a href="#" onClick={(e) => handleLinkClick(e, "academic-config")} className={getSubMenuLinkClass("academic-config")}>
                            <Settings2 className="w-4 h-4 text-emerald-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Academic Configuration</span>
                        </a>
                        <a href="#" onClick={(e) => handleLinkClick(e, "attendance-oversight")} className={getSubMenuLinkClass("attendance-oversight")}>
                            <CalendarCheck className="w-4 h-4 text-emerald-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Attendance Oversight</span>
                        </a>
                        <a href="#" onClick={(e) => handleLinkClick(e, "exam-cell")} className={getSubMenuLinkClass("exam-cell")}>
                            <FileSpreadsheet className="w-4 h-4 text-emerald-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Examination Cell</span>
                        </a>
                        <a href="#" onClick={(e) => handleLinkClick(e, "academic-calendar")} className={getSubMenuLinkClass("academic-calendar")}>
                            <CalendarDays className="w-4 h-4 text-emerald-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Academic Calendar</span>
                        </a>
                    </div>
                </div>

                <div className="relative border-t border-white/20">
                    <button 
                        onClick={() => handleDropdownClick("finance")} 
                        onMouseEnter={(e) => handleMouseEnter(e, "Finance & Operations")}
                        onMouseLeave={handleMouseLeave}
                        className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/8 focus:bg-white/8 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                    >
                        <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                            <div className="flex-col flex items-center justify-center">
                                <Briefcase className="w-5 h-5 shrink-0 text-amber-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Ops.</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide">Finance & Operations</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.finance ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.finance ? "flex mb-2" : "hidden"}`}>
                        <a href="#" onClick={(e) => handleLinkClick(e, "financial-hub")} className={getSubMenuLinkClass("financial-hub")}>
                            <Wallet className="w-4 h-4 text-amber-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Financial Hub</span>
                        </a>
                        <a href="#" onClick={(e) => handleLinkClick(e, "transport-logistics")} className={getSubMenuLinkClass("transport-logistics")}>
                            <Bus className="w-4 h-4 text-amber-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Transport & Logistics</span>
                        </a>
                    </div>
                </div>

                <div className="relative border-t border-white/20">
                    <button 
                        onClick={() => handleDropdownClick("communication")} 
                        onMouseEnter={(e) => handleMouseEnter(e, "Communication")}
                        onMouseLeave={handleMouseLeave}
                        className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/8 focus:bg-white/8 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                    >
                        <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                            <div className="flex-col flex items-center justify-center">
                                <Megaphone className="w-5 h-5 shrink-0 text-violet-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Comm.</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide">Communication</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.communication ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.communication ? "flex mb-2" : "hidden"}`}>
                        <a href="#" onClick={(e) => handleLinkClick(e, "comm-center")} className={getSubMenuLinkClass("comm-center")}>
                            <MessageSquare className="w-4 h-4 text-violet-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Communication Center</span>
                        </a>
                    </div>
                </div>

                <div className="relative border-t border-white/20">
                    <button 
                        onClick={() => handleDropdownClick("system")} 
                        onMouseEnter={(e) => handleMouseEnter(e, "System Management")}
                        onMouseLeave={handleMouseLeave}
                        className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/8 focus:bg-white/8 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                    >
                        <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                            <div className="flex-col flex items-center justify-center">
                                <ShieldAlert className="w-5 h-5 shrink-0 text-pink-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Sys.</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide">System Management</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.system ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.system ? "flex mb-2" : "hidden"}`}>
                        <a href="#" onClick={(e) => handleLinkClick(e, "workflows")} className={getSubMenuLinkClass("workflows")}>
                            <Workflow className="w-4 h-4 text-pink-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">System Workflows</span>
                        </a>
                        <a href="#" onClick={(e) => handleLinkClick(e, "system-logs")} className={getSubMenuLinkClass("system-logs")}>
                            <History className="w-4 h-4 text-pink-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">System Logs & Security</span>
                        </a>
                    </div>
                </div>

                <div className="grow min-h-4"></div>
            </nav>

            <div className="p-2 group-[.sidebar-collapsed]/sidebar:pb-12 border-t border-white/20 shrink-0 relative z-50" onClick={preventFooterPropagation}>
                <a 
                    href="#" 
                    onClick={(e) => handleLinkClick(e, "logout")}
                    onMouseEnter={handleSignOutEnter}
                    onMouseLeave={handleMouseLeave}
                    className="flex mt-1 items-center gap-3 px-3 py-2.5 mx-2 group-[.sidebar-collapsed]/sidebar:mx-0 rounded-xl transition-all duration-300 ease-out hover:bg-red-500/80 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                >
                    <div className="flex-col flex items-center justify-center">
                        <LogOut className="w-5 h-5 shrink-0 text-red-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-white relative z-10" />
                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[8px] text-center mt-1 px-1 opacity-80">Sign out</span>
                    </div>
                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm whitespace-nowrap relative z-10">Sign Out</span>
                </a>
            </div>
        </aside>
    );
}