import React from "react";

const Navbar = () => {
  return (
    <nav className=" h-12 sm:h-14 w-full p-3  ">
      <div className=" sm:h-8 text-2xl text-left cursor-pointer"> Notes App</div>
      <div className="mt-3 ">
        <hr className="text-gray-400  w-full" />
      </div>
    </nav>
  );
};

export default Navbar;
