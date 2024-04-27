const Experience = () => {
    return (
        <div className="px-2">
            <div className="py-[10px] flex item-start gap-4 relative">
                <span className="absolute top-[37px] left-[12px] w-[1px] h-[82%] bg-fuchsia-500/[0.5]"></span>
                <img src={"/logo/bos.svg"} className="w-[25px] h-[25px] bg-white rounded-full p-1 outline outline-offset-1 outline-fuchsia-600/[0.3]"/>
                <div>
                    <h2 className="font-semibold">Full Stack Developer</h2>
                    <p>Bos Unlimited Contract</p>
                    <p>Jan 2024 - April 2024</p>
                    <p>Nigeria.</p>
                    <p className="my-2">Skills: React.Js, Tailwind CSS, Typescript, Javascript, Node.Js, Express.Js, Firebase</p>
                    <p>- Created Ecommerce website for the brand</p>
                </div>
            </div>

            <div className="py-[10px] flex item-start gap-4 relative">
                <span className="absolute top-[37px] left-[12px] w-[1px] h-[82%] bg-fuchsia-500/[0.5]"></span>
                <img src={""} className="w-[25px] h-[25px] bg-white rounded-full p-1 outline outline-offset-1 outline-fuchsia-600/[0.3]"/>
                <div>
                    <h2 className="font-semibold">Frontend Developer</h2>
                    <p>Landa (Spring &apos;23) Internship</p>
                    <p>Sep 2023 - Nov 2023</p>
                    <p>Nigeria. Remote</p>
                    <p className="my-2">Skills: Next.Js, Tailwind CSS, React.Js, Typescript, Javascript</p>
                    <p>- Developed waitlist platform involving onboarding users through multistep form</p>
                </div>
            </div>

            <div className="py-[10px] flex item-start gap-4 relative">
                <img src={""} className="w-[25px] h-[25px] bg-white rounded-full p-1 outline outline-offset-1 outline-fuchsia-600/[0.3]"/>
                <div>
                    <h2 className="font-semibold">Frontend Developer</h2>
                    <p>Xatalyst lab Internship</p>
                    <p>Aug 2023 - Sep 2023</p>
                    <p> Remote</p>
                    <p className="my-2">Skills: Next.Js, Tailwind CSS, React.Js, HTML5, Javascript</p>
                    <p>- Developed the landing page for the company</p>
                </div>
            </div>
        </div>
    )
}

export default Experience;