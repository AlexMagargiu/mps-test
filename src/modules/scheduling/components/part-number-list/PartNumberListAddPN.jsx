import { useState } from "react";
import PartNumberListModal from "./PartNumberListModal";

export default function PartNumberListAddPN({
  productionLine,
  availablePartNumbers,
  onAddPartNumber,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div
      className="w-full p-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-pnBgHover"
      onClick={() => setIsModalOpen(true)}
    >
      <p className="text-center text-gray-500">
        + Add Part Number to {productionLine}
      </p>

      <PartNumberListModal isOpen={isModalOpen} onClose={handleModalClose}>
        <div title={`Add Part Number to ${productionLine}`}>
          {availablePartNumbers.map((part) => (
            <button
              key={part.partNumber}
              className="flex justify-between w-full p-3 mb-2 text-left border rounded hover:bg-gray-50"
              onClick={() => {
                onAddPartNumber(productionLine, part);
                setIsModalOpen(false);
              }}
            >
              <span>{part.partDescription}</span>
              <span className="text-sm text-secText">{part.partNumber}</span>
            </button>
          ))}
        </div>
      </PartNumberListModal>
    </div>
  );
}
