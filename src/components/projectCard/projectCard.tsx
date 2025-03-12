import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "../button/button";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Projectcard({ project }: { project: { title: string, images: string[], description: string, id: number } }) {
    return (
        <ScrollAnimation key={project.id}  animateIn="zoomIn" className="break-inside-avoid" duration={0.1}>
            <div className="relative flex flex-col justify-between mb-4 bg-[#EEE3E3]/[0.4] border border-gray-400/[0.1] dark:bg-gray-500/[0.09] md:rounded-[16px] rounded-lg overflow-hidden">
                <Link href={`/project?title=${project.title}`} className="relative w-full md:rounded-t-[8px] rounded-t px-2 pt-2">
                    <Image src={project.images[0]} alt="bos" width={600} height={800} className="object-cover dark:bg-gray-500/[0.09] bottom-0 md:rounded-t-[8px] rounded-t"/>
                </Link>
                <div className="flex flex-col gap-4 p-4 bg-white">
                <div className="flex-1 flex flex-col gap-2 w-full">
                    <h2 className="font-bold text-[16px] uppercase">{project.title}</h2>
                    <p>{project.description}</p>
                </div>
                <Button href={`/project?title=${project.title}`} className="w-fit text-[12px] font-medium pl-1 py-[4px] pr-4 rounded-[30px] text-center">
                    <ArrowUpRight size={24} className="p-1 rounded-full bg-white text-black" />
                    View project
                </Button>
                </div>
            </div>
        </ScrollAnimation>
    )
}