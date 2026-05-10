import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex items-center justify-center px-4 py-10 ">
        <div className=" w-full max-w-md rounded-2xl shadow-lg min-h-[500px] p-3 ">
          <div className="login text-xl  h-10 mt-5 text-indigo-500 font-semibold ">
            Login
          </div>
          <div className="inputs flex flex-col justify-center items-center h-45 gap-8 ">
            <input
              type="text"
              placeholder="Email"
              className="w-full max-w-[320px] px-4 py-4 border rounded-lg outline-none border-gray-400"
            />
            <div className="relative w-full max-w-[320px]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-4 border rounded-lg outline-none border-gray-400 pr-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div className="login-btn text-center p-9">
            <button className="bg-indigo-800 text-white px-13 py-3 rounded-lg cursor-pointer active:scale-95 hover:bg-white hover:text-indigo-600 hover:border duration-300">
              Login
            </button>
          </div>
          <div className="lastline text-sm flex gap-4 justify-center items-center">
            <span> not registerd yet</span>
            <span>
              <Link to="/signup" className="text-blue-600 underline">
                {" "}
                Create an account
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
