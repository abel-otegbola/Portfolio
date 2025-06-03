'use client'
import Button from "@/components/button/button";
import Image from "next/image";
import "animate.css/animate.compat.css"
import { ArrowUpRight, File } from "@phosphor-icons/react";
import ContactForm from "@/components/contactForm/form";
import { projects } from "@/data/projects";
import Projectcard from "@/components/projectCard/projectCard";
import AnimateText from "@/components/animations/animateText";
import Animate from "@/components/animations/animate";
import { useState } from "react";

export default function Home() {
  const [selectedContact, setSelectedContact] = useState("Book a call")

  return (
    <div>
      <div className="w-full bg-[url('/images/bg-2.webp')] bg-cover bg-center bg-no-repeat">
        <header className="flex flex-col w-full items-center md:flex-nowrap min-h-[85vh] flex-wrap md:px-[15%] px-4 overflow-hidden">
          <div className="flex flex-col gap-4 py-20 md:w-[100%]">
            <div className="flex gap-6 items-center">
              <Animate>
                <p className="md:text-center flex md:items-center gap-2 p-1 font-medium backdrop-blur-sm uppercase underline underline-offset-2">
                  Abel Otegbola - Designer & Developer
                </p>
              </Animate>
            </div>
            
            <AnimateText animateOnce={true} className="md:text-[44px] text-[32px] leading-[120%] font-black">
              Transforming Ideas into Pixel Perfect Realities
            </AnimateText>
            
            <AnimateText animateOnce={true} speed={10} className="text-[20px]">Since beginning my journey as a designer and developer, I&apos;ve done remote work for agencies, consulted for startups and collaborated with talented people to create digital products for both businesses and consumer use.</AnimateText>
            
            <div className="flex gap-[60px] items-center my-4">
              <div className="flex gap-4 items-center w-[100px] uppercase text-[12px]">
                <AnimateText animateOnce={true} className="text-[20px] font-bold p-4 py-2 rounded-full border border-gray-500/[0.2]">
                  4
                </AnimateText>
                
                <AnimateText animateOnce={true}>years experience</AnimateText>
              </div>
              <div className="flex gap-4 items-center w-[200px] uppercase text-[12px]">
                <AnimateText animateOnce={true} className="text-[20px] font-bold p-3 py-2 rounded-full border border-gray-500/[0.2]">20</AnimateText>
                
                <AnimateText animateOnce={true}>Awesome Projects Completed</AnimateText>
              </div>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Animate>
                <Button href="#contacts" className="font-medium pl-1 py-[4px] pr-5 rounded-[30px]">
                  <Image src="/images/abel.png" alt="muse" width={30} height={30} className="object-cover bottom-0 rounded-full"/>
                  Book a call or send a message
                </Button>
              </Animate>
              <Animate>
                <Button href="#contacts" className="font-medium pl-1 py-[4px] pr-5 rounded-[30px] bg-primary">
                  <span className="rounded-full bg-white p-1 w-[30px] h-[30px] flex items-center justify-center text-black"><File weight="bold" size={16} /></span>
                  View resume
                </Button>
              </Animate>
            </div>

          </div>
        </header>
      </div>

      
      <section className="md:px-[15%] py-[60px] p-4 bg-[#000] bg-[url('/images/bg-2.webp')] bg-cover bg-center bg-no-repeat text-white">
          <AnimateText animateOnce={true} className="font-bold uppercase md:text-[28px] text-[18px] mb-4">My Experience</AnimateText>
          <AnimateText animateOnce={true} className="md:text-[16px] text-[14px] font-medium">Explore My Design and Development Journey</AnimateText>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-[50px]">
            <div className=" flex flex-col gap-6 p-8 md:rounded-[10px] rounded break-inside-avoid bg-gradient-to-br from-primary to-[#000]/[0.6] border border-[#000]/[0.6]">
              <div className="flex justify-between gap-6">
                <AnimateText animateOnce={true} className="text-sm opacity-[0.7]">Fortbridge</AnimateText>
                <AnimateText animateOnce={true}>June 2024 - Present</AnimateText>
              </div>
              <AnimateText animateOnce={true} className="text-2xl font-bold">HUBSTACK</AnimateText>
              <AnimateText animateOnce={true} className="mb-8">A fintech application to send money, pay bills and recharge your account </AnimateText>

              <div className="grid grid-cols-3 gap-4">
                
              {
                ["/hubstack-1.webp","/hubstack-2.webp","/hubstack-3.webp" ].map(image => (
                  <Image
                    key={image}
                    src={"/images" + image}
                    alt={image}
                    width={326}
                    height={673}
                  />
                ))
              }
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="h-full flex flex-col gap-6 p-8 md:rounded-[10px] rounded break-inside-avoid border border-gray-500/[0.2]">
                <div className="flex justify-between gap-6">
                  <AnimateText animateOnce={true} className="text-sm opacity-[0.7]">Bos</AnimateText>
                  <AnimateText animateOnce={true}>January 2024 - June 2024</AnimateText>
                </div>
                <AnimateText animateOnce={true} className="text-2xl font-bold">BOS UNLIMITED</AnimateText>
                <AnimateText animateOnce={true}>An ecommerce website for sale of customizable items and clothings</AnimateText>
              </div>
              <div className="h-full flex flex-col gap-6 p-8 md:rounded-[10px] rounded break-inside-avoid bg-gradient-to-br from-transparent to-[#000]/[0.4] border border-gray-500/[0.2]">
                <div className="flex justify-between gap-6">
                  <AnimateText animateOnce={true} className="text-sm opacity-[0.7]">Xatalyst</AnimateText>
                  <AnimateText animateOnce={true}>September 2023 - November 2023</AnimateText>
                </div>
                <AnimateText animateOnce={true} className="text-2xl font-bold">XATALYST FITNESS APP</AnimateText>
                <AnimateText animateOnce={true}>Fitness startup, Website development, Responsive</AnimateText>
              </div>
            </div>

          </div>
      </section>

      <section className="md:p-[8%] py-[60px] p-4 pb-10 flex flex-col md:items-center gap-4">
        <AnimateText animateOnce={true} className="font-bold md:text-center md:text-[28px] text-[18px]">Optimization, Redesign and Conversion</AnimateText>
        <AnimateText animateOnce={true} className="md:text-center md:text-[16px] text-[14px] font-medium">He had in-depth knowledge in what he was doing. I loved how he finished it fast with accuracy</AnimateText>
        
        <Animate>
          <Button href="#contacts" className="font-medium pl-1 py-[4px] pr-8 rounded-[30px] text-center">
            <ArrowUpRight size={32} className="p-2 rounded-full bg-white text-black" />
            Ashish B Singh, CEO Nepalbestdeals
          </Button>
        </Animate>

      </section>

      <section className="md:px-[15%] py-[60px] p-4 pb-10">

        <AnimateText animateOnce={true} className="font-bold md:text-center uppercase md:text-[28px] text-[18px]">Recent Projects</AnimateText>
        <div className="columns-1 items-stretch gap-4 mt-10">
          {
            projects.slice(0,12)?.map(project => (
              <Projectcard key={project.id} project={project} />
            ))
          }
        </div>
      </section>

      <section className="flex flex-col gap-6 md:px-[15%] py-[60px] p-4 bg-cover bg-center bg-no-repeat bg-gray-100/[0.2] dark:bg-[#EEE3E3]/[0.06]">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold md:text-center uppercase md:text-[28px] text-[18px]">Contact me</h1>
          <p className="md:text-[16px] text-[14px] font-medium">Are you ready to turn your idea into a reality?</p>
          <div className="flex gap-1 items-center border border-black p-1 rounded-full">
          {
            ["Book a call", "Send a message"].map(contact => (
              <Button key={contact} onClick={() => setSelectedContact(contact)} className={selectedContact === contact ? "" : "bg-black/[0.4] border border-gray-500/[0.3]"}>
                {contact}
              </Button>
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
