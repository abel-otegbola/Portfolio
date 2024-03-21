import SkillsList from "./skillsList/skillsList"

const Skills = () => {
    const FrontendSkills = [ "HTML", "CSS", "Javascript", "React Js", "Next Js", "Bootstrap-CSS", "Tailwind-CSS", "Chakra-UI", "MUI", "Jquery" ]
    const BackendSkills = [ "Node Js", "Express Js", "MongoDB", "MYSQL", "Firebase" ]

    return (
        <div className="py-4">

            {/* Frontend skills list */}
            <SkillsList heading={"Frontend Development"} skills={FrontendSkills} />

            {/* Backend skills list */}
            <SkillsList heading={"Backend Development"} skills={BackendSkills} />

        </div>
    )
}

export default Skills;