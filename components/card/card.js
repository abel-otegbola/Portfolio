import Image from "next/image";
import Link from "next/link";
import { BiGitPullRequest } from "react-icons/bi";
import { FaGithub, FaLink } from "react-icons/fa";

// Projects card containing project image, title, summary, links and tech stacks
const Card = ({ project }) => {
  return (
    <div
      data-testid="card"
      className="my-10 border border-transparent p-2 rounded bg-slate-300/[0.02] border-y-slate-300/[0.1]"
      data-aos="fade-up"
    >
      {/* Project image */}
      {project.img && (
        <Link href={`/project/?query=${project.title.toLowerCase()}`}>
          <div className="w-full h-[300px] relative bg-gray-800/[0.1]">
            <Image
              src={project.img}
              alt={project.title}
              className="rounded-lg"
              fill={true}
            />
          </div>
        </Link>
      )}

      <div className="p-2">
        {/* Project title */}
        <h1 className="text-xl font-semibold py-4">
          <Link href={`/project/?query=${project.title.toLowerCase()}`}>
            {project.title}
          </Link>
        </h1>

        {/* Project summary */}
        <p className="leading-[30px]">
          {(project.summary && project.summary.slice(0, 120)) ||
            project.description}
          ...
          <Link
            href={`/project/?query=${project.title.toLowerCase()}`}
            className="text-fuchsia-300 hover:text-fuchsia-600"
          >
            View more
          </Link>
        </p>

        {/* Project links */}
        <div className="flex items-center gap-6">
          {project.pull ? (
            <p className="flex items-center py-4 hover:text-fuchsia-500">
              <BiGitPullRequest className="mr-2 text-fuchsia-600" />
              <Link href={project.pull.link}>{project.pull.title}</Link>
            </p>
          ) : (
            ""
          )}
          <p className="flex items-center py-4 hover:text-fuchsia-500">
            <FaGithub className="mr-2 text-green-600" />
            <Link data-testid="link" href={project.github}>
              Github
            </Link>
          </p>
          <p className="flex items-center py-4 hover:text-fuchsia-500">
            <FaLink className="mr-2 text-red-600" />
            <Link data-testid="link" href={project.live}>
              Live
            </Link>
          </p>
        </div>

        {/* Tech stacks */}
        <div className="flex flex-wrap gap-4 py-4 text-[10px]">
          {project.tech.map((skill, i) => (
            <span
              key={i}
              className="p-[2px] px-4 border border-fuchsia-300/[0.4] rounded-[30px] bg-primary text-white"
              data-aos="fade-right"
              data-aos-delay={100 * i}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
