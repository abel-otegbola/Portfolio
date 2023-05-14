const CustomForm = () => {

    return (
        <form action="https://formilio.com/api/endpoint/57c1z43qvy" method="post">
            <label className="w-full flex flex-col">
                <p className="pt-6 pb-2">Name</p>
                <input className="p-[12px] border border-slate-300/[0.3] rounded bg-transparent w-full" placeholder="e.g John Doe" type="text" name="name" autoComplete="true" required />
            </label>
            <label className="w-full flex flex-col">
                <p className="pt-6 pb-2">Email</p>
                <input className="p-[12px] border border-slate-300/[0.3] rounded bg-transparent w-full" placeholder="e.g John@example.com" type="email" name="email" autoComplete="true" required/>
            </label>
            <label className="w-full flex flex-col">
                <p className="pt-6 pb-2">Message</p>
                <textarea className="p-[12px] border border-slate-300/[0.3] rounded bg-transparent w-full" placeholder="e.g Your portfolio is really cool 🚀. Are you available to jump in on a new website development project? 😉" name='message' autoComplete="true" required></textarea>
            </label>
            <button type='submit' className="w-full text-center p-[12px] rounded bg-fuchsia-700 text-white mt-6">SEND</button>

        </form>
    )
}

export default CustomForm;
