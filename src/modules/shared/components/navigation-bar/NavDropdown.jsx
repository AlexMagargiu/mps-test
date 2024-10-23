import { useNavigate } from "react-router-dom";

export default function NavDropdown({ isOpen }) {
  const navigate = useNavigate();

  return (
    <div
      className={`absolute flex flex-col w-40 overflow-hidden border rounded-md shadow-lg text-secText left-4 top-14 bg-background border-border
        transition-all duration-300 ease-in-out transform origin-top-left
        ${isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
    >
      <button
        className="px-4 py-2 text-left transition-colors hover:bg-hoverBg hover:text-border"
        onClick={() => navigate("/profile")}
      >
        Edit Profile
      </button>
      <button
        className="px-4 py-2 text-left transition-colors hover:bg-hoverBg hover:text-border"
        onClick={() => navigate("/dashboard")}
      >
        Logout
      </button>
    </div>
  );
}
