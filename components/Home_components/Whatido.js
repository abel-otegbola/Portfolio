import Image from 'next/image';
import Link from 'next/link'
import Styles from '../../styles/Home.module.css'

const Whatido = () => {
    return (
        <>
        <section className={Styles.section}>
            <div className={Styles.heading}>
                <h1>My Awesome Services</h1>
                <p>Providing the best solutions you can find</p>
            </div>
            <div className={Styles.services}>
               <div className={Styles.service}>
                   <div className={Styles.texts}>
                        <h3>HTML, CSS, JAVASCRIPT PROJECTS</h3>
                        <p>Creation of unique websites, landing pages, portfolios, 
                            personal websites and so on using plain html, css and
                            vanilaa JavaScript.
                        </p>
                   </div>
                   <div className={Styles.img}>
                        <Image src="/services.png" alt="services" width={370} height={280}/>
                   </div>
               </div>
               <div className={Styles.service2}>
                   <div className={Styles.img}>
                        <Image src="/services.png" alt="services" width={370} height={280}/>
                   </div>
                   <div className={Styles.texts}>
                        <h3>REACT JS AND NEXT JS PROJECTS</h3>
                        <p>Creation of unique websites, landing pages, portfolios, 
                            personal websites and so on using plain html, css and
                            vanilaa JavaScript.
                        </p>
                   </div>
               </div>
               <div className={Styles.service}>
                   <div className={Styles.texts}>
                        <h3>UI/UX DESIGN</h3>
                        <p>Creation of unique websites, landing pages, portfolios, 
                            personal websites and so on using plain html, css and
                            vanilaa JavaScript.
                        </p>
                   </div>
                   <div className={Styles.img}>
                        <Image src="/services.png" alt="services" width={370} height={280}/>
                   </div>
               </div>
            </div>

            
            <div className={Styles.heading}>
                <h1>Testimonials</h1>
                <p>What clients are saying about my services</p>
            </div>

            <div className={Styles.testimonials}>
                <div className={Styles.slider}>
                    <div className={Styles.slide}>
                        <Image src={"/star-rating.png"} width={99} height={16} alt="star-rating" />
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit phasellus cras mi ligula diam, fermentum turpis accumsan curae et. Blandit dictum egestas eget venenatis eu aenean cubilia, hendrerit molestie turpis massa fusce class. Nec lacus ut sapien quam praesent pellentesque proin facilisis placerat</p>
                        <h3>STANLEY CLEMENT</h3>
                        <p>Journalist</p>
                        <Image src={"/carousel.png"} width={54} height={12} alt="star-rating" />
                    </div>
                </div>
            </div>

            <div className={Styles.actions}>
                <Link href="/portfolio"><a>View my projects</a></Link>
                <Link href="/portfolio"><a>Hire me now</a></Link>
            </div>
        </section>
        </>
    )
}

export default Whatido;