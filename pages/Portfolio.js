import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/Portfolio.module.css'
import Head from "next/head";

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            title: "Personal website",
            description: "A personal website which showcases the uniqueness of the individual and clearly defines his goals, ambitions, services and career.",
            Links: {
                github: "https://github.com/abel-otegbola/probook-book-app",
                live: "https://probook-book-app.herokuapp.com/",
                design: ""
            },
            img: "/projects/personal-blue.png"
        },
        {
            id: 2,
            title: "Ecommerce mobile",
            description: "An ecommerce mobile application ui design with amazing features and modern ecommerce functionalities",
            Links: {
                github: "https://github.com/abel-otegbola/todo-app",
                live: "https://abel-otegbola.github.io/todo-app/",
                design: ""
            },
            img: "/projects/hoodie.png"
        },
        {
            id: 4,
            title: "Autoshare car sharing app",
            description: "  A car sharing application where users order ride for any destination at affordable prices.",
            Links: {
                github: "https://github.com/abel-otegbola/todo-app",
                live: "https://abel-otegbola.github.io/todo-app/",
                design: ""
            },
            img: "/projects/autoshare2.png"
        },
        {
            id: 5,
            title: "Ecommerce Application",
            description: "  An ecommerce application with amazing features, where users design and buy customed made t-shirts, polos and hoodies.",
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