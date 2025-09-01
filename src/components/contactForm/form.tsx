'use client'
import Input from "../input/input";
import Textarea from "../textarea/textarea";
import { Envelope, PencilLine, Spinner, User } from "@phosphor-icons/react";
import Button from "../button/button";
import { messageSchema } from "../../schema/auth";
import { Formik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useState } from "react";
import Image from "next/image";
import ReCaptcha from "../recaptcha/recaptcha";

export default function ContactForm() {
    const [status, setStatus] = useState({ type: "", msg: "" })
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    return (
        <Formik
            initialValues={{ email: '', fullname: '', message: ''}}
            validationSchema={messageSchema}
            onSubmit={async ( values, { setSubmitting } ) => {
                if (!recaptchaToken) {
                    setStatus({ type: "error", msg: "reCAPTCHA not available" })
                    return;
                }

                try {
                    const response = await fetch('/api/verify-captcha', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        token: recaptchaToken
                      }),
                    });
              
                    const data = await response.json();
                    if (data.success) {
                        await addDoc(collection(db, "messages"), values);
                        setStatus({ type: "success", msg: "message sent succesfully" })
                        setSubmitting(false)
                      } 
                    else {
                        setStatus({ type: "error", msg: "reCAPTCHA verification failed" })
                    }
                    
                }
                catch(e: unknown) {
                    setStatus({ type: "error", msg: "Message sending failed" + e })
                    setSubmitting(false)
                }
                    setStatus({ type: "", msg: "" })
                }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
                resetForm
            }) => (
                <form onSubmit={handleSubmit} className="relative flex flex-col gap-4 py-8">
                    <div className="grid md:grid-cols-2 gap-2">
                        <Input name="fullname" label="What's your name?" value={values.fullname} onChange={handleChange} type={"text"} error={touched.fullname ? errors.fullname : ""} placeholder="John Doe" leftIcon={<User size={16}/>}/>
                        <Input name="email" label="What's your email?" value={values.email} onChange={handleChange} type="email" error={touched.email ? errors.email : ""} placeholder="John@example.com" leftIcon={<Envelope size={16}/>}/>
                    </div>
                    <Textarea placeholder="Tell me about your project requirements, your company and when you'd like to start" label="What do you need help with?" name="message" value={values.message} error={touched.message ? errors.message : ""} onChange={handleChange} leftIcon={<PencilLine />} />
                    <ReCaptcha onChange={setRecaptchaToken} />
                    <Button className="font-medium text-center w-full">
                        { isSubmitting ? <Spinner className="animate-spin " size={16} /> : "Send message" }
                    </Button>

                    {
                        status.type === "success" ? 
                            <div className="p-6 flex flex-col gap-4 rounded bg-white dark:bg-black absolute top-0 left-0 w-full h-full items-center justify-center">
                                <Image src={"/success.svg"} alt="success" width={120} height={120} />
                                <p className="text-emerald-700 text-lg font-bold">{status.msg}</p>
                                <p>Your message has been received. I will contact you within 24 hours.</p>
                                <p tabIndex={1} className="cursor-pointer border border-[#000] dark:border-gray-500/[0.3] p-4 py-1 rounded-full" onClick={() => {setStatus({ type: "", msg: "" }); resetForm()}}>Close</p>
                            </div>
                            
                            : 
                        status.type === "error" ? <p className="text-red-500">{status.msg}</p> : 
                        ""

                    }
                </form>
            )}
        </Formik>
    )
}