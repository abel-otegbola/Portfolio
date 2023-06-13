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
            mirror: false
        });
    }, [])


    return (
        <>
            <Head>
                <title>Abel | Portfolio</title>
            </Head>
            <div className="font-['inter'] dark:bg-body dark:text-text bg-white text-black scroll-smooth"> 
                <Navbar />
                    {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout;