import Image from "next/image";
import Link from "next/link";
import Animate from "../animations/animate";
import Button from "../button/button";

export default function Projectcard({ project }: { project: { title: string, images: string[], description: string, id: number, links: { live: string } } }) {
    return (
        <div className="break-inside-avoid border-x border-dashed border-gray-500/[0.3]">
            <div className="relative flex flex-col justify-between py-6 bg-cover bg-center overflow-hidden">
                <Animate type="blurIn">
                    <Link href={`/project?title=${project.title}`} className="relative w-full h-full md:rounded-t-[8px]">
                        <Image src={project.images[0]} alt={project.title} width={1200} height={1000} className="object-cover bottom-0"/>
                    </Link>
                </Animate>
                <div className="flex flex-col items-start flex-wrap gap-4 p-4">
                    <div className="flex-1 flex flex-col gap-2">
                        <h1 className="font-bold text-[14px]">{project.title}</h1>
                        <p className="text-[12px]">{project.description}</p>
                    </div>
                    
                    <Button href={project.links.live} className="">
                        View project
                    </Button>
                </div>
            </div>
        </div>
    )
}