import SkillsList from "./skillsList/skillsList"

const Skills = () => {
    const FrontendSkills = [ "HTML", "CSS", "JAVASCRIPT", "REACT JS", "NEXT JS", "BOOTSTRAP-CSS", "TAILWIND-CSS", "CHAKRA-UI", "MUI", "JQUERY" ]
    const BackendSkills = [ "NODE JS", "EXPRESS JS", "MONGODB", "MYSQL", "FIREBASE" ]
    const DesignSkills = [ "USER RESEARCH", "USER INTERFACE", "FIGMA", "ADOBE XD", "PHOTOSHOP" ]

    return (
        <div className="py-4">

            {/* Frontend skills list */}
            <SkillsList heading={"Frontend Development"} skills={FrontendSkills} />

            {/* Backend skills list */}
            <SkillsList heading={"Backend Development"} skills={BackendSkills} />
            

            {/* UI Design skills list */}
            <SkillsList heading={"UI Design"} skills={DesignSkills} />

        </div>
    )
}

export default Skills;