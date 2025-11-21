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
            <p className="uppercase font-light text-[12px] xl:px-[15%] lg:px-[10%] md:px-[12%] px-4">Product Designer • Frontend Engineer • MVP Builder</p>
            <div className="relative overflow-hidden xl:px-[15%] lg:px-[10%] md:px-[10%]">
              <div className="flex flex-col w-full gap-6 dark:bg-black/[0.8] backdrop-blur-lg">
                <p className="md:text-[36px] sm:text-[32px] text-[24px] leading-[120%] font-bold">
                  I design and develop fast, beautiful, and reliable digital products — from idea to launch-ready MVP.
                </p>
                
                <p>
                  I&apos;m Abel Otegbola, a multidisciplinary builder with 4+ years of experience blending design, engineering, and product strategy. I help founders and teams transform ideas into polished, production-ready web applications.
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden xl:px-[15%] lg:px-[10%] md:px-[10%]">

              <div className="flex gap-1 flex-wrap gap-2 mt-6 dark:bg-black/[0.8] backdrop-blur-sm">
                  <Button href="#contact"  className="">
                    Build with me →
                  </Button>
                  <Button href="#projects" className="">
                    See my work →
                  </Button>
              </div>
            </div>

          </div>

          <div className="relative overflow-hidden w-full">
          <section className="xl:px-[16%] lg:px-[11%] md:px-[11%]">
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

      {/* What I Do Section */}
      <section className="py-[60px]">
        <div className="flex flex-col gap-8">
          <p className="uppercase font-light text-[12px] xl:px-[15%] lg:px-[10%] md:px-[10%] px-4">What I Do</p>
          
          <div className="xl:px-[15%] lg:px-[10%] md:px-[10%] px-4 grid md:grid-cols-2 gap-6">
            <div className="border border-dashed border-gray-500/[0.3] p-6 dark:bg-black/[0.8] backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3">1. MVP Design & Development</h3>
              <p className="text-[14px] text-gray-600 dark:text-gray-300">
                Complete idea-to-MVP execution: UX, UI, frontend development, integrations, and deployment — built fast without compromising quality.
              </p>
            </div>

            <div className="border border-dashed border-gray-500/[0.3] p-6 dark:bg-black/[0.8] backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3">2. Product & UI/UX Design</h3>
              <p className="text-[14px] text-gray-600 dark:text-gray-300">
                Modern, clean, user-focused designs built with clarity and precision. From wireframes to high-fidelity prototypes.
              </p>
            </div>

            <div className="border border-dashed border-gray-500/[0.3] p-6 dark:bg-black/[0.8] backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3">3. Frontend Engineering</h3>
              <p className="text-[14px] text-gray-600 dark:text-gray-300">
                Robust, scalable frontends using React, Next.js, TypeScript, TailwindCSS, shadcn/ui, and modern development workflows.
              </p>
            </div>

            <div className="border border-dashed border-gray-500/[0.3] p-6 dark:bg-black/[0.8] backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3">4. SaaS & Custom Web Applications</h3>
              <p className="text-[14px] text-gray-600 dark:text-gray-300">
                Dashboards, internal tools, CRMs, marketplaces, and workflow-focused platforms — built around your product&apos;s needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="">
        <div className="mt-[60px]">
          {
            projects.slice(0,12)?.map(project => (
              <div key={project.id} className="relative overflow-hidden w-full">
                <div className="xl:px-[15%] lg:px-[10%] md:px-[10%]">
                  <Projectcard project={project} />
                </div>
              </div>
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
