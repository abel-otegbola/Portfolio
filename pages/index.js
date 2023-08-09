import Projects from "../components/Projects";
import Header from "../components/header/Header";
import Skills from "../components/Skills";
import ContactForm from "../components/contactForm/contactForm";

export default function Home() {
  return (
      <main className="">
        <Header />

        <hr className="my-10 opacity-[0.1]" />
        
          {/* ABOUT SECTION */}
          {/* <section className="flex p-[5%]">
          <h2
            className="md:w-[50%] font-semibold text-3xl p-[3%]"
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
          </section> */}


          {/* SKILLS SECTION */}
          {/* <h2
            className="text-primary font-semibold text-xl pb-6 pt-[50px]"
            id="skills"
          >
            SKILLS
          </h2>
          <Skills />

          <hr className="mt-10 opacity-[0.5]" /> */}

          <section id="portfolio" className="md:px-[7%] px-[5%] md:py-[10%] py-[40px] bg-gray-100/[0.03]">
            {/* PORTFOLIO SECTION */}
            <h2 className="font-semibold md:text-4xl text-3xl border border-transparent border-b-gray-100/[0.08] pb-6">Portfolio</h2>
            <Projects />
          </section>

          <hr className="mt-10 opacity-[0.1]" />

          <section id="contacts" className="md:px-[7%] px-0 md:py-[10%] py-[40px] ">
          {/* CONTACT SECTION */}
            <h2
              className="text-primary font-semibold dark:text-slate-200 md:text-4xl text-3xl border border-transparent border-b-gray-100/[0.08] pb-6 md:px-0 px-[5%]"
              id="contact"
            >
              Contact me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 ">
                
                <div className="p-[5%] md:py-[5%] py-[40px] bg-gray-100/[0.03]">
                  <p className="py-4 leading-[30px]">
                    Don&apos;t be a stranger, Message me now to connect, collaborate,
                    network or hire me for a new web project{" "}
                  </p>
                  <ContactForm />
                </div>
            </div>
          </section>
      </main>
  );
}
