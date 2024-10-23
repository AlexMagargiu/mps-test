import { TiPlus } from "react-icons/ti";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function InformationTable({
  name,
  headers,
  data,
  onAddClick,
  onRowClick,
  onDeleteClick,
}) {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col items-start gap-2 mb-2">
        <h2 className="text-xl font-bold">{name}</h2>
        <button
          onClick={onAddClick}
          className="flex items-center gap-1 text-tableButtons hover:text-tableButtonsHover"
        >
          <TiPlus className="text-xl" /> Add
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={header.id}
                  className={`px-4 py-2 text-sm font-medium tracking-wider text-left border-b border-r text-border ${
                    index % 2 === 0 ? "bg-white" : "bg-tableColorDelimitation"
                  }`}
                >
                  {header.label}
                </th>
              ))}
              <th className="px-4 py-2 text-sm font-medium tracking-wider text-left border-b border-r text-border">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {headers.map((header, colIndex) => (
                  <td
                    key={header.id}
                    className={`px-4 py-2 border-b border-r cursor-pointer ${
                      colIndex % 2 === 0
                        ? "bg-white"
                        : "bg-tableColorDelimitation"
                    }`}
                    onClick={() => onRowClick(row.id)}
                  >
                    {header.id === "number" ? index + 1 : row[header.id]}
                  </td>
                ))}
                <td className="px-4 py-2 border-b border-r">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onRowClick(row.id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => onDeleteClick(row.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
