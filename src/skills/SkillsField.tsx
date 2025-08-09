import type { SkillsKey, ISkills } from "./Skills";

interface SkillsFieldProps {
  index: number;
  id: string;
  inputStyle: string;
  updateSkills: (id: string, field: SkillsKey, newValue: string) => void;
  skill: ISkills;
  removeSkills: (id: string) => void;
}

export default function SkillsField({
  index,
  id,
  inputStyle,
  updateSkills,
  skill,
  removeSkills,
}: SkillsFieldProps) {
  return (
    <section className="grid gap-2">
      <p className="text-lg font-semibold text-gray-700 dark:text-gray-50">
        Skills {index + 1}
      </p>
      {/* <div className="grid gap-2" id={id}>
        <label htmlFor={`category-${id}`}>Skills Category</label>
        <input
          required
          type="text"
          id={`category-${id}`}
          placeholder="e.g. Programming Languages"
          className={inputStyle}
          onChange={(e) => updateSkills(id, "category", e.target.value)}
          defaultValue={skill.category}
        />
      </div> */}
      <div className="grid gap-2">
        <label htmlFor={`name-${id}`}>Skill Name</label>
        <input
          required
          type="text"
          id={`name-${id}`}
          placeholder="e.g. C++"
          className={inputStyle}
          onChange={(e) => updateSkills(id, "name", e.target.value)}
          defaultValue={skill.name}
        />
      </div>
      <button
        onClick={() => removeSkills(skill.id)}
        className="mt-2 inline-flex w-full max-w-32 cursor-pointer items-center justify-center gap-1 justify-self-center rounded-md bg-orange-600 p-2 text-white transition hover:bg-orange-700 active:bg-orange-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          className="bi bi-trash3-fill"
          viewBox="0 0 16 16"
        >
          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
        </svg>
        Remove
      </button>
    </section>
  );
}
