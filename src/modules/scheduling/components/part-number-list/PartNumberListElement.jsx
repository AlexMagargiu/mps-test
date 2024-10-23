import { FaCaretDown } from "react-icons/fa6";

export default function PartNumberListElement({
  partNumber,
  isExpanded,
  onToggle,
}) {
  return (
    <div className="border rounded-lg shadow-sm">
      <button onClick={onToggle} className="w-full text-left">
        <div className="flex items-center justify-between p-4 border-b bg-pnBg hover:bg-pnBgHover">
          <div>
            <h3 className="text-lg font-semibold">
              {partNumber.partDescription}
            </h3>
            <p className="text-sm text-secText">
              Part Number: {partNumber.partNumber}
            </p>
          </div>
          <FaCaretDown
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      {isExpanded && (
        <div className="p-4">
          <div>
            <p className="text-sm text-secText">Initial Stock</p>
            <p className="font-medium">{partNumber.initialStock}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-pnBg">
                  <th className="p-2 text-left border">Week</th>
                  <th className="p-2 text-left border">Required Goods</th>
                </tr>
              </thead>
              <tbody>
                {partNumber.requirements.map((req) => (
                  <tr key={req.weekNumber} className="hover:bg-pnBgHover">
                    <td className="p-2 border">Week {req.weekNumber}</td>
                    <td className="p-2 border">{req.requiredGoods}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
