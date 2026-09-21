import Image from "next/image";
import Link from "next/link";
import Animate from "../animations/animate";
import { ArrowRight } from "@phosphor-icons/react";

export default function Projectcard({ project }: { project: { title: string, images: string[], logo: string, description: string, id: number, links: { live: string } } }) {
    return (
            <div className="relative flex flex-col gap-4 items-start bg-cover bg-center overflow-hidden p-2 pb-4 rounded-[16px] bg-white dark:bg-[#121212] w-full">
                <div className="flex flex-col gap-4 w-">
                    <Link href={`/project/${project.title}`} className={` relative w-full h-full md:rounded-lg`}>
                        <Animate type="blurIn">
                            <Image src={project.images[0]} alt={`${project.title}`} width={1200} height={1000} className="object-cover w-full h-auto bottom-0 bg-linear-to-tr dark:from-[#000] from-white to-primary/[0.09] rounded-lg"/>
                        </Animate>
                    </Link>
                </div>
                <div className="flex flex-row gap-2 w-full">
                    <Link href={`/project/${project.title}`} className="flex-1 flex flex-col gap-2 w-full">
                        {/* <Image src={project.logo} alt={`${project.title} logo`} width={28} height={28} className="object-cover aspect-square bottom-0 rounded-full"/> */}
                        <h1 className="font-medium text-lg">{project.title}</h1>
                        <div className="opacity-50">
                            <p className="line-clamp-2">{project.description}</p> 
                            <Link href={`/project/${project.title}`} className="opacity-25" >Read more...</Link>
                        </div>
                    </Link>
                    
                    {/* <div className="flex md:gap-3 gap-4">
                        <Link href={`/project/${project.title}`} className={` relative w-full h-full md:rounded-t-[8px]`}>
                            <Animate type="blurIn">
                                <Image src={project.images[1]} alt={`${project.title}`} width={1200} height={1000} className="object-cover w-full h-auto bottom-0 bg-linear-to-tr dark:from-[#000] from-white to-primary/[0.09]"/>
                            </Animate>
                        </Link>
                        <Link href={`/project/${project.title}`} className={` relative w-full h-full md:rounded-t-[8px]`}>
                            <Animate type="blurIn">
                                <Image src={project.images[2]} alt={`${project.title}`} width={1200} height={1000} className="object-cover w-full h-auto bottom-0 bg-linear-to-tr dark:from-[#000] from-white to-primary/[0.09]"/>
                            </Animate>
                        </Link>
                    </div> */}
                </div>
            </div>
    )
}