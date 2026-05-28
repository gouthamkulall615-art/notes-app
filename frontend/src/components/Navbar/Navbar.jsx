import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {};
  const onClearSearch = () => {
    setSearchQuery("");
  };
  return (
    <nav className="min-h-14 w-full p-3">
      <div className="flex justify-between items-center">
        <div className="text-2xl cursor-pointer">Notes App</div>
        <SearchBar value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
        />
        <ProfileInfo onLogout={onLogout} />
      </div>

      <div className="mt-3">
        <hr className="text-gray-400 w-full" />
      </div>
    </nav>
  );
};

export default Navbar;
