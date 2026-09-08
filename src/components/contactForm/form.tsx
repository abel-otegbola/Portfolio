'use client'
import { Input } from "../ui/input";
import { Spinner } from "@phosphor-icons/react";
import { Button } from "../ui/button";
import { messageSchema } from "../../schema/auth";
import { Formik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useState } from "react";
import Image from "next/image";
import ReCaptcha from "../recaptcha/recaptcha";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Textarea } from "../ui/textarea";
// import { Resend } from 'resend';

export default function ContactForm() {
    const [status, setStatus] = useState({ type: "", msg: "" })
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    
    // const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

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
                <form onSubmit={handleSubmit} className="relative flex flex-col items-center gap-8 py-12">
                        <FieldGroup className="flex flex-col gap-[22px]">
                        
                        {/* Full Name */}
                        <Field className="flex flex-col gap-[6px]">
                            <FieldLabel
                                htmlFor="fullname"
                                className="text-[14px] font-semibold text-primary-100"
                            >
                                Full name
                            </FieldLabel>

                            <Input
                                id="fullname"
                                value={values.fullname}
                                onChange={handleChange}
                                placeholder="What's your name?"
                                className={errors.fullname ? "border-red-400" : ""}
                            />

                            {errors.fullname && (
                                <p className="text-sm text-red-300">
                                    {errors.fullname}
                                </p>
                            )}
                        </Field>
                        {/* Email */}
                        <Field className="flex flex-col gap-[6px]">
                            <FieldLabel
                                htmlFor="email"
                                className="text-[14px] font-semibold text-primary-100"
                            >
                                Email
                            </FieldLabel>

                            <Input
                                id="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                placeholder="What's your email?"
                                className={errors.email ? "border-red-400" : ""}
                            />

                            {errors.email && (
                                <p className="text-sm text-red-300">
                                    {errors.email}
                                </p>
                            )}
                        </Field>
                        
                        {/* Message */}
                        <Field className="flex flex-col gap-[6px]">
                            <FieldLabel
                                htmlFor="message"
                                className="text-[14px] font-semibold text-primary-100"
                            >
                                Message
                            </FieldLabel>

                            <Textarea
                                id="message"
                                value={values.message}
                                onChange={handleChange}
                                placeholder="How can I help you?"
                                className={errors.message ? "border-red-400" : ""}
                            />

                            {errors.message && (
                                <p className="text-sm text-red-300">
                                    {errors.message}
                                </p>
                            )}
                        </Field>
                                                        
                        <ReCaptcha onChange={setRecaptchaToken} />
                            
                        <Button className="font-medium text-center">
                            { isSubmitting ? <Spinner className="animate-spin " size={16} /> : "Send message" }
                        </Button>
                        
                    </FieldGroup>
                    

                    {
                        status.type === "success" ? 
                            <div className="p-6 flex flex-col gap-4 rounded-sm bg-white dark:bg-black absolute top-0 left-0 w-full h-full items-center justify-center">
                                <Image src={"/success.svg"} alt="success" width={80} height={80} />
                                <p className="text-emerald-700 text-lg font-bold">{status.msg}</p>
                                <p>Your message was sent successfully. You will be contacted within 24 hours.</p>
                                <p tabIndex={1} className="cursor-pointer border border-[#000] dark:border-gray-500/30 p-4 py-1 rounded-full" onClick={() => {setStatus({ type: "", msg: "" }); resetForm()}}>Close</p>
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