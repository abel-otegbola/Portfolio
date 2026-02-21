'use client'

import Image from "next/image"

export default function Contact() {

    return (
        <main className="flex flex-col gap-2">
            <p className="uppercase xl:px-[15%] lg:px-[10%] md:px-[10%] py-[80px] px-4 text-center md:text-[72px] sm:text-[58px] text-[36px]">About me</p>
            <div className="border border-dashed border-gray-500/[0.3] xl:px-[15%] lg:px-[10%] md:px-[10%] py-[80px] px-4">
                <div className="flex gap-1 flex-col gap-2">
                <div className="flex md:items-center md:flex-row flex-col gap-6">
                    <Image src="/images/abel.png" alt="muse" width={800} height={1000} className="object-cover bottom-0 h-full bg-gray-400/[0.9]"/>
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