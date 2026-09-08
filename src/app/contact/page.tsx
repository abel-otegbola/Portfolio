'use client'

import Animate from "@/components/animations/animate"
import AnimateHeading from "@/components/animations/animateHeading"
import ScrollTextReveal from "@/components/animations/scroll-text-reveal"
import ContactForm from "@/components/contactForm/form"
import Cal from "@calcom/embed-react"
import { Envelope } from "@phosphor-icons/react"

export default function Contact() {

    return (
        <main className="my-[20px] flex flex-col gap-2">
        <section id="contact" className="flex flex-col gap-6 py-[60px] bg-cover bg-center bg-no-repeat">
                <div className="flex flex-col gap-2 justify-center items-center text-center mb-8">
                    <ScrollTextReveal className="uppercase">Contact me</ScrollTextReveal>
                    <AnimateHeading className="md:text-[24px] text-[20px] w-full font-medium">
                        Schedule a 30min call with me.
                    </AnimateHeading>
                </div>
                <div className="xl:px-[15%] md:px-[10%] px-4">
                    <div>
                    <Cal
                        calLink="abel-otegbola/30min"
                        calOrigin="https://cal.com"
                        config={{ layout: "month_view", theme: "light" }}
                        className="w-full overflow-auto bg-transparent"
                    />
                    </div>
                </div>
                <div className="xl:px-[25%] lg:px-[20%] md:px-[15%] px-4 bg-white dark:bg-black/80">
                
                    <AnimateHeading className="text-center mt-[60px] md:text-[24px] text-[20px] w-full font-medium">
                        Or send me a message
                    </AnimateHeading>

                    <ContactForm />
                </div>
                </section>
        </main>
    )
}