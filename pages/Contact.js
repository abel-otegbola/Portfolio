import Link from 'next/link'
import Head from "next/head";
import Styles from '../styles/Contact.module.css'
import CustomForm from '../components/Form_component/CustomForm'

const Contact = () => {

    return (
        <>
        <Head>
            <title>Abel | Contact me</title>
        </Head>
            <div className={Styles.heading}>
                <h1>CONTACT ME</h1>
                <p>Feel free to contact me</p>
            </div>
            <div className={Styles.contact}>
                <div className={Styles.side}>
                    <div className="heading">
                        <h2>MEDIA CONTACTS</h2>
                    </div>
                    <div className={Styles.body}>
                        <Link href="https://www.facebook.com/abel.otegbola.1"><a>Facebook</a></Link>
                        <Link href="https://www.twitter.com/abel-otegbola"><a>Twiiter</a></Link>
                        <Link href="https://www.linkedin.com/in/abel-otegbola-4a477918a/"><a>Linkedin</a></Link>
                        <Link href="https://www.github.com/abel-otegbola"><a>Github</a></Link>
                        <Link href="https://behance.net/abelotegbola"><a>Behance</a></Link>
                        <Link href="https://dribbble.com/abeldeveloper"><a>Dribbble</a></Link>
                    </div>

                </div>
                <div className={Styles.form}>
                    <div className="heading">
                        <h2>SEND A MESSAGE</h2>
                    </div>
                        <CustomForm />  
                </div>
            </div>
        </>
    )
}

export default Contact;