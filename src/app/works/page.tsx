'use client'

import Projectcard from "@/components/projectCard/projectCard"
import { projects } from "@/data/projects"

export default function Contact() {

    return (
        <main className="flex flex-col gap-2">
            <p className="uppercase xl:px-[15%] lg:px-[10%] md:px-[10%] py-[80px] px-4 text-center md:text-[72px] sm:text-[58px] text-[36px]">Recent projects</p>
            <div className="border border-dashed border-gray-500/[0.3] xl:px-[15%] lg:px-[10%] md:px-[10%] py-[80px] px-4">
                {
                projects?.map(project => (
                    <div key={project.id} className="relative overflow-hidden line-horizontal w-full">
                    <div className="">
                        <Projectcard project={project} />
                    </div>
                    </div>
                ))
                }
            </div>
        </main>
    )
}