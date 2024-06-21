'use client'
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ContactForm from "../components/contactForm/contactForm";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
import Header from "../components/header/Header";
import Experience from "../components/experience/experience";

export default function Home() {
  const [active, setActive] = useState("projects")

  useEffect(() => {
    AOS.init();
  })
  
  return (
      <main className="">
        <header className="">
          <div className="bg-[url('/bg2.PNG')] md:rounded">
          <div className="dark:bg-[#050509]/[0.93] bg-[#10101A]/[0.9] bg-cover bg-center py-[5%] sm:px-[10%] px-6 text-[#f2f2f2]">

            <p className="py-2 opacity-[0.3]" data-aos="fade-down" data-aos-delay="400">Full Stack Website Developer</p>
            <h1 className="md:w-[70%] font-medium -leading-[10px] text-2xl dark:[#f2f2f2] pb-5" data-aos="fade-down">
              DESIGN . CODE . SHIP 
            </h1>
            
          </div>
          </div>
          
          <div className="md:my-12 md:px-[10%] sm:px-[5%]">
            <Header />

            <div className="flex-1 md:my-0 my-[30px] pb-12 sm:px-0 px-6 w-full">
              <div className="w-[100%] overflow-x-auto scrollbar">
                <div className="flex gap-4 lg:justify-start md:justify-center items-center py-6 min-w-[400px]">
                  {
                    [
                      { id: 0, tab: "projects" },
                      { id: 1, tab: "skills" },
                      { id: 2, tab: "experiences" },
                      { id: 3, tab: "contact" },
                    ]
                    .map(tab => (
                      <button 
                        key={tab.id} 
                        className={`px-6 py-1 border border-gray-500/[0.2] rounded capitalize ${active === tab.tab ? "bg-[#10101A] hover:bg-gradient-to-tr from-fuchsia-600 to-emerald-600 text-white" : ""}`} 
                        onClick={() => setActive(tab.tab)}
                      >
                        {tab.tab}
                      </button>
                    ))
                  }
                </div>
              </div>
              {
                active === "projects" ?
                  <Projects />
                :
                active === "skills" ?
                  <Skills />
                :
                active === "experiences" ?
                  <Experience />
                :
                active === "contact" ?
                  <div className="">
                    <p className="py-4 leading-[30px]" data-aos="fade-right">
                      Don&apos;t be a stranger, Message me now to connect, collaborate,
                      network or hire me for a new web project{" "}
                    </p>
                    <ContactForm />
                  </div>
                :
                ""
                
              }
            </div>
          </div>
        </header>
        
      </main>
  );
}
