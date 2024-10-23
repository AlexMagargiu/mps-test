import { FaX } from "react-icons/fa6";

export default function PartNumberListModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative z-10 w-full max-w-md p-6 mx-4 bg-white rounded-lg shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{children.props.title}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <FaX className="text-gray-500 hover:text-gray-700" size={16} />
          </button>
        </div>
        <div className="overflow-y-auto max-h-96">{children}</div>
      </div>
    </div>
  );
}
