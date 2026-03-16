import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { StudentHeader } from "./StudentHeader";
import { StudentSidebar } from "./StudentSidebar";

export function StudentDashboard() {
    // --- STATE MANAGEMENT ---
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({
        profile: true,
        academics: true,
        announcements: true,
        services: true,
        requests: true
    });
    const [activeMenu, setActiveMenu] = useState("dashboard");
    const [tooltip, setTooltip] = useState({ visible: false, text: "", top: 0, left: 0 });

    // Responsive Behavior
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setIsSidebarOpen(false);
                setIsSidebarCollapsed(false);
            } else if (width < 768) {
                setIsSidebarCollapsed(true);
            } else {
                setIsSidebarCollapsed(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // User Data State
    const [userdata] = useState({
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
    const handleDropdownClick = (dropdownName) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [dropdownName]: !prev[dropdownName]
        }));
    };

    const handleMenuSelection = (menuId) => {
        setActiveMenu(menuId);
        if (window.innerWidth < 640) {
            setIsSidebarOpen(false);
        }
    };

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

    const getSubMenuLinkClass = (menuId) => {
        const baseClass = "menu-link flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 ease-out hover:bg-white/[0.08] hover:translate-x-1.5 hover:brightness-110 text-white group";
        const activeClass = activeMenu === menuId ? "!bg-white/20 backdrop-blur-md !text-white shadow-inner border border-white/10 brightness-110 translate-x-1" : "";
        return `${baseClass} ${activeClass}`;
    };

    const handleToggleSidebar = () => {
        if (window.innerWidth < 640) setIsSidebarOpen(!isSidebarOpen);
        else setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <div className="bg-gray-50 flex flex-col h-dvh overflow-hidden font-body">
            {/* Header */}
            <StudentHeader
                userdata={userdata}
                onToggleSidebar={handleToggleSidebar}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
            />

            {/* App Body */}
            <div className="flex flex-1 overflow-hidden relative">
                {/* Sidebar */}
                <StudentSidebar
                    isSidebarCollapsed={isSidebarCollapsed}
                    setIsSidebarCollapsed={setIsSidebarCollapsed}
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    openDropdowns={openDropdowns}
                    handleDropdownClick={handleDropdownClick}
                    activeMenu={activeMenu}
                    handleMenuSelection={handleMenuSelection}
                    userdata={userdata}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    getSubMenuLinkClass={getSubMenuLinkClass}
                />

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col min-w-0 transition-all duration-300 relative bg-gray-50">
                    <div className="p-8 flex-1 overflow-y-auto w-full h-full flex flex-col items-center justify-center text-gray-400">
                        <p className="font-bold text-xl">Main Dashboard Content</p>
                        <p className="mt-2 text-sm text-gray-500">Currently viewing: <span className="text-blue-500 font-semibold">{activeMenu}</span></p>
                    </div>
                </main>
            </div>

            {/* Portal Tooltip */}
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
                    <div className={`absolute border-[6px] border-transparent ${tooltip.position === "bottom" ? "bottom-full left-1/2 -translate-x-1/2 border-b-slate-900" : "right-full top-1/2 -translate-y-1/2 border-r-slate-900"}`}></div>
                </div>,
                document.body
            )}
        </div>
    );
}

export default StudentDashboard;
