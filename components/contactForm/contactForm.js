import { useState } from "react";
import { database } from "../../firebase/firebase";
import { ref, set } from "firebase/database";
import { PiSpinner } from "react-icons/pi";
import { nanoid } from "nanoid";
// import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const [popup, setPopup] = useState({})
    const [change, setChange] = useState()


    const submitProduct = (e) => {
        e.preventDefault()
        setLoading(true)

        const dataArray = new FormData(e.target)

        const data = [...dataArray.entries()]
        
        const values = { 
            id: nanoid(),
            name: data[0][1], 
            email: data[1][1], 
            message: data[2][1],
            date: new Date().toLocaleString('en-GB') 
        }

        // const recaptchaValue = recaptchaRef.current.getValue();
        // console.log(recaptchaValue);
        
        set(ref(database, 'messages/'), values)
        .then(() => {
            setLoading(false)
            setPopup({type: "success", msg: "Message sent succesfully"})
        })
        .catch((error) => {
            setPopup({type: "error", msg: error.message})
            setLoading(false)
        })
    }


    return (
        <form role="Send message to Abel" onSubmit={(e) => submitProduct(e)} method="post">
            {
                popup.type ? 
                <p>{popup.msg}</p>
                : ""
            }
            <label className="w-full flex flex-col">
                <p className="pt-6 pb-2">Name</p>
                <input className="p-[8px] border border-slate-500/[0.3] focus:outline outline-offset-1 outline-fuchsia-600/[0.3] rounded bg-transparent w-full" placeholder="e.g John Doe" type="text" name="name" autoComplete="true" required />
            </label>
            <label className="w-full flex flex-col">
                <p className="pt-6 pb-2">Email</p>
                <input className="p-[8px] border border-slate-500/[0.3] focus:outline outline-offset-1 outline-fuchsia-600/[0.3] rounded bg-transparent w-full" placeholder="e.g John@example.com" type="email" name="email" autoComplete="true" required/>
            </label>
            <label className="w-full flex flex-col">
                <p className="pt-6 pb-2">Message</p>
                <textarea className="p-[8px] border border-slate-500/[0.3] focus:outline outline-offset-1 outline-fuchsia-600/[0.3] min-h-[150px] rounded bg-transparent w-full" placeholder="e.g Are you available to jump in on a new website development project? 😉" name='message' autoComplete="true" required></textarea>
            </label>

            {/* <div className="w-fit mx-auto mt-6">  
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
                    onChange={setChange}
                />
            </div> */}
            <button className="bg-primary mt-8 rounded p-[15px] w-full text-center text-white">{loading ? <PiSpinner className="animate-spin" /> : "Send message"}</button>

        </form>
    )
}

export default ContactForm;
