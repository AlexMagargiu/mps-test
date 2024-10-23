export default function SectionNameDelimitation({ sectionName }) {
  return (
    <div className="self-start w-full">
      <p className="text-2xl font-bold ">{sectionName}</p>
      <div className="w-full border rounded-lg opacity-50 border-secText"></div>
    </div>
  );
}
