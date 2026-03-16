import { Menu, MessageSquare, Bell } from "lucide-react";

export function TeacherHeader({
    isSidebarOpen,
    setIsSidebarOpen,
    isSidebarCollapsed,
    setIsSidebarCollapsed,
    teacherData,
    handleMouseEnter,
    handleMouseLeave
}) {
    return (
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
    );
}