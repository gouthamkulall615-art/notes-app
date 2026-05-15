import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };
  return (
    <nav className="h-12 sm:h-14 w-full p-3">
      <div className="flex justify-between items-center">
        <div className="text-2xl cursor-pointer">Notes App</div>

        <ProfileInfo onLogout={onLogout} />
      </div>

      <div className="mt-3">
        <hr className="text-gray-400 w-full" />
      </div>
    </nav>
  );
};

export default Navbar;
