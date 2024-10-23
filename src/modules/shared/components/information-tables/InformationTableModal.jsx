import { FaXmark } from "react-icons/fa6";

export default function InformationTableModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg">
        <div className="flex justify-end">
          <FaXmark
            onClick={onClose}
            className="text-xl text-secText hover:text-border"
          />
        </div>
        {children}
      </div>
    </div>
  );
}
