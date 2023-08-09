import Card from "./card/card";
import { projects } from "../data/projects";
import { useState } from "react";

const Projects = () => {
  const [active, setActive] = useState("Projects")
  const { personal, opensource } = projects;

  return (
    <div className="">

      <div className="py-4 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {
            personal.map((project) => (
              <Card key={project.id} project={project} />
            ))
        }
      </div>

      <h3 className="text-2xl p-2 mt-8">open source contributions</h3>

      <div className="py-4 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {
            opensource.map((project) => (
              <Card key={project.id} project={project} />
            ))
        }
      </div>
      
    </div>
  );
};

export default Projects;
