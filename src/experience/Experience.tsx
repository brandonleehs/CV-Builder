import ExperienceField from "../experience/ExperienceField";
import type IExperience from "../experience/Experience";
import type { Selected } from "../form/Form";

interface ExperienceProps {
  inputStyle: string;
  experiences: IExperience[];
  updateExperiences: (
    id: string,
    field: ExperienceKey,
    newValue: string,
  ) => void;
  addExperience: () => void;
  removeExperience: (id: string) => void;
  setSelected: (selected: Selected) => void;
}

export interface IExperience {
  id: string;
  job: string;
  company: string;
  companyLocation: string;
  startDate: string;
  endDate: string;
  jobDesc: string;
}

export type ExperienceKey = keyof IExperience;

export default function Experience({
  inputStyle,
  experiences,
  updateExperiences,
  addExperience,
  removeExperience,
  setSelected,
}: ExperienceProps) {
  return (
    <section className="m-auto grid max-w-[800px] gap-4 rounded-md bg-white p-4 shadow-md md:p-6 dark:bg-neutral-900">
      <p className="text-2xl font-semibold text-gray-700 dark:text-gray-50">
        Professional Experience
      </p>
      {experiences.map((exp, index) => (
        <ExperienceField
          index={index}
          key={exp.id}
          updateExperiences={updateExperiences}
          id={exp.id}
          inputStyle={inputStyle}
          experience={exp}
          removeExperience={removeExperience}
        ></ExperienceField>
      ))}
      {experiences.length < 3 && (
        <button
          className="my-2 flex cursor-pointer items-center gap-1 text-orange-600"
          type="button"
          onClick={addExperience}
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
          <span className="text-sm">Add another experience</span>
        </button>
      )}
      <div className="grid gap-2 min-[380px]:grid-cols-2">
        <button className="cursor-pointer rounded-md bg-orange-600 p-2 text-white transition hover:bg-orange-700 active:bg-orange-800 min-[380px]:col-start-1">
          Preview CV
        </button>
        <input
          value="Continue"
          type="submit"
          className="cursor-pointer rounded-md p-2 text-orange-600 outline-1 outline-orange-600 transition hover:bg-orange-600 hover:text-white active:bg-orange-700 active:text-white min-[380px]:col-start-2"
          onClick={() => setSelected("Education")}
        />
      </div>
    </section>
  );
}
