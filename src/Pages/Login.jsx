import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import "../index.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Toast } from "../components/Toast";

export function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, image } = location.state || {};
  
  const defaultUser = {
    email: "",
    password: "",
    remember: false,
  };
  
  const defaultFilter = {
    loading: false,
    eyeStatus: false,
    error: {
      message: "",
      status: false,
    },
  };
  
  const [user, setUser] = useState(defaultUser);
  const [filter, setFilter] = useState(defaultFilter);

  function verify() {
    if (user.email !== "" && user.password !== "") return true;
    else return false;
  }

  function handleEmailChange(e) {
    setUser({
      ...user,
      email: e.target.value,
    });
  }

  function handlePasswordChange(e) {
    setUser({
      ...user,
      password: e.target.value,
    });
  }

  function handleRememberMeChange(e) {
    setUser({
      ...user,
      remember: e.target.checked,
    });
  }

  function handleEyeStatusClick() {
    setFilter({
      ...filter,
      eyeStatus: !filter.eyeStatus,
    });
  }

  function onClose() {
    setFilter({
      ...filter,
      error: {
        message: "",
        status: false,
      },
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    
    setFilter({
      ...filter,
      loading: true,
    });

    if (verify()) {
      setTimeout(() => {
        setFilter({
          ...filter,
          loading: false,
        });
        navigate("/loginpage/otp", {
          state: {
            user: {
              email: user.email,
              password: user.password,
              remember: user.remember,
            },
          },
        });
      }, 2000);
    } else {
      setFilter({
        ...filter,
        loading: false,
        error: {
          message: "Fill all the fields",
          status: true,
        },
      });
    }
  }

  return (
    <div className="font-body text-slate-600 min-h-screen bg-linear-to-br from-brand-600/80 via-white to-brand-600/20 selection:bg-brand-100 selection:text-brand-900 antialiased">
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-125 h-125 bg-brand-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-125 h-125 bg-brand-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen items-center justify-center lg:justify-end overflow-hidden p-6 md:p-12 lg:p-0 lg:gap-x-20 lg:pr-12 xl:pr-24">
        
        <div className="relative hidden lg:flex flex-1 min-w-0 items-center justify-center">
          <div className="absolute w-[250%] h-62.5 bg-linear-to-br from-transparent via-brand-600/40 to-transparent blur-2xl opacity-40 animate-soft-light pointer-events-none"></div>
          <iframe
            className="w-full max-w-3xl py-3 h-full min-h-180"
            src="https://lottie.host/embed/5f405a78-0ac9-4b52-9546-2e537374a67d/HJXf8wBzG5.lottie"
            title="Login Animation"
          ></iframe>
        </div>

        <div className="relative flex flex-col content-center justify-center w-full max-w-md shrink-0">
          
          <div className="mb-10 text-center lg:text-left">
            {image && (
              <img
                src={image}
                alt="College image"
                className="w-20 h-20 object-contain mx-auto lg:mx-0 mb-4 rounded-xl border border-white shadow-sm"
              />
            )}
            
            <h1 className="relative inline-block overflow-hidden font-heading font-bold text-3xl text-blue-700 mb-2.5 pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.75 after:bg-linear-to-br after:from-transparent after:via-[#1957dd] after:to-transparent after:animate-underline-move">
              Welcome Back {name ? `to ${name}` : ""}
            </h1>
            <p className="text-slate-500">Provide credentials to login</p>
          </div>

          <div className="mb-3">
            {filter.error.status && (
              <Toast
                message={filter.error.message}
                type="error"
                onClose={onClose}
              />
            )}
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="Enter your email"
                value={user.email}
                onChange={handleEmailChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm transition-all hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-[3px] focus:ring-brand-500/18 bg-white"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <label className="text-sm font-semibold text-slate-700" htmlFor="password">
                  Password
                </label>
              </div>
              <div className="relative group shadow-sm transition-all focus-within:ring-[3px] focus-within:ring-brand-500/18 rounded-xl bg-white">
                <input
                  type={filter.eyeStatus ? "text" : "password"}
                  id="password"
                  required
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm transition-all hover:border-slate-300 focus:outline-none focus:border-brand-500 bg-transparent"
                />
                <button
                  type="button"
                  onClick={handleEyeStatusClick}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                >
                  {filter.eyeStatus ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  id="remember"
                  checked={user.remember}
                  onChange={handleRememberMeChange}
                  className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500 transition-all cursor-pointer"
                />
                <span className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors">
                  Remember me
                </span>
              </label>
              <a href="#" className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={filter.loading}
              className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-br from-brand-600 to-brand-500 text-white text-sm font-heading font-semibold hover:from-brand-700 hover:to-brand-600 transition-all active:scale-95 shadow-lg shadow-brand-200 ${
                filter.loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {filter.loading ? (
                <span>Loading...</span>
              ) : (
                <>
                  <span>Get OTP</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </>
              )}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}