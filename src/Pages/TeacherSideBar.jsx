import { useState } from "react";
import {
    LayoutDashboard, UserCircle, ChevronDown, User, GraduationCap,
    BookOpen, CalendarCheck, FileCheck, CloudUpload, Users, Heart,
    Megaphone, Calendar, PartyPopper, FilePlus, ShieldCheck,
    FileCheck2, Briefcase, Wallet, Truck, KeyRound, LogOut, Bell
} from "lucide-react";

export function TeacherSidebar({
    uiState,
    expandSidebar,
    teacherData,
    handleMenuSelection,
    handleMouseEnter,
    handleMouseLeave
}) {
    const defaultDropdowns = {
        profile: true,
        academic: true,
        support: true,
        announcements: true,
        requests: true,
        services: true,
        assignmentsReview: false
    };

    const [openDropdowns, setOpenDropdowns] = useState(defaultDropdowns);

    function handleDropdownClick(dropdownName) {
        setOpenDropdowns(prev => ({
            ...prev,
            [dropdownName]: !prev[dropdownName]
        }));
    }

    function handleSidebarContainerClick() {
        expandSidebar();
    }

    function preventFooterPropagation(e) {
        e.stopPropagation();
    }

    function handleLinkClick(e, menuId) {
        e.preventDefault();
        e.stopPropagation();
        handleMenuSelection(menuId);
    }

    function toggleProfileDropdown() {
        handleDropdownClick("profile");
    }

    function toggleAcademicDropdown() {
        handleDropdownClick("academic");
    }

    function toggleSupportDropdown() {
        handleDropdownClick("support");
    }

    function toggleAnnouncementsDropdown() {
        handleDropdownClick("announcements");
    }

    function toggleRequestsDropdown() {
        handleDropdownClick("requests");
    }

    function toggleServicesDropdown() {
        handleDropdownClick("services");
    }

    function handleProfileEnter(e) {
        handleMouseEnter(e, `${teacherData.title} ${teacherData.first_name} ${teacherData.last_name}`);
    }

    function handleProfileViewEnter(e) {
        handleMouseEnter(e, "View Profile");
    }

    function handleSignOutEnter(e) {
        handleMouseEnter(e, "Sign Out");
    }

    function handleDashboardEnter(e) {
        handleMouseEnter(e, "My Dashboard");
    }

    function handleProfileMenuEnter(e) {
        handleMouseEnter(e, "Profile");
    }

    function handleAcademicEnter(e) {
        handleMouseEnter(e, "Academic Management");
    }

    function handleSupportEnter(e) {
        handleMouseEnter(e, "Student Support");
    }

    function handleAnnouncementsEnter(e) {
        handleMouseEnter(e, "Announcements");
    }

    function handleRequestsEnter(e) {
        handleMouseEnter(e, "Requests");
    }

    function handleServicesEnter(e) {
        handleMouseEnter(e, "Staff Services");
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
            className={`bg-[#012029] text-white h-full flex flex-col transition-all duration-300 ease-in-out z-30 shadow-2xl shrink-0 absolute sm:relative group/sidebar w-60 ${uiState.isSidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"} ${uiState.isSidebarCollapsed ? "sidebar-collapsed w-20! cursor-pointer" : ""} overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-sm hover:[&::-webkit-scrollbar-thumb]:bg-white/40 overflow-x-hidden`}
        >

            <div className="px-6 group-[.sidebar-collapsed]/sidebar:px-2 py-2 group-[.sidebar-collapsed]/sidebar:py-4 flex flex-col items-center border-b border-white/10 transition-all duration-300 shrink-0 relative overflow-hidden">
                <div
                    className="relative cursor-pointer group/profile mb-4"
                    onMouseEnter={handleProfileEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="profile-img w-20 h-20 group-[.sidebar-collapsed]/sidebar:w-12! group-[.sidebar-collapsed]/sidebar:h-12! group-[.sidebar-collapsed]/sidebar:mb-0 rounded-full bg-slate-700/50 p-1 transition-all duration-300 relative flex items-center justify-center overflow-hidden border border-white/20 shadow-lg">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${teacherData.first_name}&backgroundColor=b6e3f4`} alt="Teacher Profile" className="w-full h-full rounded-full object-cover z-10 relative" />
                    </div>
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full shadow-lg border border-white/20 z-20 whitespace-nowrap group-[.sidebar-collapsed]/sidebar:hidden transition-all duration-300 transform group-hover/profile:scale-105">
                        Est. {teacherData.joining_year}
                    </div>
                </div>

                <div className="profile-text group-[.sidebar-collapsed]/sidebar:hidden text-center flex flex-col items-center w-full pb-2">
                    <h2 className="font-heading font-bold text-[18px] tracking-tight text-white drop-shadow-sm leading-tight transition-colors duration-300 z-10">{teacherData.title} {teacherData.first_name} {teacherData.last_name}</h2>
                    <span className="text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 drop-shadow-md">{teacherData.designation}</span>
                    <span className="text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 drop-shadow-md">{teacherData.roll_no}</span>

                    <div className="flex items-center gap-4 w-full justify-center mt-2">
                        <button 
                            onClick={(e) => handleLinkClick(e, "my-profile")}
                            onMouseEnter={handleProfileViewEnter}
                            onMouseLeave={handleMouseLeave}
                            className="p-1.5 hover:text-emerald-400 transition-all duration-300 group/icon"
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
                    onClick={(e) => handleLinkClick(e, "teacher-dashboard")}
                    onMouseEnter={handleDashboardEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`menu-link flex items-center gap-3 py-3 px-4 transition-all duration-300 ease-out hover:bg-white/8 hover:brightness-110 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center ${uiState.activeMenu === "teacher-dashboard" ? "bg-white/8 brightness-110" : ""}`}>
                    <div className="flex-col flex items-center justify-center">
                        <LayoutDashboard className="w-5 h-5 shrink-0 text-blue-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-100" />
                        <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80 leading-tight">Dash.</span>
                    </div>
                    <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm whitespace-nowrap">My Dashboard</span>
                </a>

                <div className="relative border-t border-white/20">
                    <button
                        onClick={toggleProfileDropdown}
                        onMouseEnter={handleProfileMenuEnter}
                        onMouseLeave={handleMouseLeave}
                        className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/8 focus:bg-white/8 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                    >
                        <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                            <div className="flex-col flex items-center justify-center">
                                <UserCircle className="w-5 h-5 shrink-0 text-indigo-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Profile</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide">Profile</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.profile ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.profile ? "flex mb-2" : "hidden"}`}>
                        <a href="#" onClick={(e) => handleLinkClick(e, "my-profile")} className={getSubMenuLinkClass("my-profile")}>
                            <User className="w-4 h-4 text-indigo-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">My Profile</span>
                        </a>
                    </div>
                </div>

                <div className="relative border-t border-white/20">
                    <button
                        onClick={toggleAcademicDropdown}
                        onMouseEnter={handleAcademicEnter}
                        onMouseLeave={handleMouseLeave}
                        className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/8 focus:bg-white/8 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                    >
                        <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                            <div className="flex-col flex items-center justify-center">
                                <GraduationCap className="w-5 h-5 shrink-0 text-emerald-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Acad.</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide">Academic Management</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.academic ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.academic ? "flex mb-2" : "hidden"}`}>
                        <a href="#" onClick={(e) => handleLinkClick(e, "academic-overview")} className={getSubMenuLinkClass("academic-overview")}>
                            <BookOpen className="w-4 h-4 text-emerald-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Academic Overview</span>
                        </a>
                        <a href="#" onClick={(e) => handleLinkClick(e, "mark-attendance")} className={getSubMenuLinkClass("mark-attendance")}>
                            <CalendarCheck className="w-4 h-4 text-emerald-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Mark Attendance</span>
                        </a>
                        <div className="relative w-full">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleDropdownClick("assignmentsReview");
                                }}
                                className={getSubMenuLinkClass("assignments-review")}
                            >
                                <div className="flex items-center gap-3">
                                    <FileCheck className="w-4 h-4 text-emerald-300" />
                                    <span className="nav-text font-medium text-sm whitespace-nowrap">Assignments Review</span>
                                </div>
                                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ml-auto mr-2 ${openDropdowns.assignmentsReview ? "rotate-180" : "rotate-0"}`} />
                            </button>
                            <div className={`flex flex-col gap-0.5 overflow-hidden transition-all duration-300 ${openDropdowns.assignmentsReview ? "max-h-24 opacity-100 mt-1 mb-1" : "max-h-0 opacity-0"}`}>
                                <a href="#" onClick={(e) => handleLinkClick(e, "view-assignments")} className={`${getSubMenuLinkClass("view-assignments")} pl-10 py-1.5`}>
                                    <span className="nav-text font-medium text-[13px] whitespace-nowrap text-emerald-100/70 group-hover:text-white">View Assignments</span>
                                </a>
                                <a href="#" onClick={(e) => handleLinkClick(e, "create-assignment")} className={`${getSubMenuLinkClass("create-assignment")} pl-10 py-1.5`}>
                                    <span className="nav-text font-medium text-[13px] whitespace-nowrap text-emerald-100/70 group-hover:text-white">Create Assignment</span>
                                </a>
                            </div>
                        </div>
                        <a href="#" onClick={(e) => handleLinkClick(e, "upload-resources")} className={getSubMenuLinkClass("upload-resources")}>
                            <CloudUpload className="w-4 h-4 text-emerald-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Upload Resources</span>
                        </a>
                        <a href="#" onClick={(e) => handleLinkClick(e, "results-management")} className={getSubMenuLinkClass("results-management")}>
                            <GraduationCap className="w-4 h-4 text-emerald-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Results Management</span>
                        </a>
                    </div>
                </div>

                <div className="relative border-t border-white/20">
                    <button
                        onClick={toggleSupportDropdown}
                        onMouseEnter={handleSupportEnter}
                        onMouseLeave={handleMouseLeave}
                        className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/8 focus:bg-white/8 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                    >
                        <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                            <div className="flex-col flex items-center justify-center">
                                <Users className="w-5 h-5 shrink-0 text-rose-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Supp.</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide">Student Support</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.support ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.support ? "flex mb-2" : "hidden"}`}>
                        <a href="#" onClick={(e) => handleLinkClick(e, "mentorship")} className={getSubMenuLinkClass("mentorship")}>
                            <Heart className="w-4 h-4 text-rose-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Student Mentorship</span>
                        </a>
                    </div>
                </div>

                <div className="relative border-t border-white/20">
                    <button
                        onClick={toggleAnnouncementsDropdown}
                        onMouseEnter={handleAnnouncementsEnter}
                        onMouseLeave={handleMouseLeave}
                        className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/8 focus:bg-white/8 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                    >
                        <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                            <div className="flex-col flex items-center justify-center">
                                <Megaphone className="w-5 h-5 shrink-0 text-amber-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Announ.</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide">Announcements</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.announcements ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.announcements ? "flex mb-2" : "hidden"}`}>
                        <a href="#" onClick={(e) => handleLinkClick(e, "teacher-circulars")} className={getSubMenuLinkClass("teacher-circulars")}>
                            <Bell className="w-4 h-4 text-amber-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Circulars & Notifications</span>
                        </a>
                        <a href="#" onClick={(e) => handleLinkClick(e, "teacher-calendar")} className={getSubMenuLinkClass("teacher-calendar")}>
                            <Calendar className="w-4 h-4 text-amber-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Academic Calendar</span>
                        </a>
                        <a href="#" onClick={(e) => handleLinkClick(e, "events-coordination")} className={getSubMenuLinkClass("events-coordination")}>
                            <PartyPopper className="w-4 h-4 text-amber-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Events Coordination</span>
                        </a>
                    </div>
                </div>

                <div className="relative border-t border-white/20">
                    <button
                        onClick={toggleRequestsDropdown}
                        onMouseEnter={handleRequestsEnter}
                        onMouseLeave={handleMouseLeave}
                        className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/8 focus:bg-white/8 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                    >
                        <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                            <div className="flex-col flex items-center justify-center">
                                <FilePlus className="w-5 h-5 shrink-0 text-pink-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Req.</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide">Requests</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.requests ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.requests ? "flex mb-2" : "hidden"}`}>
                        <a href="#" onClick={(e) => handleLinkClick(e, "request-access")} className={getSubMenuLinkClass("request-access")}>
                            <ShieldCheck className="w-4 h-4 text-pink-300" />
                            <span className="nav-text font-medium text-md whitespace-nowrap">Request Access</span>
                        </a>
                        <a href="#" onClick={(e) => handleLinkClick(e, "leaves-approval")} className={getSubMenuLinkClass("leaves-approval")}>
                            <FileCheck2 className="w-4 h-4 text-pink-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Leaves Approval</span>
                        </a>
                    </div>
                </div>

                <div className="relative border-t border-white/20">
                    <button
                        onClick={toggleServicesDropdown}
                        onMouseEnter={handleServicesEnter}
                        onMouseLeave={handleMouseLeave}
                        className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/8 focus:bg-white/8 text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                    >
                        <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                            <div className="flex-col flex items-center justify-center">
                                <Briefcase className="w-5 h-5 shrink-0 text-yellow-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Serv.</span>
                            </div>
                            <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide">Staff Services</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.services ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    <div className={`dropdown-menu flex-col gap-1 overflow-hidden transition-all duration-300 group-[.sidebar-collapsed]/sidebar:hidden! pl-6 ${openDropdowns.services ? "flex mb-2" : "hidden"}`}>
                        <a href="#" onClick={(e) => handleLinkClick(e, "salary-payroll")} className={getSubMenuLinkClass("salary-payroll")}>
                            <Wallet className="w-4 h-4 text-yellow-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Salary & Payroll</span>
                        </a>
                        <a href="#" onClick={(e) => handleLinkClick(e, "teacher-transport")} className={getSubMenuLinkClass("teacher-transport")}>
                            <Truck className="w-4 h-4 text-yellow-300" />
                            <span className="nav-text font-medium text-sm whitespace-nowrap">Transport</span>
                        </a>
                    </div>
                </div>

                <div className="grow min-h-4"></div>
            </nav>

            <div className="p-2 group-[.sidebar-collapsed]/sidebar:pb-12 border-t border-white/20 bg-[#012029] shrink-0 relative z-50" onClick={preventFooterPropagation}>
                <a
                    href="#"
                    onClick={(e) => handleLinkClick(e, "logout")}
                    onMouseEnter={handleSignOutEnter}
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