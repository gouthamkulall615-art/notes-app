import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md gap-3">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full py-4 outline-none text-indigo-900"
        value={value}
        onChange={onChange}
      />
      {value && (
        <IoClose
          className="text-slate-400 text-xl  hover:text-black duration-300 "
          onClick={onClearSearch}
        />
      )}

      <FiSearch
        className="text-slate-400 text-xl hover:text-black duration-300"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
