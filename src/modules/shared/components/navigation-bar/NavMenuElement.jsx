import { NavLink } from "react-router-dom";

export default function NavMenuElement({
  linkTo,
  icon: Icon,
  name,
  isNavClosed,
}) {
  return (
    <li className="flex items-center w-full">
      <NavLink
        to={linkTo}
        className={({ isActive }) =>
          `flex items-center gap-2 font-medium w-full ${
            isActive ? "text-default" : "text-white"
          } ${isNavClosed ? "justify-center" : ""} hover:text-default`
        }
      >
        <div
          className={`flex items-center justify-center ${
            isNavClosed ? "w-8 h-8" : "w-6 h-6"
          }`}
        >
          <Icon className="text-xl transition-all duration-700" />
        </div>
        {!isNavClosed && (
          <span className="transition-opacity duration-700 whitespace-nowrap">
            {name}
          </span>
        )}
      </NavLink>
    </li>
  );
}
