import type { UseProfileReturn } from "../profile/useProfile";
import type { UseExperienceReturn } from "../experience/useExperience";
import type { UseEducationReturn } from "../education/useEducation";
import type { UseSkillsReturn } from "../skills/useSkills";
import photo from "../assets/Todd.jpg";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import type { IExperience } from "../experience/Experience";
import type { IEducation } from "../education/Education";
import type { ISkills } from "../skills/Skills";

interface ResumeProps {
  profile: UseProfileReturn;
  experience: UseExperienceReturn;
  education: UseEducationReturn;
  skills: UseSkillsReturn;
}

export default function Resume({
  profile,
  experience,
  education,
  skills,
}: ResumeProps) {
  const defaultName = "Richard Sanchez";
  const defaultTitle = "Marketing Manager";
  const defaultEmail = "hello@gmail.com";
  const defaultTel = "+123-456-7890";
  const defaultLocation = "123 Anywhere St., Any City";
  const defaultSummary =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Ut enim ad minim veniam quis nostrud exercitation.";
  const defaultPreview = photo;

  return (
    <main className="grid justify-items-center gap-4 p-4 text-sm">
      <img
        src={profile.preview ? profile.preview : defaultPreview}
        alt="image preview"
        className="h-24 w-24 rounded-full border-1 border-gray-50 bg-gray-100 object-cover md:h-24 md:w-24 lg:h-36 lg:w-36 dark:bg-neutral-900"
      />
      <div className="grid gap-2">
        <p className="text-3xl font-semibold uppercase">
          {profile.name ? profile.name : defaultName}
        </p>
        <p className="text-xl uppercase">
          {profile.title ? profile.title : defaultTitle}
        </p>
        <div className="h-1 w-18 bg-sky-800 dark:bg-sky-600"></div>
      </div>

      <section className="grid max-w-[800px] gap-4">
        <section className="grid gap-2 text-base">
          <p className="text-xl font-bold tracking-wide text-sky-900 uppercase dark:text-sky-600">
            Contact
          </p>
          <hr className="w-full outline-1 outline-sky-900" />
          <div className="ml-2 inline-flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
            <span>{profile.tel ? profile.tel : defaultTel}</span>
          </div>
          <div className="ml-2 inline-flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            <span>{profile.email ? profile.email : defaultEmail}</span>
          </div>
          <div className="ml-2 inline-flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <span>{profile.location ? profile.location : defaultLocation}</span>
          </div>
        </section>
        <section className="grid gap-2">
          <p className="text-xl font-bold tracking-wide text-sky-900 uppercase dark:text-sky-600">
            Profile
          </p>
          <hr className="w-full outline-1 outline-sky-900" />
          <p className="ml-2">
            {profile.summary ? profile.summary : defaultSummary}
          </p>
        </section>

        <section className="grid gap-2">
          <p className="text-xl font-bold tracking-wide text-sky-900 uppercase dark:text-sky-600">
            Education
          </p>
          <hr className="w-full outline-1 outline-sky-900" />
          {education.educations &&
          education.educations.some((exp) => isEdited(exp)) ? (
            education.educations.map((exp) => (
              <EducationCard key={exp.id} education={exp} />
            ))
          ) : (
            <EducationCard
              education={{
                id: crypto.randomUUID(),
                study: "Business Administration",
                degree: "Masters of Business Administration",
                institute: "Wardiere University",
                startDate: "2023-01-10",
                endDate: "2025-02-10",
                gpa: "3.8/4.0",
                achievements: `Graduated with distinction from MBA program specializing in Strategic Management.
Awarded Dean’s List recognition for academic excellence across all semesters.
Presented capstone project on market entry strategies for emerging economies.`,
              }}
            />
          )}
        </section>
        <section className="grid gap-2">
          <p className="text-xl font-bold tracking-wide text-sky-900 uppercase dark:text-sky-600">
            Work Experience
          </p>
          <hr className="w-full outline-1 outline-sky-900" />
          {experience.experiences &&
          experience.experiences.some((exp) => isEdited(exp)) ? (
            experience.experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))
          ) : (
            <ExperienceCard
              experience={{
                id: crypto.randomUUID(),
                job: "Marketing Manager & Specialist",
                company: "Borcello Studio",
                companyLocation: "1234 Market St, San Francisco, CA",
                jobDesc: `Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives.
Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives.
Monitor brand consistency across marketing channels and materials.`,
                startDate: "2025-06-10",
                endDate: "2025-10-10",
              }}
            />
          )}
        </section>
        <section className="grid gap-2 text-base">
          <p className="text-xl font-bold tracking-wide text-sky-900 uppercase dark:text-sky-600">
            Skills
          </p>
          <hr className="w-full outline-1 outline-sky-900" />
          <ul>
            {skills.skills && skills.skills.some((skill) => isEdited(skill)) ? (
              skills.skills.map((skill) => (
                <li className="list-inside list-disc" key={skill.id}>
                  {skill.name}
                </li>
              ))
            ) : (
              <>
                <li className="list-inside list-disc" key="pm">
                  Project Management
                </li>
                <li className="list-inside list-disc" key="pr">
                  Public Relations
                </li>
                <li className="list-inside list-disc" key="teamwork">
                  Teamwork
                </li>
              </>
            )}
          </ul>
        </section>
      </section>
    </main>
  );
}

function isEdited(formObject: IExperience | IEducation | ISkills): boolean {
  const { id, ...keys } = formObject;
  return !Object.values(keys).every((el) => el.length === 0);
}

export function formatDate(dateStr: string) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return ""; // invalid date

  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${year}`;
}
