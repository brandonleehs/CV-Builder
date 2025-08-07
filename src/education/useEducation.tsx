import { type IEducation, type EducationKey } from "./Education";
import { useState } from "react";

const createEducation = () => {
  return {
    id: crypto.randomUUID(),
    degree: "",
    institute: "",
    study: "",
    startDate: "",
    endDate: "",
    gpa: "",
    achievements: "",
  };
};

export default function useEducation() {
  const [educations, setEducations] = useState<IEducation[]>([
    createEducation(),
  ]);
  const updateEducations = (
    id: string,
    field: EducationKey,
    newValue: string,
  ) => {
    setEducations(
      educations.map((edu) =>
        edu.id === id ? { ...edu, [field]: newValue } : edu,
      ),
    );
  };
  const addEducation = () => setEducations([...educations, createEducation()]);
  const removeEducation = (id: string) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  return {
    educations,
    setEducations,
    updateEducations,
    addEducation,
    removeEducation,
  };
}
