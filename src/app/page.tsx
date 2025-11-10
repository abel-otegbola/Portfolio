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
  const [selectedContact, setSelectedContact] = useState("Send a message")

  return (
    <div>
      <div className="w-full">
        <header className="flex flex-col w-full items-center md:flex-nowrap min-h-[65vh] flex-wrap overflow-hidden bg-cover bg-top">
          <div className="flex flex-col w-full gap-2 my-[100px]">
            <p className="uppercase font-light text-[12px] xl:px-[26%] lg:px-[22%] md:px-[12%] px-4">Available for new projects</p>
            <div className="relative overflow-hidden xl:px-[25%] lg:px-[20%] md:px-[10%]">
              <div className="flex flex-col w-full gap-6 p-3 dark:bg-black/[0.8] backdrop-blur-lg">
                <p className="md:text-[36px] sm:text-[32px] text-[24px] leading-[120%] font-bold">
                  Turning Ideas into Pixel-Perfect Digital Experiences
                </p>
                
                <p>
                  I&apos;m Abel, a designer and developer working remotely from Nigeria. I specialize in crafting clean, user-focused digital products, from websites and web apps to intuitive interfaces and brand experiences.
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden xl:px-[25%] lg:px-[20%] md:px-[10%]">

              <div className="flex gap-1 flex-wrap gap-2 p-3 dark:bg-black/[0.8] backdrop-blur-sm">
                  <Button href="#contacts"  className="">
                    Book a call or send a message
                  </Button>
                  <Button href="https://drive.google.com/file/d/1A8Z-h_qobLQESzUxzyoIR6ouuey_GyFM/view?usp=sharing" className="">
                    Resume
                  </Button>
              </div>
            </div>

          </div>

          <div className="relative overflow-hidden w-full">
          <section className="xl:px-[26%] lg:px-[21%] md:px-[11%]">
            <Slide arrows={false}  cssClass="lg:grid-cols-5 grid-cols-4 sm:gap-4 gap-2" easing="linear" transitionDuration={2000} slidesToShow={3} slidesToScroll={1} responsive={[{ breakpoint: 1000, settings: { slidesToShow: 3, slidesToScroll: 1 } }, { breakpoint: 600, settings: { slidesToShow: 4, slidesToScroll: 1 } }]} duration={0}>
              {
                [
                    {id: 0, title: "campuxmart.png"},
                    {id: 1, title: "ptrl.png"},
                    {id: 2, title: "hubstack.png"},
                    {id: 3, title: "bos.png"},
                    {id: 4, title: "harry.png"},
                ].map((product: { id: number, title: string }) => (
                    <div key={product.id} className="each-slide-effect flex justify-center bg-transparent dark:bg-black/[0.8] backdrop-blur-sm py-2 grayscale hover:grayscale-0 items-center mx-auto mx-2" data-aos="fade-up">
                        <Image src={"/logos/"+product.title} alt={product.title} width={100} height={48} />
                    </div>
                ))
              }
            </Slide>
          </section>
          </div>
        </header>
      </div>

      <section className="overflow-hidden">
        {/* Infinite slider: duplicate the items for seamless scroll */}
        <div className="projects-slider mt-[30px]">
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


      <section className="">
        <div className="mt-[60px]">
          {
            projects.slice(0,12)?.map(project => (
              <div key={project.id} className="relative overflow-hidden w-full">
                <div className="xl:px-[25%] lg:px-[20%] md:px-[10%]">
                  <Projectcard project={project} />
                </div>
              </div>
            ))
          }
        </div>
      </section>

      
      <section className="py-[60px] flex flex-col gap-4">
        <p className="uppercase font-light text-[12px] xl:px-[26%] lg:px-[22%] md:px-[12%] px-4">Client Testimonials</p>

        <div className="relative overflow-hidden xl:px-[25%] lg:px-[20%] md:px-[10%] bg-white dark:bg-black/[0.8]">
          <div className="flex flex-col gap-6 border-x border-dashed border-gray-500/[0.3] p-4">
            <p className="text-[14px]">He had <b>in-depth knowledge</b> in what he was doing. I loved how he finished it fast with <b>accuracy</b></p>
            <div className="flex items-center gap-2">
              <span className="h-[24px] w-[24px] rounded-full bg-gray-500/[0.6]"></span>
              <p className="text-[12px]">Ashish B Singh, CEO Nepalbestdeals</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden xl:px-[25%] lg:px-[20%] md:px-[10%] bg-white dark:bg-black/[0.8]">
          <div className="flex flex-col gap-6 border-x border-dashed border-gray-500/[0.3] p-4">
            <p className="text-[14px]">Working with him on ptrlstudios.com was <b>smooth</b>. The website is <b>clean, minimal, and functional</b>. Mobile and checkout work well, and overall it gives a <b>professional</b> shopping experience</p>
            <div className="flex items-center gap-2">
              <span className="h-[24px] w-[24px] rounded-full bg-gray-500/[0.6]"></span>
              <p className="text-[12px]">CEO PTRL Studios</p>
            </div>
          </div>
        </div>

      </section>

      <section id="contact" className="flex flex-col gap-6 py-[60px] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col gap-4">
          <p className="uppercase font-light text-[12px] xl:px-[25%] lg:px-[20%] md:px-[10%] px-4">Let&apos;s work together</p>
          <div className="relative overflow-hidden xl:px-[25%] lg:px-[20%] md:px-[10%] bg-white dark:bg-black/[0.8]">
            <div className="flex flex-col gap-6 border-x border-dashed border-gray-500/[0.3] p-4">
              <p className="">I’m keen to learn more about what your company does, and specific details about the project. The more information you can provide, the better!</p>
            </div>
          </div>

          <div className="relative overflow-hidden xl:px-[25%] lg:px-[20%] md:px-[10%]">
            <div className="flex gap-0 p-3 border-x border-dashed border-gray-500/[0.3] dark:bg-black/[0.8] backdrop-blur-sm">
              {
                ["Book a call", "Send a message"].map((contact, index) => (
                  <button 
                    key={contact} 
                    onClick={() => setSelectedContact(contact)} 
                    className={`flex-1 py-3 text-[14px] transition-all duration-200 relative ${
                      selectedContact === contact 
                        ? "text-primary font-medium" 
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    } ${index === 0 ? "border-r border-gray-500/[0.2]" : ""}`}
                  >
                    {contact}
                    {selectedContact === contact && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></span>
                    )}
                  </button>
                ))
              }
            </div>
          </div>
        </div>
          {
            selectedContact === "Book a call" ?
            <div className="">
              <iframe src="https://cal.com/abel-otegbola/30min?overlayCalendar=true" width={"100%"} height={480} className="w-full md:scale-[0.75]" ></iframe>
            </div>
            :
            <div className="xl:px-[25%] lg:px-[20%] md:px-[10%] px-4 bg-white dark:bg-black/[0.8]">
              <ContactForm />
            </div>
          }
      </section>
    </div>
  );
}
