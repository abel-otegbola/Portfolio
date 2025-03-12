'use client'
import Button from "@/components/button/button";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ScrollAnimation from "react-animate-on-scroll";

export default function Project() {
    const SearchParams = useSearchParams().get("title")

    const project = projects?.filter(project => project.title === SearchParams)[0]

    return (
        <main>
        <header className="flex w-full gap-12 mb-12 items-center md:flex-nowrap min-h-[40vh] bg-gray-300/[0.1] flex-wrap md:px-[10%] px-4 overflow-hidden">
            <div className="flex flex-col gap-4 py-20 md:w-[50%]">
            
                <ScrollAnimation animateIn="fadeInUp" duration={1}>
                    <h2 className="md:text-[48px] text-[32px] leading-[120%] font-semibold capitalize">{SearchParams}</h2>
                </ScrollAnimation>
                
                    <Button href={project.links.live} className="font-medium pl-1 py-[4px] pr-8 rounded-[30px]">
                    <ArrowUpRight size={32} className="p-2 rounded-full bg-white text-black" />
                    View live project
                    </Button>
                <p>
                    {
                    project.description                
                    }
                </p>

            </div>
            <div>
                <Image src={project.images[0]} alt={project.title} width={400} height={400} className="object-cover dark:bg-gray-500/[0.09] bottom-0 md:rounded-[8px] rounded"/>
            </div>
        </header>

        <section className="md:px-[10%] px-4 mb-8">
            <h1 className="text-lg font-medium">Features:</h1>
            <div>{project.features}</div>
        </section>
        </main>
    )
}