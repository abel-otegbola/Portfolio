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
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit phasellus cras mi ligula diam, fermentum turpis accumsan curae et. Blandit dictum egestas eget venenatis eu aenean cubilia, hendrerit molestie turpis massa fusce class. Nec lacus ut sapien quam praesent pellentesque proin facilisis placerat, phasellus torquent nascetur ullamcorper habitant mus quisque taciti venenatis lacinia, curae arcu fringilla dis ante potenti sociosqu porta.

Cum lacinia habitant etiam lectus vitae diam fusce sodales auctor, accumsan enim iaculis sem cras cubilia senectus pretium, primis molestie a tempus phasellus hendrerit tempor sapien. Hac gravida quam fusce duis convallis nisi neque, porta dapibus per vehicula enim conubia, ad dis suscipit risus penatibus tincidunt. Tellus scelerisque auctor nibh leo dapibus natoque dis iaculis, taciti pretium class ac odio nisi.</p>
                </div>
            </section>
        </>
    )
}

export default About;