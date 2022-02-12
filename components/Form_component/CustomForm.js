import { useState } from "react";
import Styles from '../../styles/Contact.module.css'

const CustomForm = ({ status, message, onValidated }) => {
    const [fname, setFname] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const [nameStyle, setNameStyle] = useState({})
    const [emailStyle, setEmailStyle] = useState({})
    const [messageStyle, setMessageStyle] = useState({})
    const [remove, setRemove] = useState("none")
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

    const handleSubmit = (e) => {
        e.preventDefault()
        setRemove("block")
        onValidated({
            MERGE1: fname,
            MERGE0: email,
            MERGE2: msg
        })
    }
    
    const deleteMsg = () => {
        setRemove("none")
    }

    return (
        <form>
            <div className={Styles.msg} style={{ display: remove }}>
                {(status === "sending") ? 
                        <h5>Sending message...</h5>
                : (status === "error") ?
                    <h5 dangerouslySetInnerHTML={{ __html: message }}></h5> 
                : (status === "success") ? <h5 dangerouslySetInnerHTML={{ __html: message }}></h5> : <h5></h5>}
                <button onClick={() => deleteMsg()}>Ok</button>
            </div>
            <label>
                <p style={nameStyle}>Name</p>
                <input type="text" name="MERGE1" onChange={(e) => handlePosition(e, "user")} required/>
            </label>
            <label>
                <p style={emailStyle}>Email</p>
                <input type="email" name="MERGE0" onChange={(e) => handlePosition(e, "email")} required/>
            </label>
            <label>
                <p style={messageStyle}>Message</p>
                <textarea name='MERGE2'  onChange={(e) => handlePosition(e, "message")} required></textarea>
            </label>
            <button type='submit' onClick={(e) => handleSubmit(e)}>SEND</button>

        </form>
    )
}

export default CustomForm;