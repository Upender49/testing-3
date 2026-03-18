import { useState } from "react";
import { Camera, Edit3, MessageSquareText, RotateCw, LogOut, ChevronDown } from "lucide-react";

export function StudentProfile() {
    const defaultAccordionState = {
        personal: true,
        contact: true,
        academic: true,
        address: true
    };
    
    const [accordionState, setAccordionState] = useState(defaultAccordionState);
    
    const defaultUserData = {
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
            "_id": {
                "$oid": "69a2d579783b1d3cb7b43697"
            },
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
                            {
                                "subject_id": "65f0a003c3d4e5f600000301",
                                "attendance": "65f0a004c3d4e5f600000401",
                                "teacher": "65f0a002c3d4e5f600000201"
                            },
                            {
                                "subject_id": "65f0a003c3d4e5f600000302",
                                "attendance": "65f0a004c3d4e5f600000402",
                                "teacher": "65f0a002c3d4e5f600000202"
                            }
                        ]
                    },
                    "mentor": "65f0a002c3d4e5f600000205"
                }
            ],
            "college": "65f0a005c3d4e5f600000501"
        },
        "results": "65f0a011c3d4e5f600001101",
        "uploads": "65f0a006c3d4e5f600000632",
        "events_registered": [
            "65f0a012c3d4e5f600001201"
        ],
        "ai_chat": [
            "65f0a007c3d4e5f600000711"
        ],
        "address_line_1": "14 Cross, Marathahalli",
        "address_line_2": "Near Bridge",
        "createdAt": "2023-08-01T10:00:00.000Z",
        "updatedAt": "2023-09-15T10:00:00.000Z"
    };

    const [userdata, setUserData] = useState(defaultUserData);

    function formatDate(isoString) {
        return new Date(isoString).toISOString().split('T')[0];
    }

    function togglePersonalSection() {
        setAccordionState(prev => ({ ...prev, personal: !prev.personal }));
    }

    function toggleContactSection() {
        setAccordionState(prev => ({ ...prev, contact: !prev.contact }));
    }

    function toggleAcademicSection() {
        setAccordionState(prev => ({ ...prev, academic: !prev.academic }));
    }

    function toggleAddressSection() {
        setAccordionState(prev => ({ ...prev, address: !prev.address }));
    }

    return (
        <div className="bg-[#f4f6fa] flex items-center justify-center min-h-screen p-4 sm:p-8 font-body">
            <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden bg-white shadow-xl">
                <div className="relative bg-white">
                    <div className="h-52 bg-[#051F3E] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-2xl"></div>

                        <button className="absolute top-6 right-6 w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all shadow-lg border border-white/20 group/cam" title="Change Cover Photo">
                            <Camera className="w-4.5 h-4.5 group-hover/cam:scale-110 transition-transform"></Camera>
                        </button>
                    </div>

                    <div className="px-8 pb-8 -mt-16 relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-4">
                        
                        <div className="flex flex-col items-center md:items-start group/avatar">
                            <div className="w-40 h-40 rounded-full bg-white p-1 shadow-2xl transition-transform duration-500 group-hover/avatar:scale-105 ring-[6px] ring-white relative">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userdata.first_name}&backgroundColor=b6e3f4`} alt="Photo" className="w-full h-full rounded-full object-cover" />
                                <div className="absolute bottom-0 right-3 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-end pt-16 md:pt-20">
                            <div className="flex flex-wrap items-center gap-4 absolute right-0 mr-7">
                                <button className="bg-amber-500 hover:bg-amber-400 text-blue-900 font-bold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 flex items-center gap-2 group/btn active:scale-95 text-sm">
                                    <Edit3 className="w-4 h-4 transition-transform group-hover/btn:-rotate-12"></Edit3>
                                    Edit Profile
                                </button>

                                <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200 shadow-sm">
                                    <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-white rounded-lg transition-all duration-300 group shadow-sm" title="Messages">
                                        <MessageSquareText className="w-5 h-5 group-hover:scale-110"></MessageSquareText>
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-white rounded-lg transition-all duration-300 group shadow-sm" title="Refresh">
                                        <RotateCw className="w-5 h-5 group-hover:rotate-180 duration-500"></RotateCw>
                                    </button>
                                    <div className="w-px h-6 bg-slate-200 mx-1"></div>
                                    <button className="w-10 h-10 flex items-center justify-center text-rose-500 hover:text-rose-600 hover:bg-white rounded-lg transition-all duration-300 group shadow-sm" title="Sign Out">
                                        <LogOut className="w-5 h-5 group-hover:translate-x-1"></LogOut>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-4 text-center md:text-left">
                            <h1 className="font-heading font-extrabold text-3xl text-gray-800 tracking-tight leading-none">{userdata.first_name + " " + userdata.last_name}</h1>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                                <span className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase py-0.5 px-3 bg-emerald-50 rounded-full border border-emerald-100 shadow-sm">{userdata.academic.branch} Dept</span>
                                <span className="text-blue-300 text-[10px] font-bold tracking-widest uppercase py-0.5 px-3 bg-blue-50 rounded-full border border-blue-100 shadow-sm">{userdata.roll_no}</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="p-6 md:p-4 space-y-4">

                    <section className="bg-slate-100/70 rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
                        <button onClick={togglePersonalSection} className="w-full flex items-center justify-between p-5 hover:bg-gray-50/80 transition-colors group">
                            <div className="flex items-center gap-3">
                                <h2 className="text-lg font-heading font-bold text-gray-800">Personal Information</h2>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${accordionState.personal ? 'rotate-180' : ''}`}></ChevronDown>
                        </button>
                        {accordionState.personal && (
                            <div id="personal-content" className="transition-all duration-300">
                                <div className="p-6 pt-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1 opacity-60">First Name</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{userdata.first_name}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1 opacity-60">Last Name</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{userdata.last_name}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1 opacity-60">Date of Birth</p>
                                            <p className="text-gray-900 font-semibold text-sm leading-none">{formatDate(userdata.date_of_birth)}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1 opacity-60">Gender</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{userdata.gender}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>

                    <section className="bg-slate-100/70 rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
                        <button onClick={toggleAcademicSection} className="w-full flex items-center justify-between p-5 hover:bg-gray-50/80 transition-colors group">
                            <div className="flex items-center gap-3">
                                <h2 className="text-lg font-heading font-bold text-gray-800">Academic Details</h2>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${accordionState.academic ? 'rotate-180' : ''}`}></ChevronDown>
                        </button>
                        {accordionState.academic && (
                            <div id="academic-content" className="transition-all duration-300">
                                <div className="p-6 pt-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1 opacity-60">Roll Number</p>
                                            <p className="text-gray-900 font-semibold text-sm leading-none">{userdata.roll_no}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1 opacity-60">Branch & Year & Sem</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">
                                                {userdata.academic.branch} - {userdata.academic.years[0]?.year} Year - {userdata.academic.years[0]?.semesters?.sem_number} Sem
                                            </p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1 opacity-60">Admission Type</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{userdata.admission_type}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1 opacity-60">College Mail</p>
                                            <p className="text-gray-900 font-semibold text-sm lowercase leading-none">{userdata.college_mail}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>

                    <section className="bg-slate-100/70 rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
                        <button onClick={toggleContactSection} className="w-full flex items-center justify-between p-5 hover:bg-gray-50/80 transition-colors group">
                            <div className="flex items-center gap-3">
                                <h2 className="text-lg font-heading font-bold text-gray-800">Contact Details</h2>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${accordionState.contact ? 'rotate-180' : ''}`}></ChevronDown>
                        </button>
                        {accordionState.contact && (
                            <div id="contact-content" className="transition-all duration-300">
                                <div className="p-6 pt-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-violet-600 uppercase tracking-widest mb-1 opacity-60">Phone Number</p>
                                            <p className="text-gray-900 font-semibold text-sm leading-none">{userdata.phone_number}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-violet-600 uppercase tracking-widest mb-1 opacity-60">Alternate Phone</p>
                                            <p className="text-gray-900 font-semibold text-sm leading-none">N/A</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-violet-600 uppercase tracking-widest mb-1 opacity-60">Personal Mail</p>
                                            <p className="text-gray-900 font-semibold text-sm lowercase leading-none">{userdata.person_mail}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>

                    <section className="bg-slate-100/70 rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
                        <button onClick={toggleAddressSection} className="w-full flex items-center justify-between p-5 hover:bg-gray-50/80 transition-colors group">
                            <div className="flex items-center gap-3">
                                <h2 className="text-lg font-heading font-bold text-gray-800">Address & Location</h2>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${accordionState.address ? 'rotate-180' : ''}`}></ChevronDown>
                        </button>
                        {accordionState.address && (
                            <div id="address-content" className="transition-all duration-300">
                                <div className="p-6 pt-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1 opacity-60">Address Line 1</p>
                                            <p className="text-gray-900 font-semibold text-sm leading-none">{userdata.address_line_1}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1 opacity-60">City</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{userdata.city}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1 opacity-60">Address Line 2</p>
                                            <p className="text-gray-900 font-semibold text-sm leading-none">{userdata.address_line_2}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1 opacity-60">State/Province</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{userdata.state}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1 opacity-60">Pin Code</p>
                                            <p className="text-gray-900 font-semibold text-sm leading-none">{userdata.pin_code}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1 opacity-60">Country</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{userdata.country}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>

                </div>
            </div>
        </div>
    );
}