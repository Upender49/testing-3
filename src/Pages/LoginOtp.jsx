import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Toast } from "../components/Toast";
import "../index.css";

export function LoginOtp() {
  const defaultFilter = {
    message: "",
    type: "info",
    show: false
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(location.state?.user || null);
  
  const [filter, setFilter] = useState(location.state?.user ? {
    message: `OTP is sent to ${location.state?.user.email}`,
    type: "info",
    show: true,
  } : defaultFilter);

  const [time, setTime] = useState(20);
  const [showbtn, setShowbtn] = useState(false);

  useEffect(() => {
    if (!location.state || !location.state.user) {
      navigate("/loginpage", { replace: true });
    }
  }, [location, navigate]);

  useEffect(() => {
    if (filter.show) {
      const timer = setInterval(() => {
        setFilter((prev) => ({
          ...prev,
          show: false,
        }));
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [filter.show]);

  useEffect(() => {
    if (time <= 0) {
      setShowbtn(true);
      return;
    }
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  function onClose() {
    setFilter({
      ...filter,
      show: false
    });
  }

  function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    navigate("/dashboard");
  }

  function handleResend() {
    setShowbtn(false);
    setTime(20);
    setFilter({
      message: `OTP resent to ${user?.email}`,
      type: "info",
      show: true
    });
  }

  return (
    <div className="font-body text-slate-600 min-h-screen bg-linear-to-br from-brand-600/80 via-white to-brand-600/20 selection:bg-brand-100 selection:text-brand-900 antialiased">
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-125 h-125 bg-brand-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-125 h-125 bg-brand-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen items-center justify-center lg:justify-end overflow-hidden p-6 md:p-12 lg:p-0 lg:gap-x-20 lg:pr-12 xl:pr-24">
        
        <div className="relative hidden lg:flex flex-1 min-w-0 items-center justify-center">
          <div className="absolute w-[250%] h-62.5 bg-linear-to-r from-transparent via-brand-600/40 to-transparent blur-2xl opacity-40 animate-soft-light pointer-events-none"></div>
          <iframe
            className="w-full max-w-3xl py-3 h-full min-h-180"
            src="https://lottie.host/embed/532038ea-2eaf-4091-b2e8-c6f305d12928/tGgH3PzNnY.lottie"
            title="OTP Animation"
          ></iframe>
        </div>

        <div className="relative flex flex-col content-center justify-center w-full max-w-md shrink-0">
          
          <div className="mb-10 text-center lg:text-left">
            <h1 className="relative inline-block overflow-hidden font-heading font-bold text-3xl text-blue-700 mb-2.5 pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.75 after:bg-linear-to-r after:from-transparent after:via-[#1957dd] after:to-transparent after:animate-underline-move">
              Welcome Back
            </h1>
            <p className="text-slate-500 mt-2">
              OTP is sent to your registered email <br />
              <span className="font-semibold text-slate-700">{user?.email}</span>
            </p>
          </div>

          <div className="mb-3">
            {filter.show && (
              <Toast
                message={filter.message}
                type={filter.type}
                onClose={onClose}
              />
            )}
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="otp">
                Enter OTP
              </label>
              <div className="relative group shadow-sm transition-all focus-within:ring-[3px] focus-within:ring-brand-500/18 rounded-xl bg-white">
                <input
                  id="otp"
                  type="text"
                  required
                  placeholder="Enter OTP"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm transition-all hover:border-slate-300 focus:outline-none focus:border-brand-500 bg-transparent"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                disabled={!showbtn}
                onClick={handleResend}
                className={`text-sm font-medium transition-colors ${
                  showbtn ? "cursor-pointer text-brand-600 hover:text-brand-700" : "text-slate-400 cursor-not-allowed"
                }`}
              >
                Resend OTP
              </button>
              
              {!showbtn && (
                <p className={`text-sm ${time <= 10 && time > 0 ? "text-red-500 font-semibold" : "text-slate-500"}`}>
                  Time Remaining: {formatTime(time)}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-brand-600 to-brand-500 text-white text-sm font-heading font-semibold hover:from-brand-700 hover:to-brand-600 transition-all active:scale-95 shadow-lg shadow-brand-200"
            >
              Verify
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}