import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social">
                <Link href="https://web.facebook.com/abel.otegbola.1/"><a><Image src="/facebook.png" alt="facebook" width={20} height={20} /></a></Link>
                <Link href="https://twitter.com/Abel_Otegbola"><a><Image src="/twitter-box.png" alt="twitter" width={20} height={20} /></a></Link>
                <Link href="https://www.linkedin.com/in/abel-otegbola-4a477918a/"><a><Image src="/linkedin.png" alt="linkedin" width={20} height={20} /></a></Link>
                <Link href="https://www.behance.net/abelotegbola"><a><Image src="/behance-square.png" alt="behance" width={20} height={20} /></a></Link>
            </div>
            Abel Designs | Copyright &copy; {new Date().getFullYear()} 
        </footer>
    )
}

export default Footer;