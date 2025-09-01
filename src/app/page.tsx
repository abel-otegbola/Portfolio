'use client'
import Button from "@/components/button/button";
import "animate.css/animate.compat.css"
import { File, Phone } from "@phosphor-icons/react";
import ContactForm from "@/components/contactForm/form";
import { projects } from "@/data/projects";
import Projectcard from "@/components/projectCard/projectCard";
import AnimateText from "@/components/animations/animateText";
import Animate from "@/components/animations/animate";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image";

export default function Home() {
  const [selectedContact, setSelectedContact] = useState("Book a call")

  return (
    <div>
      <div className="w-full">
        <header className="flex flex-col w-full items-center md:flex-nowrap min-h-[65vh] bg-gradient-to-t from-gray-500/[0.09] flex-wrap lg:px-[20%] md:px-[10%] px-4 overflow-hidden">
          <div className="flex flex-col gap-4 py-[160px]">
            
            <AnimateText animateOnce={true} className="md:text-[36px] sm:text-[32px] text-[24px] leading-[120%] font-bold">
              Turning Ideas into Pixel-Perfect Digital Experiences
            </AnimateText>
            
            <AnimateText animateOnce={true} speed={5} className="opacity-[0.9]">
              I&apos;m Abel, a designer and developer working remotely from Nigeria. I specialize in crafting clean, user-focused digital products, from websites and web apps to intuitive interfaces and brand experiences.
            </AnimateText>
            
            <AnimateText animateOnce={true} speed={10} className="opacity-[0.9]">
              Over the years, I&apos;ve had the privilege of collaborating with startups, remote agencies, and creative teams to bring ideas to life online. Whether it&apos;s refining a marketing site or designing a product UI from the ground up, I&apos;m passionate about creating designs that are beautiful and functional.
            </AnimateText>
            
            <div className="flex gap-[70px] flex-wrap items-center my-4">
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
                <Button href="#contacts" className="font-medium pl-1 py-[4px] pr-5 rounded-[30px] dark:bg-[#000]">
                  <span className="rounded-full bg-white dark:bg-gray-500/[0.09] w-[30px] h-[30px] flex items-center justify-center text-black"><Phone weight="bold" size={16} /></span>
                  Book a call or send a message
                </Button>
              </Animate>
              <Animate>
                <Button href="https://drive.google.com/file/d/1A8Z-h_qobLQESzUxzyoIR6ouuey_GyFM/view?usp=sharing" className="font-medium pl-1 py-[4px] pr-5 rounded-[30px] bg-primary">
                  <span className="rounded-full bg-white w-[28px] h-[28px] flex items-center justify-center text-black"><File weight="bold" size={16} /></span>
                  Resume
                </Button>
              </Animate>
            </div>

          </div>

          <section className="py-[20px] pb-[40px] w-full">
            <Slide arrows={false}  cssClass="lg:grid-cols-5 grid-cols-4 sm:gap-4 gap-2" easing="linear" transitionDuration={2000} slidesToShow={3} slidesToScroll={1} responsive={[{ breakpoint: 1000, settings: { slidesToShow: 3, slidesToScroll: 1 } }, { breakpoint: 600, settings: { slidesToShow: 4, slidesToScroll: 1 } }]} duration={0}>
              {
                [
                    {id: 0, title: "campuxmart.png"},
                    {id: 1, title: "ptrl.png"},
                    {id: 2, title: "hubstack.png"},
                    {id: 3, title: "bos.png"},
                    {id: 4, title: "harry.png"},
                ].map((product: { id: number, title: string }) => (
                    <div key={product.id} className="each-slide-effect flex justify-center bg-gray-500/[0.04] py-2 items-center mx-auto mx-2 grayscale hover:grayscale-0" data-aos="fade-up">
                        <Image src={"/logos/"+product.title} alt={product.title} width={100} height={48} />
                    </div>
                ))
              }
            </Slide>
          </section>
        </header>
      </div>

      

      <section className="lg:px-[20%] md:px-[10%] px-4">
        <div className="sm:columns-1 items-stretch gap-4 mt-10">
          {
            projects.slice(0,12)?.map(project => (
              <Projectcard key={project.id} project={project} />
            ))
          }
        </div>
      </section>

      
      <section className="lg:px-[20%] md:px-[10%] py-[60px] p-4 pb-10 flex flex-col gap-4">
        <h1 className="font-bold md:text-[28px] text-[18px]">Testimonials</h1>

        <div className="flex flex-col gap-4 border border-gray-500/[0.2] rounded-[10px] p-4 bg-white dark:bg-[#000]/[0.2]">
          <p className="text-[16px] font-medium">Optimization, Redesign and Conversion</p>
          <p className="text-[14px]">He had in-depth knowledge in what he was doing. I loved how he finished it fast with accuracy</p>
          
          <p className="text-[10px]">Ashish B Singh, CEO Nepalbestdeals</p>
        </div>

      </section>

      <section id="contact" className="flex flex-col gap-6 lg:px-[20%] md:px-[10%] py-[60px] p-4 bg-cover bg-center bg-no-repeat bg-gray-100/[0.2] dark:bg-[#EEE3E3]/[0.06]">
        <div className="flex flex-col md:items-center md:justify-center gap-4">
          <h1 className="font-bold md:text-center uppercase text-[18px]">Contact me</h1>
          <p className="font-medium md:text-center">I’m keen to learn more about what your company does, and specific details about the project. The more information you can provide, the better!</p>
          <div className="md:flex grid grid-cols-2 gap-1 items-center border border-gray-500/[0.2] p-1 rounded-full">
          {
            ["Book a call", "Send a message"].map(contact => (
              <button 
                key={contact} 
                onClick={() => setSelectedContact(contact)} 
                className={selectedContact === contact ? "bg-primary text-white border border-gray-500/[0.3] w-full min-w-[180px] rounded-full py-2 text-[12px]" : "bg-transparent border border-gray-500/[0.2] w-full min-w-[180px] rounded-full py-2 text-[12px]"}
              >
                <span className={selectedContact === contact ? "" : "dark:text-white/[0.5] text-black/[0.8]"}>{contact}</span>
              </button>
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
