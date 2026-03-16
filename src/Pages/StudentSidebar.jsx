import {
    ChevronDown, UserCircle, User, CloudUpload,
    GraduationCap, Pen, BookOpenCheck, FileSpreadsheet, FileText, CalendarDays, Clock, Trophy,
    Megaphone, BellRing, PartyPopper, LifeBuoy, Bus, Wallet, FilePlus, LogOut, Contact, KeyRound,
    LayoutDashboard
} from "lucide-react";

export function StudentSidebar({
    isSidebarCollapsed,
    setIsSidebarCollapsed,
    isSidebarOpen,
    setIsSidebarOpen,
    openDropdowns,
    handleDropdownClick,
    activeMenu,
    handleMenuSelection,
    userdata,
    handleMouseEnter,
    handleMouseLeave,
    getSubMenuLinkClass,
}) {
    return (
        <>
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>
            )}

            {/* Sidebar */}
            <aside 
                id="sidebar" 
                onClick={() => {
                    if (isSidebarCollapsed) {
                        setIsSidebarCollapsed(false);
                    }
                }}
                className={`bg-[#051F3E] text-white h-full flex flex-col transition-all duration-300 ease-in-out z-30 shadow-2xl shrink-0 absolute sm:relative group/sidebar w-60 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"} ${isSidebarCollapsed ? "sidebar-collapsed w-20! cursor-pointer" : ""} overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-[4px] hover:[&::-webkit-scrollbar-thumb]:bg-white/40 overflow-x-hidden`}
            >

                {/* Profile Section */}
                <div className="px-6 group-[.sidebar-collapsed]/sidebar:px-2 py-2 group-[.sidebar-collapsed]/sidebar:py-4 flex flex-col items-center border-b border-white/10 transition-all duration-300 shrink-0 relative">
                    <div
                        className="relative cursor-pointer group/profile mb-4"
                        onMouseEnter={(e) => handleMouseEnter(e, `${userdata.first_name} ${userdata.last_name}`)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Profile Image */}
                        <div className="profile-img w-20 h-20 group-[.sidebar-collapsed]/sidebar:!w-12 group-[.sidebar-collapsed]/sidebar:!h-12 group-[.sidebar-collapsed]/sidebar:mb-0 rounded-full bg-slate-700/50 p-1 transition-all duration-300 relative flex items-center justify-center overflow-hidden border border-white/20 shadow-lg" onClick={() => handleMenuSelection("my-profile")}>
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userdata.first_name}&backgroundColor=b6e3f4`} alt="Student Profile" className="w-full h-full rounded-full object-cover z-10 relative" />
                        </div>
                        {/* Tenure Badge */}
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-blue-700 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full shadow-lg border border-white/20 z-20 whitespace-nowrap group-[.sidebar-collapsed]/sidebar:hidden transition-all duration-300 transform group-hover/profile:scale-105">
                            {userdata.batch} — {userdata.batch + 4}
                        </div>
                    </div>

                    <div className="profile-text group-[.sidebar-collapsed]/sidebar:hidden text-center flex flex-col items-center w-full pb-2">
                        <h2 className="font-heading font-bold text-[18px] tracking-tight text-white drop-shadow-sm leading-tight transition-colors duration-300 z-10">{userdata.first_name} {userdata.last_name}</h2>
                        <span className="text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 drop-shadow-md">{userdata.academic.branch} Dept</span>
                        <span className="text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 drop-shadow-md">{userdata.roll_no}</span>
                        
                        {/* Profile Quick Actions */}
                        <div className="flex items-center gap-4 w-full justify-center">
                            <button 
                                onClick={(e) => { e.stopPropagation(); handleMenuSelection("my-profile"); }}
                                onMouseEnter={(e) => handleMouseEnter(e, "View Profile")}
                                onMouseLeave={handleMouseLeave}
                                className="p-2 hover:text-emerald-400 transition-all duration-300 group/icon"
                            >
                                <UserCircle className="w-5 h-5 transition-transform duration-300 group-hover/icon:scale-110" />
                            </button>
                            <button 
                                onClick={(e) => { e.stopPropagation(); handleMenuSelection("logout"); }}
                                onMouseEnter={(e) => handleMouseEnter(e, "Sign Out")}
                                onMouseLeave={handleMouseLeave}
                                className="p-2 hover:text-rose-400 transition-all duration-300 group/icon"
                            >
                                <LogOut className="w-5 h-5 transition-transform duration-300 group-hover/icon:scale-110" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="py-4 flex flex-col gap-1.5 relative">

                    {/* Dashboard */}
                    <a
                        href="#"
                        onMouseEnter={(e) => handleMouseEnter(e, "My Dashboard")}
                        onMouseLeave={handleMouseLeave}
                        onClick={(e) => { e.preventDefault(); handleMenuSelection("dashboard"); }}
                        className="menu-link flex items-center gap-3 py-3 group-[.sidebar-collapsed]/sidebar:py-2 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] hover:brightness-110 text-white hover:text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                    >
                        <div className="flex-col flex items-center justify-center">
                            <LayoutDashboard className="w-5 h-5 shrink-0 text-blue-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-100" />
                            <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80 leading-tight">Dash.</span>
                        </div>
                        <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm whitespace-nowrap">My Dashboard</span>
                    </a>

                    {/* Profile Section */}
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
                                <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide ">Profile</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.profile ? "rotate-180" : "rotate-0"}`} />
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

                    {/* Academics Section */}
                    <div className="relative border-t border-white/20">
                        <button
                            onClick={() => handleDropdownClick("academics")}
                            onMouseEnter={(e) => handleMouseEnter(e, "Academics")}
                            onMouseLeave={handleMouseLeave}
                            className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                        >
                            <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                <div className="flex-col flex items-center justify-center">
                                    <GraduationCap className="w-5 h-5 shrink-0 text-emerald-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                    <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Acad.</span>
                                </div>
                                <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide ">Academics</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.academics ? "rotate-180" : "rotate-0"}`} />
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

                    {/* Announcements Section */}
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
                                <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide">Announcements</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.announcements ? "rotate-180" : "rotate-0"}`} />
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

                    {/* Services Section */}
                    <div className="relative border-t border-white/20">
                        <button
                            onClick={() => handleDropdownClick("services")}
                            onMouseEnter={(e) => handleMouseEnter(e, "Services")}
                            onMouseLeave={handleMouseLeave}
                            className="w-full flex items-center justify-between py-3 px-4 transition-all duration-300 ease-out hover:bg-white/[0.08] focus:bg-white/[0.08] text-white group relative group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0 group-[.sidebar-collapsed]/sidebar:justify-center"
                        >
                            <div className="flex items-center gap-3 group-[.sidebar-collapsed]/sidebar:flex-col group-[.sidebar-collapsed]/sidebar:gap-0">
                                <div className="flex-col flex items-center justify-center">
                                    <LifeBuoy className="w-5 h-5 shrink-0 text-yellow-300 drop-shadow-md stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                                    <span className="hidden group-[.sidebar-collapsed]/sidebar:block text-[10px] text-center mt-1 px-1 opacity-80">Serv.</span>
                                </div>
                                <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide">Services</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.services ? "rotate-180" : "rotate-0"}`} />
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

                    {/* Requests Section */}
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
                                <span className="nav-text group-[.sidebar-collapsed]/sidebar:hidden font-medium text-sm tracking-wide">Requests</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-[.sidebar-collapsed]/sidebar:hidden chevron-icon mr-4 ${openDropdowns.requests ? "rotate-180" : "rotate-0"}`} />
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
                <div className="p-2 group-[.sidebar-collapsed]/sidebar:pb-8 border-t border-white/20 bg-[#051F3E] shrink-0 relative z-50" onClick={(e) => e.stopPropagation()}>

                    {/* Sign Out */}
                    <a
                        href="#"
                        onMouseEnter={(e) => handleMouseEnter(e, "Sign Out")}
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
        </>
    );
}