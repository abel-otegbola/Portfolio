'use client'
import Button from "@/components/button/button";
import Image from "next/image";
import Header from "@/components/header/header";
import Link from "next/link";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import Input from "@/components/input/input";
import { Envelope, PencilLine, User } from "@phosphor-icons/react";
import Textarea from "@/components/textarea/textarea";

export default function Home() {

  return (
    <div>
      <div className="w-full bg-[url('/images/bg-2.png')] bg-cover bg-center bg-no-repeat">
        <Header />
        <header className="flex w-full items-center md:flex-nowrap min-h-[85vh] flex-wrap md:px-[8%] px-4 overflow-hidden">
          <div className="flex flex-col gap-4 py-20 md:w-[50%]">
            <div className="flex gap-6 items-center">
              <ScrollAnimation animateIn="fadeInDown" className="w-[50%]">
                <h1 className="md:text-center flex md:items-center gap-2 p-1 w-fit text-semibold backdrop-blur-sm underline underline-offset-2">
                  Abel Otegbola - Designer & Developer
                </h1>
              </ScrollAnimation>
            </div>
            
            <ScrollAnimation animateIn="fadeInUp" duration={1}>
              <h2 className="md:text-[48px] text-[32px] leading-[120%] font-semibold">Transforming Ideas into Pixel Perfect Realities</h2>
            </ScrollAnimation>
            
            
            <ScrollAnimation animateIn="fadeInUp" duration={2}>
              <Button href="#contacts" className="font-medium px-12 py-6">Let&apos;s chat</Button>
            </ScrollAnimation>

          </div>

            <div className="flex flex-col gap-4 md:p-8 md:w-[50%] my-[60px]">
              <ScrollAnimation animateIn="fadeInDown">
                <p className="font-semibold">I Design, Code and Build Excellent Website Projects</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <p className="text-[20px]">Since beginning my journey as a designer and developer, I&apos;ve done remote work for agencies, consulted for startups and collaborated with talented people to create digital products for both businesses and consumer use.</p>
                <div className="flex gap-[60px] items-center mt-6">
                  <div className="flex gap-4 items-center w-[100px] uppercase text-[12px]">
                    <ScrollAnimation animateIn="fadeInDown" duration={2}>
                      <h2 className="text-[20px] p-4 py-2 rounded-full border border-gray-500/[0.2]">4</h2>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="fadeInUp" duration={2}>
                      <p>years experience</p>
                    </ScrollAnimation>
                  </div>
                  <div className="flex gap-4 items-center w-[200px] uppercase text-[12px]">
                    <ScrollAnimation animateIn="fadeInDown" duration={2}>
                      <h2 className="text-[20px] p-3 py-2 rounded-full border border-gray-500/[0.2]">20</h2>
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

      
      <section className="md:p-[8%] py-[60px] p-4 bg-[#29272b] bg-[url('/images/bg-2.png')] bg-cover bg-center bg-no-repeat text-white">
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

      <section className="md:p-[8%] py-[60px] p-4 pb-10">
        <p className="font-bold md:text-center text-primary uppercase md:text-[28px] text-[18px] mb-4">Portfolio</p>
        <p className="md:text-center md:text-[16px] text-[14px] font-medium">Here are some of my recent projects</p>

        <div className="md:columns-2 columns-1 items-stretch gap-2 mt-10">
          {
            [
              { id: 7, title: "Flashnotes", description: "Note management website application. Features include: Note management, generation of flashcards to aid learning, Todo list to keep track of work.", href: "https://flashnotes-sigma.vercel.app", img: "/images/Flashnotes.png" },
              { id: 0, title: "Bos Unlimited",  description: "Fashion ecommerce website. Customization of designs according to user's preferences. Clean layout and designs.", href: "https://bosunlimited.netlify.app", img: "/images/BOS.png" },
              { id: 1, title: "Medox",  description: "Telehealth platform. Meet with doctors virtually and in real-time. The platform also offers online diagnose before consultation.", href: "https://medox.vercel.app", img: "/images/Medox.png" },
              { id: 2, title: "Muse",  description: "Musical freelancing and Gear ecommerce platform. Find and hire musical talents, Buy and rent gears, find resources to learn your favourite musical instruments. ", href: "https://dribbble.com/shots/25074990-Muse-Musical-Instruments-Ecommerce-Exploration", img: "/images/Muse.png" },
              { id: 3, title: "Paperpilot",  description: "Research papers online search. Search for papers from IEEE, Springer, Semantic Scholar and so on.", href: "https://paperpilothub.vercel.app", img: "/images/paperpilot.png" },
              { id: 5, title: "Motara", description: "Furniture ecommerce website application. Find high quality, luxurious and beauitiful furnitures from the store, place orders. ", href: "https://motara.netlify.app", img: "/images/motara.png" },
              { id: 6, title: "Mailme", description: "Endpoint generator website. Generate endpoints for your backend data. Secured data storage for frontend applications.", href: "https://mailme.vercel.app", img: "/images/mailme.png" },
            ].map(project => (
              
              <ScrollAnimation key={project.id}  animateIn="zoomIn" className="break-inside-avoid" duration={0.1}>
                <div className="relative flex flex-col justify-between mb-2 p-4 bg-slate-300/[0.09] md:rounded-[24px] rounded-lg">
                  <Link href={project.href} className="relative w-full border border-gray-500/[0.1] md:rounded-[16px] rounded">
                    <Image src={project.img} alt="bos" width={600} height={800} className="object-cover bg-primary/[0.2] bottom-0 md:rounded-[16px] rounded"/>
                  </Link>
                  <div className="flex flex-col gap-2 w-full pt-4 md:px-2 mb-2">
                    <h2 className="font-bold text-[16px] uppercase">{project.title}</h2>
                    <p>{project.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))
          }
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 md:p-[8%] py-[60px] p-4 bg-[#1c1c1c] bg-cover bg-center bg-no-repeat text-white">
        <div className="">
          <p className="font-bold text-primary uppercase md:text-[28px] text-[18px] mb-4">Contact</p>
          <p className="md:text-[16px] text-[14px] font-medium">Message me now for a new project</p>
        </div>

        <form className="flex flex-col gap-4 ">
          <Input placeholder="Name" leftIcon={<User />} />
          <Input placeholder="Email" leftIcon={<Envelope />} />
          <Textarea placeholder="Message" leftIcon={<PencilLine />} />
          <div className="flex justify-start">
            <Button>Submit</Button>
          </div>
        </form>
          
      </section>
    </div>
  );
}
