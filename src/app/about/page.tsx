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
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-bold">A builder at the intersection of design, engineering, and product.</h2>
                        <p>
                            I&apos;m Abel — a product-focused designer and frontend engineer passionate about building intuitive, fast, and functional digital experiences.
                        </p>
                        <p>
                            With a strong foundation in UI/UX design, frontend development, and product thinking, I&apos;ve built multiple SaaS products and complete end-to-end MVPs for founders, startups, agencies, and SMEs.
                        </p>
                        <p>
                            My approach is shaped by a unique blend of creativity and engineering discipline.
                        </p>
                        <p>
                            Today, I focus on creating products that are simple, fast, scalable, and user-centered.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </main>
    )
}