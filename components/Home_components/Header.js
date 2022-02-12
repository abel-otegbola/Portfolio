import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Styles from '../../styles/Home.module.css'

const Header = () => {
    const [currentQuotes, setCurrentQuotes] = useState("")

    const quotes = [
        "Be unique",
        "Be Creative",
        "Be Amazing",
        "Be Innovative",
        "Be Intuitive"
    ]
    useEffect(() => {
        let i = 0
        setInterval(() => {
            setCurrentQuotes(quotes[i])
            i+=1
            if(i > 4) {
                i = 0
            }
        }, 3000)

    }, [])

    const handleScroll = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
        <div className={Styles.header}>
            <div className={Styles.front_texts}>
                <Image src={"/briefcase.svg"} alt="briefcase" width={40} height={30}/>
                <div className={Styles.para}>
                    <h2>ABEL</h2>
                    <h2>DESIGNS</h2>
                </div>
                <div className={Styles.quotes}>
                    <p>{currentQuotes}</p>
                </div>
            </div>
            <div className={Styles.bottombar}>
                <Image className={Styles.gototop} src="/logo.png" alt="logo" width={35} height={20} onClick={() => handleScroll()}/>
                <Link href="/resume.pdf" download="Abel resume"><a><Image src="/cdownload.svg" alt="download" width={20} height={20} className={Styles.resume} />Download Resume</a></Link>
            </div>
        </div>
        </>
    )
}

export default Header;