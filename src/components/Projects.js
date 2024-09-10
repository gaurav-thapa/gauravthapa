import { projectData } from "../data";
import Project from "./Project";

export default function Projects() {
  const projects = projectData;
  return (
    <>
      <div className="font-bold mb-2 mt-4">Projects</div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </>
  );
}
