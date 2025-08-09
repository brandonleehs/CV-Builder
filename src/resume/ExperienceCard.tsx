import type { IExperience } from "../experience/Experience";
import { formatDate } from "./Resume";

export default function ExperienceCard({
  experience,
}: {
  experience: IExperience;
}) {
  return (
    <section className="relative ml-6 pl-1">
      <div className="flex justify-between text-base">
        <div className="flex items-center gap-4">
          <div className="-ml-6 h-2 w-2 rounded-full bg-sky-900 dark:bg-sky-600"></div>
          <p className="font-semibold">{experience.company}</p>
        </div>
        <p className="font-semibold">
          {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
        </p>
      </div>
      <p className="text-base">{experience.job}</p>
      <ul className="mt-2 ml-2 list-inside list-disc">
        {experience.jobDesc.split("\n").map((line, idx) => (
          <li className="mt-1" key={idx}>
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
}
