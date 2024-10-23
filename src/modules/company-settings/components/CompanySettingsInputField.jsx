export default function InputField({
  label,
  id,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="text-right w-52">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded outline-none focus:border-default"
      />
    </div>
  );
}
