import Image from "next/image";
import Link from "next/link";
import Button from "../button/button";
import { ArrowUpRight } from "@phosphor-icons/react";
import Animate from "../animations/animate";

export default function Projectcard({ project }: { project: { title: string, images: string[], description: string, id: number } }) {
    return (
        <div className="break-inside-avoid">
            <div style={{ backgroundImage: "url('/images/bg.webp')" }} className="relative flex flex-col justify-between mb-4 border border-gray-400/[0.1] bg-cover bg-center overflow-hidden">
                <Animate type="blurIn">
                    <Link href={`/project?title=${project.title}`} className="relative w-full h-full md:rounded-t-[8px]">
                        <Image src={project.images[0]} alt={project.title} width={1200} height={1000} className="object-cover bottom-0"/>
                    </Link>
                </Animate>
                <div className="flex md:flex-row flex-col items-start flex-wrap gap-4 p-4 bg-white dark:bg-[#EEE3E3]/[0.07]">
                    <div className="flex-1 flex flex-col gap-2 md:w-[80%] w-[100%]">
                        <h1 className="font-bold text-[16px] uppercase">{project.title}</h1>
                        <p>{project.description}</p>
                    </div>
                    <Button href={`/project?title=${project.title}`} className="w-fit text-[12px] border border-black font-medium pl-1 py-[4px] pr-6 bg-transparent text-black rounded-[30px] text-center">
                        <ArrowUpRight size={24} className="p-1 rounded-full bg-black text-white" />
                        <span className="text-black font-semibold hover:text-white">View project</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}