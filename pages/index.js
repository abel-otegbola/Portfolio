'use client'
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ContactForm from "../components/contactForm/contactForm";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
import Header from "../components/header/Header";

export default function Home() {
  const [active, setActive] = useState("skills")

  useEffect(() => {
    AOS.init();
  })
  
  return (
      <main className="">
        <header className="md:px-[10%] sm:px-[5%]">

          <div className="bg-[url('/bg.jpg')] bg-cover bg-center md:p-[5%] py-[10%] sm:px-[10%] px-4 text-[#f2f2d7]">

            <h1 className="md:w-[70%] -leading-[10px] sm:text-3xl text-3xl dark:text-slate-200" data-aos="fade-down">
              A <span className="underline">developer</span> passionate about building amazing website projects. 
            </h1>
            
            <p className="py-5" data-aos="fade-down" data-aos-delay="400">Full Stack Website Developer</p>
          </div>
          
          <div className="flex flex-wrap gap-[3%] md:p-0 p-[3%]">
            <Header />

            <div className="flex-1 pb-12 sm:px-0 px-2 w-full">
              <div className="w-[100%] overflow-x-auto scrollbar">
                <div className="flex gap-4 items-center py-6 min-w-[500px]">
                  <button className={`px-6 py-1 border border-gray-500/[0.2] rounded-full ${active === "skills" ? "bg-gradient-to-tr from-blue-600 to-fuchsia-600 text-white" : ""}`} onClick={() => setActive("skills")}>Skills</button>
                  <button className={`px-6 py-1 border border-gray-500/[0.2] rounded-full ${active === "projects" ? "bg-gradient-to-tr from-blue-600 to-fuchsia-600 text-white" : ""}`} onClick={() => setActive("projects")}>Projects</button>
                  <button className={`px-6 py-1 border border-gray-500/[0.2] rounded-full ${active === "experiences" ? "bg-gradient-to-tr from-blue-600 to-fuchsia-600 text-white" : ""}`} onClick={() => setActive("experiences")}>Experiences</button>
                  <button className={`px-6 py-1 border border-gray-500/[0.2] rounded-full ${active === "contact" ? "bg-gradient-to-tr from-blue-600 to-fuchsia-600 text-white" : ""}`} onClick={() => setActive("contact")}>Contact</button>
                </div>
              </div>
              {
                active === "skills" ?
                  <Skills />
                :
                active === "projects" ?
                  <Projects />
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
