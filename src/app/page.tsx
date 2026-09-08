'use client'
import { Button } from "@/components/ui/button";
import "animate.css/animate.compat.css"
import ContactForm from "@/components/contactForm/form";
import { projects } from "@/data/projects";
import Projectcard from "@/components/projectCard/projectCard";
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image";
import { Cursor, PenNib, Rectangle, TextH } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import ScrollTextReveal from "@/components/animations/scroll-text-reveal";
import ScrollTextReveal2 from "@/components/animations/scroll-text-reveal2";
import CircleTextIcon from "@/assets/icons/CircleText";
import AnimateHeading from "@/components/animations/animateHeading";
import StopOnScroll from "@/components/animations/stop_on_scroll";
import HeroBg from "@/assets/heroBg";
import HeroBgMain from "@/assets/heroBgMain";
import FigmaIcon from "@/assets/figma";
import ComputerIcon from "@/assets/computer";
import HeroBgDev from "@/assets/heroBgDev";
import ScrollAnimate from "@/components/animations/scrollAnimation";
import Link from "next/link";

export default function Home() {
    const [theme, setTheme] = useState<string | null>("")
    const [active, setActive] = useState(0)

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
        <div className="py-[120px] min-h-[520px] flex md:flex-row flex-col items-center md:gap-12 gap-8 ">
          <div className="md:px-[6%] p-4 flex flex-col md:items-start items-center md:text-start text-center gap-1 md:w-[45%] pb-[2%]">
            <div className="flex items-center justify-center mb-6 md:ml-4">
              <CircleTextIcon className="absolute animate-spin-slow w-[120px] h-[120px] aspect-square object-cover rounded-full"/>   
              <Image src="/images/abel-2.png" alt="Abel Otegbola" width={80} height={80} className="aspect-square object-cover rounded-full"/>           
            </div>
            <AnimateHeading className="md:text-[36px] text-[24px] font-medium">Hello! I’m <span className="opacity-50">Abel Otegbola</span></AnimateHeading>
            <ScrollTextReveal className="md:text-[18px] md:w-[75%]">A UI Designer and Frontend Developer currently based in Nigeria</ScrollTextReveal>
            <div className="flex md:flex-row flex-col gap-4 w-full mt-4">
              <Link href={"/contact"} >
                <Button className="md:w-auto w-full rounded-full">Get in Touch</Button>
              </Link>
              <Link href="https://docs.google.com/document/d/1ptwRDTBu1FyDw7FCNfhjQqXNdP5G2YAr0U06p3_o4UU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button className="md:w-auto w-full rounded-full" variant="secondary">View Resume</Button>
              </Link>
            </div>
          </div>
          <div className="relative md:w-fit w-full flex flex-col items-center justify-center gap-12s text-black/[0.75] dark:text-white/[0.75] md:overfow-visible overflow-hidden">
            <HeroBg className="scale-110 opacity-[0.4]" />
            {
              active === 0 ? 
              <ScrollAnimate repeat={active === 0} animation="zoomIn"  className="absolute scale-110 text-white dark:text-[#0f0f0f] grayscale-50 hover:grayscale-0 duration-500 hover:cursor-pointer translate-y-[12px]">
                <HeroBgMain  />
              </ScrollAnimate>
            :
              <ScrollAnimate repeat={active === 0} animation="zoomIn" className="absolute scale-110 text-white dark:text-[#0f0f0f] grayscale-50 hover:grayscale-0 duration-500 hover:cursor-pointer translate-y-[12px]">
                <HeroBgDev  />
              </ScrollAnimate>
            }
            <div className="flex items-center gap-2 p-1 rounded-full bg-white dark:bg-[#0f0f0f] border border-[#8C8C8C12] shadow-[0px_3px_10px_0px_#10101012]">
              {
                [
                  { id: 0, icon: <Cursor size={16} /> },
                  { id: 1, icon: <Rectangle size={16} /> },
                  { id: 2, icon: <PenNib size={16} /> },
                  { id: 3, icon: <TextH size={16} /> },
                ].map(item => (
                  <button key={item.id} className={`flex items-center justify-center p-2 rounded-full hover:bg-gray-100 hover:dark:bg-[#212121] ${item.id === 0 ? "bg-gray-100 dark:bg-[#212121]": ""}`}>
                    {item.icon}
                  </button>
                ))
              }
              <div className="flex items-center gap-1 justify-center p-[2px] rounded-full bg-[#848484]/[0.2]">
                {
                [
                  { id: 0, icon: <FigmaIcon /> },
                  { id: 1, icon: <ComputerIcon /> },
                ].map(item => (
                  <button key={item.id} className={`flex items-center justify-center p-2 rounded-full hover:dark:text-white ${active !== item.id ? "": active === 0 ? "bg-[#0059FF] text-white" : "bg-green-500 text-white"}`} onClick={() => setActive(item.id)}>
                    {item.icon}
                  </button>
                ))
              }
              </div>
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
          <ScrollTextReveal2 className="md:text-[18px] md:w-[60%] w-full">
            I’m a designer and developer who turns complex ideas into clear, useful digital experiences. <br/>

            I work across product design and frontend development, combining design thinking with engineering to build products that are thoughtful, fast, and built to make an impact.<br />

            I’m constantly pushing my craft forward, learning from great products, and raising the standard of what I create.`
          </ScrollTextReveal2>

      </section>

      <section id="experience" className="px-4 py-[80px] md:px-[6%]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="flex flex-col gap-2 md:max-w-2xl">
            <AnimateHeading className="uppercase">Experience</AnimateHeading>
            <ScrollTextReveal className="text-[20px] font-medium md:text-[24px]">
              Building useful products with thoughtful interfaces and dependable frontend systems.
            </ScrollTextReveal>
          </div>

          <div className="flex flex-col border-t border-black/15 dark:border-white/15">
            {[
              {
                role: "Frontend Engineer",
                company: "Kokohub",
                type: "Remote Contract",
                dates: "Jan 2026 - Mar 2026",
                details: [
                  "Delivered the frontend for a multi-category marketplace spanning gadgets, phones, vehicles, properties, repair services, and vendor listings.",
                  "Architected responsive and reusable interfaces with React, Next.js, and TypeScript across browsing, search, listings, and marketplace interactions.",
                ],
              },
              {
                role: "Technical Team Lead",
                company: "Campuxmart",
                type: "Remote",
                dates: "Jan 2025 - Sep 2025",
                details: [
                  "Led the technical development and launch of a student marketplace connecting 300+ vendors and buyers, taking the product from concept through production.",
                  "Architected core e-commerce workflows including vendor onboarding, product management, authentication, and secure transactions with Next.js, TypeScript, and Firebase.",
                ],
              },
              {
                role: "Frontend Engineer",
                company: "Fortbridge",
                type: "Remote",
                dates: "May 2024 - Jan 2025",
                details: [
                  "Delivered production-ready frontend applications for client products including Hubstack, a fintech platform, and Bakr, a bakery management solution.",
                  "Built responsive and reusable interfaces with React, Next.js, and TypeScript, contributing to 1,000+ transactions on Hubstack and supporting Bakr's adoption by bakery businesses.",
                ],
              },
              {
                role: "Frontend Engineer",
                company: "Landalearn",
                type: "EdTech Startup · Remote",
                dates: "Sep 2023 - Mar 2024",
                details: [
                  "Developed and shipped responsive production interfaces that strengthened the startup's digital presence and supported customer acquisition.",
                  "Built the company's website and a multi-step waitlist system with React and TypeScript, streamlining lead capture and onboarding.",
                ],
              },
            ].map((experience) => (
              <article key={`${experience.company}-${experience.dates}`} className="grid gap-5 border-b border-black/15 py-8 dark:border-white/15 md:grid-cols-[minmax(190px,0.7fr)_2fr] md:gap-10">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">{experience.role}</p>
                  <p className="text-black/60 dark:text-white/60">{experience.company}</p>
                  <p className="text-sm text-black/45 dark:text-white/45">{experience.type}</p>
                  <p className="mt-2 text-sm text-black/55 dark:text-white/55">{experience.dates}</p>
                </div>
                <ul className="flex list-disc flex-col gap-3 pl-5 text-black/70 dark:text-white/70">
                  {experience.details.map((detail) => (
                    <li key={detail} className="leading-7">{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
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
            <ScrollTextReveal className="md:text-[24px] text-[20px] w-full font-medium">
              <span className="opacity-75">Designing</span> and <span className="opacity-75">Building</span> <br /> Excellent Digital Experiences
            </ScrollTextReveal>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-4 gap-y-16 md:px-[6%] px-4">
          {
            projects.slice(0,12)?.map(project => (
              <StopOnScroll  key={project.id}>
                <Projectcard project={project} />
              </StopOnScroll>
            ))
          }
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#212121] px-4 py-[80px] text-white md:px-[6%]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="flex flex-col gap-2 md:max-w-2xl">
            <AnimateHeading className="uppercase">Testimonials</AnimateHeading>
            <ScrollTextReveal className="text-[20px] font-medium md:text-[24px]">
              A few words from people I&apos;ve had the pleasure of working with.
            </ScrollTextReveal>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                quote: "Abel brought clarity to a complicated product and turned our ideas into an interface that felt effortless to use.",
                name: "Harry Udechukwu",
                role: "Product Lead, Ptrl",
                initials: "HU",
              },
              {
                quote: "The attention to detail was exceptional. Every interaction felt considered, and the final build was fast and reliable.",
                name: "Daniel Reed",
                role: "Founder, Fieldnote",
                initials: "DR",
              },
              {
                quote: "Working with Abel felt like having a designer and engineer in one room. He understood the vision and made it better.",
                name: "Ashish B Singh",
                role: "Founder, Nepalbestdeals",
                initials: "AS",
              },
            ].map((testimonial) => (
              <figure key={testimonial.name} className="flex h-full flex-col justify-between gap-8 border border-white/15 bg-white/[0.04] p-6">
                <blockquote className="text-[17px] leading-7 text-white/80">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <figcaption className="flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-white text-xs font-bold text-[#212121]">
                    {testimonial.initials}
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-semibold">{testimonial.name}</span>
                    <span className="text-sm text-white/50">{testimonial.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="flex flex-col gap-6 py-[60px]">
        
        <div className="xl:px-[25%] lg:px-[20%] md:px-[15%] px-4 py-[60px]">
          <div className="flex flex-col gap-2 justify-center items-center text-center mb-8">
            <ScrollTextReveal className="uppercase">Contact me</ScrollTextReveal>
            <AnimateHeading className="md:text-[24px] text-[20px] w-full font-medium">
              Let&apos;s <span className="opacity-75">Build</span> Something Great.
            </AnimateHeading>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
