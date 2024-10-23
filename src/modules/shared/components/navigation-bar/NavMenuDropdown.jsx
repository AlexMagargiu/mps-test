import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa6";
import { useDropdownNavigation } from "../../hooks/useDropdownNavigation";

export default function NavMenuDropdown({
  icon: Icon,
  name,
  items,
  isNavClosed,
}) {
  const { isActive, isOpen, toggleDropdown } = useDropdownNavigation(items);

  return (
    <li className="w-full">
      <div className="relative flex items-center w-full group">
        <button
          onClick={toggleDropdown}
          className={`flex items-center gap-2 font-medium w-full ${
            isActive ? "text-default" : "text-white hover:text-default"
          } transition-colors ${isNavClosed ? "justify-center" : ""}`}
        >
          <div
            className={`flex items-center justify-center ${
              isNavClosed ? "w-8 h-8" : "w-6 h-6"
            }`}
          >
            <Icon
              className={`text-xl transition-all duration-700 ${
                isActive
                  ? "text-default"
                  : "text-white group-hover:text-default"
              }`}
            />
          </div>
          {!isNavClosed && (
            <>
              <span
                className={`transition-opacity duration-700 whitespace-nowrap ${
                  isActive
                    ? "text-default"
                    : "text-white group-hover:text-default"
                }`}
              >
                {name}
              </span>
              <FaCaretDown
                className={`transition-all duration-300 ${
                  isOpen ? "rotate-180" : ""
                } ${
                  isActive
                    ? "text-default"
                    : "text-white group-hover:text-default"
                }`}
              />
            </>
          )}
        </button>
      </div>

      {isOpen && (
        <ul
          className={`
            mt-1 bg-border rounded-md
            ${
              isNavClosed
                ? "absolute left-full top-0 ml-2 p-2 min-w-[160px]"
                : "relative w-full p-2"
            }
          `}
        >
          {items.map((item) => (
            <li key={item.path} className="flex items-center w-full">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 font-medium w-full p-2 ${
                    isActive ? "text-default" : "text-white hover:text-default"
                  } rounded-md transition-colors`
                }
              >
                <span className="transition-opacity duration-700 whitespace-nowrap">
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
