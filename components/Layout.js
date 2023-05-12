import Head from "next/head";
import Footer from "./Global_components/Footer";
import Navbar from "./Global_components/Navbar";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Layout = ({ children }) => {

    useEffect(() => {
        AOS.init({
            duration: 600,
            offset: 170,
            mirror: true
        });
    }, [])


    return (
        <>
            <Head>
                <title>Abel.O | Portfolio</title>
            </Head>
            <div className="contents font-['inter'] bg-gray-900 text-white/[0.7] scroll-smooth"> 
                <Navbar />
                    {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout;