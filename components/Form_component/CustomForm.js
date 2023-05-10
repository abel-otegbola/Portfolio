import { useState } from "react";

const CustomForm = () => {
    const [fname, setFname] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const [nameStyle, setNameStyle] = useState({})
    const [emailStyle, setEmailStyle] = useState({})
    const [messageStyle, setMessageStyle] = useState({})
    var cleft = 0
    var ctop = 0
    var ctrans = 'translate(' + cleft + ',' + ctop + ')'
    var css = {
        transform: ctrans
    }

    const handlePosition = (e, position) => {
        if (e.target.value !== "" && position === "user") {
            setNameStyle(css)
            setFname(e.target.value)
        }
        else if (e.target.value !== "" && position === "email") {
            setEmailStyle(css)
            setEmail(e.target.value)
        }
        else if (e.target.value !== "" && position === "message") {
            setMessageStyle(css)
            setMsg(e.target.value)
        }
        else if (e.target.value === "" && position === "user") {
            setNameStyle({})
        }
        else if (e.target.value === "" && position === "email") {
            setEmailStyle({})
        }
        else if (e.target.value === "" && position === "message") {
            setMessageStyle({})
        }
     }

    return (
        <form action="https://formilio.com/api/endpoint/" method="post">
            <label className="w-full flex flex-col">
                <p className="pt-6 pb-2" style={nameStyle}>Name</p>
                <input className="p-[12px] border border-gray-800 rounded bg-transparent w-full" type="text" name="name" onChange={(e) => handlePosition(e, "user")} autoComplete="true" autoFocus={true} required />
            </label>
            <label className="w-full flex flex-col">
                <p className="pt-6 pb-2" style={emailStyle}>Email</p>
                <input className="p-[12px] border border-gray-800 rounded bg-transparent w-full" type="email" name="email" onChange={(e) => handlePosition(e, "email")} autoComplete="true" required/>
            </label>
            <label className="w-full flex flex-col">
                <p className="pt-6 pb-2" style={messageStyle}>Message</p>
                <textarea className="p-[12px] border border-gray-800 rounded bg-transparent w-full" name='message'  onChange={(e) => handlePosition(e, "message")} autoComplete="true" required></textarea>
            </label>
            <button type='submit' className="w-full text-center p-[12px] rounded bg-fuchsia-700 text-white mt-6">SEND</button>

        </form>
    )
}

export default CustomForm;
