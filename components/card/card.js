import Image from "next/image";
import Button from "../button/button";

// Projects card containing project image, title, summary, links and tech stacks
const Card = ({ project }) => {

  return (
    <div
      id={project.title}
      data-testid="card"
      className="my-4 rounded"
    >
      {/* Project image */}
      {project.img && (
        <div className="p-4 rounded-lg bg-primary/[0.1] dark:bg-gray-100/[0.04]">
          <div className="w-full min-h-[250px] relative overflow-hidden bg-gray-800/[0.1]">
            <Image
              src={project.img}
              alt={project.title}
              className="object-cover object-top rounded"
              fill={true}
            />
          </div>
        </div>
      )}

      {/* Tech stacks */}
        <div className="flex flex-wrap gap-2 p-2 text-[12px] capitalize">
          {project.tech.map((skill, i) => (
            <span
              key={i}
            >
              {skill}
            </span>
          ))}
        </div>

      <div className="">
        {/* Project title */}
        <h1 className="text-xl font-semibold p-2">
          {project.title}
        </h1>

        
      </div>

      <div className="p-2">
        <p>{project.summary || project.description}</p>
        <div className="flex items-center py-4 gap-4">
            <Button text={"Live"} to={project.live} />
            <Button text={"Github"} to={project.github} />
        </div>
      </div>
    </div>
  );
};

export default Card;
