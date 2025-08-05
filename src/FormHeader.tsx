import SectionButton from "./SectionButton";
import { type Selected } from "./Form";
export default function FormHeader({
  selected,
  setSelected,
}: {
  selected: Selected;
  setSelected: React.Dispatch<React.SetStateAction<Selected>>;
}) {
  return (
    <section className="grid w-max grid-flow-col overflow-x-auto pb-2">
      <SectionButton
        selected={selected === "Profile"}
        label="Profile"
        setSelected={setSelected}
      ></SectionButton>
      <SectionButton
        selected={selected === "Experience"}
        label="Experience"
        setSelected={setSelected}
      ></SectionButton>
      <SectionButton
        selected={selected === "Education"}
        label="Education"
        setSelected={setSelected}
      ></SectionButton>
      <SectionButton
        selected={selected === "Skills"}
        label="Skills"
        setSelected={setSelected}
      ></SectionButton>
    </section>
  );
}
