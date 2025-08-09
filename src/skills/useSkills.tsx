import { useState } from "react";
import type { SkillsKey } from "./Skills";

const createSkills = () => {
  return {
    id: crypto.randomUUID(),
    category: "",
    name: "",
  };
};

export default function useSkills() {
  const [skills, setSkills] = useState([createSkills()]);

  const updateSkills = (id: string, field: SkillsKey, newValue: string) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: newValue } : skill,
      ),
    );
  };
  const addSkills = () => setSkills([...skills, createSkills()]);
  const removeSkills = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  return {
    skills,
    setSkills,
    updateSkills,
    removeSkills,
    addSkills,
  };
}

export type UseSkillsReturn = ReturnType<typeof useSkills>;
