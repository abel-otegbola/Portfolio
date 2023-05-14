import CustomForm from "../Form_component/CustomForm"
import Projects from "./Projects"
import Skills from "./Skills";

const Contents = () => {

    return (
        <div className="lg:p-16 p-4 lg:mt-6 lg:ml-6 lg:w-2/3 bg-gray-800/[0.2] overflow-hidden">

            {/* ABOUT SECTION */}
            <h2 className="text-fuchsia-500 font-semibold text-2xl pb-6 underline decoration-1 decoration-gray-500 underline-offset-8" id="about" data-aos="fade-right">ABOUT</h2>
            <p className="py-4 leading-[30px]" data-aos="fade-left">Back in 2020, I decided to try my hand at creating and replicating awesome websites such as facebook, twitter and tumbled head first into the rabbit hole of coding and web development. <br /> Fast-forward to today, I have had the privilege of building software for an advertising agency, a start-up, a blog, and a huge corporation. My main focus these days is building products and leading projects for clients.</p>

            <hr className="mt-10 opacity-[0.5]" />

            
            {/* SKILLS SECTION */}
            <h2 className="text-fuchsia-500 font-semibold text-2xl pb-6 pt-24 underline decoration-1 decoration-gray-500 underline-offset-8" id="skills" data-aos="fade-right">SKILLS</h2>
            <Skills />

            <hr className="mt-10 opacity-[0.5]" />

            {/* PORTFOLIO SECTION */}
            <h2 className="text-fuchsia-500 font-semibold text-2xl pb-6 pt-24 underline decoration-1 decoration-gray-500 underline-offset-8" data-aos="fade-right">PORTFOLIO</h2>
            <Projects />

            <hr className="mt-10 opacity-[0.5]" />


            {/* CONTACT SECTION */}
            <h2 className="text-fuchsia-500 font-semibold text-2xl pb-6 pt-24 underline decoration-1 decoration-gray-500 underline-offset-8" id="contact" data-aos="fade-right">CONTACT ME</h2>
            <p className="py-4 leading-[30px]" data-aos="fade-left">Don&apos;t be a stranger, Message me now to connect, collaborate, network or hire me for a new web project </p>
            <CustomForm />
            
        </div>
    )
}

export default Contents;