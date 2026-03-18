import { useState } from "react";
import {
  ArrowLeft,
  Bell,
  SlidersHorizontal,
  ArrowDown,
  ChevronDown,
  Calendar,
  Clock,
  AlertCircle,
  Clock3,
  CheckCircle,
} from "lucide-react";

export function Assignments() {
  const defaultFilterState = {
    activeTab: "all",
    dropDownOpen: false,
    selectedSubject: "All Subjects",
    fromDate: "",
    toDate: "",
  };

  const [filters, setFilters] = useState(defaultFilterState);

  const [assignmentData] = useState([
    {
      _id: "1",
      title: "PPL Assignment II | Type A",
      subject: {
        name: "Principles of Programming Languages",
        category: "Practical",
        type: "Elective",
      },
      assigned_by: {
        name: "Prof. Sarah Johnson",
        profile_image:
          "https://ui-avatars.com/api/?name=Sarah+Johnson&background=0D9488&color=fff",
      },
      schedule: {
        start_date: "2025-10-17T00:00:00.000Z",
        end_date: "2025-10-31T00:00:00.000Z",
        start_time: "12:05 AM",
        end_time: "11:00 PM",
      },
      status: "expired",
    },
    {
      _id: "2",
      title: "DSA Project Phase I | Binary Trees",
      subject: {
        name: "Data Structures & Algorithms",
        category: "Core",
        type: "Mandatory",
      },
      assigned_by: {
        name: "Dr. Robert Wilson",
        profile_image:
          "https://ui-avatars.com/api/?name=Dr+Robert+Wilson&background=4F46E5&color=fff",
      },
      schedule: {
        start_date: "2026-03-01T00:00:00.000Z",
        end_date: "2026-03-25T00:00:00.000Z",
        start_time: "09:00 AM",
        end_time: "05:00 PM",
      },
      status: "pending",
    },
    {
      _id: "3",
      title: "TCP/IP Protocol Suite Assignment",
      subject: {
        name: "Computer Networks",
        category: "Core",
        type: "Elective",
      },
      assigned_by: {
        name: "Prof. Michael Chen",
        profile_image:
          "https://ui-avatars.com/api/?name=Michael+Chen&background=EA580C&color=fff",
      },
      schedule: {
        start_date: "2026-02-10T00:00:00.000Z",
        end_date: "2026-02-20T00:00:00.000Z",
        start_time: "10:00 AM",
        end_time: "11:59 PM",
      },
      status: "completed",
    },
    {
      _id: "4",
      title: "Neural Networks Basics Quiz",
      subject: {
        name: "Machine Learning",
        category: "Theory",
        type: "Mandatory",
      },
      assigned_by: {
        name: "Dr. David Miller",
        profile_image:
          "https://ui-avatars.com/api/?name=David+Miller&background=0369A1&color=fff",
      },
      schedule: {
        start_date: "2026-01-12T00:00:00.000Z",
        end_date: "2026-01-15T00:00:00.000Z",
        start_time: "02:00 PM",
        end_time: "04:00 PM",
      },
      status: "expired",
    },
  ]);

  function handleTabChange(tab) {
    setFilters((prev) => ({ ...prev, activeTab: tab }));
  }

  function toggleDropdown() {
    setFilters((prev) => ({ ...prev, dropDownOpen: !prev.dropDownOpen }));
  }

  function handleSubjectSelect(subject) {
    setFilters((prev) => ({
      ...prev,
      selectedSubject: subject,
      dropDownOpen: false,
    }));
  }

  function handleFromDateChange(e) {
    setFilters((prev) => ({ ...prev, fromDate: e.target.value }));
  }

  function handleToDateChange(e) {
    setFilters((prev) => ({ ...prev, toDate: e.target.value }));
  }

  function formatDate(isoString) {
    const date = new Date(isoString);
    return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;
  }

  const filteredAssignments = assignmentData.filter((assignment) => {
    const matchesTab =
      filters.activeTab === "all" || assignment.status === filters.activeTab;
    const matchesSubject =
      filters.selectedSubject === "All Subjects" ||
      assignment.subject.name === filters.selectedSubject;
    let matchesDate = true;

    const assignmentDate = new Date(assignment.schedule.start_date);

    if (filters.fromDate) {
      const filterFromDate = new Date(filters.fromDate);
      filterFromDate.setHours(0, 0, 0, 0);
      if (assignmentDate < filterFromDate) {
        matchesDate = false;
      }
    }

    if (filters.toDate) {
      const filterToDate = new Date(filters.toDate);
      filterToDate.setHours(23, 59, 59, 999);
      if (assignmentDate > filterToDate) {
        matchesDate = false;
      }
    }
    return matchesTab && matchesSubject && matchesDate;
  });

  return (
    <div className="font-sans text-slate-900 min-h-screen bg-[#F8FAFC]">
      <header className="bg-[#051F3E] text-white sticky top-0 z-50 border-b border-slate-200 px-4 py-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 hover:text-blue-600 rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold font-display tracking-tight">
              Assignments
            </h1>
          </div>
          <div className="relative">
            <button className="p-2 hover:bg-slate-100 hover:text-blue-600 rounded-full transition-colors relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 bg-red-500 text-white text-[5px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
        <nav className="flex border-b border-slate-200 overflow-x-auto no-scrollbar">
          <button
            onClick={() => handleTabChange("all")}
            className={`px-6 py-3 text-sm whitespace-nowrap transition-all ${filters.activeTab === "all" ? "font-semibold text-blue-600 border-b-2 border-blue-500" : "font-medium text-slate-500 hover:text-slate-700"}`}
          >
            All
          </button>
          <button
            onClick={() => handleTabChange("completed")}
            className={`px-6 py-3 text-sm whitespace-nowrap transition-all ${filters.activeTab === "completed" ? "font-semibold text-blue-600 border-b-2 border-blue-500" : "font-medium text-slate-500 hover:text-slate-700"}`}
          >
            Completed
          </button>
          <button
            onClick={() => handleTabChange("pending")}
            className={`px-6 py-3 text-sm whitespace-nowrap transition-all ${filters.activeTab === "pending" ? "font-semibold text-blue-600 border-b-2 border-blue-500" : "font-medium text-slate-500 hover:text-slate-700"}`}
          >
            Pending
          </button>
          <button
            onClick={() => handleTabChange("expired")}
            className={`px-6 py-3 text-sm whitespace-nowrap transition-all ${filters.activeTab === "expired" ? "font-semibold text-blue-600 border-b-2 border-blue-500" : "font-medium text-slate-500 hover:text-slate-700"}`}
          >
            Expired
          </button>
        </nav>

        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium hover:border-blue-400 transition-all shadow-sm">
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium hover:border-blue-400 transition-all shadow-sm group">
            <span className="text-slate-600">Date</span>
            <ArrowDown className="w-4 h-4 text-slate-400 transition-transform duration-300" />
          </button>

          <div className="relative min-w-55">
            <button
              onClick={toggleDropdown}
              className="w-full flex items-center justify-between gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium hover:border-blue-400 transition-all shadow-sm"
            >
              <span>Subject : {filters.selectedSubject}</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform ${filters.dropDownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {filters.dropDownOpen && (
              <div className="absolute left-0 top-full mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-lg z-50 py-1">
                <button
                  onClick={() => handleSubjectSelect("All Subjects")}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors"
                >
                  All Subjects
                </button>
                <button
                  onClick={() =>
                    handleSubjectSelect("Principles of Programming Languages")
                  }
                  className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors"
                >
                  Principles of Programming Languages
                </button>
                <button
                  onClick={() =>
                    handleSubjectSelect("Data Structures & Algorithms")
                  }
                  className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors"
                >
                  Data Structures & Algorithms
                </button>
                <button
                  onClick={() => handleSubjectSelect("Computer Networks")}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors"
                >
                  Computer Networks
                </button>
                <button
                  onClick={() => handleSubjectSelect("Machine Learning")}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors"
                >
                  Machine Learning
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 uppercase">
                From:
              </span>
              <input
                type="date"
                value={filters.fromDate}
                className="text-sm font-medium focus:outline-none bg-transparent"
                onChange={handleFromDateChange}
              />
            </div>
            <div className="w-px h-4 bg-slate-200 mx-1"></div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 uppercase">
                To:
              </span>
              <input
                type="date"
                value={filters.toDate}
                className="text-sm font-medium focus:outline-none cursor-pointer bg-transparent"
                onChange={handleToDateChange}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-12 md:gap-12">
          {filteredAssignments.map((assignment, index) => {
            let bgColor = "";
            let textColor = "";
            let borderColor = "";
            let iconColor = "";

            if (assignment.status === "expired") {
              bgColor = "bg-[#FEE2E2]";
              textColor = "text-red-700";
              borderColor = "border-red-200";
              iconColor = "text-red-600";
            } else if (assignment.status === "pending") {
              bgColor = "bg-[#FFEDD5]";
              textColor = "text-orange-900";
              borderColor = "border-orange-200";
              iconColor = "text-orange-600";
            } else if (assignment.status === "completed") {
              bgColor = "bg-[#DCFCE7]";
              textColor = "text-green-700";
              borderColor = "border-green-200";
              iconColor = "text-green-600";
            }

            return (
              <div
                key={index}
                className={`${bgColor} relative rounded-2xl rounded-tr-none p-5 md:p-6 border ${borderColor} shadow-sm transition-transform hover:scale-[1.01]`}
              >
                <div
                  className={`absolute -top-7 right-0 flex items-center gap-1.5 bg-white px-4 py-1.5 rounded-t-xl border ${borderColor} border-b-0 shadow-sm z-10`}
                >
                  {assignment.status === "expired" && (
                    <AlertCircle className={`w-3.5 h-3.5 ${iconColor}`} />
                  )}
                  {assignment.status === "pending" && (
                    <Clock3 className={`w-3.5 h-3.5 ${iconColor}`} />
                  )}
                  {assignment.status === "completed" && (
                    <CheckCircle className={`w-3.5 h-3.5 ${iconColor}`} />
                  )}
                  <span
                    className={`text-[10px] font-bold ${textColor} uppercase`}
                  >
                    {assignment.status}
                  </span>
                </div>

                <div className="mb-1">
                  <p className="text-xs md:text-sm font-medium text-slate-600">
                    {assignment.subject.name} ({assignment.subject.category} |{" "}
                    {assignment.subject.type})
                  </p>
                </div>

                <h3
                  className={`text-lg md:text-xl font-bold text-slate-800 mb-1 ${assignment.status === "expired" ? "line-through" : ""}`}
                >
                  {assignment.title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase">
                    Assigned by:
                  </span>
                  <div className="flex items-center gap-1.5">
                    <img
                      src={assignment.assigned_by.profile_image}
                      className="w-5 h-5 rounded-full ring-1 ring-white shadow-sm"
                      alt="Teacher"
                    />
                    <span className="text-xs font-semibold text-slate-700">
                      {assignment.assigned_by.name}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {formatDate(assignment.schedule.start_date)} to{" "}
                      {formatDate(assignment.schedule.end_date)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {assignment.schedule.start_time} to{" "}
                      {assignment.schedule.end_time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredAssignments.length === 0 && (
            <div className="text-center py-12 text-slate-500 font-medium">
              No assignments found matching these filters.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
