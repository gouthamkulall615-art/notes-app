import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-white font-semibold cursor-pointer bg-indigo-600">
     {getInitials("Goutham M")}
      </div>
      <div>
        <p className="text-sm font-medium" >Goutham M</p>
        <button className="text-sm cursor-pointer text-indigo-500 underline" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
