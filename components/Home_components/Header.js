import Link from 'next/link'
import Image from 'next/image'
import Styles from '../../styles/Home.module.css'

const Header = () => {

    return (
        <>
        <div className={Styles.header}>
            <div className={Styles.front_texts}>
                <div className={Styles.para}>
                    <h2>HELLO !!!</h2>
                    <p> I'm <span>Abel</span>, A Passionate <span>website developer</span> and <span>UI/UX designer</span> with experience creating amazing website projects.</p>
                    <Link href="/resume.pdf" download="Abel resume"><a>Download Resume</a></Link>
               </div>
            </div>

            <div className={Styles.values}>
                <div className={Styles.value}>
                    <Image src="/fastly.png" alt="scalable" width={30} height={30} />
                    <div className={Styles.texts}>
                        <h3>Scalable</h3>
                        <p>Fast</p>
                    </div>
                </div>
                <div className={Styles.value}>
                    <Image src="/shield-lock.png" alt="scalable" width={30} height={30} />
                    <div className={Styles.texts}>
                        <h3>Flexible</h3>
                        <p>Secured</p>
                    </div>
                </div>
                <div className={Styles.value}>
                    <Image src="/burst-new.png" alt="scalable" width={30} height={30} />
                    <div className={Styles.texts}>
                        <h3>Clean codes</h3>
                        <p>readable</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;