import Head from "next/head";
import Footer from "./Global_components/Footer";
import Navbar from "./Global_components/Navbar";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Layout = ({ children }) => {

    // useEffect(() => {
    //     AOS.init({
    //         duration: 600,
    //         offset: 170,
    //         mirror: true
    //     });
    // }, [])


    return (
        <>
            <Head>
                <title>Abel.O | Portfolio</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
            </Head>
            <div className="contents font-['inter'] bg-gray-900 text-white/[0.7] scroll-smooth"> 
                <Navbar current={children}/>
                    {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout;