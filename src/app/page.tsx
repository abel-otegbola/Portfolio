'use client'
import Button from "@/components/button/button";
import Image from "next/image";
import Header from "@/components/header/header";
import Link from "next/link";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

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

      
      <section className="md:p-[8%] py-[60px] p-4 bg-[#29272b] text-white">
          <p className="font-bold uppercase text-[18px] mb-4">My Experience</p>
          <p className="md:text-[16px] text-[14px] font-medium">Explore My Design and Development Journey</p>

          <div className="md:columns-2 columns-1 gap-6 mt-[50px]">
            <div className=" flex flex-col gap-6 p-8 md:rounded-[20px] rounded-[10px] break-inside-avoid mb-6 h-[400px] bg-gradient-to-br from-[#2A2930] to-[#2B2A2D] border border-gray-500/[0.2]">
              <div className="flex justify-between gap-6">
                <p className="text-sm opacity-[0.7]">Fortbridge</p>
                <p>June 2024 - Present</p>
              </div>
              <h1 className="text-2xl font-bold">HUBSTACK</h1>
              <p>A fintech application to send money, pay bills and recharge your account </p>
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
        <p className="font-bold md:text-center text-primary uppercase text-[18px] mb-4">Portfolio</p>
        <p className="md:text-center md:text-[16px] text-[14px] font-medium">Here are some of my recent projects</p>

        <div className="md:columns-3 sm:columns-2 columns-1 gap-2 mt-10">
          {
            [
              { id: 0, title: "Bos Unlimited", href: "https://bosunlimited.netlify.app", img: "/images/BOS.png" },
              { id: 1, title: "Medox", href: "https://medox.vercel.app", img: "/images/Medox.png" },
              { id: 2, title: "Muse", href: "https://dribbble.com/shots/25074990-Muse-Musical-Instruments-Ecommerce-Exploration", img: "/images/Muse.png" },
              { id: 3, title: "Paperpilot", href: "https://paperpilothub.vercel.app", img: "/images/paperpilot.png" },
              { id: 4, title: "Blinks", href: "https://dribbble.com/shots/19444285-Checkout-page", img: "/images/blinks.png" },
              { id: 5, title: "Motara", href: "https://motara.netlify.app", img: "/images/motara.png" },
              { id: 6, title: "Mailme", href: "https://mailme.vercel.app", img: "/images/mailme.png" },
            ].map(project => (
              
              <ScrollAnimation key={project.id}  animateIn="fadeInUp" duration={2}>
                <div className="relative flex flex-col justify-between mb-2">
                  <Link href={project.href} className="relative w-full border border-gray-500/[0.2]">
                    <Image src={project.img} alt="bos" width={600} height={800} className="object-cover bg-primary/[0.2] bottom-0"/>
                  </Link>
                  <div className="absolute bottom-[1px] left-[1px] flex gap-2 w-full">
                    <h2 className="font-bold text-[16px] text-white p-3 py-1 w-fit bg-dark uppercase">{project.title}</h2>
                  </div>
                </div>
              </ScrollAnimation>
            ))
          }
        </div>
      </section>
    </div>
  );
}
