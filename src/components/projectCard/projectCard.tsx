import Image from "next/image";
import Link from "next/link";
import Button from "../button/button";
import { ArrowUpRight } from "@phosphor-icons/react";
import Animate from "../animations/animate";
import AnimateText from "../animations/animateText";

export default function Projectcard({ project }: { project: { title: string, images: string[], description: string, id: number } }) {
    return (
        <div className="break-inside-avoid">
            <div style={{ backgroundImage: "url('/images/bg.webp')" }} className="relative flex flex-col justify-between mb-4 border border-gray-400/[0.1] bg-cover bg-center md:rounded-[16px] rounded-lg overflow-hidden">
                <Animate type="blurIn">
                    <Link href={`/project?title=${project.title}`} className="relative w-full h-full md:rounded-t-[8px] rounded-t px-2">
                        <Image src={project.images[0]} alt={project.title} width={1200} height={1000} className="object-cover bottom-0 md:rounded-t-[8px] rounded-t"/>
                    </Link>
                </Animate>
                <div className="flex flex-col gap-4 p-4 bg-white dark:bg-[#EEE3E3]/[0.07]">
                <div className="flex-1 flex flex-col gap-2 w-full">
                    <AnimateText animateOnce className="font-bold text-[16px] uppercase">{project.title}</AnimateText>
                    <AnimateText animateOnce>{project.description}</AnimateText>
                </div>
                <Button href={`/project?title=${project.title}`} className="w-fit text-[12px] font-medium pl-1 py-[4px] pr-4 rounded-[30px] text-center">
                    <ArrowUpRight size={24} className="p-1 rounded-full bg-white text-black" />
                    View project
                </Button>
                </div>
            </div>
        </div>
    )
}