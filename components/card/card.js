import Image from "next/image";
import Link from "next/link";
import { BiGitPullRequest } from "react-icons/bi";
import { FaGithub, FaLink } from "react-icons/fa";

// Projects card containing project image, title, summary, links and tech stacks
const Card = ({ project }) => {
  return (
    <div
      data-testid="card"
      className="my-4 rounded"
    >
      {/* Project image */}
      {project.img && (
        <Link href={`/project/?query=${project.title.toLowerCase()}`} className="">
          <div className="w-full relative overflow-hidden bg-gray-800/[0.1] rounded-lg bg-primary/[0.1] p-4">
            <Image
              src={project.img}
              alt={project.title}
              className=" rounded"
              width={400}
              height={250}
            />
          </div>
        </Link>
      )}

      {/* Tech stacks */}
        <div className="flex flex-wrap gap-2 p-2 text-[10px] capitalize">
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
          <Link href={`/project/?query=${project.title.toLowerCase()}`}>
            {project.title}
          </Link>
        </h1>

        
      </div>
    </div>
  );
};

export default Card;
