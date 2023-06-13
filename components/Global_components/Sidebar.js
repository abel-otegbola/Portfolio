import { useState } from "react";
import Link from "next/link";
import { FaBriefcase, FaGithub, FaHandHolding, FaLightbulb, FaLinkedin, FaMedal, FaTwitter } from "react-icons/fa"
import { useRouter } from "next/router";
import NavMenu from "./NavMenu";

const Sidebar = () => {

    return (
        <div className="lg:sticky lg:top-14 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col justify-center lg:px-0 px-4 py-14">
            <h1 className="text-4xl font-bold text-primary dark:text-slate-200 sm:text-5xl">Abel Otegbola</h1>
            <h2 className="font-bold text-xl py-4">Full Stack Website Developer</h2>
            <p className="pt-2">I build web products and digital experiences that are accessible and inclusive.</p>

            <div className="lg:block hidden">
                <NavMenu setOpen={() => {}}/>
            </div>

            <ul className="flex items-center gap-3 lg:mt-0 mt-16">
                <Link href="https://twitter.com/Abel_Otegbola"><a className="p-3 bg-primary/[0.1] rounded-full text-xl"><FaTwitter /></a></Link>
                <Link href="https://github.com/abel-otegbol"><a className="p-3 bg-primary/[0.1] rounded-full text-xl"><FaGithub /></a></Link>
                <Link href="https://linkedin.com/in/abel-otegbola"><a className="p-3 bg-primary/[0.1] rounded-full text-xl"><FaLinkedin /></a></Link>
            </ul>
        </div>
    )
}

export default Sidebar;