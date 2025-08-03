import { type Selected } from "./Form";
export default function SectionButton({
  label,
  selected,
  setSelected,
}: {
  label: Selected;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<Selected>>;
}) {
  return (
    <button
      className={`w-20 cursor-pointer bg-center px-2 pt-2 text-sm transition-all duration-300 hover:bg-gray-300 hover:bg-[radial-gradient(circle,transparent_1%,#d1d5db_1%)] hover:bg-[length:15000%] hover:bg-center active:bg-[#b7bcc5] active:bg-none active:bg-[length:100%] active:duration-250 ${selected ? "text-orange-500" : ""} `}
      onClick={() => setSelected(label)}
    >
      {label}
      <div
        className={`mt-2 h-0.5 w-full ${selected ? "bg-orange-500" : "bg-gray-200"}`}
      ></div>
    </button>
  );
}
