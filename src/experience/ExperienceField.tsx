import type { ExperienceKey, IExperience } from "./Experience";

interface ExperienceFieldProps {
  index: number;
  id: string;
  inputStyle: string;
  updateExperiences: (
    id: string,
    field: ExperienceKey,
    newValue: string,
  ) => void;
  experience: IExperience;
  removeExperience: (id: string) => void;
}

export default function ExperienceField({
  index,
  id,
  inputStyle,
  updateExperiences,
  experience,
  removeExperience,
}: ExperienceFieldProps) {
  return (
    <section className="grid gap-2">
      <p className="text-lg font-semibold text-gray-700 lg:col-span-2 dark:text-gray-50">
        Experience {index + 1}
      </p>
      <div className="grid gap-2" id={id}>
        <label htmlFor={`job-${id}`}>Job Title</label>
        <input
          required
          type="text"
          id={`job-${id}`}
          placeholder="e.g. Senior Developer"
          className={inputStyle}
          onChange={(e) => updateExperiences(id, "job", e.target.value)}
          defaultValue={experience.job}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor={`job-${id}`}>Company Name</label>
        <input
          required
          type="text"
          id={`company-${id}`}
          placeholder="e.g. Tech Solutions Inc."
          className={inputStyle}
          onChange={(e) => updateExperiences(id, "company", e.target.value)}
          defaultValue={experience.company}
        />
      </div>
      <div className="grid gap-2 lg:col-span-2">
        <label htmlFor={`company-location-${id}`}>Company Location</label>
        <input
          required
          type="text"
          id={`company-location-${id}`}
          placeholder="e.g. New York, NY"
          className={inputStyle}
          onChange={(e) =>
            updateExperiences(id, "companyLocation", e.target.value)
          }
          defaultValue={experience.companyLocation}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor={`start-date-${id}`}>Start Date</label>
        <input
          required
          type="date"
          id={`start-date-${id}`}
          className={inputStyle}
          onChange={(e) => updateExperiences(id, "startDate", e.target.value)}
          defaultValue={experience.startDate}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor={`end-date-${id}`}>End Date</label>
        <input
          required
          type="date"
          className={inputStyle}
          id={`end-date-${id}`}
          onChange={(e) => updateExperiences(id, "endDate", e.target.value)}
          defaultValue={experience.endDate}
        />
      </div>
      <div className="grid gap-2 lg:col-span-2">
        <label htmlFor={`job-date-${id}`}>Job Description</label>
        <textarea
          required
          name="job-desc"
          id={`job-date-${id}`}
          placeholder="Describe your responsibilities and achievements..."
          className="w-full rounded-sm bg-gray-100 px-3 py-2 outline-0 focus:outline-2 focus:outline-gray-400 dark:bg-neutral-800"
          rows={4}
          maxLength={500}
          onChange={(e) => updateExperiences(id, "jobDesc", e.target.value)}
          defaultValue={experience.jobDesc}
        ></textarea>
        <p className="text-end text-xs text-gray-400">
          {experience.jobDesc.length}/500
        </p>
      </div>
      <button
        onClick={() => removeExperience(experience.id)}
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
