import Card from "./card/card";
import { projects } from "../data/projects";

const Projects = () => {
  const { personal} = projects;

  return (
    <div className="">

      <div className="py-4 grid md:grid-cols-2 sm:grid-cols-2 gap-6">
        {
            personal.map((project) => (
              <Card key={project.id} project={project} />
            ))
        }
      </div>
      
    </div>
  );
};

export default Projects;
