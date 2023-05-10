import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'

const Navbar = () => {

    return (
        <div className="flex items-center justify-between rounded m-4 lg:mx-[10%] p-3 sticky top-4 left-0 backdrop-blur-sm bg-white/[0.05] z-10">
            <h1 className='font-["Cinzel"] min-w-[20%] font-semibold text-xl'>ABEL.<span className='text-fuchsia-500'>O</span></h1>
            <nav className={`flex items-center`}>
                <ul>
                    <Link href="mailto:abel15655@gmail.com"><a className='flex items-center'><FaEnvelope className='mr-4 text-orange-500' /> ABEL.D.OTEGBOLA@GMAIL.COM</a></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;