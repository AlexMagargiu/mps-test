import { useState } from "react";

export default function InformationTableForm({
  fields,
  onSubmit,
  initialData = null,
  onClose,
}) {
  const [formData, setFormData] = useState(() => {
    if (initialData) return initialData;

    const initialState = {};
    fields.forEach((field) => {
      initialState[field.id] = "";
    });
    return initialState;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderField = (field) => {
    const commonProps = {
      name: field.id,
      value: formData[field.id],
      onChange: handleChange,
      required: field.required,
      className:
        "block w-full mt-1 border border-secText outline-none rounded-md shadow-sm py-[6px] px-3 focus:border-default",
    };

    switch (field.type) {
      case "select":
        return (
          <select {...commonProps}>
            <option value="">Select {field.label}</option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case "number":
        return (
          <input
            type="number"
            {...commonProps}
            min={field.min}
            max={field.max}
          />
        );

      default:
        return <input type={field.type || "text"} {...commonProps} />;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {fields.map((field) => (
          <div key={field.id}>
            <label className="block text-sm font-medium text-border">
              {field.label}
              {field.required && <span className="ml-1 text-error">*</span>}
            </label>
            {renderField(field)}
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white rounded bg-tableButtons hover:bg-tableButtonsHover w-28"
        >
          Save
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 font-bold bg-white border rounded border-secText hover:bg-tableWhiteButtonsHover w-28"
        >
          Close
        </button>
      </div>
    </form>
  );
}
