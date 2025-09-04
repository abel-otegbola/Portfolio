'use client'

import Projectcard from "@/components/projectCard/projectCard"
import { projects } from "@/data/projects"

export default function Contact() {

    return (
        <main className="my-[60px] flex flex-col gap-2">
            <p className="uppercase font-light text-[12px] xl:px-[26%] lg:px-[21%] md:px-[11%] px-4">Recent projects</p>
            <div className="mb-[60px]">
                {
                projects?.map(project => (
                    <div key={project.id} className="relative overflow-hidden line-horizontal w-full border border-dashed border-gray-500/[0.3]">
                    <div className="xl:px-[25%] lg:px-[20%] md:px-[10%]">
                        <Projectcard project={project} />
                    </div>
                    </div>
                ))
                }
            </div>
        </main>
    )
}