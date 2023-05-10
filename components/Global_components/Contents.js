import { FaSmileWink } from "react-icons/fa"
import CustomForm from "../Form_component/CustomForm"
import Projects from "./Projects"

const Contents = () => {
    const FrontendSkills = [ "HTML", "CSS", "JAVASCRIPT", "REACT JS", "NEXT JS", "BOOTSTRAP-CSS", "TAILWIND-CSS", "CHAKRA-UI", "MUI", "JQUERY" ]
    const BackendSkills = [ "NODE JS", "EXPRESS JS", "MONGODB", "MYSQL", "FIREBASE" ]
    const DesignSkills = [ "USER RESEARCH", "USER INTERFACE", "FIGMA", "ADOBE XD", "PHOTOSHOP" ]

    return (
        <div className="lg:p-16 p-4 lg:mt-6 lg:ml-6 lg:w-2/3 bg-gray-800/[0.2]">

            {/* ABOUT SECTION */}
            <h2 className="font-semibold text-2xl pb-6 underline decoration-fuchsia-300 underline-offset-8" id="about">ABOUT</h2>
            <p className="py-4 leading-[30px]">Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. <br /> Fast-forward to today, and I've had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation. My main focus these days is building products and leading projects for our clients at Upstatement. <br/> In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API. When I'm not at the computer, I'm usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching forKorok seeds K o r o k s e e d s </p>

            <hr className="mt-10 opacity-[0.5]" />

            
            {/* SKILLS SECTION */}
            <h2 className="font-semibold text-2xl pb-6 pt-24 underline decoration-fuchsia-300 underline-offset-8" id="skills">SKILLS</h2>
            <div className="py-4">

                {/* Frontend skills list */}
                <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full">Frontend Development</h3>
                <div className="flex flex-wrap gap-4 py-4 text-sm">
                    {
                        FrontendSkills.map((skill, i) => (
                            <span key={i} className="p-2 px-6 rounded-[30px] bg-fuchsia-500/[0.3]">{skill}</span>
                    ))
                    }
                </div>

                {/* Backend skills list */}
                <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full mt-6">Backend Development</h3>
                <div className="flex flex-wrap gap-4 py-4 text-sm">
                    {
                        BackendSkills.map((skill, i) => (
                            <span key={i} className="p-2 px-6 rounded-[30px] bg-fuchsia-500/[0.3]">{skill}</span>
                    ))
                    }
                </div>

                {/* UI Design skills list */}
                <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full mt-6">UI/UX Design</h3>
                <div className="flex flex-wrap gap-4 py-4 text-sm">
                    {
                        DesignSkills.map((skill, i) => (
                            <span key={i} className="p-2 px-6 rounded-[30px] bg-fuchsia-500/[0.3]">{skill}</span>
                    ))
                    }
                </div>

            </div>

            <hr className="mt-10 opacity-[0.5]" />

            {/* PORTFOLIO SECTION */}
            <h2 className="font-semibold text-2xl pb-6 pt-24 underline decoration-fuchsia-300 underline-offset-8">PORTFOLIO</h2>
            <Projects />

            <hr className="mt-10 opacity-[0.5]" />


            {/* CONTACT SECTION */}
            <h2 className="font-semibold text-2xl pb-6 pt-24 underline decoration-fuchsia-300 underline-offset-8" id="contact">CONTACT ME</h2>
            <p className="py-4 leading-[30px]">Don't be a stranger, Message me now to connect, collaborate, network or hire me for a new web project <FaSmileWink className="text-orange-500 text-xl mt-2"/> </p>
            <CustomForm />
            
        </div>
    )
}

export default Contents;