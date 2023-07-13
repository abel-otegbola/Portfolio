import Head from "next/head";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <title>Abel | Portfolio</title>
            </Head>
            <div className="bg-body text-text scroll-smooth"> 
                <Navbar />
                    {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout;