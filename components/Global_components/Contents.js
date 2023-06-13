import CustomForm from "../Form_component/CustomForm"
import Projects from "./Projects"
import Skills from "./Skills";

const Contents = () => {

    return (
        <div className="lg:p-16 p-2 lg:mt-6 lg:ml-6 lg:w-2/3 md:dark:bg-black/[0.1] md:bg-gray-300/[0.2] overflow-hidden">

            {/* ABOUT SECTION */}
            <h2 className="text-primary font-semibold text-xl p-4 pb-6" id="about" data-aos="fade-right">ABOUT</h2>
            <p className="py-4 px-6 bg-gray-300/[0.3] dark:bg-slate-300/[0.03] rounded leading-[30px]" data-aos="fade-left">In 2020, I made the deliberate decision to delve into the world of coding and web development, with the ambitious aim of creating and replicating awesome websites such as facebook, twitter. This endeavor led me down into the rabbit hole of coding and web development. <br /> Fast-forwarding to present, I have had the privilege of building software for an advertising agency, a start-up, a blog, and a huge corporation. My main focus these days is building products and leading projects for clients.</p>

            <hr className="mt-10 opacity-[0.5]" />

            
            {/* SKILLS SECTION */}
            <h2 className="text-primary font-semibold text-xl p-4 pb-6 pt-26" id="skills" data-aos="fade-right">SKILLS</h2>
            <Skills />

            <hr className="mt-10 opacity-[0.5]" />

            {/* PORTFOLIO SECTION */}
            <h2 className="text-primary font-semibold text-xl p-4 pb-6 pt-26" data-aos="fade-right">PORTFOLIO</h2>
            <Projects />

            <hr className="mt-10 opacity-[0.5]" />


            {/* CONTACT SECTION */}
            <h2 className="text-primary font-semibold text-xl p-4 pb-6 pt-26" id="contact" data-aos="fade-right">CONTACT ME</h2>
            <p className="py-4 leading-[30px]" data-aos="fade-left">Don&apos;t be a stranger, Message me now to connect, collaborate, network or hire me for a new web project </p>
            <CustomForm />
            
        </div>
    )
}

export default Contents;