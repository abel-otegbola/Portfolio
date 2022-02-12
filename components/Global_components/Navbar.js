import Link from 'next/link'
import { useEffect, useState } from 'react'
import Styles from '../../styles/Navbar.module.css'

const Navbar = ({current}) => {
    const [active, setActive] = useState([{}, {}, {}, {}])
    const [menuControl, setMenuControl] = useState("show")
    const [call, setCall] = useState("Say hi!")

    
    const handleMenu = (e) => {
        if (menuControl === "show") {
            setMenuControl("noshow")
        }
        else {
            setMenuControl("show")
        }
    }

    useEffect(() => {
        let width = window.innerWidth
        window.addEventListener("click", (e) => {
            if (e.target.className !== "Navbar_navicon__VrQQs" && window.innerWidth < 500) {
                setMenuControl("noshow")
            }
        })
    })

    

    useEffect(() => {
        console.log(current.type.name)
        if (current.type.name === "Home") {
            setActive([{color: "#C8BA70"}, {}, {}, {}])
        }
        else if (current.type.name === "About") {
            setActive([{}, {color: "#C8BA70"}, {}, {}])
        }
        else if (current.type.name === "Portfolio") {
            setActive([{}, {}, {color: "#C8BA70"}, {}])
        }
        else if (current.type.name === "Contact") {
            setActive([{}, {}, {}, {color: "#C8BA70"}])
        }
    }, [current.type.name])

    return (
        <div className={Styles.topbar}>
            <div className={Styles.navicon} onClick={(e) => handleMenu(e)}>=</div>
            <nav className={(menuControl === "show") ? Styles.show : Styles.noshow}>
                <h3 onClick={() => setCall("Call me now (+234 706 0989 331)")}>{call}</h3>
                <ul>
                    <Link href="/"><a style={active[0]}>HOME</a></Link>
                    <Link href="/About"><a style={active[1]}>ABOUT</a></Link>
                    <Link href="/Portfolio"><a style={active[2]}>PORTFOLIO</a></Link>
                    <Link href="/Contact"><a style={active[3]}>CONTACTS</a></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;