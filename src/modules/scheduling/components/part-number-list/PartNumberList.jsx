import { useState, useEffect } from "react";
import JobService from "../../services/JobService";
import PartNumberListLogic from "../../utils/PartNumberListLogic";
import PartNumberListElement from "./PartNumberListElement";
import PartNumberListAddPN from "./PartNumberListAddPN";
import { FaCaretDown, FaMinus } from "react-icons/fa6";

export default function PartNumberList() {
  const [allPartNumbers, setAllPartNumbers] = useState([]);
  const [groupedPartNumbers, setGroupedPartNumbers] = useState({});
  const [expandedLine, setExpandedLine] = useState(null);
  const [expandedPartNumber, setExpandedPartNumber] = useState(null);
  const [removingParts, setRemovingParts] = useState({});

  useEffect(() => {
    const fetchPartNumbers = async () => {
      try {
        const partNumbers = await JobService.getAllPartNumbers();
        setAllPartNumbers(partNumbers);
        setGroupedPartNumbers(
          PartNumberListLogic.groupPartNumbersByLine(partNumbers)
        );
      } catch (error) {
        console.error("Failed to fetch part numbers:", error);
      }
    };

    fetchPartNumbers();
  }, []);

  const toggleLine = (partLine) => {
    setExpandedLine(expandedLine === partLine ? null : partLine);
    setExpandedPartNumber(null);
  };

  const togglePartNumber = (partNumber) => {
    setExpandedPartNumber(
      expandedPartNumber === partNumber ? null : partNumber
    );
  };

  const removePartNumber = (productionLine, partNumber) => {
    setRemovingParts((prev) => ({ ...prev, [partNumber.partNumber]: true }));

    setTimeout(() => {
      setGroupedPartNumbers((prev) =>
        PartNumberListLogic.removePartNumberFromLine(
          prev,
          productionLine,
          partNumber
        )
      );
      setRemovingParts((prev) => ({ ...prev, [partNumber.partNumber]: false }));
    }, 500);
  };

  const addPartNumber = (productionLine, partNumber) => {
    setGroupedPartNumbers((prev) =>
      PartNumberListLogic.addPartNumberToLine(prev, productionLine, partNumber)
    );
  };

  return (
    <div className="w-full p-4">
      <h1 className="mb-6 text-2xl font-bold">
        Part Numbers by Production Line
      </h1>
      <div className="space-y-4">
        {Object.entries(groupedPartNumbers).map(([partLine, parts]) => (
          <div key={partLine} className="border rounded-lg">
            <button
              className="flex items-center justify-between w-full p-4 text-left bg-pnBg hover:bg-pnBgHover focus:outline-none"
              onClick={() => toggleLine(partLine)}
            >
              <p className="text-lg font-semibold">
                Production Line: {partLine} ({parts.length} parts)
              </p>
              <FaCaretDown
                className={`transition-transform duration-300 ${
                  expandedLine === partLine ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedLine === partLine && (
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                {parts.map((part) => (
                  <div
                    key={part.partNumber}
                    className={`transition-all duration-500 w-full ${
                      removingParts[part.partNumber]
                        ? "transform translate-y-8 opacity-0"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-center gap-6">
                      <div className="flex-grow">
                        <PartNumberListElement
                          partNumber={part}
                          isExpanded={expandedPartNumber === part.partNumber}
                          onToggle={() => togglePartNumber(part.partNumber)}
                        />
                      </div>
                      <button
                        className="p-2 text-white border-[2px] rounded-md border-error"
                        onClick={() => removePartNumber(partLine, part)}
                      >
                        <FaMinus className="w-6 h-6 text-error" />
                      </button>
                    </div>
                  </div>
                ))}
                <PartNumberListAddPN
                  productionLine={partLine}
                  availablePartNumbers={PartNumberListLogic.getAvailablePartNumbers(
                    allPartNumbers,
                    parts
                  )}
                  onAddPartNumber={addPartNumber}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
