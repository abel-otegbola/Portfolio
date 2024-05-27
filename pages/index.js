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
        <header className="md:px-[10%] sm:px-[5%]">

          <div className="bg-gradient-to-r from-[#1A1019]/[0.8] via-body/[0.9] to-[#10191A]/[0.8] bg-cover bg-center md:p-[5%] py-[10%] sm:px-[10%] px-6 text-[#f2f2f2]">

            <p className="py-2 bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-fuchsia-600" data-aos="fade-down" data-aos-delay="400">Full Stack Website Developer</p>
            <h1 className="md:w-[70%] -leading-[10px] sm:text-3xl text-3xl dark:[#f2f2f2] pb-5" data-aos="fade-down">
              A <span className="underline">developer</span> passionate about building amazing website projects. 
            </h1>
            
          </div>
          
          <div className="flex lg:flex-nowrap flex-wrap lg:gap-[0%] gap-2 mb-12">
            <Header />

            <div className="flex-1 pb-12 sm:px-0 px-5 w-full">
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
                        className={`px-6 py-1 border border-gray-500/[0.2] rounded capitalize ${active === tab.tab ? "bg-gradient-to-tr from-blue-600 to-fuchsia-600 text-white" : ""}`} 
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
