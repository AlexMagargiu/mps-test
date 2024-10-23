export default function SectionContainer({ children }) {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 p-8 bg-white shadow-delimitingShadow max-h-max">
      {children}
    </div>
  );
}
