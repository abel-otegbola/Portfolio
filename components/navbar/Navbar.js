import Link from "next/link";
import { useEffect, useState } from "react";
import { FaDesktop, FaMoon, FaSun } from "react-icons/fa";
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
      <h1 className='min-w-[20%] text-xl'>
        Abel Otegbola
      </h1>
      <nav
        className={`lg:static lg:w-[auto] md:p-0 p-[5%] w-[75%] fixed md:flex items-center gap-8 right-0 top-0 bg-white dark:bg-body overflow-hidden transition-all duration-700 z-20 lg:h-[auto] h-screen ${
          open ? "translate-x-[0]" : "md:translate-x-[0] translate-x-[100%]"
        }`}
      >
        <Link href={"/"} className="md:inline block md:p-0 px-[30px] py-5 transition-all hover:text-primary" onClick={() => setOpen(false)}>Home</Link>
        <Link href={"#about"} className="md:inline block md:p-0 px-[30px] py-5 transition-all hover:text-primary" onClick={() => setOpen(false)}>About</Link>
        <Link href={"#portfolio"} className="md:inline block md:p-0 px-[30px] py-5 transition-all hover:text-primary" onClick={() => setOpen(false)}>Portfolio</Link>

        <div className="p-2 rounded-full flex items-center gap-6 md:mx-0 mx-5">
          {
            theme !== "dark" ? 
            <FaMoon className="text-xl" onClick={() => handleTheme("dark")}/>
            :
            <FaSun className="text-xl" onClick={() => handleTheme("light")}/>
          }
        </div>

        <div className="md:p-0 px-[30px] py-5" onClick={() => setOpen(false)}>
          <Button text={"Hire me"} to={"#contacts"} type={"primary"} />
        </div>
      </nav>
      <div onClick={() => setOpen(!open)} className="lg:hidden block z-50">
        <button className="flex flex-col gap-1 w-[20px]">
          <span className={`w-full h-[2px] rounded bg-slate-200 transition-all ${open ? "rotate-[45deg] translate-y-[6px]" : "rotate-0 translate-y-[0]"}`}></span>
          <span className={`w-full h-[2px] rounded bg-slate-200 transition-all ${open ? "opacity-0" : "opacity-1"}`}></span>
          <span className={`w-full h-[2px] rounded bg-slate-200 transition-all ${open ? "-rotate-[45deg] translate-y-[-6px]" : "rotate-0 translate-y-[0]"}`}></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
