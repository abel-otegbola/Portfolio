import { useEffect, useState } from "react";
import Button from "../button/button";
import { PiMoon, PiPaperPlane, PiSun } from "react-icons/pi";
import Link from "next/link";

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
  }, [theme])

  const handleTheme = (index) => {
    localStorage.setItem("theme", index)
    setTheme(index)
  }

  return (
    <div className="flex sticky top-0 bg-white dark:bg-body border border-transparent border-b-gray-500/[0.1] items-center justify-between md:px-[10%] px-[5%] md:py-2 py-4 z-10">
      <div className='flex gap-2 items-center min-w-[20%] text-sm'>
       <PiPaperPlane className="p-3 text-4xl rounded-full text-white bg-gradient-to-r from-fuchsia-600 to-emerald-600" />
       <div>
        <Link href={"/"}>Abel Otegbola</Link>
        <Link href={"/contact"} className="flex items-center gap-1 text-emerald-600 text-[12px]">
          <p className="relative w-[10px]">
            <span className="absolute -top-1 left-0 w-[8px] h-[8px] rounded-full bg-emerald-600 animate-ping"></span>  
            <span className="absolute -top-1 left-0 w-[8px] h-[8px] rounded-full bg-emerald-600"></span>  
          </p> 
          Available for work
        </Link>
       </div>
      </div>
      <nav
        className={`lg:static lg:w-[auto] lg:p-0 p-[5%] w-[75%] fixed lg:flex items-center gap-4 right-0 top-0 bg-white dark:bg-body overflow-hidden transition-all duration-700 z-20 lg:h-[auto] h-screen ${
          open ? "translate-x-[0]" : "lg:translate-x-[0] translate-x-[100%]"
        }`}
      >        
        <div className="rounded-full flex items-center text-[14px] gap-6 md:p-2 md:px-2 lg:my-0 my-5">
          {
            theme !== "dark" ? 
            <button className="border border-gray-500/[0.2] p-1 rounded-full flex items-center gap-2" onClick={() => handleTheme("dark")}>
              <PiMoon className="text-xl rounded-full p-1 bg-gray-500/[0.09]"/>
            </button>
            
            :
            <button className="border border-gray-500/[0.2] p-1 rounded-full flex items-center gap-2" onClick={() => handleTheme("light")}>
              <PiSun className="text-xl rounded-full p-1 bg-gray-500/[0.09]"/>
            </button>
            
          }
        </div>

        <div className="" onClick={() => setOpen(false)}>
          <Button text={"Get in touch"} to={"/contact"} type={"secondary"} />
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
