import { useState } from "react";
import {
    LayoutDashboard, UserCircle, ChevronDown, User, GraduationCap,
    BookOpen, CalendarCheck, FileCheck, CloudUpload, Users, Heart,
    Megaphone, Calendar, PartyPopper, FilePlus, ShieldCheck,
    FileCheck2, Briefcase, Wallet, Truck, KeyRound, LogOut, Bell
} from "lucide-react";

export function TeacherSidebar({
    isSidebarOpen,
    isSidebarCollapsed,
    activeMenu,
    teacherData,
    handleMenuSelection,
    handleMouseEnter,
    handleMouseLeave
}) {
    // --- SIDEBAR STATE ---
    const [openDropdowns, setOpenDropdowns] = useState({
        profile: true,
        academic: true,
        support: true,
        announcements: true,
        requests: true,
        services: true
    });

    const handleDropdownClick = (dropdownName) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [dropdownName]: !prev[dropdownName]
        }));
    };

    const getSubMenuLinkClass = (menuId) => {
        const baseClass = "menu-link flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 ease-out hover:bg-white/[0.08] hover:translate-x-1 hover:brightness-110 text-white group";
        const activeClass = activeMenu === menuId ? "bg-white/[0.08] brightness-110 translate-x-1" : "";
        return `${baseClass} ${activeClass}`;
    };

    return (
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
    );
}