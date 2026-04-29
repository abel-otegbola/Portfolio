'use client'

import Animate from "@/components/animations/animate"
import ContactForm from "@/components/contactForm/form"
import Cal from "@calcom/embed-react"
import { Envelope } from "@phosphor-icons/react"

export default function Contact() {

    return (
        <main className="my-[20px] flex flex-col gap-2">
        <section id="contact" className="flex flex-col gap-6 py-[60px] bg-cover bg-center bg-no-repeat">
                <div className="flex flex-col items-center gap-4 text-[12px] xl:px-[15%] md:px-[10%] px-4">
                    <Animate type="slideDown">
                    <p className="flex items-center text-[14px] gap-2 px-4 py-2 bg-gray-500/[0.08] rounded w-fit">
                        <Envelope weight="duotone"/>
                        Contact me
                    </p>
                    </Animate>
                    <Animate type="blurIn">
                    <p className="font-medium text-lg text-center">Let&apos;s Build Something Great Together</p>
                    </Animate>
                </div>
                <div className="xl:px-[15%] md:px-[10%] px-4">
                    <div>
                    <Cal
                        calLink="abel-otegbola/30min"
                        calOrigin="https://cal.com"
                        config={{ layout: "month_view", theme: "light" }}
                        className="w-full overflow-auto bg-transparent max-h-[460px]"
                    />
                    </div>
                </div>
                <div className="xl:px-[25%] lg:px-[20%] md:px-[15%] px-4 bg-white dark:bg-black/80">
                    <ContactForm />
                </div>
                </section>
        </main>
    )
}