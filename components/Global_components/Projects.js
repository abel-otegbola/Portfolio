import Link from "next/link"
import Image from "next/image"
import { BiGitPullRequest } from "react-icons/bi"
import { FaGithub, FaLink } from "react-icons/fa"

const Projects = () => {
    const contracts = [
        { id: 1, title: "SOLTOOLS", img: "/projects/Cleanlist.png", summary: "A landing page for soltools which is a one-stop shop providing Defi support on the solana blockchain", Inspiration: "The inspiration behind the design and tech stack used is to provide a simple, informative and easy to understand landing page. The colors carefully used to match the brand logo, headings and call to actions to give the visitors an understanding of the services offered", how: "The landing page was built with HTML, CSS, JS and Bootstrap to keep it light and simple", tech: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"] },
        { id: 2, title: "NEPAL BEST DEALS", img: "/projects/nepalbestdeal.png", summary: "A landing page for soltools which is a one-stop shop providing Defi support on the solana blockchain", Inspiration: "The inspiration behind the design and tech stack used is to provide a simple, informative and easy to understand landing page. The colors carefully used to match the brand logo, headings and call to actions to give the visitors an understanding of the services offered", how: "The landing page was built with HTML, CSS, JS and Bootstrap to keep it light and simple", tech: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"] },
    ]
    
    const opensource = [
        { id: 1, title: "Price Templates", github: "https://github.com/abel-otegbola/PriceTemplate/", live: "elvinpero.github.io/PriceTemplate/", decription: "This is a price template panel project where the aim is to make working price template model that can be used on webapps", pull: {title: "Feature Darkmode", link: "https://github.com/ElvinPero/PriceTemplate/pull/85"}, tech: ["HTML", "CSS", "JAVASCRIPT"] },
        { id: 1, title: "Paryavarn", github: "https://github.com/abel-otegbola/Paryavarn", live: "#", decription: "A platform for calculating tree cover on specific locations and detecting live locations", pull: {title: "Responsiveness of the layout fixed", link: "https://github.com/SuperContributors/Paryavarn/pull/3"}, tech: ["CSS", "REACT", "NODEJS"] },
    ]

    return (
        <div className="py-4">
            <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full" id="contract-projects">Contract Projects</h3>
            {
                contracts.map(project => (
                    <div key={project.id} className="my-10">
                        <Link href={`/project/${project.title.toLowerCase()}`}><a><Image src={project.img} alt={project.title} className="rounded-lg" width={700} height={300} /></a></Link>
                        <div className="p-2">
                            <h1 className="text-xl font-semibold py-4"><Link href={`/project/${project.title.toLowerCase()}`}><a>{project.title}</a></Link></h1>
                            <p className="leading-[30px]">{project.summary}...<Link href={`/project/${project.title.toLowerCase()}`} ><a className="text-fuchsia-300 hover:text-fuchsia-600">View more</a></Link></p>
                            <div className="flex flex-wrap gap-4 py-4 text-[10px]">
                                {
                                    project.tech.map((skill, i) => (
                                        <span key={i} className="p-2 px-6 rounded-[30px] bg-fuchsia-500/[0.3]">{skill}</span>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
            
            <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full" id="contract-projects">Opensource Contributions</h3>
            {
                opensource.map(project => (
                    <div key={project.id} className="my-10">
                        <div className="p-2 px-4 pb-6 rounded shadow-lg border border-slate-300/[0.1]">
                            <h1 className="py-4 hover:text-fuchsia-500"><Link href={`/project/${project.title.toLowerCase()}`}><a className="text-xl font-semibold">{project.title}</a></Link></h1>
                            <p className="leading-[30px]">{project.decription}</p>
                            <div className="flex items-center gap-6">
                                <p className="flex items-center py-4 hover:text-fuchsia-500"><BiGitPullRequest className="mr-2 text-fuchsia-600"/><Link href={project.pull.link}><a className="text-[10px]">{project.pull.title}</a></Link></p>
                                <p className="flex items-center py-4 hover:text-fuchsia-500"><FaGithub className="mr-2 text-green-600"/><Link href={project.github}><a className="text-[10px]">Github</a></Link></p>
                                <p className="flex items-center py-4 hover:text-fuchsia-500"><FaLink className="mr-2 text-red-600"/><Link href={project.live}><a className="text-[10px]">Live</a></Link></p>
                            </div>
                            <div className="flex flex-wrap gap-4 py-4 text-[10px]">
                                {
                                    project.tech.map((skill, i) => (
                                        <span key={i} className="p-[2px] px-4 border border-fuchsia-300/[0.4] rounded-[30px] bg-fuchsia-500/[0.3]">{skill}</span>
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