import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      console.log(formData);

      // backend api call here

      // example:
      // const response = await axios.post("/api/login", formData)
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl shadow-lg min-h-[500px] p-5">
          <div className="text-2xl mt-5 text-indigo-500 font-semibold text-center">
            Login
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center gap-6 mt-10">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="w-full max-w-[320px] px-4 py-4 border rounded-lg outline-none border-gray-400 focus:border-indigo-500"
              />

              <div className="relative w-full max-w-[320px]">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
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

              <div className="w-full max-w-[320px] text-right">
                <Link
                  to="/forgot-password"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
            </div>

            <div className="text-center mt-10">
              <button
                type="submit"
                disabled={loading}
                className="bg-indigo-800 text-white px-14 py-3 rounded-lg cursor-pointer active:scale-95 hover:bg-white hover:text-indigo-600 hover:border border-indigo-600 duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          <div className="text-sm flex gap-2 justify-center items-center mt-10">
            <span>Not registered yet?</span>

            <Link to="/signup" className="text-blue-600 underline">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
