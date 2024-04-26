const Skills = () => {
    const FrontendSkills = [ "HTML", "CSS", "Javascript", "React Js", "Next Js", "Bootstrap-CSS", "Tailwind-CSS", "Chakra-UI", "MUI", "Jquery" ]
    const BackendSkills = [ "Node Js", "Express Js", "MongoDB", "MYSQL", "Firebase" ]

    return (
        <div className="py-4">
            <h3 className="pb-2 decoration-1 decoration-gray-700/[0.3] w-full" data-aos="fade-down">
                Frontend Development
            </h3>
            <div data-testid="skills" className="flex flex-wrap gap-4 mb-6 py-4 text-sm" data-aos="fade-up">
                {
                    FrontendSkills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 border border-gray-500/[0.2] Capitalize rounded">{skill}</span>
                    ))
                }
            </div>

            <h3 className="pb-2 decoration-1 decoration-gray-700/[0.3] w-full" data-aos="fade-down">
                Backend Development
            </h3>
            <div data-testid="skills" className="flex flex-wrap gap-4 mb-6 py-4 text-sm" data-aos="fade-up">
                {
                    BackendSkills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 border border-gray-500/[0.2] Capitalize rounded">{skill}</span>
                    ))
                }
            </div>

        </div>
    )
}

export default Skills;