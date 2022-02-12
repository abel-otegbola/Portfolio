import { useEffect, useState } from 'react'
import { render } from "react-dom"
import Link from 'next/link'
import Styles from '../styles/Contact.module.css'
import MailChimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from '../components/Form_component/CustomForm'

const Contact = () => {
    const postURL = `https://gmail.us20.list-manage.com/subscribe/post?u=a4b995dacdfb9e2efd5cef486&id=1041095842`


    return (
        <>
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
                <MailChimpSubscribe 
                    url={postURL}
                    render={({
                        subscribe,
                        status,
                        message
                    }) => (
                        <CustomForm 
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />   
                    )
                    }
                />
                </div>
            </div>
        </>
    )
}

export default Contact;