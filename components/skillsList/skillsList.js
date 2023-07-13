const SkillsList = ({ skills, heading }) => {
  return (
    <>
      <h3 className="font-semibold pb-2 underline underline-offset-8 decoration-1 decoration-gray-700/[0.3] w-full">
        {heading}
      </h3>
      <div data-testid="skills" className="flex flex-wrap gap-4 mb-6 py-4 text-sm">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="p-2 px-4 text-[12px] lowercase text-white rounded-[30px] bg-primary/[0.1]"
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
};

export default SkillsList;
