import type { ISkills } from "../skills/Skills";
import { formatDate } from "./Resume";

export default function SkillsCard({ skills }: { skills: ISkills }) {
  return (
    <section className="pl-1">
      <p className="text-base">{skills.job}</p>
      <ul className="mt-2 list-inside list-disc"></ul>
    </section>
  );
}
