import About from "../../components/about/about";
import ContactForm from "../../components/contactForm/contactForm";

export default function Contact() {
    return (
        <div>
            <div className="bg-[url('/bg2.PNG')] md:rounded">
                <div className="dark:bg-[#050509]/[0.93] bg-[#10101A]/[0.9] bg-cover bg-center py-[5%] sm:px-[10%] px-6 text-[#f2f2f2]">

                    <h1 className="md:w-[70%] font-medium -leading-[10px] text-2xl dark:[#f2f2f2]" data-aos="fade-down">
                    CONTACT ME 
                    </h1>
                    
                </div>
            </div>
            <div className="flex gap-6 flex-wrap md:px-[10%] px-4 py-[5%]">
                <About />
                <div className="md:w-[70%] w-full">
                    <p className="py-4 leading-[30px]" data-aos="fade-right">
                        Don&apos;t be a stranger, Message me now to connect, collaborate,
                        network or hire me for a new web project{" "}
                    </p>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}