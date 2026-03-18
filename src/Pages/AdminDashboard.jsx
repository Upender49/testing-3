import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import AdminHeader from "./AdminHeader";
import { AdminSidebar } from "./AdminSideBar";

export function AdminDashboard() {
    const defaultUiState = {
        isSidebarCollapsed: false,
        isSidebarOpen: false,
        activeMenu: "admin-dashboard"
    };

    const defaultTooltipState = {
        visible: false,
        text: "",
        top: 0,
        left: 0,
        position: "right"
    };

    const defaultAdminData = {
        "_id": "65f0a008c3d4e5f600000801",
        "first_name": "Sarah",
        "last_name": "Jenkins",
        "roll_no": "ADM-2024-001",
        "dept": "System Admin",
        "position": "Full Access",
        "profile": "65f0a006c3d4e5f600000601"
    };

    const [uiState, setUiState] = useState(defaultUiState);
    const [tooltip, setTooltip] = useState(defaultTooltipState);
    const [adminData, setAdminData] = useState(defaultAdminData);

    function handleResize() {
        const width = window.innerWidth;
        if (width < 640) {
            setUiState(prev => ({ ...prev, isSidebarOpen: false, isSidebarCollapsed: false }));
        } else if (width < 768) {
            setUiState(prev => ({ ...prev, isSidebarCollapsed: true }));
        } else {
            setUiState(prev => ({ ...prev, isSidebarCollapsed: false }));
        }
    }

    function handleMenuSelection(menuId) {
        setUiState(prev => ({
            ...prev,
            activeMenu: menuId,
            isSidebarOpen: window.innerWidth < 640 ? false : prev.isSidebarOpen
        }));
    }

    function handleSidebarToggle() {
        if (window.innerWidth < 640) {
            setUiState(prev => ({ ...prev, isSidebarOpen: !prev.isSidebarOpen }));
        } else {
            setUiState(prev => ({ ...prev, isSidebarCollapsed: !prev.isSidebarCollapsed }));
        }
    }

    function expandSidebar() {
        if (uiState.isSidebarCollapsed) {
            setUiState(prev => ({ ...prev, isSidebarCollapsed: false }));
        }
    }

    function handleMobileOverlayClick() {
        setUiState(prev => ({ ...prev, isSidebarOpen: false }));
    }

    function handleMouseEnter(e, text, position = "right") {
        const isHeaderItem = e.currentTarget.closest('header');
        if (!uiState.isSidebarCollapsed && !isHeaderItem) return;

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
    }

    function handleMouseLeave() {
        setTooltip(prev => ({ ...prev, visible: false }));
    }

    // --- LIFECYCLE ---
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="bg-gray-50 flex flex-col h-dvh overflow-hidden font-body">
            <AdminHeader 
                adminData={adminData}
                handleSidebarToggle={handleSidebarToggle}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
            />

            <div className="flex flex-1 overflow-hidden relative">
                {uiState.isSidebarOpen && (
                    <div className="fixed inset-0 bg-black/50 z-20 sm:hidden" onClick={handleMobileOverlayClick}></div>
                )}

                <AdminSidebar 
                    uiState={uiState}
                    adminData={adminData}
                    expandSidebar={expandSidebar}
                    handleMenuSelection={handleMenuSelection}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                />

                <main className="flex-1 flex flex-col min-w-0 transition-all duration-300 relative bg-gray-50">
                    <div className="p-8 flex-1 overflow-y-auto w-full h-full flex flex-col items-center justify-center text-gray-400">
                        <p className="font-bold text-xl text-slate-700">Admin Dashboard Content</p>
                        <p className="mt-2 text-sm text-slate-500">Currently viewing: <span className="font-semibold text-blue-600">{uiState.activeMenu}</span></p>
                    </div>
                </main>
            </div>

            {tooltip.visible && createPortal(
                <div 
                    style={{ 
                        top: tooltip.top, 
                        left: tooltip.position === "bottom" ? tooltip.left : undefined,
                        marginLeft: tooltip.position === "bottom" ? 0 : "6px"
                    }}
                    className={`fixed px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg transition-all duration-200 whitespace-nowrap z-1000 shadow-2xl pointer-events-none border border-white/10 flex items-center ${tooltip.position === "bottom" ? "-translate-x-1/2" : "left-20 -translate-y-1/2"}`}
                >
                    {tooltip.text}
                    <div className={`absolute border-[6px] border-transparent ${tooltip.position === "bottom" ? "bottom-full left-1/2 -translate-x-1/2 border-b-slate-900" : "right-full top-1/2 -translate-y-1/2 border-r-slate-900"}`}></div>
                </div>,
                document.body
            )}
        </div>
    );
}