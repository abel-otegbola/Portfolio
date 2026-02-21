'use client'
import Button from "@/components/button/button";
import "animate.css/animate.compat.css"
import ContactForm from "@/components/contactForm/form";
import { projects } from "@/data/projects";
import Projectcard from "@/components/projectCard/projectCard";
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image";

export default function Home() {

  return (
    <div>
      <div className="w-full">
        <header className="flex md:flex-row gap-8 flex-col xl:px-[15%] lg:px-[10%] md:px-[10%] md:py-[80px] py-[40px] px-4 md:flex-nowrap min-h-[65vh] flex-wrap overflow-hidden bg-cover bg-top">
          <div className="flex flex-col md:w-[50%] w-full md:order-1 order-2">
            <div className="relative overflow-hidden">
              <div className="flex flex-col w-full gap-6 backdrop-blur-lg mt-6">
                <p className="flex gap-2 items-center uppercase text-sm">
                   Design + Development
                </p>     
                <p className="md:text-[72px] sm:text-[58px] text-[36px] leading-[110%] font-semibold bg-gradient-to-r to-[#999] from-black dark:from-white bg-clip-text text-transparent">
                  Abel Otegbola
                </p>
                <p>
                  Hello! I&apos;m Abel Otegbola, a multidisciplinary builder, based in Nigeria with 4+ years of experience blending design and development.
                </p>
                <div className="relative overflow-hidden">

                  <div className="flex gap-1 flex-wrap gap-2 backdrop-blur-sm">
                      <Button href="#contact" className="">
                        Connect with me
                      </Button>
                  </div>
                </div>
                 {/* <div className="flex flex-col w-full gap-2 opacity-[0.8]">                  
                  <p className="flex gap-2 items-center">
                    <PhoneIncoming /> +234 706 0989 331
                  </p>              
                  <p className="flex gap-2 items-center">
                    <Envelope /> Abel.d.otegbola@gmail.com
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="relative md:w-[50%] flex md:items-center md:justify-center w-full h-full rounded-full block grayscale-[80%] md:order-2 order-1">
            <Image src={"/images/memoji.svg"} alt={"abel"} width={1000} height={1000} className="object-cover md:w-[300px] w-[150px] aspect-square filter"/>
          </div>
        </header>

      </div>

      <section className="overflow-hidden">
        {/* Infinite slider: duplicate the items for seamless scroll */}
        <div className="projects-slider">
          <div className="projects-slider-track">
            {
              // original list duplicated for seamless loop
              (["flashnotes", "crypto-dashboard-ui", "muse-light"] as string[]).concat(["flashnotes", "crypto-dashboard-ui", "muse-light"]).map((project, idx) => (
                <div key={project + "-" + idx} className="projects-slider-item relative overflow-hidden">
                  <div className="relative w-full h-full md:rounded-t-[8px] block">
                    <Image src={"/images/" + project + ".webp"} alt={project} width={1200} height={1000} className="object-cover w-full h-full"/>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-[60px]">
        <div className="flex flex-col gap-8">
          <p className="uppercase font-light text-[12px] xl:px-[15%] lg:px-[10%] md:px-[10%] px-4">What I Do</p>
          
          <div className="xl:px-[15%] lg:px-[10%] md:px-[10%] px-4 grid md:grid-cols-4 grid-cols-2 gap-6">
            {
              [
                { title: "MVP Design & Development", description: "From idea to MVP: design, build, launch.", bg: "#A579FF80" },
                { title: "Product & UI/UX Design", description: "User-focused design from wireframe to prototype." },
                { title: "Frontend Engineering", description: "Modern frontends with React & Next.js." },
                { title: "SaaS & Custom Web Applications", description: "Dashboards, tools, and platforms tailored to you." }
              ].map((service, index) => (
                <div key={service.title} className={`flex flex-col gap-4 border border-dashed border-gray-500/[0.3] p-6 dark:bg-black/[0.8] backdrop-blur-sm`} style={{ background: service.bg }}>
                  <h3 className="text-[32px] font-bold mb-3">{index + 1}/4</h3>
                  <div className="flex flex-col gap-2 justify-between flex-1">
                    <p className="text-medium">{service.title}</p>
                    <p className="opacity-[0.4] text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section id="projects" className="">
        <div className="mt-[60px] grid md:grid-cols-2 gap-6 xl:px-[15%] lg:px-[10%] md:px-[10%] px-4">
          {
            projects.slice(0,12)?.map(project => (
              <Projectcard key={project.id} project={project} />
            ))
          }
        </div>
      </section>

      
      <section className="py-[60px] flex flex-col gap-4">
        <p className="uppercase font-light text-[12px] xl:px-[15%] lg:px-[10%] md:px-[12%] px-4">Client Testimonials</p>
        <div className="xl:px-[15%] lg:px-[10%] md:px-[10%] px-4 grid md:grid-cols-2 grid-cols-1 gap-6">
            {
              [
                { title: "Abel is a true professional. He had in-depth knowledge in what he was doing. I loved how he finished it fast with accuracy.", description: "Ashish B Singh, CEO Nepalbestdeals" },
                { title: "Working with him on ptrlstudios.com was smooth. The website is clean, minimal, and functional. Mobile and checkout work well, and overall it gives a professional shopping experience", description: "CEO PTRL Studios" }
              ].map((service, index) => (
                <div key={service.title} className={`flex flex-col gap-4 border border-dashed border-gray-500/[0.3] p-6 dark:bg-black/[0.8] backdrop-blur-sm`}>
                  <h3 className="text-[32px] font-bold mb-3">{index + 1}/4</h3>
                  <div className="flex flex-col gap-2 justify-between flex-1">
                    <p className="text-medium">{service.title}</p>
                    <p className="opacity-[0.4] text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>

      </section>

      <section id="contact" className="flex flex-col gap-6 py-[60px] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col gap-4">
          <p className="uppercase font-light text-[12px] xl:px-[15%] lg:px-[10%] md:px-[10%] px-4">Let&apos;s Build Something Great Together</p>
        </div>
        <div className="">
          <iframe src="https://cal.com/abel-otegbola/30min?overlayCalendar=true" width={"100%"} height={480} className="w-full md:scale-[0.70]" ></iframe>
        </div>
        <div className="xl:px-[15%] lg:px-[10%] md:px-[10%] px-4 bg-white dark:bg-black/[0.8]">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
