import type { EducationKey, IEducation } from "./Education";

interface EducationFieldProps {
  index: number;
  id: string;
  inputStyle: string;
  updateEducations: (id: string, field: EducationKey, newValue: string) => void;
  education: IEducation;
  removeEducation: (id: string) => void;
}

export default function EducationField({
  index,
  id,
  inputStyle,
  updateEducations,
  education,
  removeEducation,
}: EducationFieldProps) {
  return (
    <section className="grid gap-2">
      <p className="text-lg font-semibold text-gray-600 lg:col-span-2 dark:text-gray-50">
        Education {index + 1}
      </p>
      <div className="grid gap-2" id={id}>
        <label htmlFor="degree">Degree/Certificate</label>
        <input
          required
          type="text"
          id={`degree-${id}`}
          placeholder="e.g. Bachelor of Science"
          className={inputStyle}
          onChange={(e) => updateEducations(id, "degree", e.target.value)}
          defaultValue={education.degree}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="institute">Institution Name</label>
        <input
          required
          type="text"
          id={`institute-${id}`}
          placeholder="e.g. University Name"
          className={inputStyle}
          onChange={(e) => updateEducations(id, "institute", e.target.value)}
          defaultValue={education.institute}
        />
      </div>
      <div className="grid gap-2 lg:col-span-2">
        <label htmlFor="study">Field of Study</label>
        <input
          required
          type="text"
          id={`study-${id}`}
          placeholder="e.g. Computer Science"
          className={inputStyle}
          onChange={(e) => updateEducations(id, "study", e.target.value)}
          defaultValue={education.study}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="start-date">Start Date</label>
        <input
          required
          type="date"
          id={`start-date-${id}`}
          className={inputStyle}
          onChange={(e) => updateEducations(id, "startDate", e.target.value)}
          defaultValue={education.startDate}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="end-date">End Date</label>
        <input
          required
          type="date"
          className={inputStyle}
          id={`end-date-${id}`}
          onChange={(e) => updateEducations(id, "endDate", e.target.value)}
          defaultValue={education.endDate}
        />
      </div>
      <div className="grid gap-2 lg:col-span-2">
        <label htmlFor="gpa">GPA (Optional)</label>
        <input
          required
          type="text"
          id={`gpa-${id}`}
          placeholder="e.g. 3.8"
          className={inputStyle}
          onChange={(e) => updateEducations(id, "gpa", e.target.value)}
          defaultValue={education.gpa}
        />
      </div>
      <div className="grid gap-2 lg:col-span-2">
        <label htmlFor="achievements">Achievements</label>
        <textarea
          required
          name="achievements"
          id={`achievements-${id}`}
          placeholder="List your academic achievements..."
          className="w-full rounded-sm bg-gray-100 px-3 py-2 outline-0 focus:outline-2 focus:outline-gray-400 dark:bg-neutral-800"
          rows={4}
          maxLength={500}
          onChange={(e) => updateEducations(id, "achievements", e.target.value)}
          defaultValue={education.achievements}
        ></textarea>
        <p className="text-end text-xs text-gray-400">
          {education.achievements.length}/500
        </p>
      </div>
      <button
        onClick={() => removeEducation(education.id)}
        className="inline-flex w-full max-w-32 cursor-pointer items-center justify-center gap-1 justify-self-center rounded-md bg-orange-600 p-2 text-white transition hover:bg-orange-700 active:bg-orange-800 lg:col-span-2"
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
