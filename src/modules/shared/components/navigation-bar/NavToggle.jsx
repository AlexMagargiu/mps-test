import React from "react";
import { IoMenu } from "react-icons/io5";

const NavToggle = ({ isNavClosed, setIsNavClosed }) => {
  return (
    <div
      className="flex items-center justify-center w-12 h-10 mt-4 ml-6 rounded-md cursor-pointer bg-default"
      onClick={() => setIsNavClosed(!isNavClosed)}
    >
      <IoMenu className="w-6 h-6 text-white" />
    </div>
  );
};

export default NavToggle;
