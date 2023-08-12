import Head from "next/head";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Script from "next/script";

const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <title>Abel | Portfolio</title>
            </Head>
            <div className="bg-white text-black dark:bg-body dark:text-slate-200 scroll-smooth"> 
                <Navbar />
                    {children}
                <Footer />
                
                
            </div>
        </>
    )
}

export default Layout;