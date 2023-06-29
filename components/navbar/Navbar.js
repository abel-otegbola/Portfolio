import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaEnvelope, FaTimes } from 'react-icons/fa'
import NavMenu from './NavMenu'

const Navbar = () => {
    const [open, setOpen] = useState(false)    

    return (
        <div className="flex items-center justify-between rounded mx-4 lg:mx-[10%] p-3 sticky top-4 left-0 backdrop-blur-sm bg-white/[0.05] z-10">
            <h1 className='font-["Cinzel"] min-w-[20%] font-semibold text-xl'>ABEL.<span className='text-primary'>O</span></h1>
            <nav className={`lg:static fixed md:flex gap-4 right-0 top-0 lg:bg-transparent bg-white dark:bg-body/[0.95] backdrop-blur-sm overflow-hidden transition-all duration-700 z-20 lg:h-[auto] h-screen ${open ? "lg:w-[auto] w-[100%]" : "lg:w-[auto] w-0"}`}>
                <Link href="mailto:abel.d.otegbola@gmail.com" className='flex items-center lg:m-0 m-[40px]'><FaEnvelope className='mr-4 text-orange-500' /> Abel.d.otegbola@gmail.com</Link>
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