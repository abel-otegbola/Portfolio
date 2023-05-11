import { useState } from "react";
import Link from "next/link";
import { FaBriefcase, FaGithub, FaHandHolding, FaLightbulb, FaLinkedin, FaMedal, FaTwitter } from "react-icons/fa"
import { useRouter } from "next/router";

const Sidebar = () => {
    const [active, setActive] = useState("ABOUT")
    const [activeProject, setActiveProject] = useState("CONTRACT PROJECTS")
    const router = useRouter();

    const projects = [
        { title:  "CONTRACT PROJECTS", icon: <FaBriefcase /> },
        { title:  "SIDE PROJECTS", icon: <FaLightbulb /> },
        { title:  "OPEN SOURCE CONTRIBUTIONS", icon: <FaGithub /> },
        /* { title:  "VOLUNTEER PROJECTS", icon: <FaHandHolding /> },
        { title:  "HACKATHONS PROJECTS", icon: <FaMedal /> }, */
    ]

    const navigate = (link) => {
        setActive(link)
        router.push(`#${link.toLowerCase()}`)
    }    
    
    const navigateProjects = (link) => {
        setActiveProject(link)
        router.push(`#${link.replaceAll(" ", "-").toLowerCase()}`)
    }

    return (
        <div className="lg:sticky lg:top-14 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col justify-center lg:px-0 px-4 py-14">
            <h1 className="text-4xl font-bold text-slate-200 sm:text-5xl">Abel Otegbola</h1>
            <h2 className="font-bold text-xl py-4">Full Stack Website Developer</h2>
            <p className="pt-2">I Build Accessible, Inclusive Products and digital experiences for the web.</p>

            <ul className="py-16 text-sm font-semibold">
                {
                    ["ABOUT",  "SKILLS", "PORTFOLIO", "CONTACT"].map((item, i) => (
                        <div key={i} >
                        <li className={`py-3 flex items-center hover:text-fuchsia-500 cursor-pointer ${active === item ? "text-fuchsia-500": ""}`} onClick={() => navigate(item)}>
                            <span className={`mr-4 rounded hover:bg-fuchsia-500 transition-all duration-700 ${active === item ? "w-[50px] h-[2px] opacity-[1] bg-fuchsia-500" : "w-[30px] h-[1px] opacity-[0.4] bg-white"}`}></span>
                            {item}
                        </li>
                        {
                            item === "PORTFOLIO" ?
                            <ul className={`rounded bg-gray-800/[0.3] overflow-hidden transition-all duration-700 ${active === "PORTFOLIO" ? "h-[175px] my-4" : "h-[0px] my-0"}`}>
                                {
                                    projects.map((project, index) => (
                                        <li key={index} className={`py-3 px-[15px] text-xs flex hover:text-fuchsia-500 cursor-pointer ${activeProject === project.title ? "text-fuchsia-500 bg-gray-700/[0.1]": ""}`} onClick={() => navigateProjects(project.title)}>
                                            <span className="text-sm mr-4">{project.icon}</span>
                                            {project.title}
                                        </li>
                                    ))
                                }
                            </ul>
                            :
                            ""
                        }
                        </div>
                    ))
                }
            </ul>

            <ul className="flex items-center gap-3">
                <Link href="#"><a className="p-3 bg-fuchsia-500/[0.1] rounded-full text-xl"><FaTwitter /></a></Link>
                <Link href="#"><a className="p-3 bg-fuchsia-500/[0.1] rounded-full text-xl"><FaGithub /></a></Link>
                <Link href="#"><a className="p-3 bg-fuchsia-500/[0.1] rounded-full text-xl"><FaLinkedin /></a></Link>
            </ul>
        </div>
    )
}

export default Sidebar;