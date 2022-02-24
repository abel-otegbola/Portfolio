import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/Portfolio.module.css'
import Head from "next/head";

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            title: "Bouquin Collections",
            features: ["UI/UX components(Adobe XD)", "Backend(Node.js)", "Database(MongoDB)", "Api(Google books)"],
            description: "  An application which allows users to search for books, read books and also download books.",
            pages: "Home, About, Saved, categpories",
            Links: {
                github: "https://github.com/abel-otegbola/probook-book-app",
                live: "https://probook-book-app.herokuapp.com/",
                design: ""
            },
            img: "/Capture.jpg"
        },
        {
            id: 2,
            title: "Todo Application",
            features: ["Frontend(React js)", "UI/UX components(Adobe XD)"],
            description: "  A car todo application with amazing features, where users input tasks for the day and work to fulfill this tasks.",
            pages: "One page",
            Links: {
                github: "https://github.com/abel-otegbola/todo-app",
                live: "https://abel-otegbola.github.io/todo-app/",
                design: ""
            },
            img: "/Capture-todo.jpg"
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
                         <Image src={product.img} alt="project" width={500} height={430}/>
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
                                <Link href={product.Links.live}><a>Live link</a></Link>
                                <Link href={product.Links.github}><a>Github link</a></Link>
                                <Link href={product.Links.design}><a>UI/UX link</a></Link>
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