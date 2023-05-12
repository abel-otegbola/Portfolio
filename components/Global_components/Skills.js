const Skills = () => {
    const FrontendSkills = [ "HTML", "CSS", "JAVASCRIPT", "REACT JS", "NEXT JS", "BOOTSTRAP-CSS", "TAILWIND-CSS", "CHAKRA-UI", "MUI", "JQUERY" ]
    const BackendSkills = [ "NODE JS", "EXPRESS JS", "MONGODB", "MYSQL", "FIREBASE" ]
    const DesignSkills = [ "USER RESEARCH", "USER INTERFACE", "FIGMA", "ADOBE XD", "PHOTOSHOP" ]

    return (
        <div className="py-4">

            {/* Frontend skills list */}
            <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full">Frontend Development</h3>
            <div className="flex flex-wrap gap-4 py-4 text-sm">
                {
                    FrontendSkills.map((skill, i) => (
                        <span key={i} className="p-2 px-6 rounded-[30px] bg-fuchsia-500/[0.3]" data-aos="fade-right" data-aos-delay={100 * i}>{skill}</span>
                ))
                }
            </div>

            {/* Backend skills list */}
            <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full mt-6">Backend Development</h3>
            <div className="flex flex-wrap gap-4 py-4 text-sm">
                {
                    BackendSkills.map((skill, i) => (
                        <span key={i} className="p-2 px-6 rounded-[30px] bg-fuchsia-500/[0.3]" data-aos="fade-right" data-aos-delay={100 * i}>{skill}</span>
                ))
                }
            </div>

            {/* UI Design skills list */}
            <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full mt-6">UI/UX Design</h3>
            <div className="flex flex-wrap gap-4 py-4 text-sm">
                {
                    DesignSkills.map((skill, i) => (
                        <span key={i} className="p-2 px-6 rounded-[30px] bg-fuchsia-500/[0.3]" data-aos="fade-right" data-aos-delay={100 * i}>{skill}</span>
                ))
                }
            </div>

        </div>
    )
}

export default Skills;