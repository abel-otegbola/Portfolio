'use client'
import Button from "@/components/button/button";
import Image from "next/image";
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
      <header className="flex md:min-h-[88vh] min-h-[50vh] items-center flex-wrap md:px-[8%] px-4 mb-10">
        <div className="flex flex-col gap-6 justify-center md:items-center md:py-0 py-10 md:w-[75%] mx-auto">
          <div className="relative">
            <Image src="/images/abel.png" alt="muse" width={100} height={100} className="object-cover bottom-0"/>
          </div>
          <h1 className="md:text-center flex md:items-center gap-2">
            <div className="relative">
              <Image src="/images/waving.svg" alt="muse" width={24} height={24} className="object-cover bottom-0"/>
            </div>
            Hi! I&apos;m Abel Otegbola
          </h1>
          <h2 className="md:text-[64px] text-[32px] leading-[120%] font-bold md:text-center">Transforming Ideas into Pixel Perfect Realities</h2>
          <p className="font-bold md:text-center">I Design, Code and Build Excellent Website Projects</p>
          
          <Button className="font-bold rounded-full px-12 py-6">Let&apos;s chat</Button>

        </div>
      </header>

      <section className="md:p-[8%] md:py-[10%] p-4 py-20 bg-[#1C1C1C] text-white/[0.8] flex justify-between items-center flex-wrap gap-[60px]">
        <div className="flex flex-col gap-2 md:w-[40%] w-full">
          <p className="font-bold md:text-[32px] text-[24px]">Every great design begins with an even greater story</p>
          <div className="flex gap-6 items-center mt-6">
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

        <div className="flex flex-col gap-6 md:px-[6%] md:w-[50%]">
          <p className="font-bold text-primary uppercase text-[18px]">About me</p>
          <p>Since beginning my journey as a designer and developer, I&apos;ve done remote work for agencies, consulted for startups and collaborated with talented people to create digital products for both businesses and consumer use.</p>
        </div>
      </section>

      
      <section className="md:p-[8%] py-[60px] p-4">
          <p className="font-bold text-primary uppercase text-[18px] mb-4">Work experiences</p>
          <p className="md:text-[36px] text-[24px] font-bold">Explore My Design and Development Journey</p>


          <div className="flex flex-col gap-6 pt-12">
            {
              [
                { id: 0, company: "Fortbridge", date: "June 2024 - present", position: "Frontend developer", description: "Fintech, Website development, Responsive", tools: ["Next.Js", "React.Js", "Tailwind.css"] },
                { id: 1, company: "BOS Unlimited", date: "January 2024 - present", position: "Frontend Developer, UI/UX Designer", description: "Ecommerce, Website development, Responsive", tools: ["Figma", "Next.Js", "Tailwind.css"] },
                { id: 2, company: "Xatalyst lab", date: "September 2023 - November 2023", position: "Frontend Developer Intern", description: "Fitness startup, Website development, Responsive", tools: ["Next.Js", "React.Js", "Tailwind.css"] },
              ].map(experience => (
                <div key={experience.id} className="flex flex-wrap gap-6 items-center justify-between py-6 border-y border-gray-500/[0.3]">
                  <div className="flex flex-col gap-2 md:w-[25%] w-full">
                    <h2 className="md:text-[20px] text-[16px] font-bold uppercase">{experience.company}</h2>
                    <p className="font-light">{experience.date}</p>
                  </div>
                  <div className="flex flex-col gap-2 md:w-[30%] w-full">
                    <h2 className="text-[16px] font-bold">{experience.position}</h2>
                    <p className="font-light">{experience.description}</p>
                  </div>
                  <div className="flex items-center flex-wrap gap-2 md:w-[35%] w-full">
                    {
                      experience.tools.map((tool: string, i: number) => (
                        <Button key={i} variant="secondary" className="p-4 py-2 rounded-full border-gray-500/[0.2] text-gray-500 text-[12px]">{tool}</Button>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
      </section>

      <section className="md:p-[8%] py-[60px] p-4 pb-10">
        <p className="font-bold md:text-center text-primary uppercase text-[18px] mb-4">Portfolio</p>
        <p className="md:text-center md:text-[36px] text-[24px] font-bold">Recent Projects</p>

        <div className="flex gap-1 md:justify-center items-center py-6" id="projects">
          <Button href="/contact" className="rounded-full border-gray-500/[0.3] text-gray-500" variant="secondary">
            All
          </Button>
          <Button href="/contact" className="rounded-full border-gray-500/[0.3] text-gray-500" variant="secondary">
            Design
          </Button>
          <Button href="/contact" className="rounded-full border-gray-500/[0.3] text-gray-500" variant="secondary">
            Frontend
          </Button>
        </div>

        {/* <div className="grid md:grid-cols-2 gap-8 mt-6">
          {
            [
              { id: 0, title: "Bos Unlimited", href: "https://bosunlimited.netlify.app", img: "/images/BOS.png" },
              { id: 1, title: "Muse", href: "https://muse-iota.vercel.app", img: "/images/Muse.png" },
              { id: 2, title: "Medox", href: "https://medox.vercel.app", img: "/images/Medox.png" },
            ].map(project => (
              <div key={project.id} className="border border-gray-500/[0.2]">
                <div className="relative h-[400px] w-full">
                  <Image src={project.img} alt="bos" width={600} height={300} className="object-cover bottom-0"/>
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <h2 className="uppercase font-bold text-[24px]">{project.title}</h2>
                  <Link href={project.href}>View project</Link>
                </div>
              </div>
            ))
          }
        </div> */}
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
