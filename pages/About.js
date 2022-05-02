import Head from "next/head";
import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/About.module.css'

const About = () => {
    return (
        <>
            <Head>
                <title>Abel | About</title>
            </Head>
            <section>
                <div className={Styles.header}>
                        <h2>ABOUT ME</h2>
                </div>
                <div className={Styles.about}>
                    <p>My name is Abel Otegbola and I am a full-time freelance web designer and developer who specializes in creating dynamic and beautiful web pages. I have been in the field for nearly 4 years, and have been loving every minute of it. I am an  entrepreneur, designer, developer, and overall thinker. Check out some of the links below to see what I&apos;ve been up to lately</p>
                    
                    <p>In the past, I have built user-centered interfaces and brought them to production by developing the site in which based on the user-first design methodologies, I have been able to achieve the required aim of the websites. Good design and scalable codes that brings about good communication and brand integrity are the things that make me unique. Check out some of my projects <Link href="/Portfolio"><a>here</a></Link> </p>
                </div>
            </section>
        </>
    )
}

export default About;