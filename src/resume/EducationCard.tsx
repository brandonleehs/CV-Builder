import type { IEducation } from "../education/Education";
import { formatDate } from "./Resume";

export default function EducationCard({
  education,
}: {
  education: IEducation;
}) {
  return (
    <section className="pl-1">
      <div className="flex justify-between text-base">
        <p className="font-semibold">{education.institute}</p>
        <p className="font-semibold">
          {formatDate(education.startDate)} - {formatDate(education.endDate)}
        </p>
      </div>
      <p className="text-base">
        {education.study}, {education.degree}
      </p>
      <p>
        GPA: <span className="font-semibold">{education.gpa}</span>
      </p>
      <ul className="mt-2 ml-2 list-inside list-disc">
        {education.achievements.split("\n").map((line, idx) => (
          <li className="mt-1" key={idx}>
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
}
