'use client'
import { Envelope, GithubLogo, LinkedinLogo, Moon, Sun, XLogo } from "@phosphor-icons/react";
import Image from "next/image";
// import Tab from "../tab/tab";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface navTab {
    id: number | string,
    label: string,
    to: string,
}

export default function Header() {
    const [theme, setTheme] = useState<string | null>("")

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

    // const navTabs: navTab[] = [
    //     { id: 0, label: "Services", to: "#services" },
    //     { id: 1, label: "Projects", to: "#projects" },
    //     { id: 2, label: "Skills", to: "#skills"},
    //     { id: 3, label: "Contacts", to: "#contacts"},
    // ]

    return (
        <div className="flex items-center justify-between z-[50] dark:text-gray md:px-[8%] p-5">
            <Link href="/" className="md:ml-3 w-[150px]">
                <div className="relative flex gap-3">
                  <Image src="/images/abel.png" alt="muse" width={40} height={40} className="object-cover bottom-0 outline outline-primary/[0.09] rounded-full outline-offset-2"/>
                  
                </div>
            </Link>

            {/* <nav className="md:flex items-center justify-between gap-4 hidden">
                {
                    navTabs.map((tab: navTab) => (
                        <Tab key={tab.id} label={tab.label} to={tab.to} />
                    ))
                }
            </nav> */}

            <div className="flex items-center justify-end gap-6 relative">
                <Link href="https://github.com/abel-otegbola" className="md:flex hidden gap-2 items-center p-2 hover:text-primary">
                    <GithubLogo />
                    Github
                </Link>
                <Link href="https://x.com/Abel_Otegbola" className="md:flex hidden gap-2 items-center p-2 hover:text-primary">
                    <XLogo />
                    Twitter
                </Link>
                <Link href="https://linkedin.com/in/abel-otegbola" className="md:flex hidden gap-2 items-center p-2 hover:text-primary">
                    <LinkedinLogo />
                    Linkedin
                </Link>

                <div className="rounded-full flex items-center text-[14px] gap-6 md:p-2 md:px-2 lg:my-0 ">
                {
                    theme !== "dark" ? 
                    <button className="border border-gray-500/[0.2] p-2 rounded-full flex items-center gap-2" onClick={() => handleTheme("dark")}>
                    <Moon className="hover:text-primary"/>
                    </button>
                    
                    :
                    <button className="border border-gray-500/[0.2] p-2 rounded-full flex items-center gap-2" onClick={() => handleTheme("light")}>
                    <Sun className="hover:text-primary"/>
                    </button>
                    
                }
                </div>
                <Link href="#contacts" className="h-[32px] w-[32px] rounded-full flex justify-center items-center border border-gray-500/[0.2]">
                    <Envelope className="hover:text-primary" />
                </Link>
            </div>
        </div>
    )
}