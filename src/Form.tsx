import { useState } from "react";
import ProgressBar from "./ProgressBar";
import FormHeader from "./FormHeader";
import Profile from "./Profile";

export type Selected = "Profile" | "Experience" | "Education" | "Skills";

export default function Form() {
  const [progress, setProgress] = useState(0);
  const [selected, setSelected] = useState<Selected>("Profile");

  return (
    <>
      <ProgressBar progress={progress}></ProgressBar>
      <FormHeader {...{ selected, setSelected }}></FormHeader>
      <hr className="mt-2 border-gray-100 dark:border-neutral-800" />
      <Profile></Profile>
    </>
  );
}
