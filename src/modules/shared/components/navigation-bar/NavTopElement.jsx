import { FaCaretDown } from "react-icons/fa6";
import { useState } from "react";
import NavDropdown from "./NavDropdown";

export default function UserTopElement({ isNavClosed, username }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className={`flex items-center w-full gap-2 py-4 ${
        isNavClosed ? "justify-center" : "justify-start"
      }`}
    >
      {isNavClosed ? (
        <p className="py-2 text-xl font-bold">MPS</p>
      ) : (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <p
            className={`transition-opacity duration-700 ${
              isNavClosed ? "opacity-0" : "opacity-100"
            } whitespace-nowrap`}
          >
            {username}
          </p>
          <FaCaretDown
            className={`transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      )}
      <NavDropdown isOpen={!isNavClosed && isDropdownOpen} />
    </div>
  );
}
