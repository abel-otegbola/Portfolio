import Link from "next/link"
import Image from "next/image"
import { BiGitPullRequest } from "react-icons/bi"
import { FaGithub, FaLink } from "react-icons/fa"
import { projects } from "../../data/projects"

const Projects = () => {

    const { contracts, side_projects, opensource } = projects;

    return (
        <div className="py-4">
            <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full" id="contract-projects">Contract Projects</h3>
            {
                contracts.map(project => (
                    <div key={project.id} className="my-10" data-aos="fade-up">
                        <Link href={`/project/?query=${project.title.toLowerCase()}`}><a><Image src={project.img} alt={project.title} className="rounded-lg" width={700} height={320} /></a></Link>
                        <div className="p-2">
                            <h1 className="text-xl font-semibold py-4"><Link href={`/project/?query=${project.title.toLowerCase()}`}><a>{project.title}</a></Link></h1>
                            <p className="leading-[30px]">{project.summary}...<Link href={`/project/?query=${project.title.toLowerCase()}`} ><a className="text-fuchsia-300 hover:text-fuchsia-600">View more</a></Link></p>
                            <div className="flex flex-wrap gap-4 py-4 text-[10px]">
                                {
                                    project.tech.map((skill, i) => (
                                        <span key={i} className="p-[2px] px-4 border border-fuchsia-300/[0.4] rounded-[30px] bg-fuchsia-500/[0.3]" data-aos="fade-right" data-aos-delay={100 * i}>{skill}</span>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }

            
            <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full" id="side-projects">Side Projects</h3>
            {
                side_projects.map(project => (
                    <div key={project.id} className="my-10" data-aos="fade-up">
                        <Link href={`/project/?query=${project.title.toLowerCase()}`}><a><Image src={project.img} alt={project.title} className="rounded-lg" width={700} height={320} /></a></Link>
                        <div className="p-2">
                            <h1 className="py-4"><Link href={`/project/?query=${project.title.toLowerCase()}`}><a className="text-xl font-semibold">{project.title}</a></Link></h1>
                            <p className="leading-[30px]">{project.summary}...<Link href={`/project/?query=${project.title.toLowerCase()}`} ><a className="text-fuchsia-300 hover:text-fuchsia-600">View more</a></Link></p>
                            <div className="flex flex-wrap gap-4 py-4 text-[10px]">
                                {
                                    project.tech.map((skill, i) => (
                                        <span key={i} className="p-[2px] px-4 border border-fuchsia-300/[0.4] rounded-[30px] bg-fuchsia-500/[0.3]" data-aos="fade-right" data-aos-delay={100 * i}>{skill}</span>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
            
            <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full" id="open-source-contributions">Opensource Contributions</h3>
            {
                opensource.map(project => (
                    <div key={project.id} className="my-10" data-aos="fade-right">
                        <div className="py-2 pb-6 rounded border border-transparent border-y-slate-300/[0.1]">
                            <h1 className="py-4 hover:text-fuchsia-500"><Link href={`/project/?query=${project.title.toLowerCase()}`}><a className="text-xl font-semibold">{project.title}</a></Link></h1>
                            <p className="leading-[30px]">{project.decription}</p>
                            <div className="flex items-center gap-6">
                                <p className="flex items-center py-4 hover:text-fuchsia-500"><BiGitPullRequest className="mr-2 text-fuchsia-600"/><Link href={project.pull.link}><a className="text-[10px]">{project.pull.title}</a></Link></p>
                                <p className="flex items-center py-4 hover:text-fuchsia-500"><FaGithub className="mr-2 text-green-600"/><Link href={project.github}><a className="text-[10px]">Github</a></Link></p>
                                <p className="flex items-center py-4 hover:text-fuchsia-500"><FaLink className="mr-2 text-red-600"/><Link href={project.live}><a className="text-[10px]">Live</a></Link></p>
                            </div>
                            <div className="flex flex-wrap gap-4 py-4 text-[10px]">
                                {
                                    project.tech.map((skill, i) => (
                                        <span key={i} className="p-[2px] px-4 border border-fuchsia-300/[0.4] rounded-[30px] bg-fuchsia-500/[0.3]" data-aos="fade-right" data-aos-delay={100 * i}>{skill}</span>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Projects