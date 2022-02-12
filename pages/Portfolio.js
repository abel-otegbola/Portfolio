import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/Portfolio.module.css'
import Head from "next/head";

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            title: "ECOMMERCE APPLICATION",
            features: ["Frontend(React js)", "UI/UX components(Adobe XD)", "State management(Redux)", "Dashboard(Chart.js)", "Chat(Socket.io)", "Backend(Node.js)", "Database(MySQL)"],
            description: "  An  ecommerce application with amazing features, where users add products in cart, order products and also save products in wishlist for later.",
            pages: "Admin dashboard, User dashboard, Home page, About page, Contactus page, Shop, Cart, Wishlist, Settings, Login and logout pages, profile page, Chat page, Notifications page.",
            Links: {
                github: "",
                live: "",
                design: ""
            },
            img: "/Ecommerce_darkmode.png"
        },
        {
            id: 2,
            title: "AUTOSHARE APPLICATION",
            features: ["Frontend(React js)", "UI/UX components(Adobe XD)", "Dashboard(Chart.js)", "Chat(Socket.io)", "Backend(Node.js)", "Database(MySQL)"],
            description: "  A car ordering application with amazing features, where users order for rides, get incentives on services and drivers earn as much as they want.",
            pages: "Admin dashboard, User dashboard, Driver dashboard, Home page, About page, map page, Settings, Login and logout pages, profile page, Chat page, Notifications page.",
            Links: {
                github: "",
                live: "",
                design: ""
            },
            img: "/autoshare.png"
        }
    ]
    
    return (
        <>
        <Head>
            <title>Abel | Portfolio</title>
        </Head>
        <div className={Styles.heading}>
            <h1>MY PORTFOLIO</h1>
            <p>Here are some of my recent projects</p>
        </div>
        <div className={Styles.contents}>
            {   
                projects.map(product => {
                    return (
                    <div className={Styles.project} key={product.id}>
                         <Image src={product.img} width={500} height={450}/>
                        <div className={Styles.about}>
                            <h2>{product.title}</h2>
                            <h4>FEATURES: </h4>
                                {
                                product.features.map(feature => {
                                    return (<p key={product.features.indexOf(feature)}>{feature}</p>)
                                })
                                }
                            <h4>DESCRIPTION:</h4>
                            <p>{product.description}</p>
                            <div className={Styles.pages}>
                                <h4>PAGES:</h4>
                                <p>{product.pages}</p>
                            </div>
                            <div className={Styles.links}>
                                <Link href="https://ecommerve"><a>Live link</a></Link>
                                <Link href="https://ecommerve"><a>Github link</a></Link>
                                <Link href="https://ecommerve"><a>UI/UX link</a></Link>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            
        </div>
        </>
    )
}

export default Portfolio;