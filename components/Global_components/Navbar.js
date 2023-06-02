import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaBars, FaEdit, FaEnvelope, FaMoon, FaSun, FaTimes } from 'react-icons/fa'
import NavMenu from './NavMenu'

const Navbar = () => {
    const [open, setOpen] = useState(false)    
    const [theme, setTheme] = useState("theme")

    const handleDarkmode = (mode) => {
        if(mode === "theme") {
            // Whenever the user explicitly chooses to respect the OS preference
            localStorage.removeItem('theme')
            setTheme("theme")
        }
        else {
            localStorage.theme = mode
            setTheme(mode)
        }
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
        document.documentElement.classList.remove('dark')
        }
    }

    useEffect(() => {
        setTheme(!localStorage.theme || localStorage.theme === null ? "theme" : localStorage.theme)
    })

    return (
        <div className="flex items-center justify-between rounded mx-4 lg:mx-[10%] p-3 sticky top-4 left-0 backdrop-blur-sm bg-white/[0.05] z-10">
            <h1 className='font-["Cinzel"] min-w-[20%] font-semibold text-xl'>ABEL.<span className='text-primary'>O</span></h1>
            <nav className={`lg:static fixed flex gap-4 right-0 top-0 lg:bg-transparent bg-[rgba(11,8,58,.9)] backdrop-blur-sm overflow-hidden transition-all duration-700 z-20 lg:h-[auto] h-screen ${open ? "lg:w-[auto] w-[100%]" : "lg:w-[auto] w-0"}`}>
                <Link href="mailto:abel15655@gmail.com"><a className='flex items-center lg:m-0 m-[40px]'><FaEnvelope className='mr-4 text-orange-500' /> Abel.d.otegbola@gmail.com</a></Link>
                <div className="flex flex-wrap gap-1 p-1 bg-gray-900/[0.3] rounded">
                    <button className={`flex items-center text-[10px] p-2 px-3 rounded ${theme === "theme" ? "bg-primary text-white" : "bg-gray-200 text-black"}`} onClick={() => handleDarkmode("theme")}>
                        <FaEdit className=""/>
                    </button>
                    <button className={`flex items-center text-[10px] p-2 px-3 rounded ${theme === "light" ? "bg-primary text-white" : "bg-gray-200 text-black"}`} onClick={() => handleDarkmode("light")}>
                        <FaSun className=""/>
                    </button>
                    <button className={`flex items-center text-[10px] p-2 px-3 rounded ${theme === "dark" ? "bg-primary text-white" : "bg-gray-200 text-black"}`} onClick={() => handleDarkmode("dark")}>
                        <FaMoon className=""/>
                    </button>
                </div>
                <div className={`lg:hidden lg:mx-0 mx-[10%] lg:mt-0 mt-[50px]`}>
                    <NavMenu setOpen={setOpen}/>
                </div>
            </nav>
            <div onClick={() => setOpen(!open)} className='lg:hidden block z-50'>
                {
                    !open ? 
                    <FaBars className='p-1 text-3xl' />
                    :
                    <FaTimes className="p-1 text-3xl" />
                }
            </div>
        </div>
    )
}

export default Navbar;