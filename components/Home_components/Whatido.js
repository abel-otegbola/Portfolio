import Image from 'next/image';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import Styles from '../../styles/Home.module.css'

const Whatido = () => {
    const [slide, setSlide] = useState(1)

    useEffect(() => {
        setInterval(() => {
            setSlide(slide + 1)
                if(slide === 3) {
                    setSlide(1)
                }
                else {
                    setSlide(slide + 1)
                }
        }, 8000)
    }, [slide])


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
                        <Image src="/projects/projects1.png" alt="services" width={370} height={280}/>
                   </div>
               </div>
               <div className={Styles.service2}>
                   <div className={Styles.img}>
                        <Image src="/projects/projects2.png" alt="services" width={370} height={280}/>
                   </div>
                   <div className={Styles.texts}>
                        <h3>REACT JS AND NEXT JS PROJECTS</h3>
                        <p>Using the javscript library react to create amazing websites
                            applications such as ecommerce app, business websites and 
                            more complex websites
                        </p>
                   </div>
               </div>
               <div className={Styles.service}>
                   <div className={Styles.texts}>
                        <h3>UI/UX DESIGN</h3>
                        <p>Every good website starts with a UX/UI design. Using the best
                            tools such as figma and adobe xd, I create beauitiful professional 
                            designs for websites and applications.
                        </p>
                   </div>
                   <div className={Styles.img}>
                        <Image src="/projects/hoodie.png" alt="services" width={370} height={300}/>
                   </div>
               </div>
            </div>

            
            <div className={Styles.heading}>
                <h1>Testimonials</h1>
                <p>What clients are saying about my services</p>
            </div>

            <div className={Styles.testimonials} onDrag={() => handleDrag()}>
                <div className={Styles.slider}>
                    <div className={Styles.slide} style={{ display: (slide === 1)? 'block' : 'none' }}>
                        <Image src={"/star-rating.png"} width={99} height={16} alt="star-rating" />
                        <p>I have been very happy with the customer service and the attention to detail. I highly recommend Abel for your website and web design projects. I trust that Abel will do what is needed to be sure their clients are completely satisfied. We found Abel after years of searching for the right web developer.</p>
                        <h3>JOHNATHAN BERK</h3>
                        <p>Journalist</p>
                    </div>
                    <div className={Styles.slide} style={{ display: (slide === 2)? 'block' : 'none' }}>
                        <Image src={"/star-rating.png"} width={99} height={16} alt="star-rating" />
                        <p>I have been very happy with the customer service and the attention to detail. I highly recommend Abel for your website and web design projects. I trust that Abel will do what is needed to be sure their clients are completely satisfied. We found Abel after years of searching for the right web developer.</p>
                        <h3>FERNANDO DAVID</h3>
                        <p>Journalist</p>
                    </div>
                    <div className={Styles.slide} style={{ display: (slide === 3)? 'block' : 'none' }}>
                        <Image src={"/star-rating.png"} width={99} height={16} alt="star-rating" />
                        <p>I have been very happy with the customer service and the attention to detail. I highly recommend Abel for your website and web design projects. I trust that Abel will do what is needed to be sure their clients are completely satisfied. We found Abel after years of searching for the right web developer.</p>
                        <h3>STANLEY CLEMENT</h3>
                        <p>Journalist</p>
                    </div>
                </div>
                <div className={Styles.circles}>
                    <span style={{ color: (slide === 1)? "#C8BA70" : '#999' }}>o</span>
                    <span style={{ color: (slide === 2)? "#C8BA70" : '#999' }}>o</span>
                    <span style={{ color: (slide === 3)? "#C8BA70" : '#999' }}>o</span>
                </div>
            </div>

            <div className={Styles.actions}>
                <Link href="/Portfolio"><a>View my projects</a></Link>
                <Link href="/Contact"><a>Hire me now</a></Link>
            </div>
        </section>
        </>
    )
}

export default Whatido;