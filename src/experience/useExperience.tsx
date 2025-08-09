import { type IExperience, type ExperienceKey } from "./Experience";
import { useState } from "react";

const createExperience = (): IExperience => ({
  id: crypto.randomUUID(),
  job: "",
  company: "",
  companyLocation: "",
  startDate: "",
  endDate: "",
  jobDesc: "",
});

export default function useExperience() {
  const [experiences, setExperiences] = useState<IExperience[]>([
    createExperience(),
  ]);
  const updateExperiences = (
    id: string,
    field: ExperienceKey,
    newValue: string,
  ) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: newValue } : exp,
      ),
    );
  };
  const addExperience = () =>
    setExperiences([...experiences, createExperience()]);
  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };
  return {
    experiences,
    setExperiences,
    addExperience,
    removeExperience,
    updateExperiences,
  };
}

export type UseExperienceReturn = ReturnType<typeof useExperience>;
