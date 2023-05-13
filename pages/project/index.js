import { useRouter } from "next/router";
import { projects } from "../../data/projects";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaComment, FaGithub, FaHeart, FaLink, FaShareAlt, FaTwitter } from "react-icons/fa";
import { BiGitPullRequest } from "react-icons/bi";

const SingleProject = () => {
    const [project, setProject] = useState({ id: 1, title: "", img: "/project/soltools.PNG", summary: "", live: "", github: "", description: "", how: "", pull: {link: "", title: ""}, tech: [""] },
    )
    const query = useRouter().query.query;

    // Get all projects from the projects data
    const { contracts, side_projects, opensource } = projects;

    // Convert all the projects into one array
    const allProjects = [].concat(contracts, side_projects, opensource)

    useEffect(() => {
        setProject(allProjects.filter(item => item.title.toLowerCase() === query)[0])
    })

    return (
        <div className="lg:px-[10%] px-4 py-10 overflow-hidden">
            <header className="my-10">

                <h1 className="text-3xl font-bold py-4" data-aos="fade-up">{project.title}</h1>
                <p className="leading-[30px]">{project.summary}</p>

                <div className="flex items-center my-3 mb-8 gap-2">
                    <Link href=""><a className="flex items-center w-fit p-2 px-4 border border-slate-800/[0.6] rounded-[30px]"><FaTwitter className="mr-2" /> Share</a></Link>
                    <Link href=""><a className="flex items-center w-fit p-2 px-4 border border-slate-800/[0.6] rounded-[30px]"><FaHeart className="mr-2" /> Like</a></Link>
                    <Link href=""><a className="flex items-center w-fit p-2 px-4 border border-slate-800/[0.6] rounded-[30px]"><FaComment className="mr-2" /> Comment</a></Link>
                </div>
                { project.img ?
                <div className="w-full lg:h-[500px] md:h-[400px] sm:h-[300px] h-[250px] relative bg-gray-800/[0.1]">
                    <Image src={project.img} alt={project.title} className="rounded-lg" layout="fill" objectFit="cover" objectPosition="top"/>
                </div>
                : ""
                }

            </header>
                
            <section>
                    
                <h2 className="font-semibold text-2xl pb-2 underline decoration-1 decoration-gray-500 underline-offset-8" id="about" data-aos="fade-right">DESCRIPTION</h2>
                <p className="py-4 leading-[30px] mb-10" data-aos="fade-left">{project.description}</p>

                { project.how ?
                    <>
                        <h2 className="font-semibold text-2xl pb-2 mt-5 underline decoration-1 decoration-gray-500 underline-offset-8" id="about" data-aos="fade-right">{project.how && "HOW IT WORKS"}</h2>
                        <p className="py-4 leading-[30px] mb-10" data-aos="fade-left">{project.how && project.how}</p>
                    </> : ""
                }
                
                <>
                    <h2 className="font-semibold text-2xl pb-2 mt-5 underline decoration-1 decoration-gray-500 underline-offset-8" id="about" data-aos="fade-right">LINKS</h2>
                    <p className="flex items-center py-2 hover:text-fuchsia-500"><FaGithub className="mr-2 text-green-600"/><Link href={project.github}><a className="text-[10px]">Github</a></Link></p>
                    <p className="flex items-center py-2 hover:text-fuchsia-500"><FaLink className="mr-2 text-red-600"/><Link href={project.live}><a className="text-[10px]">Live</a></Link></p>
                </>
                    

                { project.pull ?
                    <>
                        <h2 className="font-semibold text-2xl pb-2 mt-5 underline decoration-1 decoration-gray-500 underline-offset-8" id="about" data-aos="fade-right">PULL REQUEST</h2>
                        <p className="flex items-center py-4 hover:text-fuchsia-500"><BiGitPullRequest className="mr-2 text-fuchsia-600"/><Link href={project.pull.link}><a className="text-[10px]">{project.pull.title}</a></Link></p>
                    </>
                    : ""
                }

                <h2 className="font-semibold text-2xl pb-2 mt-10 underline decoration-1 decoration-gray-500 underline-offset-8" id="about" data-aos="fade-right">TECH STACK</h2>
                <div className="flex flex-wrap gap-4 py-4 text-[10px]">
                    {
                        project.tech.map((skill, i) => (
                            <span key={i} className="p-[2px] px-4 border border-fuchsia-300/[0.4] rounded-[30px] bg-fuchsia-500/[0.3]" data-aos="fade-right" data-aos-delay={100 * i}>{skill}</span>
                    ))
                    }
                </div>


            </section>
        </div>
    )
}

export default SingleProject;