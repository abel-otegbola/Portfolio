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
        <header className="flex md:min-h-[88vh] min-h-[50vh] items-center flex-wrap md:px-[8%] px-4 overflow-hidden">
          <div className="flex flex-col gap-4 justify-center md:items-center py-20 md:w-[75%] mx-auto">
            
            <ScrollAnimation animateIn="zoomIn">
              <div className="relative">
                <Image src="/images/abel.png" alt="muse" width={70} height={70} className="object-cover bottom-0 outline outline-primary/[0.2] rounded-full outline-offset-2"/>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="backInDown">
              <h1 className="md:text-center flex md:items-center gap-2 p-2 px-4 w-fit rounded-full dark:bg-black/[0.2] border border-gray-500/[0.2] text-semibold backdrop-blur-sm">
                <div className="relative">
                  <Image src="/images/waving.svg" alt="muse" width={24} height={24} className="object-cover bottom-0"/>
                </div>
                Hi! I&apos;m Abel Otegbola
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="backInUp" duration={2}>
              <h2 className="md:text-[48px] text-[32px] leading-[120%] font-bold md:text-center">Transforming Ideas into Pixel Perfect Realities</h2>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="backInUp">
              <p className="font-medium md:text-center">I Design, Code and Build Excellent Website Projects</p>
            </ScrollAnimation>
            
            <Button href="#contacts" className="font-medium rounded-full px-12 py-6">Let&apos;s chat</Button>

          </div>
          <ScrollAnimation animateIn="zoomIn">
            <video width="100%" height="100%" controls autoPlay loop className="mx-auto md:my-12 mb-12 rounded-[10px]">
              <source src="/BOS.mp4" type="video/mp4" />
              <source src="/BOS.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </ScrollAnimation>
        </header>
      </div>

      <section className="md:p-[8%] md:py-[10%] p-4 py-20 bg-[#1C1C1C] text-white/[0.8] flex justify-between items-center flex-wrap gap-[60px]">
        <div className="flex flex-col gap-2 md:w-[40%] w-full">
          
          <ScrollAnimation animateIn="backInDown" duration={2}>
            <p className="font-bold md:text-[32px] text-[24px]">Every great design begins with an even greater story</p>
          </ScrollAnimation>

          <div className="flex gap-6 items-center mt-6">
            <div className="flex gap-2 items-center w-[100px] uppercase text-[12px]">
            
              <ScrollAnimation animateIn="backInLeft" duration={2}>
                <h2 className="text-[36px]">4</h2>
              </ScrollAnimation>
              
              <ScrollAnimation animateIn="backInUp" duration={2}>
                <p>years experience</p>
              </ScrollAnimation>
              
            </div>
            <div className="flex gap-2 items-center w-[200px] uppercase text-[12px]">
              
              <ScrollAnimation animateIn="backInLeft" duration={2}>
                <h2 className="text-[36px]">20</h2>
              </ScrollAnimation>
              
              <ScrollAnimation animateIn="backInUp" duration={2}>
                <p>Awesome Projects Completed</p>
              </ScrollAnimation>
              
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-6 md:px-[6%] md:w-[50%]">
          <ScrollAnimation animateIn="backInDown" duration={2}>
            <p className="font-bold text-primary uppercase text-[18px]">About me</p>
          </ScrollAnimation>
          
          <ScrollAnimation animateIn="backInUp" duration={2}>
            <p>Since beginning my journey as a designer and developer, I&apos;ve done remote work for agencies, consulted for startups and collaborated with talented people to create digital products for both businesses and consumer use.</p>
          </ScrollAnimation>
          
        </div>
      </section>

      
      <section className="md:p-[8%] py-[60px] p-4">
          <p className="font-bold text-primary uppercase text-[18px] mb-4">Work experience</p>
          <p className="md:text-[36px] text-[24px] font-bold">Explore My Design and Development Journey</p>


          <div className="flex flex-col gap-6 pt-12">
            {
              [
                { id: 0, company: "Fortbridge", date: "June 2024 - present", position: "Frontend developer", description: "Fintech, Website development, Responsive", tools: ["Next.Js", "React.Js", "Tailwind.css"] },
                { id: 1, company: "BOS Unlimited(Contract)", date: "January 2024 - june 2024", position: "Frontend Developer, UI/UX Designer", description: "Ecommerce, Website development, Responsive", tools: ["Figma", "Next.Js", "Tailwind.css"] },
                { id: 2, company: "Xatalyst lab", date: "September 2023 - November 2023", position: "Frontend Developer Intern", description: "Fitness startup, Website development, Responsive", tools: ["Next.Js", "React.Js", "Tailwind.css"] },
              ].map(experience => (
                <div key={experience.id} className="flex flex-wrap gap-6 items-center justify-between py-6 border-y border-gray-500/[0.3]">
                  <div className="flex flex-col gap-2 md:w-[25%] w-full">
                    <ScrollAnimation animateIn="lightSpeedInLeft" duration={2}>
                      <h2 className="md:text-[20px] text-[16px] font-bold uppercase">{experience.company}</h2>
                    </ScrollAnimation>
                      
                    <ScrollAnimation animateIn="lightSpeedInLeft" duration={2}>
                      <p className="font-light">{experience.date}</p>
                    </ScrollAnimation>
                    
                  </div>
                  <div className="flex flex-col gap-2 md:w-[30%] w-full">
                    
                    <ScrollAnimation animateIn="lightSpeedInLeft" duration={2}>
                      <h2 className="text-[16px] font-bold">{experience.position}</h2>
                    </ScrollAnimation>
                      
                    <ScrollAnimation animateIn="lightSpeedInLeft" duration={2}>
                      <p className="font-light">{experience.description}</p>
                    </ScrollAnimation>
                    
                  </div>
                  <div className="flex items-center flex-wrap gap-2 md:w-[35%] w-full">
                    {
                      experience.tools.map((tool: string, i: number) => (
                        <Button key={i} variant="tetiary" className="p-4 py-2 rounded-full border-gray-500/[0.2] dark:text-gray-300 text-[12px]">{tool}</Button>
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
                  <div className="absolute bottom-[1px] left-[1px] flex flex-col gap-2 p-3 py-1 bg-white/[0.6]">
                    <h2 className="font-bold text-[16px] text-black uppercase">{project.title}</h2>
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
