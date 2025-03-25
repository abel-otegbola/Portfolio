'use client'
import Button from "@/components/button/button";
import Image from "next/image";
import Link from "next/link";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import ContactForm from "@/components/contactForm/form";
import { projects } from "@/data/projects";
import Projectcard from "@/components/projectCard/projectCard";

export default function Home() {

  return (
    <div>
      <div className="w-full bg-[url('/images/bg-2.png')] bg-cover bg-center bg-no-repeat">
        <header className="flex w-full items-center md:flex-nowrap min-h-[85vh] flex-wrap md:px-[8%] px-4 overflow-hidden">
          <div className="flex flex-col gap-4 py-20 md:w-[50%]">
            <div className="flex gap-6 items-center">
              <ScrollAnimation animateIn="fadeInDown" className="">
                <h1 className="md:text-center flex md:items-center gap-2 p-1 font-medium backdrop-blur-sm underline underline-offset-2">
                  Abel Otegbola - Designer & Developer
                </h1>
              </ScrollAnimation>
            </div>
            
            <ScrollAnimation animateIn="fadeInUp" duration={1}>
              <h2 className="md:text-[48px] text-[32px] leading-[120%] font-semibold">Transforming Ideas into Pixel Perfect Realities</h2>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="fadeInDown">
              <p className="font-semibold">I Design, Code and Build Excellent Website Projects</p>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="fadeInUp" duration={2}>
              <Button href="#contacts" className="font-medium pl-1 py-[4px] pr-8 rounded-[30px]">
                <Image src="/images/abel.png" alt="muse" width={30} height={30} className="object-cover bottom-0 rounded-full"/>
                Book a call or send a message
              </Button>
            </ScrollAnimation>

          </div>

            <div className="flex flex-col gap-4 md:p-8 md:w-[50%] my-[60px]">
              <ScrollAnimation animateIn="fadeInDown">
                <Link href="/project?title=Campus-Mart" className="flex items-center text-[10px] p-4 py-1 shadow-lg border border-gray-500/[0.2] rounded-full bg-white dark:bg-[#000]/[0.08] w-fit"><span className="text-[#ff9100]">C</span><span className="text-[#16AF89] mr-2">M</span> See how I am creating campus-mart for over 20,000 users <ArrowRight className="ml-2" /> </Link>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <p className="text-[20px]">Since beginning my journey as a designer and developer, I&apos;ve done remote work for agencies, consulted for startups and collaborated with talented people to create digital products for both businesses and consumer use.</p>
                <div className="flex gap-[60px] items-center mt-6">
                  <div className="flex gap-4 items-center w-[100px] uppercase text-[12px]">
                    <ScrollAnimation animateIn="fadeInDown" duration={2}>
                      <h2 className="text-[20px] font-bold p-4 py-2 rounded-full border border-gray-500/[0.2]">4</h2>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="fadeInUp" duration={2}>
                      <p>years experience</p>
                    </ScrollAnimation>
                  </div>
                  <div className="flex gap-4 items-center w-[200px] uppercase text-[12px]">
                    <ScrollAnimation animateIn="fadeInDown" duration={2}>
                      <h2 className="text-[20px] font-bold p-3 py-2 rounded-full border border-gray-500/[0.2]">20</h2>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="fadeInUp" duration={2}>
                      <p>Awesome Projects Completed</p>
                    </ScrollAnimation>
                  </div>

                </div>
              </ScrollAnimation>
            </div>
        </header>
      </div>

      
      <section className="md:p-[8%] py-[60px] p-4 bg-[#000] bg-[url('/images/bg-2.png')] bg-cover bg-center bg-no-repeat text-white">
          <p className="font-bold uppercase md:text-[28px] text-[18px] mb-4">My Experience</p>
          <p className="md:text-[16px] text-[14px] font-medium">Explore My Design and Development Journey</p>

          <div className="md:columns-2 columns-1 gap-6 mt-[50px]">
            <div className=" flex flex-col gap-6 p-8 md:rounded-[20px] rounded-[10px] break-inside-avoid mb-6 h-[400px] bg-gradient-to-br from-[#2A2930] to-[#2B2A2D] border border-gray-500/[0.2]">
              <div className="flex justify-between gap-6">
                <p className="text-sm opacity-[0.7]">Fortbridge</p>
                <p>June 2024 - Present</p>
              </div>
              <h1 className="text-2xl font-bold">HUBSTACK</h1>
              <p className="mb-8">A fintech application to send money, pay bills and recharge your account </p>

              <div className="grid grid-cols-2 gap-4">
                
              {
                ["/hubstack-1.png","/hubstack-2.png" ].map(image => (
                  <div
                    key={image}
                    className={`overflow-hidden h-[110px] w-[full] transition-all duration-700 rounded bg-cover bg-top bg-no-repeat transition-all ease-in-out cursor-pointer`}
                    style={{
                        backgroundImage: `url("/images${image}")`,
                    }}
                >
                </div>
                ))
              }
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className=" flex flex-col gap-6 p-8 md:rounded-[20px] rounded-[10px] break-inside-avoid bg-primary border border-gray-500/[0.2]">
                <div className="flex justify-between gap-6">
                  <p className="text-sm opacity-[0.7]">Bos</p>
                  <p>January 2024 - June 2024</p>
                </div>
                <h1 className="text-2xl font-bold">BOS UNLIMITED</h1>
                <p>An ecommerce website for sale of customizable items and clothings</p>
              </div>
              <div className=" flex flex-col gap-6 p-8 md:rounded-[20px] rounded-[10px] break-inside-avoid bg-gradient-to-br from-[#2A2930] to-[#2B2A2D] border border-gray-500/[0.2]">
                <div className="flex justify-between gap-6">
                  <p className="text-sm opacity-[0.7]">Xatalyst</p>
                  <p>September 2023 - November 2023</p>
                </div>
                <h1 className="text-2xl font-bold">XATALYST FITNESS APP</h1>
                <p>Fitness startup, Website development, Responsive</p>
              </div>
            </div>

          </div>
      </section>

      <section className="md:p-[8%] py-[60px] p-4 pb-10 flex flex-col items-center gap-4">
        <p className="font-bold md:text-center md:text-[28px] text-[18px]">Optimization, Redesign and Conversion</p>
        <p className="md:text-center md:text-[16px] text-[14px] font-medium">He had in-depth knowledge in what he was doing. I loved how he finished it fast with accuracy</p>
        
        <ScrollAnimation animateIn="fadeInUp" duration={2}>
          <Button href="#contacts" className="font-medium pl-1 py-[4px] pr-8 rounded-[30px] text-center">
            <ArrowUpRight size={32} className="p-2 rounded-full bg-white text-black" />
            Ashish B Singh, CEO Nepalbestdeals
          </Button>
        </ScrollAnimation>

      </section>

      <section className="md:p-6 py-[60px] p-4 pb-10">

        <p className="font-bold md:text-center uppercase md:text-[28px] text-[18px]">Recent Projects</p>
        <div className="lg:columns-3 sm:columns-2 columns-1 items-stretch gap-4 mt-10">
          {
            projects.slice(0,6)?.map(project => (
              <Projectcard key={project.id} project={project} />
            ))
          }
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 md:p-[8%] py-[60px] p-4 bg-cover bg-center bg-no-repeat bg-gray-100/[0.2] dark:bg-[#EEE3E3]/[0.06]">
        <div className="flex flex-col gap-4">
          <p className="flex items-center gap-2 px-4 text-[12px] bg-white dark:bg-[#000] border border-gray-500/[0.1] w-fit rounded-full p-2">
            <span className="p-1 h-[3px] w-[3px] rounded-full bg-emerald-500 animate-pulse"></span>
            Available now
          </p>
          <p className="md:text-[16px] text-[14px] font-medium">Are you ready to turn your idea into a reality?</p>
        </div>

          <ContactForm />
      </section>
    </div>
  );
}
