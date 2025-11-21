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
        <main>
        <div className="border border-dashed border-gray-500/[0.3] xl:px-[25%] lg:px-[20%] md:px-[10%]">
            <div className="flex gap-1 flex-col gap-2 p-3 border-x border-dashed border-gray-500/[0.3] dark:bg-black/[0.8] backdrop-blur-sm">
                <header className="flex w-full gap-4 items-center flex-col min-h-[40vh] flex-wrap p-0 overflow-hidden">
                    <div className="w-full">
                        <Image src={project.images[0]} alt={project.title} width={1200} height={800} className="object-cover dark:bg-gray-500/[0.09] bottom-0 md:rounded-[8px] rounded"/>
                    </div>
                    <div className="flex flex-col gap-4">
                    
                        <ScrollAnimation animateIn="fadeInUp" duration={1}>
                            <h2 className="text-[20px] leading-[120%] font-semibold capitalize">{SearchParams}</h2>
                        </ScrollAnimation>
                        <p>
                            {
                            project.description                
                            }
                        </p>
                        <Button href={project.links.live} className="">
                            View project
                        </Button>

                    </div>
                </header>
            </div>
        </div>

        <section className="py-[60px] flex flex-col gap-2">
            <p className="uppercase font-light text-[12px] xl:px-[15%] lg:px-[10%] md:px-[12%] px-4">Features</p>

            <div className="relative overflow-hidden line-horizontal xl:px-[25%] lg:px-[20%] md:px-[10%] border border-dashed border-gray-500/[0.3] bg-white dark:bg-black/[0.8]">
                <div className="p-3 border-x border-dashed border-gray-500/[0.3] dark:bg-black/[0.8] backdrop-blur-sm">
                    <ol>
                        {
                        project.features.map(feature => (
                            <li className="flex items-center my-2 gap-2" key={feature}><PenNib/> {feature}</li>
                        ))
                    }
                    </ol>
                </div>
            </div>
        </section>
         <section className="flex flex-col gap-2 mb-8">
            <p className="uppercase font-light text-[12px] xl:px-[15%] lg:px-[10%] md:px-[12%] px-4">How it was built</p>

            <div className="relative overflow-hidden line-horizontal xl:px-[25%] lg:px-[20%] md:px-[10%] border border-dashed border-gray-500/[0.3] bg-white dark:bg-black/[0.8]">
                <div className="p-3 border-x border-dashed border-gray-500/[0.3] dark:bg-black/[0.8] backdrop-blur-sm">
            <ol>{project.howBuilding.map(howBuilding => (
                <li className="flex items-center my-2 gap-2" key={howBuilding}><PenNib/> {howBuilding}</li>
            ))}</ol>
            </div>
            </div>
        </section>
    </main>
    )
}