const ActionForm = ({ comment, setOpen, open }) => {
    return (
        <div className={`absolute top-[100%] right-0 z-10 bg- p-3 px-4 rounded-lg shadow-lg backdrop-blur-sm bg-gray-900/[0.8] overflow-hidden ${open ? "h-auto" : "h-0"}`}>
            <p>Please input your email!</p>
            <p className="my-2 opacity-[600]">It is only for genuity. I promise your email will not be published.</p>

            <div className="my-5">
                <input className="p-2 w-full mb-2 rounded bg-transparent border border-gray-400/[0.3]" placeholder="Email..." type="email" name="email" />
                {
                    comment ? 
                    <textarea className="p-2 w-full rounded min-h-[150px] bg-transparent border border-gray-400/[0.3]" placeholder="Comment..." type="comment" name="comment"></textarea>
                    : 
                    ""
                }
                <button className="p-3 w-full rounded mt-4 bg-fuchsia-600 hover:bg-fuchsia-700" onClick={() => setOpen(false)}>Submit</button>
            </div>
        </div>
    )
}

export default ActionForm;