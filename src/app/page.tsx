'use client'
import Button from "@/components/button/button";
import CircleIcon from "../assets/circle";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Code, Compass } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="">
      <header className="flex md:min-h-[88vh] min-h-[50vh] items-center flex-wrap md:px-[6%] px-4">
        <div className="flex flex-col font-light md:py-0 py-10">
          <CircleIcon className="dark:text-white text-black" />
          <h1 className="mt-4 flex flex-wrap items-center gap-4 md:text-[48px] text-[32px]">Hi! My Name is <span className="p-4 py-2 rounded-full border border-black text-black sm:text-[24px] text-[16px] uppercase bg-secondary">Abel Otegbola</span></h1>
          <h2 className="flex flex-wrap items-center gap-4 md:text-[48px] text-[32px]">A Designer <span className="p-4 py-1 rounded-full border border-black text-black text-[24px] uppercase bg-secondary">&</span> Developer</h2>
          <p className="my-8">Turning Ideas into Pixel-perfect Realities</p>
          <Button href="/contact" className="rounded-full items-center gap-4 pr-1 border border-black py-6 uppercase text-[14px] font-bold text-black">
            Let&apos;s chat
            <span className="h-[36px] w-[36px] bg-white rounded-full flex justify-center items-center border border-black">
              <ArrowRight weight="fill" color="black" />
            </span>
          </Button>

          <div className="flex gap-6 items-center mt-10">
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

        <div className="md:absolute lg:flex items-end justify-center p-[5%] hidden top-0 right-0 w-[36%] h-[100%] bg-secondary dark:bg-secondary/[0.3] z-[-1]">
          <Button href="/contact" className="rounded-full items-center gap-4 pr-1 bg-secondary border border-black py-4 uppercase text-[14px] font-bold text-black">
            It takes more power to build 
            <span className="h-[30px] w-[30px] bg-white rounded-full flex justify-center items-center border border-black"><ArrowUpRight /></span>
          </Button>
        </div>
      </header>

      <section className="md:p-[6%] md:py-[10%] py-10 bg-black dark:bg-[#101010] text-white/[0.8] flex justify-between flex-wrap gap-8">
        <div className="flex flex-col gap-10 md:w-[50%] w-full">
          <div className="flex flex-col gap-4 py-6 md:px-8 px-4 border border-white/[0.2]">
            <h2 className="flex items-center justify-between gap-4 uppercase">
              Design
              <span className="h-[30px] w-[30px] bg-primary text-black rounded-full flex justify-center items-center border border-black"><Compass weight="fill"/></span>
            </h2>
            <p className="text-[14px]">Create digital products with unique ideas</p>
            <Button href="/contact" className="rounded-full items-center gap-4 bg-transparent border border-white/[0.3] py-4 uppercase text-[10px] font-bold">
              5 Projects
            </Button>
          </div>
          <div className="flex flex-col gap-4 py-6 md:px-8 px-4 border border-white/[0.2]">
            <h2 className="flex items-center justify-between gap-4 uppercase">
              Frontend
              <span className="h-[30px] w-[30px] bg-primary text-black rounded-full flex justify-center items-center border border-black"><Code /></span>
            </h2>
            <p className="text-[14px]">Develop clean, responsive, optimized websites</p>
            <Button href="/contact" className="rounded-full items-center gap-4 bg-transparent border border-white/[0.3] py-4 uppercase text-[10px] font-bold">
              10 Projects
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:px-[6%] px-4 md:w-[40%]">
          <h1 className="md:text-[36px] text-[28px]">ABOUT ME</h1>
          <p className="font-bold italic">Every great design begins with an even greater story</p>
          <p>Since beginning my journey as a designer and developer, I&apos;ve done remote work for agencies, consulted for startups and collaborated with talented people to create digital products for both businesses and consumer use.</p>
        </div>
      </section>

      
      <section className="md:p-[6%] md:py-[10%] p-4 py-10">
        <h1 className="md:text-[78px] text-[36px] font-light">Recent Projects</h1>
        <p>Here are few of my recent projects.</p>
        <div className="flex gap-1 items-center py-6">
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
            <div className="relative h-[400px]">
              <Image src="/images/BOS.png" alt="bos" fill sizes="100%" className="object-cover bottom-0"/>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between gap-4 p-6 border border-black dark:border-white/[0.3] bg-secondary text-black">
              <h2>MUSE</h2>
              
              <Button href="https://muse-iota.vercel.app" className="rounded-full items-center gap-4 bg-transparent border border-black py-4 uppercase text-[14px] font-bold text-black ">
                View Project
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image src="/images/Muse.png" alt="bos" fill sizes="100%" className="object-cover bottom-0"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
