import Button from "../button/button"

const SkillsList = ({ skills, heading }) => {
  return (
    <>
      <h3 className="pb-2 decoration-1 decoration-gray-700/[0.3] w-full" data-aos="fade-down">
        {heading}
      </h3>
      <div data-testid="skills" className="flex flex-wrap gap-4 mb-6 py-4 text-sm" data-aos="fade-up">
        {skills.map((skill, i) => (
          <span key={i} className="px-3 py-1 border border-gray-500/[0.2] Capitalize rounded">{skill}</span>
        ))}
      </div>
    </>
  );
};

export default SkillsList;
