import Link from "next/link";
import { FaComment, FaHeart, FaTwitter } from "react-icons/fa";
import ActionForm from "./actionForm";
import { useState } from "react";

const ActionBar = ({ id }) => {
    const [comment, setComment] = useState(true)
    const [open, setOpen] = useState(false)

    const handleClick = (action) => {
        if(action === "like") {
            setComment(false)
            setOpen(true)
        }
        else {
            setComment(true)
            setOpen(true)
        }
    }
    
    return (
        <div className="flex items-center my-3 mb-8 gap-3 text-sm relative w-fit">
            <p className="flex items-center w-fit p-2 px-4 border border-slate-800/[0.6] rounded-[30px]"><FaTwitter className="mr-2" /> Share</p>
            <p className="flex items-center w-fit p-2 px-4 border border-slate-800/[0.6] rounded-[30px]" onClick={() => handleClick("like")}><FaHeart className="mr-2" /> Like</p>
            <p className="flex items-center w-fit p-2 px-4 border border-slate-800/[0.6] rounded-[30px]" onClick={() => handleClick("comment")}><FaComment className="mr-2" /> Comment</p>

            <ActionForm comment={comment} setOpen={setOpen} open={open}/>
        </div>
    )
}

export default ActionBar;