'use client'
import { Moon, Sun } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../button/button";
import { usePathname } from "next/navigation";

export interface navTab {
    id: number | string,
    label: string,
    to: string,
}

export default function Header() {
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
      <div className="sticky top-0 z-50">
        <div className="flex items-center justify-between border-b border-gray-500/10 md:px-[3%] py-1 px-4">
            <Link href="/" className="">
                <div className="relative flex items-center gap-3">
                  <div className="relative flex flex-col md:text-[15px]">
                    <p className="font-light flex items-center justify-center text-[12px] tracking-[-3px] aspect-square h-9 w-9 pr-[2px] rounded-full bg-gray-100 dark:bg-dark">AO</p>
                    <div className="absolute bottom-[-1px] right-[1px] w-[10px] h-[10px] rounded-full dark:bg-black bg-white flex items-center justify-center">
                      <div className="w-[6px] h-[6px] rounded-full bg-green-400"></div>
                    </div>
                  </div>
                </div>
            </Link>

            <div className="flex items-center gap-4">
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
            </div>
        </div>
        </div>
    )
}