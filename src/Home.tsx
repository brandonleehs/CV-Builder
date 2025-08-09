import ToggleButton from "./form/ToggleButton";
import Form from "./form/Form";
import useProfile from "./profile/useProfile";
import useExperience from "./experience/useExperience";
import useEducation from "./education/useEducation";
import useSkills from "./skills/useSkills";
import Resume from "./resume/Resume";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";
import { useRef } from "react";

export default function Home() {
  const profile = useProfile();
  const experience = useExperience();
  const education = useEducation();
  const skills = useSkills();
  const resumeRef = useRef(null);
  const FormProps = {
    profile,
    experience,
    education,
    skills,
    downloadResume,
  };
  function downloadResume() {
    if (!resumeRef.current) {
      return;
    }
    html2canvas(resumeRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("resume.pdf");
    });
  }

  return (
    <div className="text-gray-500 dark:bg-neutral-800 dark:text-gray-50">
      <section className="top flex items-center justify-between p-4">
        <p className="text-3xl font-semibold text-orange-600">CVMaker</p>
        <ToggleButton></ToggleButton>
      </section>
      <hr className="border-gray-100 dark:border-neutral-800" />
      <Form {...FormProps}></Form>
      <div ref={resumeRef}>
        <Resume {...FormProps}></Resume>
      </div>
      <footer className="bg-gray-50 py-4 text-center dark:bg-neutral-900">
        <p>© 2025 CVMaker. All rights reserved.</p>
      </footer>
    </div>
  );
}
