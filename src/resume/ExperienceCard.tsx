import type { IExperience } from "../experience/Experience";
import { formatDate } from "./Resume";

export default function ExperienceCard({
  experience,
}: {
  experience: IExperience;
}) {
  return (
    <section className="pl-1">
      <div className="flex justify-between text-base">
        <p className="font-semibold">{experience.company}</p>
        <p className="font-semibold">
          {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
        </p>
      </div>
      <p className="text-base">{experience.job}</p>
      <ul className="mt-2 list-inside list-disc">
        {experience.jobDesc.split("\n").map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    </section>
  );
}
