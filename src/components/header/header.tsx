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
      <div className="sticky top-0 border border-dashed border-gray-500/[0.3] z-[50]  backdrop-blur-lg">
        <div className="flex items-center justify-between dark:text-gray bg-white/[0.6] dark:bg-black/[0.8] xl:mx-[25%] lg:mx-[20%] md:mx-[10%] md:py-1 md:px-3 py-3 px-3 border-x border-dashed border-gray-500/[0.3]">
            <Link href="/" className="">
                <div className="relative flex gap-3">
                  <Image src="/images/abel.png" alt="muse" width={36} height={32} className="object-cover bottom-0 outline outline-primary/[0.09] rounded-full outline-offset-2 ml-1"/>
                  <div className="flex flex-col gap-1 text-[11px]">
                    <p className="font-semibold">Abel Otegbola</p>
                    <p className="text-[10px]">Designer & Developer</p>
                  </div>
                </div>
            </Link>

            <div className="flex items-center text-[12px] justify-end gap-4 relative">
                <Link href="/" className={`md:flex hidden gap-1 items-center p-2 hover:text-primary ${pathname === "/" ? "text-primary" : ""}`}>
                    Home
                </Link>
                <Link href="/about" className={`md:flex hidden gap-1 items-center p-2 hover:text-primary ${pathname === "/about" ? "text-primary" : ""}`}>
                    About
                </Link>
                <Link href="works" className={`md:flex hidden gap-1 items-center p-2 hover:text-primary ${pathname === "/works" ? "text-primary" : ""}`}>
                    Works
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
                <Button href="/contact" className="" >Hire</Button>
            </div>
        </div>
        </div>
    )
}