import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social">
                <Link href="/home"><a><Image src="/facebook.png" alt="facebook" width={20} height={20} /></a></Link>
                <Link href="/home"><a><Image src="/twitter-box.png" alt="twitter" width={20} height={20} /></a></Link>
                <Link href="/home"><a><Image src="/logo-instagram.png" alt="instagram" width={20} height={20} /></a></Link>
                <Link href="/home"><a><Image src="/linkedin.png" alt="linkedin" width={20} height={20} /></a></Link>
                <Link href="/home"><a><Image src="/behance-square.png" alt="behance" width={20} height={20} /></a></Link>
            </div>
            Abel Designs | Copyright &copy; {new Date().getFullYear()} 
        </footer>
    )
}

export default Footer;