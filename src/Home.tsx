import ToggleButton from "./form/ToggleButton";
import Form from "./form/Form";
import useProfile from "./profile/useProfile";
import useExperience from "./experience/useExperience";
import useEducation from "./education/useEducation";
import useSkills from "./skills/useSkills";

export default function Home() {
  const profile = useProfile();
  const experience = useExperience();
  const education = useEducation();
  const skills = useSkills();
  const FormProps = {
    profile,
    experience,
    education,
    skills,
  };

  return (
    <div className="text-gray-500 dark:bg-neutral-800 dark:text-gray-50">
      <section className="top flex items-center justify-between p-4">
        <p className="text-3xl font-semibold text-orange-600">CVMaker</p>
        <ToggleButton></ToggleButton>
      </section>
      <hr className="border-gray-100 dark:border-neutral-800" />
      <Form {...FormProps}></Form>
    </div>
  );
}
