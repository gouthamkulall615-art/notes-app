import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email");
      return;
    }

    if (!formData.password.trim()) {
      setError("Please enter password");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    try {
      console.log(formData);

      // backend signup api here

    } catch {
      setError("Signup failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl shadow-lg min-h-[550px] p-5">
          <form onSubmit={handleSignUp} noValidate>
            <div className="text-2xl mt-5 text-indigo-500 font-semibold text-center">
              Sign Up
            </div>

            <div className="flex flex-col justify-center items-center gap-6 mt-10">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full max-w-[320px] px-4 py-4 border rounded-lg outline-none border-gray-400 focus:border-indigo-500"
              />

              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full max-w-[320px] px-4 py-4 border rounded-lg outline-none border-gray-400 focus:border-indigo-500"
              />

              <div className="relative w-full max-w-[320px]">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border rounded-lg outline-none border-gray-400 pr-12 focus:border-indigo-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center">
                  {error}
                </div>
              )}
            </div>

            <div className="text-center mt-10">
              <button
                type="submit"
                className="bg-indigo-800 text-white px-14 py-3 rounded-lg active:scale-95 hover:bg-white hover:text-indigo-600 hover:border border-indigo-600 duration-300"
              >
                Sign Up
              </button>
            </div>

            <div className="text-sm flex gap-2 justify-center items-center mt-10">
              <span>Already have an account?</span>

              <Link to="/login" className="text-blue-600 underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;