import { skillsData } from "../data";

export default function Skills() {
  const skills = skillsData;
  return (
    <div>
      <div className="font-bold">Skills</div>
      <div className="mb-2">
        <div className="flex my-4 flex-wrap gap-2">
          {skills.map((skill) => (
            <div
              className="shadow-xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-3 rounded hover:scale-110 transition ease-in-out delay-75"
              key={skill.skill}
            >
              {skill.skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
