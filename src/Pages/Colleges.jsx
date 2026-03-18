import { useState } from "react";
import { useNavigate } from "react-router";
import colleges from "../../colleges.json";

export function Colleges() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredColleges = colleges.filter(
    (college) =>
      college.name.toLowerCase().includes(search.toLowerCase()) ||
      college.address.toLowerCase().includes(search.toLowerCase()),
  );

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleCollegeClick(college) {
    navigate("/loginpage", {
      state: {
        name: college.name,
        image: college.image,
      },
    });
  }

  return (
    <div className="bg-slate-100 min-h-screen p-6 sm:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            Colleges Directory
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Explore top institutions across Telangana
          </p>
        </div>

        <div className="relative mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search colleges by name or location..."
            value={search}
            onChange={handleSearchChange}
            className="w-full pl-12 pr-5 py-3.5 rounded-2xl border border-slate-200 bg-white shadow-sm text-sm text-slate-700 placeholder-slate-300 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredColleges.map((college, index) => (
            <div
              key={index}
              onClick={() => handleCollegeClick(college)}
              className="card bg-white rounded-md overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group border border-slate-100"
            >
              <div className="relative h-28 bg-linear-to-br from-amber-100 to-orange-100 overflow-hidden flex items-center justify-center">
                <span className="absolute top-2 right-2 bg-blue-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-md z-20">
                  {college.type || "Institute"}
                </span>

                <img
                  src={college.image}
                  alt={college.name}
                  className="absolute inset-0 w-full h-full object-cover z-10 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="px-2.5 py-2">
                <div className="flex items-center gap-1.5">
                  <img
                    src={college.logo || college.image}
                    alt={`${college.name} Logo`}
                    className="w-5 h-5 rounded object-contain bg-white border border-slate-100 p-px shrink-0"
                  />

                  <h3 className="font-bold text-slate-800 text-[11px] leading-tight line-clamp-1 min-w-0 flex-1">
                    {college.name}
                  </h3>

                  <button className="w-5 h-5 flex items-center justify-center rounded-full text-slate-300 hover:text-indigo-500 transition-colors shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
                <p className="text-[9px] text-slate-400 mt-0.5 leading-snug line-clamp-1 pl-6.5">
                  {college.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
