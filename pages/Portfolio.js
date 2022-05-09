import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/Portfolio.module.css'
import Head from "next/head";

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            title: "Bouquin Collections",
            description: "  An application which allows users to search for books, read books and also download books.",
            Links: {
                github: "https://github.com/abel-otegbola/probook-book-app",
                live: "https://probook-book-app.herokuapp.com/",
                design: ""
            },
            img: "/projects/personal-blue.png"
        },
        {
            id: 2,
            title: "Todo Application",
            description: "  A car todo application with amazing features, where users input tasks for the day and work to fulfill this tasks.",
            Links: {
                github: "https://github.com/abel-otegbola/todo-app",
                live: "https://abel-otegbola.github.io/todo-app/",
                design: ""
            },
            img: "/projects/hoodie.png"
        },
        {
            id: 3,
            title: "Todo Application",
            description: "  A car todo application with amazing features, where users input tasks for the day and work to fulfill this tasks.",
            Links: {
                github: "https://github.com/abel-otegbola/todo-app",
                live: "https://abel-otegbola.github.io/todo-app/",
                design: ""
            },
            img: "/projects/portfolio.png"
        },
        {
            id: 4,
            title: "Todo Application",
            description: "  A car todo application with amazing features, where users input tasks for the day and work to fulfill this tasks.",
            Links: {
                github: "https://github.com/abel-otegbola/todo-app",
                live: "https://abel-otegbola.github.io/todo-app/",
                design: ""
            },
            img: "/projects/autoshare2.png"
        },
        {
            id: 5,
            title: "Todo Application",
            description: "  A car todo application with amazing features, where users input tasks for the day and work to fulfill this tasks.",
            Links: {
                github: "https://github.com/abel-otegbola/todo-app",
                live: "https://abel-otegbola.github.io/todo-app/",
                design: ""
            },
            img: "/projects/ecommerce_components.png"
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