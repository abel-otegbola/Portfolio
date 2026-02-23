'use client'
import Button from "@/components/button/button";
import { projects } from "@/data/projects";
import { PenNib } from "@phosphor-icons/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ScrollAnimation from "react-animate-on-scroll";

export default function Project() {
    const SearchParams = useSearchParams().get("title")

    const project = projects?.filter(project => project.title === SearchParams)[0]

    return (
        <main className="xl:px-[15%] lg:px-[10%] md:px-[10%] md:py-[80px] py-[40px] px-4 flex md:flex-row flex-col md:gap-8 gap-4">
            <div className="md:sticky top-[80px] w-full h-max md:self-start">
                <div className="flex gap-1 flex-col gap-2  ">
                    <header className="flex w-full gap-4 flex-col min-h-[40vh] flex-wrap p-0 overflow-hidden">
                        <div className="w-full">
                            <Image src={project.images[0]} alt={project.title} width={1200} height={800} className="object-cover dark:bg-gray-500/[0.09] bottom-0 md:rounded-[8px] rounded"/>
                        </div>
                        <h2 className="text-[20px] leading-[120%] font-semibold capitalize">{SearchParams}</h2>
                        <Button href={project.links.live} className="">
                            View live project
                        </Button>
                    </header>
                </div>
            </div>

            <section className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                        
                    <ScrollAnimation animateIn="fadeInUp" duration={0.5} animateOnce={true}>
                    <p>
                        {
                        project.description                
                        }
                    </p>
                    </ScrollAnimation>
                </div>

                <div className="relative overflow-hidden line-horizontal">
                    <p className="py-2 border-b border-gray-500/[0.2] font-medium">Features</p>
                    <div className="py-2">
                        <ol>
                            {
                            project.features.map(feature => (
                                <li className="flex items-center my-2 gap-2" key={feature}><PenNib/> {feature}</li>
                            ))
                        }
                        </ol>
                    </div>
                </div>

                <div className="relative overflow-hidden line-horizontal">
                    <p className="py-2 border-b border-gray-500/[0.2] font-medium">About</p>
                    <div className="py-2">
                    <ol>
                        {
                        project.howBuilding.map(howBuilding => (
                            <li className="flex items-center my-2 gap-2" key={howBuilding}>{howBuilding}</li>
                        ))
                        }
                    </ol>
                </div>
                </div>
            </section>
        </main>
    )
}