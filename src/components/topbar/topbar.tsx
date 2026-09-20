'use client'
import { useEffect, useState } from 'react';
import ScrollTextReveal from "../animations/scroll-text-reveal";
import Link from "next/link";
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import { Moon, Sun } from '@phosphor-icons/react';
import Image from 'next/image';
import { DribbbleLogo, Envelope, GithubLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";

export default function Topbar() {
    const [open, setOpen] = useState(false)
    const [theme, setTheme] = useState<string | null>("")
    const pathname = usePathname();
    
    useEffect(() => {
        setTheme(localStorage.getItem("theme"))
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        } else {
        document.documentElement.classList.remove('dark')
        }
    }, [theme])
    
    const handleTheme = (index: string) => {
        localStorage.setItem("theme", index)
        setTheme(index)
    }

    return (
        <>
        <div className="flex items-center justify-between lg:px-[15%] md:px-[10%] px-[5%] backdrop-blur-sm bg-white/80 dark:bg-[#212121]/60 md:py-1 py-2 sticky top-0 z-10">
            <Link href="/" className="md:w-[35%]">
                <div className="relative flex items-center gap-3">
                  <div className="relative flex gap-2 items-center md:text-[15px]">
                    <div className="aspect-square h-9 w-9 rounded-full bg-gray-100 dark:bg-dark">
                      <Image src="/images/abel-memoji.png" alt="Abel Otegbola" width={36} height={36} className="aspect-square object-cover rounded-full"/>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-sm">Abel Otegbola</h4>
                      <div className="text-green-400 text-xs">Available</div>
                    </div>
                  </div>
                </div>
            </Link>
            
            <button className="flex flex-col justify-center items-center gap-1 text-lg w-10 h-10 sm::hidden z-[50]" onClick={() => setOpen(!open)}>
                <span className={`w-[8px] h-[2px] py-[1px] px-[10px] duration-500 transition-all bg-black dark:bg-white rounded-[2px] ${open ? "rotate-[45deg] translate-y-[5px]" : "rotate-[0deg]"}`}></span>
                <span className={`duration-500 transition-all bg-black dark:bg-white rounded-[2px] ${open ? "py-[0px] w-[0px] h-[0px] translate-x-[-24px]" : "py-[1px] px-[10px] w-[8px] h-[2px]"}`}></span>
                <span className={`w-[8px] h-[2px] py-[1px] px-[10px] duration-500 transition-all bg-black dark:bg-white rounded-[2px] ${open ? "rotate-[-45deg] translate-y-[-5px]" : "rotate-[0deg]"}`}></span>
            </button>

            <div className="md:flex hidden items-center gap-3 md:w-[35%] justify-end">
                <div className="rounded-full flex items-center text-[14px] gap-6 md:p-2 md:px-2 lg:my-0 ">
                {
                    theme !== "dark" ? 
                    <button className="border border-gray-500/20 p-2 rounded-full flex items-center gap-2" onClick={() => handleTheme("dark")}>
                    <Moon className="hover:text-primary"/>
                    </button>
                    
                    :
                    <button className="border border-gray-500/20 p-2 rounded-full flex items-center gap-2" onClick={() => handleTheme("light")}>
                    <Sun className="hover:text-primary"/>
                    </button>
                    
                }
                </div>
                <Link href="/contact">
                    <Button variant={"outline"} size={"sm"} >
                        Get in Touch
                    </Button>
                </Link>
                
            </div>

            
        </div>
        <ul className={`
            fixed top-14 lg:left-[15%] md:left-[10%] left-0 z-20 flex sm:flex-row flex-col justify-between py-2 pb-8 px-6 bg-[#FEFEFE] shadow-[0px_10px_30px_#10101012] border border-gray-500/[0.1] dark:bg-[#101010] rounded-lg lg:w-[70%] md:w-[80%] w-full h-auto mx-auto overflow-hidden
            ${open ? "translate-y-[0px]" : "-translate-y-[160%]"} duration-500
        `}>
            <div className="flex flex-col mx-2">
            <p className="opacity-50 uppercase text-[12px] my-4">menu</p>
            {
                
                [
                    { id: 0, title: "Home", href: "/" },
                    { id: 1, title: "Works", href: "/works" },
                    { id: 2, title: "About", href: "/about" },
                    { id: 3, title: "Contact", href: "/contact" },
                ].map(link => (
                        <Link
                            key={link.id}
                            href={link.href} 
                            className={`py-2 duration-300`}
                            onClick={() => {
                                setOpen(false)
                                // scroll to top of page
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            <ScrollTextReveal repeat={open} delay={0.1 * (link.id + 1)}>
                                {link.title}
                            </ScrollTextReveal>
                        </Link>
                ))
            } 
            
            </div>
            <div className="flex flex-col mx-2 justify-between">
                <div className="flex flex-col gap-2">
                    <p className="opacity-50 uppercase text-[12px] mb-2 mt-8">Contact</p>
                    <Link href="/mailto:abel.d.otegbola@gmail.com">
                        abel.d.otegbola@gmail.com
                    </Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="opacity-50 uppercase text-[12px] mb-2 mt-8 ">Connect with me now</h1>
                    <ul className="w-fit">
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="https://dribbble.com/Abel_Otegbola" className="p-2 border border-gray-500/40 rounded-full"><DribbbleLogo size={16}/></Link>
                            <Link href="https://github.com/abel-otegbola" className="p-2 border border-gray-500/40 rounded-full"><GithubLogo size={16}/></Link>
                            <Link href="https://x.com/Abel_Otegbola" className="p-2 border border-gray-500/40 rounded-full"><XLogo size={16}/></Link>
                            <Link href="https://linkedin.com/in/abel-otegbola" className="p-2 border border-gray-500/40 rounded-full"><LinkedinLogo size={16}/></Link>
                            <Link href="mailto:abel.d.otegbola@gmail.com" className="p-2 border border-gray-500/40 rounded-full"><Envelope size={16} /></Link>
                        </div>
                    </ul>
                </div>
            </div>
        </ul>
        </>
    )
}