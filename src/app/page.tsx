'use client'
import { Button } from "@/components/ui/button";
import "animate.css/animate.compat.css"
import ContactForm from "@/components/contactForm/form";
import { projects } from "@/data/projects";
import Projectcard from "@/components/projectCard/projectCard";
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image";
import { Briefcase, DribbbleLogo, Envelope, GithubLogo, Laptop, LinkedinLogo, UserCheck, XLogo } from "@phosphor-icons/react";
import Animate from "@/components/animations/animate";
import Cal from "@calcom/embed-react";
import { useEffect, useState } from "react";
import ScrollTextReveal from "@/components/animations/scroll-text-reveal";
import ScrollTextReveal2 from "@/components/animations/scroll-text-reveal2";
import Header from "@/components/header/header";
import CircleTextIcon from "@/assets/icons/CircleText";
import AnimateHeading from "@/components/animations/animateHeading";

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
      
      <header className="">
        <Header />
        <div className="md:px-[6%] p-4 py-[40px] min-h-[560px] flex md:flex-row flex-col items-center md:gap-24 gap-8 ">
          <div className="relative w-fit text-black/[0.75] dark:text-white/[0.75]">
            <div className="absolute flex items-center justify-center bottom-3 right-3">
              <CircleTextIcon className="absolute w-[120px] h-[120px] aspect-square object-cover rounded-full"/>   
              <Image src="/images/abel-memoji.png" alt="Abel Otegbola" width={80} height={80} className="aspect-square object-cover rounded-full"/>           
            </div>
            <Image src="/images/abel-2.png" alt="Abel Otegbola" width={320} height={320} className="aspect-square object-cover rounded-full"/>
          </div>
          <div className="flex flex-col md:items-start items-center md:text-start text-center gap-2 md:w-[45%] md:pl-[5%]">
            <AnimateHeading className="md:text-[36px] text-[24px]">Hello! I’m <span className="opacity-50">Abel Otegbola</span></AnimateHeading>
            <ScrollTextReveal className="md:text-[24px] text-[18px]">A UI Designer and Frontend Developer currently based in Nigeria</ScrollTextReveal>
            <ScrollTextReveal className="">Creating great experiences for digital products</ScrollTextReveal>
            <div className="flex md:flex-row flex-col gap-4 w-full mt-4">
              <Button className="md:w-auto w-full rounded-full">Get in Touch</Button>
              <Button className="md:w-auto w-full rounded-full" variant="secondary">View Resume</Button>
            </div>
          </div>
          </div>
      </header>

      {/* ========== MARQUEE ========== */}
      {/* <section className="py-4 bg-[#212121] text-white overflow-hidden md:mt-0 mt-12">
          <div className="marquee-track">
              {[0, 1].map((rep) => (
                  <div key={rep} className="marquee-group flex items-center">
                      {["Build", "Design", "Code", "Digital", "Ship", "UI/UX"].map((item, i) => (
                          <div key={`${rep}-${i}`} className="flex items-center gap-20 px-10">
                              <span className="text-sm md:text-lg font-semibold whitespace-nowrap uppercase">{item}</span>
                              < />
                          </div>
                      ))}
                  </div>
              ))}
          </div>
      </section> */}

      <section className="flex justify-between lg:px-[6%] md:px-[3%] px-4 bg-[#212121] text-white md:py-[60px] py-12 gap-4 flex-col md:flex-row">
        <div className="">
          <AnimateHeading className="uppercase">About me</AnimateHeading>
        </div>
          <ScrollTextReveal2 className="md:text-[18px] md:w-[65%] w-full">
            I’m a product-focused designer and developer who turns complex ideas into clear, useful digital experiences. <br/>

            I work across product design, frontend development, and digital exper`iences, combining design thinking with engineering to build products that are thoughtful, fast, and built to make an impact.<br />

            I’m constantly pushing my craft forward, learning from great products, and raising the standard of what I create.`
          </ScrollTextReveal2>

      </section>
         
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

      
      <section id="projects" className="py-16">
        <div className="mt-[60px] flex flex-col items-center gap-2">
          <div className="flex flex-col gap-2 justify-center items-center text-center mb-8">
            <AnimateHeading className="uppercase">Selected works</AnimateHeading>
            <ScrollTextReveal className="md:text-[24px] text-[20px] w-full">
              <span className="opacity-75">Designing</span> and <span className="opacity-75">Building</span> <br /> Excellent Digital Experiences
            </ScrollTextReveal>
          </div>
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
