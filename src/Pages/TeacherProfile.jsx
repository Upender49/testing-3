import { useState } from "react";
import { Camera, Edit3, MessageSquareText, RotateCw, LogOut, ChevronDown } from "lucide-react";

export function TeacherProfile() {
    
    const [showPersonal, setShowPersonal] = useState(true);
    const [showProfessional, setShowProfessional] = useState(true);
    const [showContact, setShowContact] = useState(true);
    const [showAddress, setShowAddress] = useState(true);

    const [teacherdata, setTeacherData] = useState({
        "_id": "65f0a002c3d4e5f600000201",
        "first_name": "Dr. Amit",
        "last_name": "Sharma",
        "date_of_birth": "1980-05-14T00:00:00.000Z",
        "roll_no": "FAC-CS-001",
        "password": "$2b$10$hashedpasswordteacher1",
        "gender": "male",
        "dept": "Computer Science",
        "college_email": "amit.sharma@git.edu",
        "personal_email": "amit.sharma80@gmail.com",
        "phone_number": "+91-9876542001",
        "position": "professor",
        "profile": "65f0a006c3d4e5f600000651",
        "college": {
            "_id": "65f0a005c3d4e5f600000501",
            "name": "Global Institute of Technology",
            "category": "Autonomous College",
            "address": [
                {
                    "line": "12 Knowledge Park, Phase III",
                    "city": "Bengaluru",
                    "state": "Karnataka",
                    "pin_code": "560066",
                    "isMainCampus": true
                }
            ],
            "college_code": "aicte",
            "code": "AICTE-GIT-101",
            "affiliatedTo": "Visvesvaraya Technological University",
            "accreditation": {
                "naac_grade": "A+",
                "nirf_ranking": 45
            },
            "college_domain": "git.edu",
            "established_year": 2001,
            "phone_1": "+91-8012345678",
            "phone_2": "+91-8012345679",
            "landline_1": "080-23456789",
            "landline_2": "080-23456790",
            "location": {
                "type": "Point",
                "coordinates": [77.5946, 12.9716]
            },
            "contact_persons": [
                {
                    "prefix": "dr",
                    "first_name": "Ramesh",
                    "last_name": "Babu",
                    "email": "principal@git.edu",
                    "phone_1": "+91-9876543001",
                    "gender": "male",
                    "image": "65f0a006c3d4e5f600000621"
                }
            ],
            "status": "active",
            "createdAt": "2023-01-01T10:00:00.000Z",
            "updatedAt": "2023-10-01T12:00:00.000Z"
        },
        "room_no": "CS-201",
        "block": "Engineering Block A",
        "subjects_handle": [
            {
                "branch": "Computer Science",
                "section": "1",
                "year": 1,
                "subject": {
                    "subject_id": {
                        "_id": "65f0a003c3d4e5f600000301",
                        "code": "CS101",
                        "name": "Data Structures and Algorithms",
                        "dept": "Computer Science",
                        "credits": 4,
                        "sub_type": "theory",
                        "college": "65f0a005c3d4e5f600000501",
                        "createdAt": "2022-06-01T10:00:00.000Z",
                        "updatedAt": "2022-06-01T10:00:00.000Z"
                    },
                    "dates": ["2023-08-16T10:00:00.000Z", "2023-08-17T10:00:00.000Z"]
                }
            },
            {
                "branch": "Information Technology",
                "section": "2",
                "year": 2,
                "subject": {
                    "subject_id": {
                        "_id": "65f0a003c3d4e5f600000302",
                        "code": "CS102L",
                        "name": "Database Management Systems Lab",
                        "dept": "Computer Science",
                        "credits": 2,
                        "sub_type": "lab",
                        "college": "65f0a005c3d4e5f600000501",
                        "createdAt": "2022-06-01T10:30:00.000Z",
                        "updatedAt": "2022-06-01T10:30:00.000Z"
                    },
                    "dates": ["2023-01-10T09:00:00.000Z"]
                }
            }
        ],
        "uploads": {
            "_id": "65f0a006c3d4e5f600000601",
            "file_name": "admin_profile_rajesh_k.jpg",
            "file_url": "https://storage.college.edu/uploads/admin_profile_rajesh_k.jpg",
            "file_size": "1.2MB",
            "original_name": "IMG_9921_portrait.jpg",
            "format": ".jpg",
            "college": "65f0a005c3d4e5f600000501",
            "user_type": "Admin",
            "user_id": "65f0a008c3d4e5f600000801",
            "createdAt": "2023-01-10T10:05:00.000Z",
            "updatedAt": "2023-01-10T10:05:00.000Z"
        },
        "attendance": [
            {
                "date": "2023-10-01T08:30:00.000Z",
                "status": "present"
            }
        ],
        "ai_chat": ["65f0a007c3d4e5f600000721"],
        "mentor_to": [
            {
                "branch": "Mechanical Engineering",
                "section": "2",
                "year": 2,
                "students": [
                    {
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
                        "academic": "65f0a010c3d4e5f600001001",
                        "results": "65f0a011c3d4e5f600001101",
                        "uploads": "65f0a006c3d4e5f600000632",
                        "events_registered": ["65f0a012c3d4e5f600001201"],
                        "ai_chat": ["65f0a007c3d4e5f600000711"],
                        "address_line_1": "14 Cross, Marathahalli",
                        "address_line_2": "Near Bridge",
                        "createdAt": "2023-08-01T10:00:00.000Z",
                        "updatedAt": "2023-09-15T10:00:00.000Z"
                    }
                ]
            }
        ],
        "joining": "2010-07-15T00:00:00.000Z",
        "status": "active",
        "salary": "120000",
        "paying": [
            {
                "year": "2023",
                "month": "September",
                "status": "paid"
            }
        ],
        "address_line_1": "Staff Quarters, Q-12",
        "address_line_2": "Campus Road",
        "createdAt": "2023-01-01T09:00:00.000Z",
        "updatedAt": "2023-10-01T10:00:00.000Z"
    });

    const formatDate = (isoString) => {
        return new Date(isoString).toISOString().split('T')[0];
    };

    return (
        <div className="bg-[#f4f6fa] flex items-center justify-center min-h-screen p-4 sm:p-8 font-body">
            <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden bg-white shadow-xl">

                {/* TOP HEADER SECTION */}
                <div className="relative bg-white">
                    {/* Banner */}
                    <div className="h-52 bg-[#012029] relative overflow-hidden">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-2xl"></div>

                        {/* Camera Icon (Top Right) */}
                        <button className="absolute top-6 right-6 w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all shadow-lg border border-white/20 group/cam" title="Change Cover Photo">
                            <Camera className="w-4.5 h-4.5 group-hover/cam:scale-110 transition-transform" />
                        </button>
                    </div>

                    {/* Profile Info Section (Overlapping) */}
                    <div className="px-8 pb-8 -mt-16 relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-4">

                        {/* 1. The Avatar (Top Left) */}
                        <div className="flex flex-col items-center md:items-start group/avatar">
                            <div className="w-40 h-40 rounded-full bg-white p-1 shadow-2xl transition-transform duration-500 group-hover/avatar:scale-105 ring-[6px] ring-white relative">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${teacherdata.first_name}&backgroundColor=b6e3f4`} alt="Photo" className="w-full h-full rounded-full object-cover" />
                                {/* Status Indicator */}
                                <div className="absolute bottom-0 right-3 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        {/* 2. The Action Buttons (Top Right) */}
                        <div className="flex flex-col justify-end pt-16 md:pt-20">
                            <div className="flex flex-wrap items-center gap-4 absolute right-0 mr-7">
                                <button className="bg-[#F39C12] hover:bg-[#E67E22] text-white font-bold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 flex items-center gap-2 group/btn active:scale-95 text-sm">
                                    <Edit3 className="w-4 h-4 transition-transform group-hover/btn:-rotate-12" />
                                    Edit Profile
                                </button>

                                <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200 shadow-sm">
                                    <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-white rounded-lg transition-all duration-300 group shadow-sm" title="Messages">
                                        <MessageSquareText className="w-5 h-5 group-hover:scale-110" />
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-white rounded-lg transition-all duration-300 group shadow-sm" title="Refresh">
                                        <RotateCw className="w-5 h-5 group-hover:rotate-180 duration-500" />
                                    </button>
                                    <div className="w-[1px] h-6 bg-slate-200 mx-1"></div>
                                    <button className="w-10 h-10 flex items-center justify-center text-rose-500 hover:text-rose-600 hover:bg-white rounded-lg transition-all duration-300 group shadow-sm" title="Sign Out">
                                        <LogOut className="w-5 h-5 group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 3. The Name and Info (Below Avatar) */}
                        <div className="flex flex-col gap-2 mt-4 text-center md:text-left">
                            <h1 className="font-heading font-extrabold text-3xl text-gray-800 tracking-tight leading-none">{teacherdata.first_name} {teacherdata.last_name}</h1>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                                <span className="text-indigo-600 text-[10px] font-bold tracking-widest uppercase py-0.5 px-3 bg-indigo-50 rounded-full border border-indigo-100 shadow-sm">{teacherdata.position}</span>
                                <span className="text-emerald-600 text-[10px] font-bold tracking-widest uppercase py-0.5 px-3 bg-emerald-50 rounded-full border border-emerald-100 shadow-sm">{teacherdata.roll_no}</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* INFO CONTENT SECTION */}
                <div className="p-6 md:p-4 space-y-4">

                    {/* Personal Information Section */}
                    <section className="bg-slate-100/70 rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
                        <button onClick={() => setShowPersonal(!showPersonal)} className="w-full flex items-center justify-between p-5 hover:bg-gray-50/80 transition-colors group">
                            <div className="flex items-center gap-3">
                                <h2 className="text-lg font-heading font-bold text-gray-800">Personal Information</h2>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${showPersonal ? 'rotate-180' : ''}`} />
                        </button>
                        {showPersonal && (
                            <div className="transition-all duration-300">
                                <div className="p-6 pt-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1 opacity-60">First Name</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{teacherdata.first_name}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1 opacity-60">Last Name</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{teacherdata.last_name}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1 opacity-60">Date of Birth</p>
                                            <p className="text-gray-900 font-semibold text-sm leading-none">{formatDate(teacherdata.date_of_birth)}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1 opacity-60">Gender</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{teacherdata.gender}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Professional Details Section */}
                    <section className="bg-slate-100/70 rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
                        <button onClick={() => setShowProfessional(!showProfessional)} className="w-full flex items-center justify-between p-5 hover:bg-gray-50/80 transition-colors group">
                            <div className="flex items-center gap-3">
                                <h2 className="text-lg font-heading font-bold text-gray-800">Professional Details</h2>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${showProfessional ? 'rotate-180' : ''}`} />
                        </button>
                        {showProfessional && (
                            <div className="transition-all duration-300">
                                <div className="p-6 pt-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1 opacity-60">Faculty ID</p>
                                            <p className="text-gray-900 font-semibold text-sm leading-none">{teacherdata.roll_no}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1 opacity-60">Department</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{teacherdata.dept}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1 opacity-60">Designation</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{teacherdata.position}</p>
                                        </div>
                                        {/* Note: The following items are not in the provided schema, so defaults are kept for design consistency */}
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1 opacity-60">Qualification</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">N/A (Update in DB)</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1 opacity-60">Experience</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">N/A</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1 opacity-60">Expertise</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">N/A</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Contact Information Section */}
                    <section className="bg-slate-100/70 rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
                        <button onClick={() => setShowContact(!showContact)} className="w-full flex items-center justify-between p-5 hover:bg-gray-50/80 transition-colors group">
                            <div className="flex items-center gap-3">
                                <h2 className="text-lg font-heading font-bold text-gray-800">Contact Details</h2>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${showContact ? 'rotate-180' : ''}`} />
                        </button>
                        {showContact && (
                            <div className="transition-all duration-300">
                                <div className="p-6 pt-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-violet-600 uppercase tracking-widest mb-1 opacity-60">Phone Number</p>
                                            <p className="text-gray-900 font-semibold text-sm leading-none">{teacherdata.phone_number}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-violet-600 uppercase tracking-widest mb-1 opacity-60">College Email</p>
                                            <p className="text-gray-900 font-semibold text-sm lowercase leading-none">{teacherdata.college_email}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-violet-600 uppercase tracking-widest mb-1 opacity-60">Personal Mail</p>
                                            <p className="text-gray-900 font-semibold text-sm lowercase leading-none">{teacherdata.personal_email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Address & Office Section */}
                    <section className="bg-slate-100/70 rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
                        <button onClick={() => setShowAddress(!showAddress)} className="w-full flex items-center justify-between p-5 hover:bg-gray-50/80 transition-colors group">
                            <div className="flex items-center gap-3">
                                <h2 className="text-lg font-heading font-bold text-gray-800">Address & Office Location</h2>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${showAddress ? 'rotate-180' : ''}`} />
                        </button>
                        {showAddress && (
                            <div className="transition-all duration-300">
                                <div className="p-6 pt-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1 opacity-60">Block</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{teacherdata.block}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1 opacity-60">Room No</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{teacherdata.room_no}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
                                            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1 opacity-60">Address Line 1</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{teacherdata.address_line_1}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300 lg:col-span-2">
                                            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1 opacity-60">Address Line 2 (City/State/Pin)</p>
                                            <p className="text-gray-900 font-semibold text-sm uppercase leading-none">{teacherdata.address_line_2}</p>
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