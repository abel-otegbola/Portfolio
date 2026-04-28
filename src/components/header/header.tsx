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
      <div className="sticky top-0 z-50  backdrop-blur-lg">
        <div className="flex items-center justify-between dark:text-gray bg-white/60 dark:bg-[#202020]/80 xl:px-[15%] lg:px-[10%] md:px-[10%] py-3 px-4">
            <Link href="/" className="">
                <div className="relative flex items-center gap-3">
                  <Image src="/images/memoji.svg" alt="muse" width={40} height={40} className="object-cover aspect-square bottom-0 rounded-full"/>
                  <div className="flex flex-col md:text-[14px] text-[11px]">
                    <p className="font-medium">Abel Otegbola</p>
                    <p className="flex items-center gap-1 md:text-[12px] text-green-400 text-[10px]">
                      <div className="w-[10px] h-[10px] rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-[6px] h-[6px] rounded-full bg-green-400 animate-pulse"></div>
                      </div>
                      Available
                    </p>
                  </div>
                </div>
            </Link>

            <div className="flex items-center flex-1 md:text-[14px] text-[12px] justify-center sm:gap-6 gap-4 relative">
                <Link href="/" className={`md:flex hidden gap-1 items-center p-2 hover:font-bold opacity-[1] ${pathname === "/" ? "font-bold" : "font-medium opacity-[0.7]"}`}>
                    Home
                </Link>
                <Link href="/about" className={`sm:flex hidden gap-1 items-center p-2 hover:font-bold opacity-[1] ${pathname === "/about" ? "font-bold" : "font-medium opacity-[0.7]"}`}>
                    About
                </Link>
                <Link href="/works" className={`sm:flex hidden gap-1 items-center p-2 hover:font-bold opacity-[1] ${pathname === "/works" ? "font-bold" : "font-medium opacity-[0.7]"}`}>
                    Works
                </Link>

            </div>

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
                <Button href="/contact" className="" >Let&apos;s talk</Button>
            </div>
        </div>
        </div>
    )
}