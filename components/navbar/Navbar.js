import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
  }, [theme])

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
        <Link href={"/"} className="md:inline block md:p-0 px-[30px] py-5" onClick={() => setOpen(false)}>Home</Link>
        <Link href={"#about"} className="md:inline block md:p-0 px-[30px] py-5" onClick={() => setOpen(false)}>About</Link>
        <Link href={"#portfolio"} className="md:inline block md:p-0 px-[30px] py-5" onClick={() => setOpen(false)}>Portfolio</Link>
        <div className="md:p-0 px-[30px] py-5" onClick={() => setOpen(false)}>
          <Button text={"Hire me"} to={"#contacts"} type={"primary"} />
        </div>
      </nav>
      <div onClick={() => setOpen(!open)} className="lg:hidden block z-50">
        {!open ? (
          <FaBars className="p-1 text-3xl" />
        ) : (
          <FaTimes className="p-1 text-3xl" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
