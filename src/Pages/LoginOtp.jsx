import { Flag, KeyRound } from "lucide-react";
import { useState,useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {Toast} from "../components/Toast"
export function LoginOtp() {
  const defaultFilter = {
    message : "",
    type : "info",
    show : false
  }
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(location.state?.user || null);
  const [filter, setFilter] = useState(defaultFilter);
  const [time, setTime] = useState(20);
  const [showbtn, setShowbtn] = useState(false);
  
  useEffect(() => {
    if (!location.state || !location.state.user) {
      navigate("/loginpage/otp",{replace : true});
    }
  }, []);
  useEffect(() => {
  if (user) {
    setFilter({
      message: `OTP is sent to ${user.email}`,
      type: "info",
      show: true,
    });
  }
}, [user]);
  useEffect(() => {
    if(filter.show){
      const timeer = setInterval(() => {
        setFilter((prev) => ({
        ...prev,
        show: false,
      }));
      }, 5000);
      return () => clearInterval(timeer);
    }
  }, [filter.show]);
  useEffect(() => {
    if (time <= 0) {
      setShowbtn(true);
      return;
    }
    const timeer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timeer);
  }, [time]);
 
  function onClose() {
    setFilter({
      ...filter,
        show : false
    });
  }
  function formatTime(seconds){
    let min = Math.floor(seconds/60);
    let sec = seconds % 60;
    return `${min} : ${sec < 10 ? "0" : ""}${sec}`;
  }
  return (
    <>
      <div className="relative flex min-h-screen content-center justify-center bg-linear-to-br from-blue-300 via-amber-50/50 to-cyan-300/50 overflow-hidden">
        <div className="relative flex content-center justify-center mr-40">
          <div className="soft-light"></div>
          <div className="hidden relative lg:flex flex-1 justify-center">
            <iframe
              className="w-3xl py-3"
              src="https://lottie.host/embed/532038ea-2eaf-4091-b2e8-c6f305d12928/tGgH3PzNnY.lottie"
            ></iframe>
          </div>
        </div>
        <div className="relative flex-col content-center justify-center w-md">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-blue-800 mb-2.5 animated-underline pb-2">
              Welcome Back
            </h1>
            <p className="text-slate-500">
              OTP is sent to your registered email <br />
              {user.email}
            </p>
          </div>
          <div className="mb-3">
            {filter.show && <Toast
              message= {filter.message}
              type= {filter.type}
              onClose={onClose}
            />}
          </div>
          <form onsubmit="" className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                Enter OTP :
              </label>

              <div className="flex items-center relative group bg-white border-2 border-slate-400 rounded-xl p-3 py-4 text-md focus-within:border-blue-800 focus-within:ring-4 focus-within:ring-cyan-500/10 transition-all">
                <input
                  type="otp"
                  placeholder="Enter OTP"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="relative group">
                  <button
                  type="button"
                  disabled = {time > 0}
                  className="cursor-pointer ml-2 text-sm text-slate-600"
                  onClick={() => {
                    setShowbtn(false);
                    setTime(20);
                    setFilter(prev => ({
                      ...prev,
                      message: `OTP resent to ${user?.email}`,
                      type: "info",
                      show: true
                    }));
                  }}
                >
                  <p className={`ml-2 mr-7 text-sm font-medium ${
                      time <= 60 && time > 0 ? "text-red-600" : "text-slate-600"
                    }`}>
                  {showbtn ? "Resend OTP" : `Time Remaining : ${time > 0 && formatTime(time)}`}
                  </p>
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all transform active:scale-95"
              onClick={() => navigate("/dashboard")}
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
