'use client'

import Image from "next/image"

export default function Contact() {

    return (
        <main className="my-[60px] flex flex-col gap-2">
            <p className="uppercase font-light text-[12px] xl:px-[26%] lg:px-[21%] md:px-[11%] px-4">About me</p>
            <div className="border border-dashed border-gray-500/[0.3] xl:px-[25%] lg:px-[20%] md:px-[10%]">
                <div className="flex gap-1 flex-col gap-2 p-3 border-x border-dashed border-gray-500/[0.3] dark:bg-black/[0.8] backdrop-blur-sm">
                <div className="flex md:items-center md:flex-row flex-col gap-6">
                    <Image src="/images/abel.png" alt="muse" width={220} height={220} className="object-cover bottom-0 h-full"/>
                    <div className="flex flex-col gap-2">
                        <p>
                            I&apos;m Abel, a designer and developer working remotely from Nigeria. I specialize in crafting clean, user-focused digital products, from websites and web apps to intuitive interfaces and brand experiences.
                        </p>
                        <p>
                            Over the years, I&apos;ve had the privilege of collaborating with startups, remote agencies, and creative teams to bring ideas to life online. Whether it&apos;s refining a marketing site or designing a product UI from the ground up, I&apos;m passionate about creating designs that are beautiful and functional.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </main>
    )
}