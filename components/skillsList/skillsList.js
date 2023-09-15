import Button from "../button/button"

const SkillsList = ({ skills, heading }) => {
  return (
    <>
      <h3 className="font-semibold pb-2 underline underline-offset-8 decoration-1 decoration-gray-700/[0.3] w-full" data-aos="fade-down">
        {heading}
      </h3>
      <div data-testid="skills" className="flex flex-wrap gap-4 mb-6 py-4 text-sm" data-aos="fade-up">
        {skills.map((skill, i) => (
          <Button text={skill} key={i} type={"secondary"} to={"#"} />
        ))}
      </div>
    </>
  );
};

export default SkillsList;
