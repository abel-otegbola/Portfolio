import Button from "../button/button";

const ContactForm = () => {

    return (
        <form role="Send message to Abel" action="https://formilio.com/api/endpoint/57c1z43qvy" method="post">
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
            <button className="bg-primary mt-8 rounded p-[15px] w-full text-center text-white">Send message</button>

        </form>
    )
}

export default ContactForm;
