import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCrown, FaMoon, FaStarOfDavid, FaSun } from "react-icons/fa";
import { TiBriefcase, TiHome, TiNotes } from "react-icons/ti";
import Button from "../button/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("")

  useEffect(() => {
    setTheme(localStorage.getItem("theme"))
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  const handleTheme = (index) => {
    localStorage.setItem("theme", index)
    setTheme(index)
  }

  return (
    <div className="flex sticky top-0 shadow-sm bg-white dark:bg-body items-center justify-between md:p-3 p-5 md:px-[7.5%] px-[5%] z-10">
      <h1 className='flex gap-2 items-center min-w-[20%] text-xl'>
        <FaCrown className="text-orange-500"/> <span className="font-[Helvetica]">Abel.</span>
      </h1>
      <nav
        className={`lg:static lg:w-[auto] lg:p-0 p-[5%] w-[75%] fixed lg:flex items-center gap-8 right-0 top-0 bg-white dark:bg-body overflow-hidden transition-all duration-700 z-20 lg:h-[auto] h-screen ${
          open ? "translate-x-[0]" : "lg:translate-x-[0] translate-x-[100%]"
        }`}
      >
        <Link href={"/"} className="flex items-center gap-2 lg:p-0 py-3 lg:m-2 lg:border-none border border-transparent border-b-gray-500/[0.2] transition-all hover:text-primary" onClick={() => setOpen(false)}><TiHome /> Home</Link>
        <Link href={"#about"} className="flex items-center gap-2 lg:p-0 py-3 lg:m-2 lg:border-none border border-transparent border-b-gray-500/[0.2] transition-all hover:text-primary" onClick={() => setOpen(false)}><TiNotes /> About</Link>
        <Link href={"#portfolio"} className="flex items-center gap-2 lg:p-0 py-3 lg:m-2 lg:border-none border border-transparent border-b-gray-500/[0.2] transition-all hover:text-primary" onClick={() => setOpen(false)}><TiBriefcase /> Portfolio</Link>

        
        <div className="rounded-full flex items-center bg-gray-400/[0.09] text-[14px] gap-6 p-2 px-4 lg:my-0 my-5">
          {
            theme !== "dark" ? 
            <button className="flex items-center gap-2" onClick={() => handleTheme("dark")}>
              <FaMoon className="text-lg"/>
              <span>Dark</span>
            </button>
            
            :
            <button className="flex items-center gap-2" onClick={() => handleTheme("light")}>
              <FaSun className="text-lg"/>
              <span>Light</span>
            </button>
            
          }
        </div>

        <div className="" onClick={() => setOpen(false)}>
          <Button text={"Hire me"} to={"#contacts"} type={"primary"} />
        </div>
      </nav>
      <div onClick={() => setOpen(!open)} className="lg:hidden block z-50">
        <button className="flex flex-col gap-1 w-[20px]">
          <span className={`w-full h-[2px] rounded bg-gray-800 dark:bg-slate-200 transition-all ${open ? "rotate-[45deg] translate-y-[6px]" : "rotate-0 translate-y-[0]"}`}></span>
          <span className={`w-full h-[2px] rounded bg-gray-800 dark:bg-slate-200 transition-all ${open ? "opacity-0" : "opacity-1"}`}></span>
          <span className={`w-full h-[2px] rounded bg-gray-800 dark:bg-slate-200 transition-all ${open ? "-rotate-[45deg] translate-y-[-6px]" : "rotate-0 translate-y-[0]"}`}></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
