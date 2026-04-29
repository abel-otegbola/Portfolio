'use client'
import Animate from "@/components/animations/animate";
import Button from "@/components/button/button";
import { projects } from "@/data/projects";
import { CheckCircle, PenNib } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function Project() {
    const {title} = useParams()

    const project = useMemo(() => {
        return projects?.filter(project => project.title === title)[0]
    }, [title])

    return (
        <main className="xl:px-[15%] lg:px-[10%] md:px-[10%] md:py-[80px] py-[40px] px-4 flex flex-col gap-8">
            <div className="">
                <div className="flex flex-col items-start flex-wrap gap-2 py-4">
                    <div className="flex items-center justify-between gap-2">
                        <Link href={project.links.live} className="flex-1 flex items-center gap-2">
                            <Image src={project.logo} alt={`${project.title} logo`} width={28} height={28} className="object-cover aspect-square bottom-0 rounded-full"/>
                            <h1 className="font-bold">{project.title}</h1>
                        </Link>
                    </div>
                    <p className="">{project.description}</p>
                    <Button href={project.links.live} target="_blank">
                        View live project
                    </Button>
                </div>
                <div className="flex gap-1 flex-col gap-2  ">
                    <header className="flex w-full gap-4 flex-col min-h-[40vh] flex-wrap p-0 overflow-hidden">
                        <div className="grid md:grid-cols-3 gap-4">
                        <Link href={project.images[0]} className={`md:col-span-2 relative w-full h-full md:rounded-t-[8px]`}>
                            <Animate type="blurIn">
                                <Image src={project.images[0]} alt={`${project.title}`} width={1200} height={1000} className="object-cover w-full h-auto bottom-0 bg-linear-to-tr dark:from-[#000] from-white to-primary/[0.09]"/>
                            </Animate>
                        </Link>
                        <div className="flex md:flex-col md:gap-3 gap-4">
                            <Link href={project.images[1]} className={`md:col-span-1 relative w-full h-full md:rounded-t-[8px]`}>
                                <Animate type="blurIn">
                                    <Image src={project.images[1]} alt={`${project.title}`} width={1200} height={1000} className="object-cover w-full h-auto bottom-0 bg-linear-to-tr dark:from-[#000] from-white to-primary/[0.09]"/>
                                </Animate>
                            </Link>
                            <Link href={project.images[2]} className={`md:col-span-1 relative w-full h-full md:rounded-t-[8px]`}>
                                <Animate type="blurIn">
                                    <Image src={project.images[2]} alt={`${project.title}`} width={1200} height={1000} className="object-cover w-full h-auto bottom-0 bg-linear-to-tr dark:from-[#000] from-white to-primary/[0.09]"/>
                                </Animate>
                            </Link>
                        </div>
                        </div>
                    </header>
                </div>
            </div>

            <section className="flex flex-col gap-6">

                <div className="relative overflow-hidden line-horizontal">
                    <p className="py-2 font-semibold">About</p>
                    <div className="py-2 text-justify">
                    <ol>
                        {
                        project.howBuilding.map(howBuilding => (
                            <li className="flex items-center my-2 gap-2" key={howBuilding}>{howBuilding}</li>
                        ))
                        }
                    </ol>
                </div>
                <div className="relative overflow-hidden line-horizontal">
                    <p className="py-2 font-semibold">Features</p>
                    <div className="py-2">
                        <ol>
                            {
                            project.features.map(feature => (
                                <li className="flex items-center my-2 gap-2" key={feature}><CheckCircle color="green"/> {feature}</li>
                            ))
                        }
                        </ol>
                    </div>
                </div>
                </div>
            </section>
        </main>
    )
}