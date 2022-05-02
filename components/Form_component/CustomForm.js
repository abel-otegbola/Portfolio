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
        <form action="/api/message" method="post">
            <label>
                <p style={nameStyle}>Name</p>
                <input type="text" name="name" onChange={(e) => handlePosition(e, "user")} autoComplete="true" autoFocus={true} required />
            </label>
            <label>
                <p style={emailStyle}>Email</p>
                <input type="email" name="email" onChange={(e) => handlePosition(e, "email")} autoComplete="true" autoFocus={true} required/>
            </label>
            <label>
                <p style={messageStyle}>Message</p>
                <textarea name='message'  onChange={(e) => handlePosition(e, "message")} autoComplete="true" autoFocus={true} required></textarea>
            </label>
            <button type='submit'>SEND</button>

        </form>
    )
}

export default CustomForm;