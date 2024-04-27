import Image from "next/image";
import Button from "../button/button";

// Projects card containing project image, title, summary, links and tech stacks
const Card = ({ project }) => {

  return (
    <div
      id={project.title}
      data-testid="card"
      className="my-1 rounded overflow-hidden"
    >
      {/* Project image */}
      {project.img && (
        <div className="p-4 rounded-lg bg-gray-500/[0.2]">
          <div className="w-full min-h-[250px] relative overflow-hidden bg-gray-800/[0.1]" data-aos="zoom-in">
            <Image
              src={project.img}
              alt={project.title}
              className="object-cover object-top rounded"
              fill={true}
            />
          </div>
        </div>
      )}

      <div className="p-2 flex items-center">
        {/* Project title */}
        <h1 className="text-xl p-2" data-aos="fade-left">
          {project.title}
        </h1>
      </div>
    </div>
  );
};

export default Card;
