const SkillsList = ({ skills, heading }) => {
    return (
        <>
        <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full">{heading}</h3>
        <div className="flex flex-wrap gap-4 py-4 text-sm">
            {
                skills.map((skill, i) => (
                    <span key={i} className="p-1 px-4 text-md text-white rounded-[30px] bg-primary" data-aos="fade-right" data-aos-delay={100 * i}>{skill}</span>
            ))
            }
        </div>
        </>
    )
}

export default SkillsList;