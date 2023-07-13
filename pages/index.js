import Projects from "../components/Projects";
import Sidebar from "../components/sidebar/Sidebar";
import Skills from "../components/Skills";
import ContactForm from "../components/contactForm/contactForm";

export default function Home() {
  return (
    <>
      <div className="lg:px-[10%] px-4 flex lg:flex-nowrap flex-wrap">
        <Sidebar />

        <div className="lg:p-16 p-2 lg:mt-6 lg:ml-6 lg:w-2/3 md:bg-black/[0.1] overflow-hidden">
          {/* ABOUT SECTION */}
          <h2
            className="text-primary font-semibold text-xl pt-4 pb-6"
            id="about"
          >
            ABOUT
          </h2>
          <p
            className="py-4 rounded leading-[30px]"
          >
            In 2020, I made the deliberate decision to delve into the world of
            coding and web development, with the ambitious aim of creating and
            replicating awesome websites such as facebook, twitter. This
            endeavor led me down into the rabbit hole of coding and web
            development. <br /> Fast-forwarding to present, I have had the
            privilege of building software for an advertising agency, a
            start-up, a blog, and a huge corporation. My main focus these days
            is building products and leading projects for clients.
          </p>

          <hr className="mt-10 opacity-[0.5]" />

          {/* SKILLS SECTION */}
          <h2
            className="text-primary font-semibold text-xl pb-6 pt-[50px]"
            id="skills"
          >
            SKILLS
          </h2>
          <Skills />

          <hr className="mt-10 opacity-[0.5]" />

          {/* PORTFOLIO SECTION */}
          <h2
            className="text-primary font-semibold text-xl pb-6 pt-[50px]"
          >
            PORTFOLIO
          </h2>
          <Projects />

          <hr className="mt-10 opacity-[0.5]" />

          {/* CONTACT SECTION */}
          <h2
            className="text-primary font-semibold text-xl pb-6 pt-[50px]"
            id="contact"
          >
            CONTACT ME
          </h2>
          <p className="py-4 leading-[30px]">
            Don&apos;t be a stranger, Message me now to connect, collaborate,
            network or hire me for a new web project{" "}
          </p>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
