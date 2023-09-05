import Head from "next/head";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Script from "next/script";

const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <title>Abel - Full Stack Developer</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="Full stack website developer and UI designer with experience building amazing products." />
                <meta name="keywords" content="fullstack developer, css react, React website developer" />
                <meta name="author" content="Abel Otegbola" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:url" content="https://abelo.tech"/>
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Abel Otegbola - Full stack developer" />
                <meta property="og:title" content="Abel Otegbola" />
                <meta property="og:description" content="Full stack website developer and UI designer with experience building amazing products." />
                <meta property="og:image" content="https://abelo.tech/img.webp" />
                <meta property="og:image:secure_url" content="/abelo.PNG" />
                <meta name="twitter:title" content="Abel Otegbola" />
                <meta name="twitter:description" content="Full stack website developer and UI designer with experience building amazing products." />
                <meta name="twitter:image" content="https://abelo.tech/img.webp" />
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:url" content="https://abelo.tech"/>

                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="shortcut icon" href="/favicon.ico" />
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