import NavMenuElement from "./NavMenuElement";
import NavMenuDropdown from "./NavMenuDropdown";
import NavTopElement from "./NavTopElement";
import { MdDashboard, MdCalendarMonth, MdWorkHistory } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";
import { IoOptionsOutline } from "react-icons/io5";

const companyItems = [
  { name: "Areas", path: "/company/areas" },
  { name: "Subareas", path: "/company/subareas" },
  { name: "Lines", path: "/company/lines" },
  { name: "Part Numbers", path: "/company/part-numbers" },
];

export default function NavMenu({ isNavClosed }) {
  return (
    <nav
      className={`min-h-full overflow-x-hidden flex flex-col text-white bg-border transition-all duration-700 ${
        isNavClosed ? "w-16 px-2" : "w-56 p-4"
      }`}
    >
      <NavTopElement isNavClosed={isNavClosed} username="Test Test Test" />
      <ul className="flex flex-col justify-center w-full gap-4">
        <NavMenuElement
          linkTo="/dashboard"
          icon={MdDashboard}
          name="Dashboard"
          isNavClosed={isNavClosed}
        />
        <NavMenuElement
          linkTo="/scheduling"
          icon={MdCalendarMonth}
          name="Scheduling"
          isNavClosed={isNavClosed}
        />
        <NavMenuElement
          linkTo="/company-settings"
          icon={IoOptionsOutline}
          name="Company Options"
          isNavClosed={isNavClosed}
        />
        <NavMenuDropdown
          icon={FaBuilding}
          name="My Company"
          items={companyItems}
          isNavClosed={isNavClosed}
        />
        <NavMenuElement
          linkTo="/history"
          icon={MdWorkHistory}
          name="History"
          isNavClosed={isNavClosed}
        />
      </ul>
    </nav>
  );
}
