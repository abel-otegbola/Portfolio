'use client'
import Button from "@/components/button/button";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { navTab } from "@/components/header/header";
import Tab from "@/components/tab/tab";
import Link from "next/link";

export default function Home() {
  const navTabs: navTab[] = [
    { id: 0, label: "Services", to: "#services" },
    { id: 1, label: "Projects", to: "#projects" },
    { id: 2, label: "Skills", to: "#skills"},
    { id: 3, label: "Contacts", to: "#contacts"},
]

  return (
    <div className="">
      <header className="flex md:min-h-[88vh] min-h-[50vh] items-center flex-wrap md:px-[8%] px-4">
        <div className="flex flex-col font-light md:py-0 py-10">
          <h1 className="mt-4 flex flex-wrap items-center gap-4 font-light md:-ml-3 -ml-2 md:text-[168px] leading-[100%] text-[100px]">Hello</h1>
          <h2 className="md:w-[60%] w-[85%] mb-6">My Name is <span className="font-bold">Abel Otegbola</span>, a designer and developer. Turning Ideas into Pixel-perfect Realities</h2>
          <a href="#contacts" className="flex items-center gap-2 uppercase text-primary font-bold" >Let&apos;s chat</a>

          <div className="flex gap-6 items-center mt-20">
            <div className="flex gap-2 items-center w-[100px] uppercase text-[12px]">
              <h2 className="text-[36px]">4</h2>
              <p>years experience</p>
            </div>
            <div className="flex gap-2 items-center w-[200px] uppercase text-[12px]">
              <h2 className="text-[36px]">20</h2>
              <p>Awesome Projects Completed</p>
            </div>
          </div>
        </div>

        <div className="md:absolute lg:flex items-end justify-center p-[5%] hidden top-0 right-0 w-[40%] h-[100%] bg-gray-200 dark:bg-secondary/[0.3] z-[-1]">
          <Button href="#projects" className="rounded-full items-center gap-4 pr-1 bg-transparent border border-black py-4 uppercase text-[12px] font-bold text-black">
            It takes more power to build 
            <span className="h-[30px] w-[30px] bg-white rounded-full flex justify-center items-center border border-black"><ArrowUpRight /></span>
          </Button>
        </div>
      </header>

      <section className="md:p-[8%] md:py-[10%] p-4 py-10 bg-black dark:bg-[#000] text-white/[0.8] flex justify-between flex-wrap gap-8">
        <div className="flex flex-col gap-2 md:w-[50%] w-full">
          <div className="flex flex-col gap-4 pb-6">
            <h2 className="flex items-center justify-between text-[28px] gap-4 uppercase">
              Design
            </h2>
            <p className="text-[14px]">Create digital products with unique ideas</p>
          </div>
          <div className="flex flex-col gap-4 py-6">
            <h2 className="flex items-center justify-between text-[28px] gap-4 uppercase">
              Frontend
            </h2>
            <p className="text-[14px]">Develop clean, responsive, optimized websites</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:px-[6%] md:w-[40%]">
          <h1 className="md:text-[36px] text-[28px]">ABOUT ME</h1>
          <p className="font-bold italic">Every great design begins with an even greater story</p>
          <p>Since beginning my journey as a designer and developer, I&apos;ve done remote work for agencies, consulted for startups and collaborated with talented people to create digital products for both businesses and consumer use.</p>
        </div>
      </section>

      
      <section className="md:p-[8%] md:py-[10%] p-4 py-10">
        <h1 className="md:text-[78px] text-[36px] font-light">Recent Projects</h1>
        <p>Explore my recent design and development projects.</p>
        <div className="flex gap-1 items-center py-6" id="projects">
          <Button href="/contact" className="rounded-full items-center gap-4 bg-transparent border border-black dark:border-white/[0.4] py-4 uppercase text-[14px] font-bold text-black dark:text-white">
            All
          </Button>
          <Button href="/contact" className="rounded-full items-center gap-4 bg-transparent border border-black dark:border-white/[0.4] py-4 uppercase text-[14px] font-bold text-black dark:text-white">
            Design
          </Button>
          <Button href="/contact" className="rounded-full items-center gap-4 bg-transparent border border-black dark:border-white/[0.4] py-4 uppercase text-[14px] font-bold text-black dark:text-white">
            Frontend
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div className="">
            <div className="flex items-center justify-between gap-4 p-6 border border-black dark:border-white/[0.3] bg-primary text-black">
              <h2>BOS UNLIMITED</h2>
              
              <Button href="https://bosunlimited.netlify.app" className="rounded-full items-center gap-4 bg-transparent border border-black py-4 uppercase text-[14px] font-bold text-black ">
                View Project
              </Button>
            </div>
            <div className="relative">
              <Image src="/images/BOS.png" alt="bos" width={700} height={400} className="object-cover bottom-0"/>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between gap-4 p-6 border border-black dark:border-white/[0.3] bg-secondary text-black">
              <h2>MUSE</h2>
              
              <Button href="https://muse-iota.vercel.app" className="rounded-full items-center gap-4 bg-transparent border border-black py-4 uppercase text-[14px] font-bold text-black ">
                View Project
              </Button>
            </div>
            <div className="relative">
              <Image src="/images/Muse.png" alt="muse" width={700} height={400} className="object-cover bottom-0"/>
            </div>
          </div>
          
          <div className="">
            <div className="flex items-center justify-between gap-4 p-6 border border-black dark:border-white/[0.3] bg-[#95CCFF] text-black">
              <h2>MEDOX</h2>
              
              <Button href="https://medox.vercel.app" className="rounded-full items-center gap-4 bg-transparent border border-black py-4 uppercase text-[14px] font-bold text-black ">
                View Project
              </Button>
            </div>
            <div className="relative">
              <Image src="/images/Medox.png" alt="medox" width={700} height={400} className="object-cover bottom-0"/>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-wrap justify-between gap-8 bg-black text-white/[0.8] md:p-[6%] py-8">
        <nav className="flex items-center justify-between gap-4">
            {
                navTabs.map((tab: navTab) => (
                    <Tab key={tab.id} label={tab.label} to={tab.to} />
                ))
            }
        </nav>
        <Link className="md:text-[38px] text-[20px] p-4" href="mailto:abel.d.otegbola@gmail.com">ABEL.D.OTEGBOLA@GMAIL.COM</Link>
      </footer>
    </div>
  );
}
