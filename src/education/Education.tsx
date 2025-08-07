import type { Selected } from "../form/Form";
import EducationField from "./EducationField";

interface EducationProps {
  inputStyle: string;
  educations: IEducation[];
  updateEducations: (id: string, field: EducationKey, newValue: string) => void;
  addEducation: () => void;
  removeEducation: (id: string) => void;
  setSelected: (selected: Selected) => void;
}

export interface IEducation {
  id: string;
  degree: string;
  institute: string;
  study: string;
  startDate: string;
  endDate: string;
  gpa: string;
  achievements: string;
}

export type EducationKey = keyof IEducation;

export default function Education({
  inputStyle,
  educations,
  updateEducations,
  addEducation,
  removeEducation,
  setSelected,
}: EducationProps) {
  return (
    <section className="m-auto grid max-w-[800px] gap-4 rounded-md bg-white p-4 shadow-md md:p-6 dark:bg-neutral-900">
      <p className="text-2xl font-semibold text-gray-700 dark:text-gray-50">
        Professional Experience
      </p>
      {educations.map((edu, index) => (
        <EducationField
          index={index}
          key={edu.id}
          updateEducations={updateEducations}
          id={edu.id}
          inputStyle={inputStyle}
          education={edu}
          removeEducation={removeEducation}
        ></EducationField>
      ))}
      {educations.length < 3 && (
        <button
          className="my-2 flex cursor-pointer items-center gap-1 text-orange-600"
          type="button"
          onClick={addEducation}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
          <span className="text-sm">Add another education</span>
        </button>
      )}
      <button className="cursor-pointer rounded-md bg-orange-600 p-2 text-white transition hover:bg-orange-700 active:bg-orange-800">
        Preview CV
      </button>
      <input
        value="Continue"
        type="submit"
        className="-mt-2 cursor-pointer rounded-md p-2 text-orange-600 outline-1 outline-orange-600 transition hover:bg-orange-600 hover:text-white active:bg-orange-700 active:text-white"
        onClick={() => setSelected("Skills")}
      />
    </section>
  );
}
