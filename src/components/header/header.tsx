'use client'
import { Envelope, Moon, Sun } from "@phosphor-icons/react";
import Tab from "../tab/tab";
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

    const navTabs: navTab[] = [
        { id: 0, label: "Services", to: "#services" },
        { id: 1, label: "Projects", to: "#projects" },
        { id: 2, label: "Skills", to: "#skills"},
        { id: 3, label: "Contacts", to: "#contacts"},
    ]

    return (
        <div className="flex items-center justify-between z-[50] dark:text-gray md:p-3 p-4 md:m-2 md:mx-[7%]">
            <Link href="/" className="md:ml-3 w-[150px]">
                <div className="flex items-center">
                    <h2 className="font-light text-lg">ABEL.</h2>
                </div>
            </Link>

            <nav className="md:flex items-center justify-between gap-4 hidden">
                {
                    navTabs.map((tab: navTab) => (
                        <Tab key={tab.id} label={tab.label} to={tab.to} />
                    ))
                }
            </nav>

            <div className="flex items-center justify-end gap-6 relative text-[14px]">
                <div className="rounded-full flex items-center text-[14px] gap-6 md:p-2 md:px-2 lg:my-0 ">
                {
                    theme !== "dark" ? 
                    <button className="border border-black dark:border-white p-2 rounded-full flex items-center gap-2" onClick={() => handleTheme("dark")}>
                    <Moon className=""/>
                    </button>
                    
                    :
                    <button className="border border-black dark:border-white p-2 rounded-full flex items-center gap-2" onClick={() => handleTheme("light")}>
                    <Sun className=""/>
                    </button>
                    
                }
                </div>
                <Link href="https://github.com/abel-otegbola" className="md:flex hidden gap-2 items-center p-2">
                    Github
                </Link>
                <Link href="https://x.com/Abel_Otegbola" className="md:flex hidden gap-2 items-center p-2">
                    X
                </Link>
                <Link href="https://linkedin.com/in/abel-otegbola" className="md:flex hidden gap-2 items-center p-2">
                    LinkedIn
                </Link>

                <Link href="#contact" className="h-[32px] w-[32px] rounded-full flex justify-center items-center border border-black dark:border-white">
                    <Envelope />
                </Link>
            </div>
        </div>
    )
}