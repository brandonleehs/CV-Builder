import { useState } from "react";
import ProgressBar from "./ProgressBar";
import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import Profile from "./Profile";
import Experience, { type IExperience, type ExperienceKey } from "./Experience";
import Education, { type IEducation, type EducationKey } from "./Education";

export type Selected = "Profile" | "Experience" | "Education" | "Skills";

export default function Form() {
  const [selected, setSelected] = useState<Selected>("Profile");
  const inputStyle =
    "rounded-md border-0 bg-gray-100 px-3 py-2 focus:outline-2 dark:bg-neutral-800 focus:outline-gray-400";

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");
  const profileProps = {
    inputStyle,
    summary,
    setName,
    setTitle,
    setEmail,
    setTel,
    setLocation,
    setSummary,
    setSelected,
  };
  const [experiences, setExperiences] = useState<IExperience[]>([
    {
      id: crypto.randomUUID(),
      job: "",
      company: "",
      companyLocation: "",
      startDate: "",
      endDate: "",
      jobDesc: "",
    },
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
    setExperiences([
      ...experiences,
      {
        id: crypto.randomUUID(),
        job: "",
        company: "",
        companyLocation: "",
        startDate: "",
        endDate: "",
        jobDesc: "",
      },
    ]);
  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };
  const experienceProps = {
    inputStyle,
    experiences,
    updateExperiences,
    addExperience,
    removeExperience,
    setSelected,
  };

  const [educations, setEducations] = useState<IEducation[]>([
    {
      id: crypto.randomUUID(),
      degree: "",
      institute: "",
      study: "",
      startDate: "",
      endDate: "",
      gpa: "",
      achievements: "",
    },
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
  const addEducation = () =>
    setEducations([
      ...educations,
      {
        id: crypto.randomUUID(),
        degree: "",
        institute: "",
        study: "",
        startDate: "",
        endDate: "",
        gpa: "",
        achievements: "",
      },
    ]);
  const removeEducation = (id: string) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };
  const educationProps = {
    inputStyle,
    educations,
    updateEducations,
    addEducation,
    removeEducation,
    setSelected,
  };

  const requiredFormFields = [name, title, email, tel, summary];
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
              return <Skills />;
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
