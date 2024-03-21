'use client'
import Projects from "../components/Projects";
import Header from "../components/header/Header";
import Skills from "../components/Skills";
import ContactForm from "../components/contactForm/contactForm";
import Button from "../components/button/button";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    AOS.init();
  })
  
  return (
      <main className="">
        <Header />

        <hr className="my-10 dark:opacity-[0.1]" />
        
          {/* ABOUT SECTION */}
          
          <section id="about" className="md:px-[7%] px-[5%] md:py-[7%] py-[40px]">
            <div className="md:flex justify-between">
              <div className="md:w-[55%] flex flex-col md:ml-[12%]">
                <h2 className="text-2xl md:w-[40%]" data-aos="fade-up">About</h2>
                <p className="py-5 rounded -leading-[10px] md:w-[40%]" data-aos="fade-down" >
                  In 2020, I made the decision to delve into the world of coding and web development.
                  now building software for an businesses and corporations. My main focus these days is building products and leading projects for clients.
                </p>
              </div>
              <div className="md:w-[45%]">
                <Skills />
              </div>
            </div>
          </section>
          

          {/* PORTFOLIO SECTION */}
          <section id="portfolio" className="md:px-[7%] px-[5%] md:py-[10%] py-[40px] bg-slate-100 dark:bg-gray-100/[0.03]">
            <h2 className="text-2xl" data-aos="fade-up">Portfolio</h2>
            <Projects />
          </section>

          <hr className="mt-10 dark:opacity-[0.1]" />

          {/* CONTACT SECTION */}
          <section id="contacts" className="md:px-[7%] px-0 md:py-[10%] py-[40px] ">
            <h2
              className="text-primary dark:text-slate-200 text-2xl md:px-0 px-[5%]"
              id="contact"
              data-aos="fade-up"
            >
              Contact me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 py-6 overflow-hidden">

              <div className="p-[5%]">
                <p className="py-4 leading-[30px]" data-aos="fade-down">
                  Reach me through phone or email
                </p>
                <div className="mb-8">
                  <a href="tel: +2347060989331" aria-label="Make a phone call to +2347060989331" className="flex gap-4 my-4 items-center" data-aos="fade-left">
                    <FaPhone className="text-4xl p-2 rounded bg-gray-100/[0.09]" />
                    <span>+2347060989331</span>
                  </a>
                  <a href="mailto:abel.d.otegbola@gmail.com" aria-label="Send an email to abel.d.otegbola@gmail.com" className="flex gap-4 my-4 items-center" data-aos="fade-left">
                    <FaEnvelope className="text-4xl p-2 rounded bg-gray-100/[0.09]" />
                    <span>abel.d.otegbola@gmail.com</span>
                  </a>
                </div>
                <p className="py-4 leading-[30px]" data-aos="fade-right">
                  Connect with me on socials
                </p>
                <div className="flex gap-4 items-center" data-aos="fade-left">
                  <Button text={<FaGithub />} to={"https://github.com/abel-otegbola"} type={"secondary"}/>
                  <Button text={<FaTwitter />} to={"https://twitter.com/Abel_Otegbola"} type={"secondary"}/>
                  <Button text={<FaLinkedin />} to={"https://linkedin.com/in/abel-otegbola"} type={"secondary"}/>
                </div>

              </div>
                
                <div className="p-[5%] md:py-[5%] py-[40px] bg-slate-100 dark:bg-gray-100/[0.03]">
                  <p className="py-4 leading-[30px]" data-aos="fade-right">
                    Don&apos;t be a stranger, Message me now to connect, collaborate,
                    network or hire me for a new web project{" "}
                  </p>
                  <ContactForm />
                </div>
            </div>
          </section>
      </main>
  );
}
