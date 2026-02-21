'use client'
import Button from "@/components/button/button";
import "animate.css/animate.compat.css"
import ContactForm from "@/components/contactForm/form";
import { projects } from "@/data/projects";
import Projectcard from "@/components/projectCard/projectCard";
import { useState } from "react";
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image";

export default function Home() {
  const [selectedContact, setSelectedContact] = useState("Send a message")

  return (
    <div>
      <div className="w-full">
        <header className="flex md:flex-row gap-8 flex-col xl:px-[15%] lg:px-[10%] md:px-[10%] py-[80px] px-4 md:flex-nowrap min-h-[65vh] flex-wrap overflow-hidden bg-cover bg-top">
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
          <div className="relative md:w-[50%] flex items-center justify-center w-full h-full rounded-full block grayscale-[80%] md:order-2 order-1">
            <Image src={"/images/memoji.svg"} alt={"abel"} width={1000} height={1000} className="object-cover w-[300px] h-[300px] filter drop-shadow-[10px_10px_20px_rgba(0,0,0,0.3)]"/>
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
          
          <div className="xl:px-[15%] lg:px-[10%] md:px-[10%] px-4 grid md:grid-cols-2 gap-6">
            <div className="border border-dashed border-gray-500/[0.3] p-6 dark:bg-black/[0.8] backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3">1. MVP Design & Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete idea-to-MVP execution: UX, UI, frontend development, integrations, and deployment — built fast without compromising quality.
              </p>
            </div>

            <div className="border border-dashed border-gray-500/[0.3] p-6 dark:bg-black/[0.8] backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3">2. Product & UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Modern, clean, user-focused designs built with clarity and precision. From wireframes to high-fidelity prototypes.
              </p>
            </div>

            <div className="border border-dashed border-gray-500/[0.3] p-6 dark:bg-black/[0.8] backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3">3. Frontend Engineering</h3>
              <p className=" text-gray-600 dark:text-gray-300">
                Robust, scalable frontends using React, Next.js, TypeScript, TailwindCSS, shadcn/ui, and modern development workflows.
              </p>
            </div>

            <div className="border border-dashed border-gray-500/[0.3] p-6 dark:bg-black/[0.8] backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3">4. SaaS & Custom Web Applications</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Dashboards, internal tools, CRMs, marketplaces, and workflow-focused platforms — built around your product&apos;s needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="">
        <div className="mt-[60px] grid md:grid-cols-2 gap-6 xl:px-[15%] lg:px-[10%] md:px-[10%]">
          {
            projects.slice(0,12)?.map(project => (
              <Projectcard key={project.id} project={project} />
            ))
          }
        </div>
      </section>

      
      <section className="py-[60px] flex flex-col gap-4">
        <p className="uppercase font-light text-[12px] xl:px-[15%] lg:px-[10%] md:px-[12%] px-4">Client Testimonials</p>

        <div className="relative overflow-hidden xl:px-[15%] lg:px-[10%] md:px-[10%] bg-white dark:bg-black/[0.8]">
          <div className="flex flex-col gap-6 border-x border-dashed border-gray-500/[0.3] p-4">
            <p className="text-[14px]">He had <b>in-depth knowledge</b> in what he was doing. I loved how he finished it fast with <b>accuracy</b></p>
            <div className="flex items-center gap-2">
              <span className="h-[24px] w-[24px] rounded-full bg-gray-500/[0.6]"></span>
              <p className="text-[12px]">Ashish B Singh, CEO Nepalbestdeals</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden xl:px-[15%] lg:px-[10%] md:px-[10%] bg-white dark:bg-black/[0.8]">
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
          <p className="uppercase font-light text-[12px] xl:px-[15%] lg:px-[10%] md:px-[10%] px-4">Let&apos;s Build Something Great Together</p>
          <div className="relative overflow-hidden xl:px-[15%] lg:px-[10%] md:px-[10%] bg-white dark:bg-black/[0.8]">
            <div className="flex flex-col gap-6 border-x border-dashed border-gray-500/[0.3] p-4">
              <p className="">If you&apos;re launching a new product, improving an existing platform, or need a designer-engineer who thinks like a founder, I&apos;d love to collaborate.</p>
            </div>
          </div>

          <div className="relative overflow-hidden xl:px-[15%] lg:px-[10%] md:px-[10%]">
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
            <div className="xl:px-[15%] lg:px-[10%] md:px-[10%] px-4 bg-white dark:bg-black/[0.8]">
              <ContactForm />
            </div>
          }
      </section>
    </div>
  );
}
