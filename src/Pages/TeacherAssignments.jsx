import { useState, useRef, useEffect } from "react";
import { 
    ArrowLeft, Bell, Plus, SlidersHorizontal, ChevronDown, 
    ArrowDown, AlertCircle, Calendar, Clock, Edit3, Trash2, 
    Clock3, CheckCircle, Search
} from "lucide-react";

// Expanded dummy data with advanced filter properties
const mockAssignments = [
    {
        id: 1,
        subject: "Principles of Programming Languages",
        title: "PPL Assignment II | Type A",
        status: "expired",
        startDate: "17/10/2025",
        endDate: "31/10/2025",
        startTime: "12:05 AM",
        endTime: "11:00 PM",
        submitted: 58,
        total: 60,
        course: "btech",
        batch: "2024",
        semester: "4",
        branch: "cse",
        section: "A",
        bgColor: "bg-[#FEE2E2]",
        borderColor: "border-red-200",
        textColor: "text-red-700",
        iconColor: "text-red-600",
        Icon: AlertCircle
    },
    {
        id: 2,
        subject: "Data Structures & Algorithms",
        title: "DSA Project Phase I | Binary Trees",
        status: "active",
        startDate: "01/03/2026",
        endDate: "25/03/2026",
        startTime: "09:00 AM",
        endTime: "05:00 PM",
        submitted: 12,
        total: 64,
        course: "btech",
        batch: "2025",
        semester: "2",
        branch: "aiml",
        section: "C",
        bgColor: "bg-[#FFEDD5]",
        borderColor: "border-orange-200",
        textColor: "text-orange-700",
        iconColor: "text-orange-600",
        Icon: Clock3
    },
    {
        id: 3,
        subject: "Computer Networks",
        title: "TCP/IP Protocol Suite Assignment",
        status: "completed",
        startDate: "10/02/2026",
        endDate: "20/02/2026",
        startTime: "10:00 AM",
        endTime: "11:59 PM",
        submitted: 60,
        total: 60,
        course: "btech",
        batch: "2023",
        semester: "6",
        branch: "ece",
        section: "B",
        bgColor: "bg-[#DCFCE7]",
        borderColor: "border-green-200",
        textColor: "text-green-700",
        iconColor: "text-green-600",
        Icon: CheckCircle
    },
    {
        id: 4,
        subject: "Machine Learning",
        title: "Neural Networks Basics Quiz",
        status: "active",
        startDate: "15/03/2026",
        endDate: "18/03/2026",
        startTime: "10:00 AM",
        endTime: "12:00 PM",
        submitted: 45,
        total: 120,
        course: "mtech",
        batch: "2025",
        semester: "2",
        branch: "cse",
        section: "A",
        bgColor: "bg-[#FFEDD5]",
        borderColor: "border-orange-200",
        textColor: "text-orange-700",
        iconColor: "text-orange-600",
        Icon: Clock3
    },
    {
        id: 5,
        subject: "Database Management Systems",
        title: "SQL Queries and Normalization",
        status: "completed",
        startDate: "05/01/2026",
        endDate: "15/01/2026",
        startTime: "08:00 AM",
        endTime: "11:59 PM",
        submitted: 54,
        total: 55,
        course: "btech",
        batch: "2024",
        semester: "4",
        branch: "it",
        section: "A",
        bgColor: "bg-[#DCFCE7]",
        borderColor: "border-green-200",
        textColor: "text-green-700",
        iconColor: "text-green-600",
        Icon: CheckCircle
    },
    {
        id: 6,
        subject: "Operating Systems",
        title: "Process Synchronization Lab",
        status: "expired",
        startDate: "20/12/2025",
        endDate: "30/12/2025",
        startTime: "02:00 PM",
        endTime: "05:00 PM",
        submitted: 40,
        total: 45,
        course: "btech",
        batch: "2024",
        semester: "4",
        branch: "cse",
        section: "B",
        bgColor: "bg-[#FEE2E2]",
        borderColor: "border-red-200",
        textColor: "text-red-700",
        iconColor: "text-red-600",
        Icon: AlertCircle
    }
];

// Helper to parse DD/MM/YYYY into a Date object for sorting
const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
};

export function TeacherAssignments() {
    const [isLoading, setIsLoading] = useState(true); 1
    const [activeTab, setActiveTab] = useState('all'); 1
    const [searchQuery, setSearchQuery] = useState(''); 2
    const [isFilterOpen, setIsFilterOpen] = useState(false); 1
    const [isSubjectOpen, setIsSubjectOpen] = useState(false); 1
    const [dateSortDesc, setDateSortDesc] = useState(true); 2
    const [selectedSubject, setSelectedSubject] = useState('All Subjects'); 2
    {/* 1.filter 2.BasicFilter*/}
    const [advancedFilters, setAdvancedFilters] = useState({
        course: '',
        batch: '',
        semester: '',
        branch: '',
        section: ''
    });

    const filterRef = useRef(null);
    const subjectRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);

        function handleClickOutside(event) {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsFilterOpen(false);
            }
            if (subjectRef.current && !subjectRef.current.contains(event.target)) {
                setIsSubjectOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            clearTimeout(timer);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSubjectSelect = (subject) => {
        setSelectedSubject(subject);
        setIsSubjectOpen(false);
    };

    const handleAdvancedFilterChange = (e) => {
        const { name, value } = e.target;
        setAdvancedFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const applyFilters = () => {
        setIsFilterOpen(false);
    };

    // --- Core Filter Logic ---
    let filteredAssignments = mockAssignments.filter(assignment => {
        // 1. Tab Filter
        if (activeTab !== 'all' && activeTab !== 'marks' && assignment.status !== activeTab) {
            return false;
        }

        // 2. Search Filter
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            if (!assignment.title.toLowerCase().includes(lowerQuery) && 
                !assignment.subject.toLowerCase().includes(lowerQuery)) {
                return false;
            }
        }

        // 3. Subject Dropdown Filter
        if (selectedSubject !== 'All Subjects' && assignment.subject !== selectedSubject) {
            return false;
        }

        // 4. Advanced Filters
        if (advancedFilters.course && assignment.course !== advancedFilters.course) return false;
        if (advancedFilters.batch && assignment.batch !== advancedFilters.batch) return false;
        if (advancedFilters.semester && assignment.semester !== advancedFilters.semester) return false;
        if (advancedFilters.branch && assignment.branch !== advancedFilters.branch) return false;
        if (advancedFilters.section && assignment.section !== advancedFilters.section) return false;

        return true;
    });

    // --- Core Sorting Logic ---
    filteredAssignments.sort((a, b) => {
        const dateA = parseDate(a.startDate);
        const dateB = parseDate(b.startDate);
        return dateSortDesc ? dateB - dateA : dateA - dateB;
    });

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center font-sans">
                <div className="w-12 h-12 border-4 border-slate-200 border-t-[#012029] rounded-full animate-spin mb-4"></div>
                <p className="text-slate-500 font-semibold animate-pulse">Loading assignments...</p>
            </div>
        );
    }

    return (
        <div className="font-sans text-slate-900 min-h-screen bg-slate-50">
            
            <header className="bg-[#012029] text-white sticky top-0 z-50 border-b border-slate-200 px-4 py-3 sm:px-6 shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors" onClick={() => window.history.back()}>
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <h1 className="text-xl font-bold font-display tracking-tight">My Assignments</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
                            <Bell className="w-6 h-6" />
                            <span className="absolute top-1 right-1 bg-red-500 text-white text-[5px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#012029]">12</span>
                        </button>
                        <div className="w-8 h-8 rounded-full border-2 border-slate-300 overflow-hidden shrink-0">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Robert&backgroundColor=b6e3f4" alt="Teacher Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 font-display">Assignment Management</h2>
                        <p className="text-sm text-slate-500 mt-0.5">Edit, delete or view submissions for your assigned tasks.</p>
                    </div>
                    <a href="/createassignment" className="inline-flex items-center justify-center gap-2 bg-[#012029] hover:bg-teal-800 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-teal-900/10 transition-all hover:-translate-y-0.5 active:translate-y-0">
                        <Plus className="w-4 h-4" />
                        Create Assignment
                    </a>
                </div>

                <nav className="flex border-b border-slate-200 overflow-x-auto no-scrollbar">
                    {['all', 'active', 'completed', 'expired', 'marks'].map((tab) => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)} 
                            className={`px-6 py-3 text-sm whitespace-nowrap transition-all ${
                                activeTab === tab 
                                ? 'font-semibold text-[#012029] border-b-2 border-[#012029]' 
                                : 'font-medium text-slate-500 hover:text-slate-700'
                            }`}
                        >
                            {tab === 'marks' ? 'Allocated Marks' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </nav>

                <div className="flex flex-wrap items-center justify-start md:flex-row-reverse md:justify-between gap-4 pb-5">
                    {/* Date & Subject Section (On Right in Desktop, Top in Mobile/Tablet) */}
                    <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-start md:justify-end">
                        <button onClick={() => setDateSortDesc(!dateSortDesc)} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium hover:border-teal-400 transition-all shadow-sm group">
                            <span className="text-slate-600">Date</span>
                            <ArrowDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${dateSortDesc ? '' : 'rotate-180'}`} />
                        </button>
                        
                        <div className="relative min-w-55" ref={subjectRef}>
                            <button onClick={() => setIsSubjectOpen(!isSubjectOpen)} className="w-full flex items-center justify-between gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium hover:border-teal-400 transition-all shadow-sm">
                                <span>{selectedSubject}</span>
                                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isSubjectOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {isSubjectOpen && (
                                <div className="absolute right-0 top-full mt-2 w-full min-w-[220px] bg-white border border-slate-200 rounded-xl shadow-lg z-50 py-1">
                                    {['All Subjects', 'Principles of Programming Languages', 'Data Structures & Algorithms', 'Computer Networks', 'Machine Learning', 'Database Management Systems', 'Operating Systems'].map(sub => (
                                        <button 
                                            key={sub}
                                            onClick={() => handleSubjectSelect(sub)} 
                                            className={`w-full text-left px-4 py-2 text-sm hover:bg-teal-50 transition-colors ${selectedSubject === sub ? 'font-bold text-teal-700 bg-teal-50/50' : 'text-slate-700'}`}
                                        >
                                            {sub}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Search & Filter Section (On Left in Desktop, Bottom in Mobile/Tablet) */}
                    <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-start">
                        <div className="relative flex-1 md:flex-none min-w-50">
                            <input 
                                type="text" 
                                placeholder="Search assignments..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-full focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm font-medium outline-none placeholder:text-slate-400"
                            />
                            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        </div>

                        <div className="relative" ref={filterRef}>
                            <button 
                                onClick={() => setIsFilterOpen(!isFilterOpen)} 
                                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:border-teal-400 hover:text-teal-600 transition-all shadow-sm group"
                            >
                                <SlidersHorizontal className="w-4 h-4 transition-transform group-hover:rotate-12" />
                                Filter
                                {(advancedFilters.course || advancedFilters.batch || advancedFilters.semester || advancedFilters.branch || advancedFilters.section) && (
                                    <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                                )}
                                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {isFilterOpen && (
                                <div className="absolute right-0 sm:right-auto sm:left-0 top-full mt-2 w-[calc(100vw-3rem)] max-w-[480px] sm:w-120 bg-white border border-slate-200 rounded-2xl p-5 shadow-xl z-50">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-bold text-slate-800">Advanced Filters</h4>
                                        <button 
                                            onClick={() => setAdvancedFilters({ course: '', batch: '', semester: '', branch: '', section: '' })}
                                            className="text-xs font-bold text-red-500 hover:text-red-600"
                                        >
                                            Clear All
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Course</label>
                                            <select name="course" value={advancedFilters.course} onChange={handleAdvancedFilterChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:border-teal-500 outline-none">
                                                <option value="">All Courses</option>
                                                <option value="btech">B.Tech</option>
                                                <option value="mtech">M.Tech</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Batch</label>
                                            <select name="batch" value={advancedFilters.batch} onChange={handleAdvancedFilterChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:border-teal-500 outline-none">
                                                <option value="">All Batches</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Semester</label>
                                            <select name="semester" value={advancedFilters.semester} onChange={handleAdvancedFilterChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:border-teal-500 outline-none">
                                                <option value="">All Semesters</option>
                                                <option value="1">Sem 1</option>
                                                <option value="2">Sem 2</option>
                                                <option value="3">Sem 3</option>
                                                <option value="4">Sem 4</option>
                                                <option value="5">Sem 5</option>
                                                <option value="6">Sem 6</option>
                                                <option value="7">Sem 7</option>
                                                <option value="8">Sem 8</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Branch</label>
                                            <select name="branch" value={advancedFilters.branch} onChange={handleAdvancedFilterChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:border-teal-500 outline-none">
                                                <option value="">All Branches</option>
                                                <option value="cse">CSE</option>
                                                <option value="it">IT</option>
                                                <option value="aiml">AIML</option>
                                                <option value="civil">CIVIL</option>
                                                <option value="eee">EEE</option>
                                                <option value="ece">ECE</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1.5 col-span-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Section</label>
                                            <select name="section" value={advancedFilters.section} onChange={handleAdvancedFilterChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:border-teal-500 outline-none">
                                                <option value="">All Sections</option>
                                                <option value="A">Section A</option>
                                                <option value="B">Section B</option>
                                                <option value="C">Section C</option>
                                                <option value="D">Section D</option>
                                            </select>
                                        </div>
                                        <button onClick={applyFilters} className="col-span-2 w-full py-2.5 bg-[#012029] text-white rounded-xl text-xs font-bold hover:bg-teal-900 transition-colors mt-2">
                                            Apply Filters
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid gap-12 md:gap-14">
                    {filteredAssignments.map((assignment) => (
                        <div key={assignment.id} className={`group ${assignment.bgColor} relative rounded-2xl rounded-tr-none p-5 md:p-7 border ${assignment.borderColor} shadow-sm transition-all hover:shadow-md`}>
                            
                            <div className={`absolute -top-7 right-0 flex items-center gap-1.5 bg-white px-4 py-1.5 rounded-t-xl border ${assignment.borderColor} border-b-0 shadow-[0_-2px_5px_rgba(0,0,0,0.03)] z-10`}>
                                <assignment.Icon className={`w-3.5 h-3.5 ${assignment.iconColor}`} />
                                <span className={`text-[10px] font-bold ${assignment.textColor} uppercase`}>{assignment.status}</span>
                            </div>

                            <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] md:items-center justify-between gap-6">
                                <div className="flex-1 space-y-3">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className={`text-[11px] md:text-xs font-bold ${assignment.textColor}/70 uppercase tracking-wider`}>{assignment.subject}</p>
                                            <span className="text-slate-300">•</span>
                                            <p className="text-[10px] font-semibold text-slate-500 bg-white/60 px-2 py-0.5 rounded-full border border-slate-200/50">
                                                {assignment.course.toUpperCase()} - {assignment.branch.toUpperCase()} - {assignment.section}
                                            </p>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">{assignment.title}</h3>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-slate-600">
                                            <Calendar className="w-4 h-4 text-slate-400" />
                                            <span className="text-sm font-medium">{assignment.startDate} - {assignment.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-600">
                                            <Clock className="w-4 h-4 text-slate-400" />
                                            <span className="text-sm font-medium">{assignment.startTime} - {assignment.endTime}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between items-end self-stretch py-1 md:pl-8 md:border-l border-slate-200/50">
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-slate-700">{assignment.submitted} / {assignment.total} Submitted</p>
                                        <div className="w-full bg-slate-200/50 rounded-full h-1.5 mt-2 overflow-hidden">
                                            <div 
                                                className={`h-1.5 rounded-full ${assignment.status === 'completed' ? 'bg-green-500' : assignment.status === 'expired' ? 'bg-red-500' : 'bg-orange-500'}`} 
                                                style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 mt-4">
                                        <button className="p-2 text-slate-600 hover:text-teal-600 bg-white shadow-sm border border-slate-200 rounded-xl hover:border-teal-300 transition-all" title="Edit">
                                            <Edit3 className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-slate-600 hover:text-red-600 bg-white shadow-sm border border-slate-200 rounded-xl hover:border-red-300 transition-all" title="Delete">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {filteredAssignments.length === 0 && (
                        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-slate-400" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-1">No Assignments Found</h3>
                            <p className="text-sm text-slate-500 font-medium">Try adjusting your search or filter criteria.</p>
                            <button 
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedSubject('All Subjects');
                                    setAdvancedFilters({ course: '', batch: '', semester: '', branch: '', section: '' });
                                    setActiveTab('all');
                                }}
                                className="mt-6 px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-bold transition-colors"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>

            </main>
        </div>
    );
}

export default TeacherAssignments;