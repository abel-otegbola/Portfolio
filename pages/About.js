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
                <div className={Styles.heading}>
                    <h1>ABOUT ME</h1>
                    <p>My missions, visions and what drives me</p>
                </div>
                <div className={Styles.about}>
                    <div className={Styles.bio}>
                        <h3>NAME: <p>Otegbola Abel</p></h3>
                        <h3>EXPERTISE: <p>UI/UX Design and Web development</p></h3>
                        <h3>OCCUPATION: <p>Student, Freelancer</p></h3>
                        <h3>UI/UX TOOLS: <p>Adobe XD, Figma, Photoshop</p></h3>
                        <h3>WEB TOOLS: <p>Vscode, Github</p></h3>
                        <h3>SKILLS: <p>HTML, CSS, JavaScript, React js, Next js, Git</p></h3>
                        <h3>WEB STACK: <p>MERN(Mongodb Express React Node)</p></h3>
                        <h3>MISSION: <p>Infusing Design, Technologies and Creativity to create solutions for the society.</p></h3>
                        <h3>VISSION: <p> Using my passion for technology to create amazing projects that will add to development of the world.</p></h3>
                    </div>
                </div>
                <div className={Styles.content}>
                    <div className={Styles.side}>
                        <h2>UI/UX DESIGNS</h2>
                        <p>Creativity that assures both user satisfaction and product development, enhancing sales,
                            productivity and seamlessness is my major priority creating user experience and user
                            interface designs.
                            With experience creating interfaces and studying of what drives users into using products
                            on different platforms, I can successfully and conveniently make projects to achieve the
                            required goals.
                        </p>
                        <Link href="/Portfolio"><a>view some of my designs</a></Link>
                    </div>
                    <Image src="/ui_ux_illustration2.png" alt="ui/ux" width={700} height={250}/>
                </div>
                <div className={Styles.content + " " + Styles.web}>
                    <Image src="/ui-ux_illustration.png" alt="web" width={400} height={250}/>
                    <div className={Styles.side}>
                        <h2>WEB DEVELOPMENT</h2>
                        <p>Turning creative designs into unique codes using modern and best technologies.
                            With focus on productivity, 
                        </p>
                        <Link href="/Portfolio"><a>view some of my projects</a></Link>
                    </div>
                </div>
        </section>
        </>
    )
}

export default About;