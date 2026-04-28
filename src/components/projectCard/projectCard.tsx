import Image from "next/image";
import Link from "next/link";
import Animate from "../animations/animate";
import Button from "../button/button";

export default function Projectcard({ project }: { project: { title: string, images: string[], logo: string, description: string, id: number, links: { live: string } } }) {
    return (
        <div className="w-full ">
            <div className="relative flex flex-col justify-between bg-cover bg-center overflow-hidden">
                <div className="grid md:grid-cols-3 gap-4">
                    <Link href={project.images[0]} className={`md:col-span-2 relative w-full h-full md:rounded-t-[8px]`}>
                        <Animate type="blurIn">
                            <Image src={project.images[0]} alt={`${project.title}`} width={1200} height={1000} className="object-cover w-full h-auto bottom-0"/>
                        </Animate>
                    </Link>
                    <div className="flex md:flex-col md:gap-3 gap-4">
                        <Link href={project.images[1]} className={`md:col-span-1 relative w-full h-full md:rounded-t-[8px]`}>
                            <Animate type="blurIn">
                                <Image src={project.images[1]} alt={`${project.title}`} width={1200} height={1000} className="object-cover w-full h-auto bottom-0"/>
                            </Animate>
                        </Link>
                        <Link href={project.images[2]} className={`md:col-span-1 relative w-full h-full md:rounded-t-[8px]`}>
                            <Animate type="blurIn">
                                <Image src={project.images[2]} alt={`${project.title}`} width={1200} height={1000} className="object-cover w-full h-auto bottom-0"/>
                            </Animate>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-start flex-wrap gap-4 py-4">
                    <div className="flex items-center gap-2 flex-wrap">
                        <Image src={project.logo} alt={`${project.title} logo`} width={28} height={28} className="object-cover aspect-square bottom-0 rounded-full"/>
                        <div className="flex-1 flex flex-col gap-2">
                            <h1 className="font-bold">{project.title}</h1>
                        </div>
                    </div>
                    <p className="">{project.description}</p>
                    <Button href={project.links.live} className="">
                        View project
                    </Button>
                </div>
            </div>
        </div>
    )
}