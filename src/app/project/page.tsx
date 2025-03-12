'use client'
import Button from "@/components/button/button";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useSearchParams } from "next/navigation";
import ScrollAnimation from "react-animate-on-scroll";

export default function Project() {
    const SearchParams = useSearchParams().get("title")

    return (
        <header className="flex w-full items-center md:flex-nowrap min-h-[40vh] bg-gray-300/[0.1] flex-wrap md:px-[10%] px-4 overflow-hidden">
            <div className="flex flex-col gap-4 py-20 md:w-[50%]">
            
            <ScrollAnimation animateIn="fadeInUp" duration={1}>
                <h2 className="md:text-[48px] text-[32px] leading-[120%] font-semibold capitalize">{SearchParams}</h2>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="fadeInUp" duration={2}>
                <Button href="#contacts" className="font-medium pl-1 py-[4px] pr-8 rounded-[30px]">
                <ArrowUpRight size={32} className="p-2 rounded-full bg-white text-black" />
                View live project
                </Button>
            </ScrollAnimation>

            </div>
        </header>
    )
}