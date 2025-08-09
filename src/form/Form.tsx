import { useState } from "react";
import ProgressBar from "./ProgressBar";
import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import Profile from "../profile/Profile";
import { type UseExperienceReturn } from "../experience/useExperience";
import { type UseProfileReturn } from "../profile/useProfile";
import { type UseSkillsReturn } from "../skills/useSkills";
import Skills from "../skills/Skills";
import Experience from "../experience/Experience";
import Education from "../education/Education";
import type { UseEducationReturn } from "../education/useEducation";

export type Selected = "Profile" | "Experience" | "Education" | "Skills";
interface FormProps {
  profile: UseProfileReturn;
  experience: UseExperienceReturn;
  education: UseEducationReturn;
  skills: UseSkillsReturn;
  downloadResume: () => void;
}

export default function Form({
  profile,
  experience,
  education,
  skills,
  downloadResume,
}: FormProps) {
  const [selected, setSelected] = useState<Selected>("Profile");
  const inputStyle =
    "rounded-md border-0 bg-gray-100 px-3 py-2 focus:outline-2 dark:bg-neutral-800 focus:outline-gray-400";

  const profileProps = {
    ...profile,
    inputStyle,
    setSelected,
    downloadResume,
  };

  const experienceProps = {
    ...experience,
    inputStyle,
    setSelected,
    downloadResume,
  };

  const educationProps = {
    ...education,
    inputStyle,
    setSelected,
    downloadResume,
  };

  const SkillsProps = {
    ...skills,
    inputStyle,
    setSelected,
    downloadResume,
  };

  const requiredFormFields = profile.getFields();
  const progress = getProgress(requiredFormFields);
  return (
    <section className="text-sm">
      <ProgressBar progress={progress}></ProgressBar>
      <FormHeader {...{ selected, setSelected }}></FormHeader>
      <hr className="mt-2 border-gray-100 dark:border-neutral-800" />
      <FormWrapper>
        {(() => {
          switch (selected) {
            case "Profile":
              return <Profile {...profileProps} />;
            case "Experience":
              return <Experience {...experienceProps} />;
            case "Education":
              return <Education {...educationProps} />;
            case "Skills":
              return <Skills {...SkillsProps} />;
            default:
              return <Profile {...profileProps} />;
          }
        })()}
      </FormWrapper>
    </section>
  );
}

function getProgress(requiredFormFields: string[]) {
  const filledFields = requiredFormFields.filter(
    (field) => field.trim().length > 0,
  ).length;
  return Math.floor((filledFields / requiredFormFields.length) * 100);
}
