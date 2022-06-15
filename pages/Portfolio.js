import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/Portfolio.module.css'
import Head from "next/head";

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            title: "Nepalbestdeal redesign",
            description: "A website redesign of an ecommerce website.",
            Links: {
                live: "https://nepalbestdeal.com/"
            },
            img: "/projects/nepalbestdeal.png"
        },
        {
            id: 2,
            title: "Cleanmail",
            description: "An email verification website application.",
            Links: {
                github: "https://github.com/abel-otegbola/Cleanmail",
                live: "https://cleanmails.herokuapp.com"
            },
            img: "/projects/cleanmail.JPG"
        },
        {
            id: 3,
            title: "Cleanlists",
            description: "A nodejs task management web application using mysql database and allows user management and authentication using passport.js",
            Links: {
                github: "https://github.com/abel-otegbola/Cleanlists"
            },
            img: "/projects/Cleanlist.png"
        },
        {
            id: 4,
            title: "Probook",
            description: "Books website application using google books api",
            Links: {
                live: "https://probook-book-app.herokuapp.com"
            },
            img: "/projects/bouquin.JPG"
        },
        {
            id: 5,
            title: "Simpz",
            description: "A nodejs user management application utilizing passport.js authentication and mysql database.",
            Links: {
                github: "https://github.com/abel-otegbola/Loginauth"
            },
            img: "/projects/user.JPG"
        }
    ]
    
    return (
        <>
        <Head>
            <title>Abel | Portfolio</title>
        </Head>
        
        <div className={Styles.header}>
            <h2>PROJECTS</h2>
        
        </div>

        <div className={Styles.contents}>
            {   
                projects.map(product => {
                    return (
                    <div className={Styles.project} key={product.id}>
                        <img src={product.img} alt="project"/>
                        <div className={Styles.about}>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <a href={product.Links.live || product.Links.github}>view</a>
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