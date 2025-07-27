'use client'

import { DribbbleLogo, Envelope, GithubLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";


function Footer() {
    return (
        <footer id="contacts" className="bg-[#1C1C1C] text-[#D9D9F2]">
            <div className="flex flex-col items-center gap-[30px] py-[30px] md:px-[9%] px-[3%] pt-[60px] border border-transparent border-t-gray-700/[0.09] dark:border-t-gray-100/[0.09]">
                <h1 className="">Connect with me now</h1>
                <ul className="w-fit l p-2 ">
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="https://dribbble.com/Abel_Otegbola" className="p-4 border border-gray-500/[0.4] rounded-full"><DribbbleLogo size={18}/></a>
                        <a href="https://github.com/abel-otegbola" className="p-4 border border-gray-500/[0.4] rounded-full"><GithubLogo size={18}/></a>
                        <a href="https://x.com/Abel_Otegbola" className="p-4 border border-gray-500/[0.4] rounded-full"><XLogo size={18}/></a>
                        <a href="https://linkedin.com/in/abel-otegbola" className="p-4 border border-gray-500/[0.4] rounded-full"><LinkedinLogo size={18}/></a>
                        <a href="mailto:abel.d.otegbola@gmail.com" className="p-4 border border-gray-500/[0.4] rounded-full"><Envelope /></a>
                    </div>
                </ul>
            </div>
            <div className="bg-[#000]/[0.2] text-center">
                <p className="px-[3%] py-10 flex items-center gap-2 justify-center">Abel &copy; Copyright  {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;