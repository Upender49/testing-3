import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { TeacherHeader } from "./TeacherHeader";
import { TeacherSidebar } from "./TeacherSideBar";

export function TeacherDashboard() {
    // --- STATE MANAGEMENT ---
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Desktop shrink toggle
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);           // Mobile slide-out toggle
    const [activeMenu, setActiveMenu] = useState("teacher-dashboard");   // Tracks the highlighted link

    // --- DYNAMIC TOOLTIP STATE ---
    const [tooltip, setTooltip] = useState({
        visible: false,
        text: "",
        top: 0,
        left: 0,
        position: "right"
    });

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

    // --- HELPER FUNCTIONS ---
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

    const handleMenuSelection = (menuId) => {
        setActiveMenu(menuId);
        if (window.innerWidth < 640) {
            setIsSidebarOpen(false);
        }
    };

    return (
        <div className="bg-[#012029] flex flex-col h-[100dvh] overflow-hidden font-body">
            {/* --- TOP HEADER --- */}
            <TeacherHeader
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                isSidebarCollapsed={isSidebarCollapsed}
                setIsSidebarCollapsed={setIsSidebarCollapsed}
                teacherData={teacherData}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
            />

            {/* --- APP BODY CONTAINER --- */}
            <div className="flex flex-1 overflow-hidden relative">

                {/* Mobile Overlay (Clicks to close the mobile sidebar) */}
                {isSidebarOpen && (
                    <div className="fixed inset-0 bg-black/50 z-20 sm:hidden" onClick={() => setIsSidebarOpen(false)}></div>
                )}

                {/* --- SIDEBAR --- */}
                <TeacherSidebar
                    isSidebarOpen={isSidebarOpen}
                    isSidebarCollapsed={isSidebarCollapsed}
                    setIsSidebarCollapsed={setIsSidebarCollapsed}
                    activeMenu={activeMenu}
                    teacherData={teacherData}
                    handleMenuSelection={handleMenuSelection}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                />

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