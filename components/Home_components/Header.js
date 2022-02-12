import Image from 'next/image'
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

    return (
        <>
        <div className={Styles.header}>
            <div className={Styles.front_texts}>
                <Image src={"/briefcase.svg"} width={40} height={30}/>
                <div className={Styles.para}>
                    <h2>ABEL</h2>
                    <h2>DESIGNS</h2>
                </div>
                <div className={Styles.quotes}>
                    <p>{currentQuotes}</p>
                </div>
            </div>
            <div className={Styles.bottombar}>
                <Image className={Styles.gototop} src="/arrowup.svg" width={20} height={20} />
                <button><Image src="/cdownload.svg" width={20} height={20} className={Styles.resume} />Download Resume</button>
            </div>
        </div>
        </>
    )
}

export default Header;