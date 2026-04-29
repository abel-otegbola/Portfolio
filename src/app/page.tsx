'use client'
import Button from "@/components/button/button";
import "animate.css/animate.compat.css"
import ContactForm from "@/components/contactForm/form";
import { projects } from "@/data/projects";
import Projectcard from "@/components/projectCard/projectCard";
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image";
import { Briefcase, Envelope, Laptop, UserCheck } from "@phosphor-icons/react";
import AnimateText from "@/components/animations/animateText";
import Animate from "@/components/animations/animate";

export default function Home() {

  return (
    <div>
      <div className="w-full">
        <header className="grid md:grid-cols-2 gap-8 xl:px-[15%] lg:px-[10%] md:px-[10%] md:pt-[80px] py-[40px] px-4 md:flex-nowrap min-h-[55vh] flex-wrap overflow-hidden bg-cover bg-top">
          <div className="flex flex-col md:text-start text-center gap-4">
              <div className="flex flex-col w-full gap-6 backdrop-blur-lg mt-6"> 
                <p className="uppercase md:text-[96px] text-[64px] font-semibold">
                  <AnimateText speed={100}>
                  Hello!
                  </AnimateText>
                </p>

              
            </div>
          </div>
          <div className="flex flex-col md:items-start items-center md:text-start text-center gap-4">
            <p className="flex gap-2 items-center justify-center font-semibold">
              <AnimateText speed={30}>
                Design + Development
              </AnimateText>
            </p>   
            <p className="opacity-[0.7] text-sm ">
              <AnimateText speed={15}>
                I’m Abel Otegbola, a multidisciplinary designer and developer with 5+ years of experience building products and digital experiences for startups and modern businesses.
              </AnimateText>
            </p> 
            <Animate type="slideDown">
              <Button href="#contact" className="">Connect with me</Button>
            </Animate>
          </div>
        </header>

      </div>

      <section className="overflow-hidden">
        {/* Infinite slider: duplicate the items for seamless scroll */}
        {/* <div className="projects-slider">
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
        </div> */}
      </section>

      {/* What I Do Section */}
      <section className="py-[60px] bg-gray-100/[0.5] dark:bg-black/80">
        <div className="flex flex-col items-center gap-2 xl:px-[15%] lg:px-[10%] md:px-[10%] px-4">
          <Animate type="slideDown">
            <p className="flex items-center text-[14px] gap-2 px-4 py-2 bg-gray-500/[0.08] rounded w-fit">
              <Laptop weight="duotone"/>
              What I Do
            </p>
          </Animate>
          <Animate type="blurIn">
            <p className="font-medium text-lg text-center mb-6">I provide the best service according to your project needs</p>
          </Animate>
          
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {
              [
                {
                  title: "MVP Design & Development",
                  description: "Transforming startup ideas into scalable MVPs, from strategy and design to launch-ready products.",
                  bg: "#A579FF80"
                },
                {
                  title: "Product & UI/UX Design",
                  description: "Designing intuitive, modern, and user-focused experiences that balance usability and business goals."
                },
                {
                  title: "Frontend Engineering",
                  description: "Building fast, responsive, and scalable web applications with React, Next.js, and modern technologies."
                },
                {
                  title: "SaaS & Custom Web Applications",
                  description: "Developing custom platforms, dashboards, and SaaS products tailored to startup and business needs."
                }
              ].map((service, index) => (
                <div  key={service.title} className={`flex flex-col gap-4 border border-gray-500/30 rounded p-6 dark:bg-black/80 backdrop-blur-xs bg-white dark:bg-black`} style={{ background: service.bg }}>
                <Animate type="slideDown">
                  <h3 className="text-[32px] font-bold mb-3 opacity-[0.2]">{index + 1}/4</h3>
                  <div className="flex flex-col gap-2 justify-between flex-1">
                    <p className="text-medium">{service.title}</p>
                    <p className="opacity-[0.7] text-sm">
                      {service.description}
                    </p>
                  </div>
                </Animate>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section id="projects" className="">
        <div className="mt-[60px] flex flex-col items-center gap-2 xl:px-[15%] lg:px-[10%] md:px-[10%] px-4">
          <Animate type="slideDown">
            <p className="flex items-center text-[14px] gap-2 px-4 py-2 bg-gray-500/[0.08] rounded w-fit">
              <Briefcase weight="duotone"/>
              My Works
            </p>
          </Animate>
          <Animate type="blurIn">
            <p className="font-medium text-lg text-center mb-6">Here are some of my recent works</p>
          </Animate>
          {
            projects.slice(0,12)?.map(project => (
              <Animate type="blurIn"  key={project.id}>
                <Projectcard project={project} />
              </Animate>
            ))
          }
        </div>
      </section>

      
      <section className="py-[60px] flex flex-col gap-4 dark:bg-black/80 bg-gray-100/[0.5] mt-[40px]">
        <div className="xl:px-[15%] lg:px-[10%] md:px-[10%] px-4 flex flex-col items-center gap-2">
          <Animate type="slideDown">
            <p className="flex items-center text-[14px] gap-2 px-4 py-2 bg-gray-500/[0.08] rounded w-fit">
              <UserCheck weight="duotone"/>
              Client Testimonials
            </p>
          </Animate>
          <Animate type="blurIn">
            <p className="font-medium text-lg text-center mb-4">Don't take my word?, Hear from my previous clients</p>
          </Animate>
          <div className="grid md:grid-cols-2 gap-4">
            {
              [
                { title: "Abel is a true professional. He had in-depth knowledge in what he was doing. I loved how he finished it fast with accuracy.", description: "Ashish B Singh, CEO Nepalbestdeals" },
                { title: "Working with him on ptrlstudios.com was smooth. The website is clean, minimal, and functional. Mobile and checkout work well, and overall it gives a professional shopping experience", description: "CEO PTRL Studios" }
              ].map((service) => (
                <div key={service.title} className={`flex flex-col gap-4 border border-gray-500/10 p-6 backdrop-blur-xs`}>
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

      <section id="contact" className="flex flex-col gap-6 py-[60px] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-center gap-4 text-[12px] xl:px-[15%] lg:px-[10%] md:px-[10%] px-4">
          <Animate type="slideDown">
            <p className="flex items-center text-[14px] gap-2 px-4 py-2 bg-gray-500/[0.08] rounded w-fit">
              <Envelope weight="duotone"/>
              Contact me
            </p>
          </Animate>
          <Animate type="blurIn">
            <p className="font-medium text-lg text-center">Let&apos;s Build Something Great Together</p>
          </Animate>
        </div>
        <div className="">
          <iframe src="https://cal.com/abel-otegbola/30min?overlayCalendar=true" width={"100%"} height={480} className="w-full md:scale-[0.70]" ></iframe>
        </div>
        <div className="xl:px-[25%] lg:px-[20%] md:px-[15%] px-4 bg-white dark:bg-black/80">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
