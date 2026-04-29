import Image from "next/image";
import Link from "next/link";
import Animate from "../animations/animate";
import Button from "../button/button";

export default function Projectcard({ project }: { project: { title: string, images: string[], logo: string, description: string, id: number, links: { live: string } } }) {
    return (
        <div className="w-full ">
            <div className="relative flex flex-col justify-between bg-cover bg-center overflow-hidden">
                <div className="grid md:grid-cols-3 gap-4">
                    <Link href={`/project/${project.title}`} className={`md:col-span-2 relative w-full h-full md:rounded-t-[8px]`}>
                        <Animate type="blurIn">
                            <Image src={project.images[0]} alt={`${project.title}`} width={1200} height={1000} className="object-cover w-full h-auto bottom-0 bg-linear-to-tr dark:from-[#000] from-white to-primary/[0.09]"/>
                        </Animate>
                    </Link>
                    <div className="flex md:flex-col md:gap-3 gap-4">
                        <Link href={`/project/${project.title}`} className={`md:col-span-1 relative w-full h-full md:rounded-t-[8px]`}>
                            <Animate type="blurIn">
                                <Image src={project.images[1]} alt={`${project.title}`} width={1200} height={1000} className="object-cover w-full h-auto bottom-0 bg-linear-to-tr dark:from-[#000] from-white to-primary/[0.09]"/>
                            </Animate>
                        </Link>
                        <Link href={`/project/${project.title}`} className={`md:col-span-1 relative w-full h-full md:rounded-t-[8px]`}>
                            <Animate type="blurIn">
                                <Image src={project.images[2]} alt={`${project.title}`} width={1200} height={1000} className="object-cover w-full h-auto bottom-0 bg-linear-to-tr dark:from-[#000] from-white to-primary/[0.09]"/>
                            </Animate>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}