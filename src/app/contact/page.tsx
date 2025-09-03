'use client'

import ContactForm from "@/components/contactForm/form"

export default function Contact() {

    return (
        <main className="my-[60px] flex flex-col gap-2">
            <p className="uppercase font-light text-[12px] xl:px-[26%] lg:px-[21%] md:px-[11%] px-4">Let&apos;s work together</p>
            <div className="border border-dashed border-gray-500/[0.3] xl:px-[25%] lg:px-[20%] md:px-[10%]">
                <div className="flex gap-1 flex-col gap-2 p-3 border-x border-dashed border-gray-500/[0.3] dark:bg-black/[0.8] backdrop-blur-sm">
                    <ContactForm />
                </div>
            </div>
        </main>
    )
}