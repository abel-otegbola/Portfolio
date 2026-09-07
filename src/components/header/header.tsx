'use client'
import { Briefcase, Envelope, Info, Moon, Sun } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
        <div className="flex items-center justify-between border-b border-gray-500/10 bg-white/[0.8] dark:bg-[#000]/[0.8] backdrop-blur-md md:px-[3%] md:py-1 py-2 md:px-[6%] px-4">
            <Link href="/" className="md:w-[22%] ">
                <div className="relative flex items-center gap-3">
                  <div className="relative flex gap-2 items-center md:text-[15px]">
                    <div className="aspect-square h-9 w-9 rounded-full bg-gray-100 dark:bg-dark">
                      <Image src="/images/abel-memoji.png" alt="Abel Otegbola" width={36} height={36} className="aspect-square object-cover rounded-full"/>
                    </div>
                    <div className="flex flex-col">
                      <h4>Abel Otegbola</h4>
                      <div className="text-green-400 text-xs">Available</div>
                    </div>
                  </div>
                </div>
            </Link>

            <nav className="md:static fixed bottom-0 left-0 right-0 md:bg-transparent dark:md:bg-transparent bg-white dark:bg-dark md:flex hidden items-center justify-center gap-4 md:w-[56%]  flex-1">
              {
                [
                  {
                    id: 1,
                    label: "About",
                    to: "#about",
                    icon: <Info size={20}/>
                  },
                  {
                    id: 2,
                    label: "Works",
                    to: "#works",
                    icon: <Briefcase size={20}/>
                  },
                  {
                    id: 3,
                    label: "Contact",
                    to: "#contact",
                    icon: <Envelope size={20}/>
                  }
                ].map(link => (
                  <div key={link.id} className={`flex items-center gap-1 md:px-4 px-2 py-2 md:py-1 rounded-full ${pathname === link.to ? "bg-gray-100 dark:bg-dark" : ""}`}>
                    <span className="md:hidden">{link.icon}</span>
                  <Link href={link.to} className="">{link.label}</Link>
                  </div>
                ))
              }
            </nav>

            <div className="flex items-center justify-end gap-4 md:w-[22%]">
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
                <Button className="md:flex hidden md:w-auto w-full rounded-full" size="sm">Get in Touch</Button>
            </div>
        </div>
        </div>
    )
}