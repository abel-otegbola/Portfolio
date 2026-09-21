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
import AbelText from "@/assets/icons/abel";

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
      
      <header className="bg-[#FBFBFB] dark:bg-[#121212] lg:px-[5%] p-4 md:py-[6%] py-[100px] w-full md:mx-auto flex flex-col justify-center items-center text-center gap-4">
        <div className="flex flex-col justify-center items-center text-center gap-2 py-[40px] sm:px-[10%] w-full">
          <div className="flex items-center justify-center mb-6">
            <CircleTextIcon className="absolute animate-spin-slow w-[120px] h-[120px] aspect-square object-cover rounded-full"/>   
            <Image src="/images/abel-2.png" alt="Abel Otegbola" width={80} height={80} className="aspect-square object-cover rounded-full"/>           
          </div>
          <AnimateHeading repeat={true} tag="h1" delay={0.4} className="font-medium xl:text-[4em] lg:text-[3.5em] sm:text-[3em] text-[38px] leading-[110%] tracking-[-2%]">
            <span className="text-primary opacity-50">Creative </span> <br /> Design Engineer
          </AnimateHeading>
          <ScrollTextReveal repeat={true} tag="p" delay={0.6} className="my-4 md:w-[55%] mx-auto opacity-75">
            My name is Abel Otegbola. An expert <span className="text-primary opacity-50">UI/UX Designer</span> and <span className="text-primary opacity-50">Frontend Developer</span>. <br />
            I turn complex ideas into clear, useful digital experiences.
          </ScrollTextReveal>
          <div className="flex md:flex-row flex-col items-center justify-center gap-4 w-full">
            <Link href="/contact" className={"sm:w-fit w-full"}>
                <Button  size={"sm"} className={"sm:w-fit w-full"} >
                    Get in Touch
                </Button>
            </Link>
            <Link className={"sm:w-fit w-full"} href="https://docs.google.com/document/d/1ptwRDTBu1FyDw7FCNfhjQqXNdP5G2YAr0U06p3_o4UU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button variant={"outline"} size={"sm"} className={"sm:w-fit w-full"} >
                    Download Resume
                </Button>
            </Link>
          </div>
        </div>
      </header>

      <section id="experience" className="px-4 py-[80px] lg:px-[15%] sm:px-[10%] bg-[#f3f3f3] dark:bg-[#212121]">
        <div className="mx-auto flex flex-col gap-10">
          <div className="flex justify-center gap-2 text-center">
            <AnimateHeading className="uppercase">Experience</AnimateHeading>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                role: "Frontend Engineer",
                company: "Kokohub",
                type: "Remote Contract",
                dates: "Jan 2026 - Mar 2026",
                details: [
                  "Delivered the frontend for a multi-category marketplace spanning gadgets, phones, vehicles, properties, repair services, and vendor listings.",
                ],
              },
              {
                role: "Technical Team Lead",
                company: "Campuxmart",
                type: "Remote",
                dates: "Jan 2025 - Sep 2025",
                details: [
                  "Led the technical development and launch of a student marketplace connecting 300+ vendors and buyers, taking the product from concept through production.",
                ],
              },
              {
                role: "Frontend Engineer",
                company: "Fortbridge",
                type: "Remote",
                dates: "May 2024 - Jan 2025",
                details: [
                  "Delivered production-ready frontend applications for client products including Hubstack, a fintech platform, and Bakr, a bakery management solution.",
                ],
              },
            ].map((experience) => (
              <article key={`${experience.company}-${experience.dates}`} className="grid gap-5 p-4 rounded-lg bg-white dark:bg-[#121212] md:grid-cols-[minmax(190px,0.7fr)_2fr] md:gap-10">
                <div className="flex flex-col gap-1 justify-between">
                  <p className="font-semibold">{experience.role}</p>
                  <p className="text-sm opacity-50">{experience.company}</p>
                </div>
                <ul className="flex flex-col gap-3 opacity-75">
                  {experience.details.map((detail) => (
                    <li key={detail} className="leading-7">{detail}</li>
                  ))}
                  <p className="text-sm opacity-50">{experience.dates}</p>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <section id="projects" className="py-16">
        <div className="mt-[60px] flex flex-col items-center gap-2">
          <div className="flex flex-col gap-2 justify-center items-center text-center mb-8">
            <AnimateHeading className="uppercase">Selected works</AnimateHeading>
            <ScrollTextReveal className="md:text-[24px] text-[20px] w-full font-medium">
              <span className="opacity-75">Designing</span> and <span className="opacity-75">Building</span> <br /> Excellent Digital Experiences
            </ScrollTextReveal>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-4 gap-y-16 lg:px-[15%] md:px-[10%] px-4">
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

      <section id="testimonials" className="px-4 py-[80px] lg:px-[15%] sm:px-[10%]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="flex flex-col gap-2 text-center">
            <AnimateHeading className="uppercase">Testimonials</AnimateHeading>
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
              <figure key={testimonial.name} className="flex h-full bg-[#fbfbfb] dark:bg-[#101010] flex-col justify-between gap-4 border border-gray-500/[0.1] p-4 rounded-lg">
                <blockquote className="opacity-75">{testimonial.quote}</blockquote>
                <figcaption className="flex items-center gap-3 border-t border-gray-500/[0.1] pt-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-[#212121] text-xs font-medium">
                    {testimonial.initials}
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-semibold">{testimonial.name}</span>
                    <span className="text-sm opacity-50">{testimonial.role}</span>
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
