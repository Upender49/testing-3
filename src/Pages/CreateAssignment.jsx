import { useState, useRef } from "react";
import { ArrowLeft, Bell, ChevronDown, Users, CloudUpload, FileText, Trash2, Send, Save } from "lucide-react";
import Toast from "../components/Toast";
import { AssignStudents } from "./AssignStudents";

export function CreateAssignment() {
    const defaultFormData = {
        assignmentDetails: {
            title: "",
            subject: "",
            category: ""
        },
        targetStudents: {
            course: "",
            batch: "",
            semester: "",
            branch: "",
            section: ""
        },
        schedulingScoring: {
            start_date: "",
            end_date: "",
            marks: "",
            allow_late: false
        },
        questionsAttachments: {
            instructions: "",
            file: null
        }
    };

    const [formData, setFormData] = useState(defaultFormData);
    const [toast, setToast] = useState({ message: "", type: "info", show: false });
    const [showAssignModal, setShowAssignModal] = useState(false);
    const [assignedStudents, setAssignedStudents] = useState([]);
    
    const fileInputRef = useRef(null);

    function closeToast() {
        setToast({ message: "", type: "info", show: false });
    }

    function showError(msg) {
        setToast({ message: msg, type: "error", show: true });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return false;
    }

    function handleChange(section, e) {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ 
            ...prev, 
            [section]: {
                ...prev[section],
                [name]: type === "checkbox" ? checked : value
            }
        }));
        if (toast.show) closeToast();
    }

    function handleFileChange(e) {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ 
                ...prev, 
                questionsAttachments: {
                    ...prev.questionsAttachments,
                    file
                }
            }));
        }
        if (toast.show) closeToast();
    }

    function clearFile() {
        setFormData(prev => ({ 
            ...prev, 
            questionsAttachments: {
                ...prev.questionsAttachments,
                file: null
            }
        }));
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
        if (toast.show) closeToast();
    }

    function handleOpenAssignModal() {
        setShowAssignModal(true);
        if (toast.show) closeToast();
    }

    function handleSaveAssignedStudents(selectedIds) {
        setAssignedStudents(selectedIds);
        setShowAssignModal(false);
        setToast({ message: `Successfully assigned ${selectedIds.length} students.`, type: "success", show: true });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function validateForm() {
        const { title, subject, category } = formData.assignmentDetails;
        const { course, batch, semester, branch, section } = formData.targetStudents;
        const { start_date, end_date, marks, allow_late } = formData.schedulingScoring;
        const { instructions, file } = formData.questionsAttachments;

        const now = new Date();
        const start = start_date ? new Date(start_date) : null;
        const end = end_date ? new Date(end_date) : null;
        
        let hoursGap = 0;
        if (start && end) {
            hoursGap = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
        }

        const semNum = Number(semester);
        const marksNum = Number(marks);

        switch (true) {
            case !title:
                return showError("Assignment Title is required.");
            case title.length < 5 || title.length > 120:
                return showError("Title must be between 5 and 120 characters.");
            case !/^[a-zA-Z0-9\s\-|:]+$/.test(title):
                return showError("Title contains invalid characters. Only alphabets, numbers, spaces, -, |, and : are allowed.");

            case !subject:
                return showError("Please select a Subject.");
            
            case !category:
                return showError("Please select a Course Type / Category.");

            case !course:
                return showError("Please select a Course.");
            
            case !batch:
                return showError("Please select a Batch.");
            
            case !semester:
                return showError("Please select a Semester.");
            case semNum < 1 || semNum > 8:
                return showError("Semester must be between 1 and 8.");
            
            case !branch:
                return showError("Please select a Branch.");
            
            case !section:
                return showError("Please select a Section.");

            case assignedStudents.length === 0:
                return showError("Please assign at least 1 student using the Assign Students button.");

            case !start_date:
                return showError("Start Date & Time is required.");
            
            case !end_date:
                return showError("Due Date & Time is required.");
            
            case Boolean(start && start < now):
                return showError("Start Date cannot be in the past.");
            
            case Boolean(start && end && end <= start):
                return showError("Due Date must be after Start Date.");
            
            case Boolean(start && end && hoursGap < 12):
                return showError("Recommended minimum gap between Start Date and Due Date is 12 hours.");

            case !marks:
                return showError("Maximum Marks is required.");
            case isNaN(marksNum) || marksNum < 1 || marksNum > 1000:
                return showError("Maximum Marks must be a number between 1 and 1000.");

            case Boolean(instructions && (instructions.length < 10 || instructions.length > 1000)):
                return showError("Instructions must be between 10 and 1000 characters.");
            case Boolean(instructions && /<[a-z][\s\S]*>/i.test(instructions)):
                return showError("HTML tags and scripts are not allowed in instructions.");

            case !file:
                return showError("Assignment Questions (PDF) is required.");
            case Boolean(file && file.type !== "application/pdf"):
                return showError("Only PDF format is allowed.");
            case Boolean(file && file.size < 1024):
                return showError("File size must be at least 1 KB.");
            case Boolean(file && file.size > 10 * 1024 * 1024):
                return showError("File size must not exceed 10 MB.");

            default:
                return true;
        }
    }

    function handleSubmit(e, status) {
        e.preventDefault();
        if (validateForm()) {
            setToast({ message: `Assignment ${status} Successfully!`, type: "success", show: true });
            console.log(`Submitted Data (${status}):`, { ...formData, status, assignedStudents });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    const isBatchDisabled = !formData.targetStudents.course;
    const isSemesterDisabled = isBatchDisabled || !formData.targetStudents.batch;
    const isBranchDisabled = isSemesterDisabled || !formData.targetStudents.semester;
    const isSectionDisabled = isBranchDisabled || !formData.targetStudents.branch;
    const isAssignDisabled = isSectionDisabled || !formData.targetStudents.section;

    return (
        <div className="font-sans text-slate-900 min-h-screen pb-12 bg-[#F8FAFC]">
            
            {showAssignModal && (
                <div className="fixed inset-0 z-100 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
                    <div className="relative w-full max-w-4xl h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <AssignStudents 
                            initialSelected={assignedStudents} 
                            onSave={handleSaveAssignedStudents}
                        />
                    </div>
                </div>
            )}

            <header className="bg-[#012029] text-white sticky top-0 z-50 border-b border-slate-200 px-4 py-3 sm:px-6 shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button type="button" className="p-2 hover:bg-white/10 rounded-full transition-colors" onClick={() => window.history.back()}>
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <h1 className="text-xl font-bold font-display tracking-tight">Create Assignment</h1>
                    </div>
                    <div className="relative flex items-center gap-4">
                        <button type="button" className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
                            <Bell className="w-6 h-6" />
                            <span className="absolute top-1 right-1 bg-red-500 text-white text-[5px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#012029]">1</span>
                        </button>
                        <div className="w-8 h-8 rounded-full border-2 border-slate-300 overflow-hidden shrink-0">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Robert&backgroundColor=b6e3f4" alt="Teacher Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-4 relative">
                
                <div className="sticky top-20 z-40 mb-4">
                    {toast.show && (
                        <Toast message={toast.message} type={toast.type} onClose={closeToast} duration={99999999} />
                    )}
                </div>

                <div className="mb-8">
                    <h2 className="text-3xl font-extrabold font-display text-slate-800 tracking-tight">New Assignment</h2>
                    <p className="text-sm text-slate-500 mt-1 font-medium">Create a new assignment and upload questions for your students.</p>
                </div>

                <form className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-8" noValidate>
                    
                    <div>
                        <h3 className="text-base font-bold text-slate-800 mb-5">
                            Assignment Details
                        </h3>
                        
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-1.5">Assignment Title <span className="text-red-500">*</span></label>
                                <input 
                                    type="text" 
                                    id="title" 
                                    name="title"
                                    value={formData.assignmentDetails.title}
                                    onChange={(e) => handleChange("assignmentDetails", e)}
                                    placeholder="e.g., DSA Project Phase I | Binary Trees" 
                                    className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium outline-none shadow-sm hover:border-slate-300"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-1.5">Subject / Course <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <select 
                                            id="subject" 
                                            name="subject"
                                            value={formData.assignmentDetails.subject}
                                            onChange={(e) => handleChange("assignmentDetails", e)}
                                            className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium appearance-none outline-none shadow-sm hover:border-slate-300"
                                        >
                                            <option value="" disabled>Select Subject</option>
                                            <option value="Principles of Programming Languages">Principles of Programming Languages</option>
                                            <option value="Data Structures and Algorithms">Data Structures and Algorithms</option>
                                            <option value="Computer Networks">Computer Networks</option>
                                            <option value="Machine Learning">Machine Learning</option>
                                            <option value="Database Management Systems">Database Management Systems</option>
                                            <option value="Operating Systems">Operating Systems</option>
                                            <option value="Artificial Intelligence">Artificial Intelligence</option>
                                        </select>
                                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="category" className="block text-sm font-semibold text-slate-700 mb-1.5">Course Type / Category <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <select 
                                            id="category" 
                                            name="category"
                                            value={formData.assignmentDetails.category}
                                            onChange={(e) => handleChange("assignmentDetails", e)}
                                            className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium appearance-none outline-none shadow-sm hover:border-slate-300"
                                        >
                                            <option value="" disabled>Select Category</option>
                                            <option value="Assignment">Assignment</option>
                                            <option value="Project">Project</option>
                                            <option value="Lab Work">Lab Work</option>
                                            <option value="Quiz">Quiz</option>
                                            <option value="Homework">Homework</option>
                                        </select>
                                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <hr className="border-t border-slate-100" />

                    <div>
                        <h3 className="text-base font-bold text-slate-800 mb-5">
                            Target Students
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end">
                            <div>
                                <label htmlFor="course" className="block text-sm font-semibold text-slate-700 mb-1.5">Course <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select 
                                        id="course" 
                                        name="course"
                                        value={formData.targetStudents.course}
                                        onChange={(e) => handleChange("targetStudents", e)}
                                        className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm font-medium appearance-none outline-none shadow-sm hover:border-slate-300"
                                    >
                                        <option value="" disabled>Select Course</option>
                                        <option value="B.Tech">B.Tech</option>
                                        <option value="M.Tech">M.Tech</option>
                                        <option value="MCA">MCA</option>
                                    </select>
                                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="batch" className={`block text-sm font-semibold text-slate-700 mb-1.5 transition-opacity ${isBatchDisabled ? 'opacity-50' : ''}`}>Batch <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select 
                                        id="batch" 
                                        name="batch"
                                        value={formData.targetStudents.batch}
                                        onChange={(e) => handleChange("targetStudents", e)}
                                        disabled={isBatchDisabled}
                                        className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm font-medium appearance-none outline-none shadow-sm hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <option value="" disabled>Select Batch</option>
                                        <option value="2022-2026">2022-2026</option>
                                        <option value="2023-2027">2023-2027</option>
                                        <option value="2024-2028">2024-2028</option>
                                        <option value="2025-2029">2025-2029</option>
                                    </select>
                                    <ChevronDown className={`w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${isBatchDisabled ? 'opacity-50' : ''}`} />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="semester" className={`block text-sm font-semibold text-slate-700 mb-1.5 transition-opacity ${isSemesterDisabled ? 'opacity-50' : ''}`}>Semester <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select 
                                        id="semester" 
                                        name="semester"
                                        value={formData.targetStudents.semester}
                                        onChange={(e) => handleChange("targetStudents", e)}
                                        disabled={isSemesterDisabled}
                                        className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm font-medium appearance-none outline-none shadow-sm hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <option value="" disabled>Select Semester</option>
                                        <option value="1">Semester 1</option>
                                        <option value="2">Semester 2</option>
                                        <option value="3">Semester 3</option>
                                        <option value="4">Semester 4</option>
                                        <option value="5">Semester 5</option>
                                        <option value="6">Semester 6</option>
                                        <option value="7">Semester 7</option>
                                        <option value="8">Semester 8</option>
                                    </select>
                                    <ChevronDown className={`w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${isSemesterDisabled ? 'opacity-50' : ''}`} />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="branch" className={`block text-sm font-semibold text-slate-700 mb-1.5 transition-opacity ${isBranchDisabled ? 'opacity-50' : ''}`}>Branch <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select 
                                        id="branch" 
                                        name="branch"
                                        value={formData.targetStudents.branch}
                                        onChange={(e) => handleChange("targetStudents", e)}
                                        disabled={isBranchDisabled}
                                        className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm font-medium appearance-none outline-none shadow-sm hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <option value="" disabled>Select Branch</option>
                                        <option value="CSE">CSE</option>
                                        <option value="IT">IT</option>
                                        <option value="ECE">ECE</option>
                                        <option value="EEE">EEE</option>
                                        <option value="Mechanical">Mechanical</option>
                                        <option value="Civil">Civil</option>
                                    </select>
                                    <ChevronDown className={`w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${isBranchDisabled ? 'opacity-50' : ''}`} />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="section" className={`block text-sm font-semibold text-slate-700 mb-1.5 transition-opacity ${isSectionDisabled ? 'opacity-50' : ''}`}>Section <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select 
                                        id="section" 
                                        name="section"
                                        value={formData.targetStudents.section}
                                        onChange={(e) => handleChange("targetStudents", e)}
                                        disabled={isSectionDisabled}
                                        className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm font-medium appearance-none outline-none shadow-sm hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <option value="" disabled>Select Section</option>
                                        <option value="A">Section A</option>
                                        <option value="B">Section B</option>
                                        <option value="C">Section C</option>
                                        <option value="D">Section D</option>
                                    </select>
                                    <ChevronDown className={`w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${isSectionDisabled ? 'opacity-50' : ''}`} />
                                </div>
                            </div>

                            <div>
                                <label className={`block text-sm font-semibold text-slate-700 mb-1.5 transition-opacity ${isAssignDisabled ? 'opacity-50' : ''}`}>Assign Students <span className="text-red-500">*</span></label>
                                <button 
                                    type="button" 
                                    onClick={handleOpenAssignModal}
                                    disabled={isAssignDisabled} 
                                    className="w-full bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 border border-slate-200 rounded-xl font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Users className="w-4 h-4" />
                                    {assignedStudents.length > 0 ? `${assignedStudents.length} Students Assigned` : "Select Students"}
                                </button>
                            </div>
                        </div>
                    </div>

                    <hr className="border-t border-slate-100" />

                    <div>
                        <h3 className="text-base font-bold text-slate-800 mb-5">
                            Scheduling & Scoring
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div>
                                <label htmlFor="start_date" className="block text-sm font-semibold text-slate-700 mb-1.5">Start Date & Time <span className="text-red-500">*</span></label>
                                <input 
                                    type="datetime-local" 
                                    id="start_date" 
                                    name="start_date"
                                    value={formData.schedulingScoring.start_date}
                                    onChange={(e) => handleChange("schedulingScoring", e)}
                                    className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium text-slate-600 outline-none shadow-sm hover:border-slate-300"
                                />
                            </div>
                            <div>
                                <label htmlFor="end_date" className="block text-sm font-semibold text-slate-700 mb-1.5">Due Date & Time <span className="text-red-500">*</span></label>
                                <input 
                                    type="datetime-local" 
                                    id="end_date" 
                                    name="end_date"
                                    value={formData.schedulingScoring.end_date}
                                    onChange={(e) => handleChange("schedulingScoring", e)}
                                    className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium text-slate-600 outline-none shadow-sm hover:border-slate-300"
                                />
                            </div>
                            <div>
                                <label htmlFor="marks" className="block text-sm font-semibold text-slate-700 mb-1.5">Maximum Marks <span className="text-red-500">*</span></label>
                                <input 
                                    type="number" 
                                    id="marks" 
                                    name="marks"
                                    value={formData.schedulingScoring.marks}
                                    onChange={(e) => handleChange("schedulingScoring", e)}
                                    min="1" 
                                    max="1000"
                                    placeholder="e.g. 100" 
                                    className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium outline-none shadow-sm hover:border-slate-300"
                                />
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-3">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    name="allow_late"
                                    checked={formData.schedulingScoring.allow_late}
                                    onChange={(e) => handleChange("schedulingScoring", e)}
                                    className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                                />
                                <span className="text-sm font-medium text-slate-700">Allow late submission (with penalty mark)</span>
                            </label>
                        </div>
                    </div>

                    <hr className="border-t border-slate-100" />

                    <div>
                        <h3 className="text-base font-bold text-slate-800 mb-5">
                            Questions & Attachments
                        </h3>
                        
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="instructions" className="block text-sm font-semibold text-slate-700 mb-1.5">Instructions / Formatting Guidelines</label>
                                <textarea 
                                    id="instructions" 
                                    name="instructions"
                                    value={formData.questionsAttachments.instructions}
                                    onChange={(e) => handleChange("questionsAttachments", e)}
                                    rows="4" 
                                    placeholder="Submit the assignment as a single PDF file. Use proper indentation and comments in code..." 
                                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium resize-y outline-none shadow-sm hover:border-slate-300"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Assignment Questions (PDF Upload) <span className="text-red-500">*</span></label>
                                
                                <div className="relative group">
                                    <input 
                                        type="file" 
                                        id="pdf_upload" 
                                        name="file"
                                        accept="application/pdf" 
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                                    />
                                    
                                    <div className={`w-full border-2 ${formData.questionsAttachments.file ? 'border-solid border-slate-200 py-6' : 'border-dashed border-slate-300 py-8'} rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-slate-50/50 group-hover:bg-teal-50/50 group-hover:border-teal-400 transition-all duration-300`}>
                                        
                                        <div className={`w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center border border-slate-100 mb-4 group-hover:scale-110 group-hover:text-teal-600 transition-transform duration-300 text-slate-400 ${formData.questionsAttachments.file ? 'hidden' : ''}`}>
                                            <CloudUpload className="w-8 h-8" />
                                        </div>
                                        
                                        <div className={formData.questionsAttachments.file ? 'hidden' : ''}>
                                            <p className="text-sm font-bold text-slate-700 mb-1">Click to upload or drag and drop</p>
                                            <p className="text-xs font-semibold text-slate-500">PDF documents only (1KB - 10MB)</p>
                                        </div>

                                        {formData.questionsAttachments.file && (
                                            <div className="flex items-center justify-between gap-4 bg-white px-5 py-4 rounded-xl border border-slate-200 shadow-sm mt-2 w-full max-w-sm relative z-20">
                                                <div className="flex items-center gap-3 overflow-hidden">
                                                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 shrink-0">
                                                        <FileText className="w-5 h-5" />
                                                    </div>
                                                    <div className="flex-1 min-w-0 text-left">
                                                        <p className="text-sm font-bold text-slate-700 truncate w-48">{formData.questionsAttachments.file.name}</p>
                                                        <p className="text-xs font-bold text-slate-500">{(formData.questionsAttachments.file.size / 1024 / 1024).toFixed(2)} MB</p>
                                                    </div>
                                                </div>
                                                <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); clearFile(); }} className="p-2 bg-slate-50 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500 border border-slate-200 transition-colors shrink-0" title="Remove File">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4">
                        <button type="button" onClick={(e) => handleSubmit(e, "Drafted")} className="px-6 py-3 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all flex items-center gap-2">
                            <Save className="w-4 h-4" />
                            Save as Draft
                        </button>
                        <button type="button" onClick={(e) => handleSubmit(e, "Published")} className="bg-[#012029] hover:bg-teal-800 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-[0_4px_14px_0_rgba(1,32,41,0.2)] hover:shadow-[0_6px_20px_rgba(1,32,41,0.25)] hover:-translate-y-0.5 transition-all flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Publish Assignment
                        </button>
                    </div>

                </form>
            </main>
        </div>
    );
}