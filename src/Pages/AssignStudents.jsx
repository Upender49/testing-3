import React, { useState } from 'react';
import { Search, UserMinus, UserCheck, ChevronDown, Check } from 'lucide-react';

const mockStudents = [
    { id: '22KD1A0501', name: 'Aarav Sharma', rollNo: '22KD1A0501', semester: 'Semester 1', batch: '2022', branch: 'CSE', section: 'Section A' },
    { id: '22KD1A0502', name: 'Ananya Iyer', rollNo: '22KD1A0502', semester: 'Semester 1', batch: '2022', branch: 'CSE', section: 'Section B' },
    { id: '22KD1A0503', name: 'Ishaan Verma', rollNo: '22KD1A0503', semester: 'Semester 1', batch: '2022', branch: 'ECE', section: 'Section A' },
    { id: '22KD1A0504', name: 'Kavya Nair', rollNo: '22KD1A0504', semester: 'Semester 2', batch: '2023', branch: 'AIML', section: 'Section C' },
    { id: '22KD1A0505', name: 'Priya Reddy', rollNo: '22KD1A0505', semester: 'Semester 2', batch: '2023', branch: 'CIVIL', section: 'Section A' },
    { id: '22KD1A0506', name: 'Rohan Gupta', rollNo: '22KD1A0506', semester: 'Semester 1', batch: '2022', branch: 'EEE', section: 'Section B' },
    { id: '22KD1A0507', name: 'Saanvi Malhotra', rollNo: '22KD1A0507', semester: 'Semester 2', batch: '2023', branch: 'CSE', section: 'Section D' },
    { id: '22KD1A0508', name: 'Vikram Singh', rollNo: '22KD1A0508', semester: 'Semester 1', batch: '2022', branch: 'CSE', section: 'Section A' },
    { id: '22KD1A0509', name: 'Zoya Khan', rollNo: '22KD1A0509', semester: 'Semester 1', batch: '2022', branch: 'ECE', section: 'Section B' },
    { id: '22KD1A0510', name: 'Aditya Das', rollNo: '22KD1A0510', semester: 'Semester 2', batch: '2023', branch: 'CSE', section: 'Section C' }
];

export function AssignStudents({ initialSelected = [], onSave }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedRows, setExpandedRows] = useState({});
    
    const [selectedStudents, setSelectedStudents] = useState(() => {
        const initial = {};
        initialSelected.forEach(id => { initial[id] = true; });
        return initial;
    });

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const toggleAccordion = (id) => {
        setExpandedRows(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const toggleSelection = (e, id) => {
        e.stopPropagation();
        setSelectedStudents(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Assign only the currently checked students
    const handleAssignSelected = () => {
        const assignedIds = Object.keys(selectedStudents).filter(id => selectedStudents[id]);
        onSave(assignedIds);
    };

    // Assign only the students who are currently unchecked
    const handleAssignUnselected = () => {
        const unselectedIds = mockStudents
            .filter(s => !selectedStudents[s.id])
            .map(s => s.id);
        onSave(unselectedIds);
    };

    const filteredStudents = mockStudents.filter(student => 
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        student.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full h-full flex flex-col bg-slate-50">
            <header className="p-4 md:px-6 flex items-center justify-between shrink-0 bg-white sticky top-0 z-10 border-b border-slate-100">
                <div>
                    <h1 className="text-xl font-bold font-display text-slate-800">Assign Students</h1>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">Select students for this assignment</p>
                </div>
                <button onClick={handleAssignSelected} className="bg-[#012029] hover:bg-teal-800 transition-colors text-white px-6 py-2.5 rounded-xl font-bold shadow-lg flex items-center gap-2">
                    Done Assigning
                </button>
            </header>

            <div className="px-4 md:px-6 py-3 bg-white border-b border-slate-100">
                <div className="relative group w-full">
                    <input 
                        type="text" 
                        placeholder="Search by ID or Name..." 
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all text-sm font-semibold outline-none placeholder:text-slate-400 placeholder:font-medium"
                    />
                    <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-teal-600 transition-colors" />
                </div>
            </div>

            <div className="px-4 md:px-6 bg-[#012029] shrink-0">
                <div className="p-2 md:p-3 grid grid-cols-[2.5rem_10rem_10rem_2.5rem] gap-2 md:gap-4 items-center">
                    <div className="text-[12px] font-bold text-white uppercase tracking-wider">Select</div>
                    <div className="text-[12px] font-bold text-white uppercase tracking-wider">Student ID</div>
                    <div className="text-[12px] font-bold text-white uppercase tracking-wider">Name</div>
                    <div className="text-[12px] font-bold text-white uppercase tracking-wider flex justify-end pr-2">Actions</div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-50/50">
                <div className="grid grid-cols-1 gap-2">
                    {filteredStudents.map((student, index) => {
                        const isAlternate = index % 2 !== 0;
                        const isOpen = expandedRows[student.id];
                        const isSelected = selectedStudents[student.id];
                        
                        return (
                            <div 
                                key={student.id}
                                className={`group ${isAlternate ? 'bg-slate-50/50' : 'bg-white'} rounded-xl border-2 hover:border-teal-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col overflow-hidden ${isOpen ? 'border-teal-400 shadow-lg ring-4 ring-teal-500/5' : 'border-slate-200'} ${isSelected ? 'bg-teal-50/60! border-teal-400!' : ''}`}
                            >
                                <div 
                                    className="p-2 md:p-3 grid grid-cols-[2.5rem_7rem_1fr_2.5rem] gap-2 md:gap-4 items-center cursor-pointer" 
                                    onClick={() => toggleAccordion(student.id)}
                                >
                                    <div className="relative flex items-center justify-center p-2" onClick={(e) => toggleSelection(e, student.id)}>
                                        <input 
                                            type="checkbox" 
                                            checked={!!isSelected}
                                            readOnly
                                            className="peer h-4 w-4 md:h-5 md:w-5 cursor-pointer appearance-none rounded-md border-2 border-slate-200 transition-all checked:bg-teal-700 checked:border-teal-700 focus:outline-none checked:shadow-[0_0_10px_rgba(13,148,136,0.3)]"
                                        />
                                        <Check className={`w-3 md:w-3.5 h-3 md:h-3.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                                    </div>

                                    <div className="min-w-0">
                                        <p className={`text-[10px] md:text-[11px] font-extrabold uppercase tracking-widest ${isSelected ? 'text-teal-800' : 'text-slate-400'}`}>{student.id}</p>
                                    </div>

                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center font-bold text-[10px] md:text-[11px] shrink-0 border transition-all duration-300 ${isSelected ? 'bg-teal-700 text-white border-teal-700' : 'bg-linear-to-br from-teal-50 to-slate-100 text-teal-700 border-teal-100/50 group-hover:from-teal-600 group-hover:to-teal-700 group-hover:text-white'}`}>
                                            {student.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <h3 className={`text-[13px] md:text-sm font-bold truncate tracking-tight ${isSelected ? 'text-teal-900' : 'text-slate-900'}`}>{student.name}</h3>
                                    </div>

                                    <div className="flex justify-end">
                                        <button className="p-1.5 md:p-2 hover:bg-teal-50 rounded-xl text-slate-400 hover:text-teal-600 transition-all">
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                        </button>
                                    </div>
                                </div>

                                <div className={`grid transition-all duration-300 overflow-hidden ${isOpen ? 'grid-rows-[1fr] visible opacity-100 pb-4' : 'grid-rows-[0fr] invisible opacity-0'}`}>
                                    <div className="min-h-0 px-10">
                                        <div className="bg-teal-50/40 rounded-2xl p-4 border border-teal-100/50 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 mb-2">
                                            <div>
                                                <p className="text-[9px] font-bold text-teal-600/70 uppercase tracking-widest mb-1">Roll Number</p>
                                                <p className="text-[13px] font-extrabold text-slate-800">{student.rollNo}</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-bold text-teal-600/70 uppercase tracking-widest mb-1">Semester</p>
                                                <p className="text-[13px] font-extrabold text-slate-800">{student.semester}</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-bold text-teal-600/70 uppercase tracking-widest mb-1">Batch</p>
                                                <p className="text-[13px] font-extrabold text-slate-800">{student.batch}</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-bold text-teal-600/70 uppercase tracking-widest mb-1">Branch</p>
                                                <p className="text-[13px] font-extrabold text-slate-800">{student.branch}</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-bold text-teal-600/70 uppercase tracking-widest mb-1">Section</p>
                                                <p className="text-[13px] font-extrabold text-slate-800">{student.section}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <footer className="p-4 md:p-6 border-t border-slate-100 bg-white grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0">
                <button 
                    onClick={handleAssignUnselected}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                    <UserMinus className="w-4 h-4" />
                    Deselect Students
                </button>
                <button 
                    onClick={handleAssignSelected}
                    className="w-full bg-[#012029] hover:bg-teal-800 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-[0_4px_14px_0_rgba(1,32,41,0.2)] hover:shadow-[0_6px_20px_rgba(1,32,41,0.25)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                    <UserCheck className="w-4 h-4" />
                    Assign Selected Students
                </button>
            </footer>
        </div>
    );
}

export default AssignStudents;