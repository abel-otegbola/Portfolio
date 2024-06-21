import Image from "next/image";
import Button from "../button/button";

// Projects card containing project image, title, summary, links and tech stacks
const Card = ({ project }) => {

  return (
    <a
      href={`/project?id=${project.id}`}
      id={project.title}
      data-testid="card"
      className="my-1 overflow-hidden shadow-sm border border-gray-500/[0.1] rounded-lg"
    >
      {/* Project image */}
      {project.img && (
        <div className="border border-transparent border-b-gray-500/[0.1]">
          <div className="w-full md:min-h-[350px] min-h-[250px] relative p-4 overflow-hidden bg-gray-800/[0.1]" data-aos="zoom-in">
            <Image
              src={project.img}
              alt={project.title}
              className="object-cover object-top rounded-t"
              fill={true}
            />
          </div>
        </div>
      )}

      <div className="p-2 px-4 flex items-center gap-2">
        {/* Project title */}
        <img src={project?.logo} className="w-[25px] h-[25px] bg-white rounded-full p-1 outline outline-offset-1 outline-fuchsia-600/[0.3]"/>
        <h1 className="text-md font-medium p-2">
          {project.title}
        </h1>
      </div>
    </a>
  );
};

export default Card;
