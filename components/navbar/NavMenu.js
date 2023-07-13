import { useRouter } from "next/router";
import { useState } from "react";
import { FaBriefcase, FaGithub, FaHandHolding, FaLightbulb, FaMedal } from "react-icons/fa";

const NavMenu = ({ setOpen }) => {
    const [active, setActive] = useState("ABOUT")
    const [activeProject, setActiveProject] = useState("CONTRACT PROJECTS")
    const router = useRouter();

    const projects = [
        { title:  "CONTRACT PROJECTS", icon: <FaBriefcase /> },
        { title:  "SIDE PROJECTS", icon: <FaLightbulb /> },
        { title:  "OPEN SOURCE CONTRIBUTIONS", icon: <FaGithub /> },
        { title:  "VOLUNTEER PROJECTS", icon: <FaHandHolding /> },
        { title:  "HACKATHONS PROJECTS", icon: <FaMedal /> },
    ]

    const navigate = (link) => {
        setActive(link)
        router.push(`#${link.toLowerCase()}`)
        if(link !== "PORTFOLIO") {
            setOpen(false)
        }
    }    
    
    const navigateProjects = (link) => {
        setActiveProject(link)
        router.push(`#${link.replaceAll(" ", "-").toLowerCase()}`)
        setOpen(false)
    }

    return (
        <ul role="menu" className="py-16 text-sm font-semibold">
            {
                ["ABOUT",  "SKILLS", "PORTFOLIO", "CONTACT"].map((item, i) => (
                    <div key={i} >
                    <li className={`py-3 flex items-center hover:text-primary cursor-pointer transition-transform duration-700 ${active === item ? "text-primary": ""}`} onClick={() => navigate(item)} >
                        <span className={`mr-4 rounded hover:bg-primary bg-gray-400 transition-all duration-700 ${active === item ? "w-[50px] h-[2px] opacity-[1] bg-primary" : "w-[30px] h-[1px] opacity-[0.4] bg-gray-700 dark:bg-white"}`}></span>
                        {item}
                    </li>
                    {
                        item === "PORTFOLIO" ?
                        <ul className={`bg-gray-800/[0.3] overflow-hidden transition-all duration-700 ${active === "PORTFOLIO" ? "h-[195px] my-4" : "h-[0px] my-0"}`}>
                            {
                                projects.map((project, index) => (
                                    <li key={index} className={`py-4 px-[15px] text-xs flex hover:text-primary cursor-pointer ${activeProject === project.title ? "text-primary bg-gray-100/[0.05]": ""}`} onClick={() => navigateProjects(project.title)}>
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
    )
}

export default NavMenu;