import Card from "./card/card";
import { projects } from "../data/projects";

const Projects = () => {
  const { contracts, side_projects, opensource } = projects;

  return (
    <div className="py-4">
      <h3
        className="font-semibold pb-4 mt-6 underline underline-offset-8 decoration-1 decoration-gray-700 w-full"
        id="contract-projects"
      >
        CONTRACT PROJECTS
      </h3>
      {contracts.map((project) => (
        <Card key={project.id} project={project} />
      ))}

      <h3
        className="font-semibold pb-4 pt-10 underline underline-offset-8 decoration-1 decoration-gray-700 w-full"
        id="side-projects"
      >
        SIDE PROJECTS
      </h3>
      {side_projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}

      <h3
        className="font-semibold pb-4 pt-10 underline underline-offset-8 decoration-1 decoration-gray-700 w-full"
        id="open-source-contributions"
      >
        OPENSOURCE CONTRIBUTIONS
      </h3>
      {opensource.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
