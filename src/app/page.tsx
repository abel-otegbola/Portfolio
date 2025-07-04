'use client'
import Button from "@/components/button/button";
import Image from "next/image";
import "animate.css/animate.compat.css"
import { ArrowUpRight, File, Phone } from "@phosphor-icons/react";
import ContactForm from "@/components/contactForm/form";
import { projects } from "@/data/projects";
import Projectcard from "@/components/projectCard/projectCard";
import AnimateText from "@/components/animations/animateText";
import Animate from "@/components/animations/animate";
import { useState } from "react";
import BOSLogo from "@/assets/bos-logo";

export default function Home() {
  const [selectedContact, setSelectedContact] = useState("Book a call")

  return (
    <div>
      <div className="w-full">
        <header className="flex flex-col w-full items-center md:flex-nowrap min-h-[85vh] flex-wrap lg:px-[20%] md:px-[10%] px-4 overflow-hidden">
          <div className="flex flex-col gap-4 py-12 md:w-[100%]">
            
            <AnimateText animateOnce={true} className="md:text-[36px] sm:text-[32px] text-[24px] leading-[120%] font-bold">
              Turning Ideas into Pixel-Perfect Digital Experiences
            </AnimateText>
            
            <AnimateText animateOnce={true} speed={10} className="opacity-[0.9]">
              I&apos;m Abel, a designer and developer working remotely from Nigeria. I specialize in crafting clean, user-focused digital products, from websites and web apps to intuitive interfaces and brand experiences.
            </AnimateText>
            
            <AnimateText animateOnce={true} speed={10} className="opacity-[0.9]">
              Over the years, I&apos;ve had the privilege of collaborating with startups, remote agencies, and creative teams to bring ideas to life online. Whether it&apos;s refining a marketing site or designing a product UI from the ground up, I&apos;m passionate about creating designs that are beautiful and functional.
            </AnimateText>
            
            <div className="flex gap-[70px] items-center my-4">
              <div className="flex gap-2 items-center w-[100px] uppercase text-[12px]">
                <AnimateText animateOnce={true} className="text-[20px] font-bold p-4 py-2 rounded-full border border-gray-500/[0.2]">
                  4
                </AnimateText>
                
                <AnimateText animateOnce={true}>years experience</AnimateText>
              </div>
              <div className="flex gap-2 items-center w-[220px] uppercase text-[12px]">
                <AnimateText animateOnce={true} className="text-[20px] font-bold p-3 py-2 rounded-full border border-gray-500/[0.2]">20</AnimateText>
                
                <AnimateText animateOnce={true}>Awesome Projects Completed</AnimateText>
              </div>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Animate>
                <Button href="#contacts" className="font-medium pl-1 py-[4px] pr-5 rounded-[30px] dark:bg-gray-500/[0.5]">
                  <span className="rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center text-black"><Phone weight="bold" size={16} /></span>
                  Book a call or send a message
                </Button>
              </Animate>
              <Animate>
                <Button href="https://drive.google.com/file/d/1A8Z-h_qobLQESzUxzyoIR6ouuey_GyFM/view?usp=sharing" className="font-medium pl-1 py-[4px] pr-5 rounded-[30px] bg-primary">
                  <span className="rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center text-black"><File weight="bold" size={16} /></span>
                  Resume
                </Button>
              </Animate>
            </div>

          </div>
        </header>
      </div>

      
      <section className="lg:px-[20%] md:px-[10%] p-4 bg-white dark:bg-[#000]">
          <p className="font-bold uppercase text-[18px] mb-4">My Experience</p>
          <p className="font-medium">Explore My Design and Development Journey</p>

          <div className=" gap-6 mt-[50px]">
            <div className="flex flex-col gap-3 md:py-8 py-4 break-inside-avoid border-y border-gray-500/[0.2]">
              <Image
                src={"/hubstack.png"}
                alt={"hubstack"}
                width={30}
                height={30}
              />
              <p className="text-md font-bold">Frontend Developer, Fortbridge</p>
              <p className="">At FortBridge, my role was to design and develop responsive, user-centric interfaces that translated complex functionality into seamless digital experiences. I focused on crafting clean, maintainable frontends that aligned with both product goals and brand standards, ensuring consistency and clarity across all user touchpoints.</p>
              
              <p className="text-[12px] mb-4">June 2024 - Present</p>

              <div className="grid grid-cols-3 gap-4">
                
              {
                ["/hubstack-1.webp","/hubstack-2.webp","/hubstack-3.webp" ].map(image => (
                  <Image
                    key={image}
                    src={"/images" + image}
                    alt={image}
                    width={900}
                    height={1800}
                  />
                ))
              }
              </div>
            </div>

            <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 md:py-8 py-4 break-inside-avoid border-y border-gray-500/[0.2]">
                <BOSLogo width={40} height={40} />
                <p className="text-md font-bold">Full-stack Developer, BOS Unlimited</p>
                <p>I contributed to the development and maintenance of a scalable, high-performing e-commerce platform as a fullstack developer. Working across both frontend and backend systems, I helped bring fashion-focused digital experiences to life.</p>
                <p className="text-[10px]">January 2024 - June 2024</p>
                <Image
                    src={'/images/Bos.webp'}
                    alt={'bos'}
                    width={1000}
                    height={373}
                  />
              </div>
            </div>

          </div>
      </section>

      <section className="p-4 pb-10">

        <AnimateText animateOnce={true} className="font-bold md:text-center uppercase text-[18px]">Recent Projects</AnimateText>
        <div className="sm:columns-2 items-stretch gap-4 mt-10">
          {
            projects.slice(0,12)?.map(project => (
              <Projectcard key={project.id} project={project} />
            ))
          }
        </div>
      </section>

      
      <section className="lg:px-[20%] md:px-[10%] py-[60px] p-4 pb-10 flex flex-col md:items-center gap-4">
        <p className="font-bold md:text-center md:text-[28px] text-[18px]">Optimization, Redesign and Conversion</p>
        <p className="md:text-center font-medium">He had in-depth knowledge in what he was doing. I loved how he finished it fast with accuracy</p>
        
        <Animate>
          <Button href="#contacts" className="font-medium pl-1 py-[4px] pr-8 rounded-[30px] text-center">
            <ArrowUpRight size={32} className="p-2 rounded-full bg-white text-black" />
            Ashish B Singh, CEO Nepalbestdeals
          </Button>
        </Animate>

      </section>

      <section className="flex flex-col gap-6 lg:px-[20%] md:px-[10%] py-[60px] p-4 bg-cover bg-center bg-no-repeat bg-gray-100/[0.2] dark:bg-[#EEE3E3]/[0.06]">
        <div className="flex flex-col md:items-center md:justify-center gap-4">
          <h1 className="font-bold md:text-center uppercase text-[18px]">Contact me</h1>
          <p className="font-medium md:text-center">I’m keen to learn more about what your company does, and specific details about the project. The more information you can provide, the better!</p>
          <div className="md:flex grid grid-cols-2 gap-1 items-center border border-black p-1 rounded-full">
          {
            ["Book a call", "Send a message"].map(contact => (
              <Button key={contact} onClick={() => setSelectedContact(contact)} className={selectedContact === contact ? "bg-[#000] border border-gray-500/[0.3] w-full min-w-[180px]" : "bg-transparent border border-gray-500/[0.2] w-full min-w-[180px]"}>
                <span className={selectedContact === contact ? "" : "dark:text-white/[0.5] text-black/[0.8]"}>{contact}</span>
              </Button>
            ))
          }
          </div>
        </div>
        <div>
          {
            selectedContact === "Book a call" ?
            <iframe src="https://cal.com/abel-otegbola/30min?overlayCalendar=true" width={"100%"} height={500} className="w-full" ></iframe>
            :
          <ContactForm />
          }
        </div>
      </section>
    </div>
  );
}
