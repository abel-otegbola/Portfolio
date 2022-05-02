import Link from 'next/link'
import { useEffect, useState } from 'react'
import Styles from '../../styles/Navbar.module.css'

const Navbar = ({current}) => {
    const [active, setActive] = useState([{}, {}, {}, {}])
    const [menuControl, setMenuControl] = useState("noshow")

    
    const handleMenu = (e) => {
        if (menuControl === "show") {
            setMenuControl("noshow")
        }
        else {
            setMenuControl("show")
        }
    }

    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (e.target.className !== "Navbar_navicon__VrQQs" && window.innerWidth < 500) {
                setMenuControl("noshow")
            }
        })
        
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
            <h4>ABEL OTEGBOLA</h4>
            <nav className={(menuControl === "show") ? Styles.show : Styles.noshow}>
                <ul>
                    <Link href="/"><a style={active[0]}>Home</a></Link>
                    <Link href="/About"><a style={active[1]}>About</a></Link>
                    <Link href="/Portfolio"><a style={active[2]}>Portfolio</a></Link>
                    <Link href="/Contact"><a style={active[3]}>Contacts</a></Link>
                </ul>
                <Link href="/Contact"><a className={Styles.top_button}>Hire me!</a></Link>
            </nav>
        </div>
    )
}

export default Navbar;