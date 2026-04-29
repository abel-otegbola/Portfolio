'use client'

import Animate from "@/components/animations/animate"
import Projectcard from "@/components/projectCard/projectCard"
import { projects } from "@/data/projects"
import { Briefcase } from "@phosphor-icons/react"

export default function Contact() {

    return (
        <main className="flex flex-col items-center gap-2 py-[60px]">
            <Animate type="slideDown">
                <p className="flex items-center text-[14px] gap-2 px-4 py-2 bg-gray-500/[0.08] rounded w-fit">
                    <Briefcase weight="duotone"/>
                    My Works
                </p>
            </Animate>
            <Animate type="blurIn">
                <p className="font-medium text-lg text-center mb-6">Here are some of my recent works</p>
            </Animate>
            <div className="flex flex-col gap-8 xl:px-[15%] lg:px-[10%] md:px-[10%] px-4">
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