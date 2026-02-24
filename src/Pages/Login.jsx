import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { Toast } from "../components/Toast";
export function Login() {
  const navigate = useNavigate();
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
    if (user.email != "" && user.password != "") return true;
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
  function handleGetOtpClick() {
    setFilter({
      ...filter,
      loading: true,
    });
    if (verify()) {
      setTimeout(() => {
        setFilter({
          ...filter,
          loading : false
        })
        navigate("/loginpage/otp",{
          state : {
            user : {
              email : user.email,
              password : user.password,
              remember : user.remember
            }
          }
        });

      }, 2000);
    }
    else{
      setFilter({
        ...filter,
        loading: false,
        error: {
          message: "Fill all the feilds",
          status: true,
        },
      });
    }
  }

  return (
    <>
      <div className="relative flex min-h-screen content-center justify-center bg-linear-to-br from-blue-300 via-amber-50/50 to-cyan-300/50 overflow-hidden">
        <div className="relative flex content-center justify-center mr-40">
          <div className="soft-light"></div>
          <div className="hidden relative lg:flex flex-1 justify-center">
            <iframe
              className="w-3xl"
              src="https://lottie.host/embed/5f405a78-0ac9-4b52-9546-2e537374a67d/HJXf8wBzG5.lottie"
            ></iframe>
          </div>
        </div>
        <div className="relative flex-col content-center justify-center w-md">
          <div className="mb-5 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-blue-800 animated-underline pb-2">
              Welcome Back
            </h1>
            <p className="text-slate-500">Provide Credentials to login</p>
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
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                Email address
              </label>
              <div className="flex items-center relative group bg-white border-2 border-slate-400 rounded-xl p-3 py-4 text-md focus-within:border-blue-800 focus-within:ring-4 focus-within:ring-cyan-500/10 transition-all">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none bg-transparent"
                  value={user.email}
                  onChange={(e) => handleEmailChange(e)}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-xs font-bold text-slate-600 uppercase">
                  Password
                </label>
              </div>
              <div className="flex items-center relative group bg-white border-2 border-slate-400 rounded-xl p-3 py-4 text-md focus-within:border-blue-800 focus-within:ring-4 focus-within:ring-cyan-500/10 transition-all">
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                  onClick={handleEyeStatusClick}
                >
                  {filter.eyeStatus ? <Eye /> : <EyeOff />}
                </span>
                <input
                  type={filter.eyeStatus ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  required
                  className="w-full outline-none bg-transparent"
                  value={user.password}
                  onChange={(e) => handlePasswordChange(e)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="relative group">
                <input
                  type="checkbox"
                  id="remember"
                  value={user.remember}
                  className="w-4 h-4 text-cyan-500 border-slate-300 rounded focus:ring-cyan-500"
                  onChange={(e) => handleRememberMeChange(e)}
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-slate-600"
                >
                  Remember me (1 Month)
                </label>
              </div>
              <a
                href="#"
                className="ml-2 text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="button"
              onClick={handleGetOtpClick}
              className={`w-full flex items-center gap-2  bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all transform active:scale-95 ${filter.loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              disabled={filter.loading}
            >
              <span>Get OTP</span>
              {filter.loading && <span>loading...</span>}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
