'use client'
import Button from "@/components/button/button";
import "animate.css/animate.compat.css"
import ContactForm from "@/components/contactForm/form";
import { projects } from "@/data/projects";
import Projectcard from "@/components/projectCard/projectCard";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image";

export default function Home() {
  const [selectedContact, setSelectedContact] = useState("Book a call")

  return (
    <div>
      <div className="w-full">
        <header className="flex flex-col w-full items-center md:flex-nowrap min-h-[65vh] bg-gradient-to-t from-gray-500/[0.09] flex-wrap overflow-hidden ">
          <div className="flex flex-col gap-8 my-[100px]">
            <div className="border border-dashed border-gray-500/[0.3] xl:px-[25%] lg:px-[20%] md:px-[10%]">
              <div className="flex flex-col gap-6 p-3 border-x border-dashed border-gray-500/[0.3] dark:bg-black/[0.8] backdrop-blur-sm">
                <p className="md:text-[36px] sm:text-[32px] text-[24px] leading-[120%] font-bold">
                  Turning Ideas into Pixel-Perfect Digital Experiences
                </p>
                
                <p>
                  I&apos;m Abel, a designer and developer working remotely from Nigeria. I specialize in crafting clean, user-focused digital products, from websites and web apps to intuitive interfaces and brand experiences.
                </p>
              </div>
            </div>
            {/* <p>
              Over the years, I&apos;ve had the privilege of collaborating with startups, remote agencies, and creative teams to bring ideas to life online. Whether it&apos;s refining a marketing site or designing a product UI from the ground up, I&apos;m passionate about creating designs that are beautiful and functional.
            </p> */}
            
            <div className="border border-dashed border-gray-500/[0.3] xl:px-[25%] lg:px-[20%] md:px-[10%]">

              <div className="flex gap-2 flex-wrap gap-6 p-3 border-x border-dashed border-gray-500/[0.3] dark:bg-black/[0.8] backdrop-blur-sm">
                  <Button href="#contacts"  className="">
                    Book a call or send a message
                  </Button>
                  <Button href="https://drive.google.com/file/d/1A8Z-h_qobLQESzUxzyoIR6ouuey_GyFM/view?usp=sharing" className="">
                    Resume
                  </Button>
              </div>
            </div>

          </div>

          <div className="w-full border border-dashed border-gray-500/[0.3]">
          <section className="xl:px-[25%] lg:px-[20%] md:px-[10%]">
            <Slide arrows={false}  cssClass="lg:grid-cols-5 grid-cols-4 sm:gap-4 gap-2 border-x border-dashed border-gray-500/[0.3]" easing="linear" transitionDuration={2000} slidesToShow={3} slidesToScroll={1} responsive={[{ breakpoint: 1000, settings: { slidesToShow: 3, slidesToScroll: 1 } }, { breakpoint: 600, settings: { slidesToShow: 4, slidesToScroll: 1 } }]} duration={0}>
              {
                [
                    {id: 0, title: "campuxmart.png"},
                    {id: 1, title: "ptrl.png"},
                    {id: 2, title: "hubstack.png"},
                    {id: 3, title: "bos.png"},
                    {id: 4, title: "harry.png"},
                ].map((product: { id: number, title: string }) => (
                    <div key={product.id} className="each-slide-effect flex justify-center bg-gray-500/[0.04] dark:bg-black/[0.8] backdrop-blur-sm py-2 items-center mx-auto mx-2 grayscale hover:grayscale-0" data-aos="fade-up">
                        <Image src={"/logos/"+product.title} alt={product.title} width={100} height={48} />
                    </div>
                ))
              }
            </Slide>
          </section>
          </div>
        </header>
      </div>

      

      <section className="xl:px-[25%] lg:px-[20%] md:px-[10%] px-4">
        <div className="sm:columns-1 items-stretch gap-[60px] mt-[60px]">
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
