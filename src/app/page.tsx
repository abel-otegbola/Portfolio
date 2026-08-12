'use client'
import Button from "@/components/button/button";
import "animate.css/animate.compat.css"
import ContactForm from "@/components/contactForm/form";
import { projects } from "@/data/projects";
import Projectcard from "@/components/projectCard/projectCard";
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image";
import { Briefcase, DribbbleLogo, Envelope, GithubLogo, Laptop, LinkedinLogo, UserCheck, XLogo } from "@phosphor-icons/react";
import AnimateText from "@/components/animations/animateText";
import Animate from "@/components/animations/animate";
import Cal from "@calcom/embed-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import ScrollTextReveal from "@/components/animations/scroll-text-reveal";

export default function Home() {
    const [theme, setTheme] = useState<string | null>("")

    useEffect(() => {
      setTheme(localStorage.getItem("theme"))
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }, [theme])

  return (
    <div>
      <header className="xl:px-[15%] lg:px-[10%] md:px-[10%] flex flex-col justify-between gap-4 py-[10%] bg-cover bg-center bg-no-repeat">
        <h1 className="md:text-[64px] leading-[100%] font-semibold">Design, Develop and Ship</h1>
        <p className="md:text-[20px] w-[75%]">I am a UI/UX designer and frontend developer who creates awesome digital experiences for individuals, startups and businesses.</p>
      </header>
         
      {/* <ul className="w-fit l py-2">
          <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://dribbble.com/Abel_Otegbola" className="p-4 border border-gray-500/40 rounded-full"><DribbbleLogo size={18}/></Link>
              <Link href="https://github.com/abel-otegbola" className="p-4 border border-gray-500/40 rounded-full"><GithubLogo size={18}/></Link>
              <Link href="https://x.com/Abel_Otegbola" className="p-4 border border-gray-500/40 rounded-full"><XLogo size={18}/></Link>
              <Link href="https://linkedin.com/in/abel-otegbola" className="p-4 border border-gray-500/40 rounded-full"><LinkedinLogo size={18}/></Link>
              <Link href="mailto:abel.d.otegbola@gmail.com" className="p-4 border border-gray-500/40 rounded-full"><Envelope /></Link>
          </div>
      </ul> */}

      <section className="overflow-hidden">
        {/* Infinite slider: duplicate the items for seamless scroll */}
        {/* <div className="projects-slider">
          <div className="projects-slider-track">
            {
              // original list duplicated for seamless loop
              (["flashnotes", "crypto-dashboard-ui", "muse-light"] as string[]).concat(["flashnotes", "crypto-dashboard-ui", "muse-light"]).map((project, idx) => (
                <div key={project + "-" + idx} className="projects-slider-item relative overflow-hidden">
                  <div className="relative w-full h-full md:rounded-t-[8px] block">
                    <Image src={"/images/" + project + ".webp"} alt={project} width={1200} height={1000} className="object-cover w-full h-full"/>
                  </div>
                </div>
              ))
            }
          </div>
        </div> */}
      </section>

      
      <section id="projects" className="py-16 dark:bg-[#202020]/40">
        <div className="mt-[60px] flex flex-col items-center gap-2 xl:px-[15%] lg:px-[10%] md:px-[10%] px-4">
          <Animate type="slideDown">
            <p className="flex items-center text-[14px] gap-2 px-4 py-2 bg-gray-500/[0.08] rounded w-fit">
              <Briefcase weight="duotone"/>
              My Works
            </p>
          </Animate>
          <Animate type="blurIn">
            <p className="font-medium text-lg text-center mb-6">Here are some of my recent works</p>
          </Animate>
          <div className="flex flex-col gap-16">
          {
            projects.slice(0,12)?.map(project => (
              <Animate type="blurIn"  key={project.id}>
                <Projectcard project={project} />
              </Animate>
            ))
          }
          </div>
        </div>
      </section>

      <section id="contact" className="flex flex-col gap-6 py-[60px] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-center gap-4 text-[12px] xl:px-[15%] md:px-[10%] px-4">
          <Animate type="slideDown">
            <p className="flex items-center text-[14px] gap-2 px-4 py-2 bg-gray-500/[0.08] rounded w-fit">
              <Envelope weight="duotone"/>
              Contact me
            </p>
          </Animate>
          <Animate type="blurIn">
            <p className="font-medium text-lg text-center">Let&apos;s Build Something Great Together</p>
          </Animate>
        </div>
        <div className="xl:px-[15%] md:px-[10%] px-4">
          <div>
            <Cal
              calLink="abel-otegbola/30min"
              calOrigin="https://cal.com"
              config={{ layout: "month_view", theme: theme === "dark" ? "dark" : "light" }}
              className="w-full overflow-auto bg-transparent max-h-[460px]"
            />
            </div>
        </div>
        <div className="xl:px-[25%] lg:px-[20%] md:px-[15%] px-4 bg-white dark:bg-black/80">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
