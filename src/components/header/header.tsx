'use client'
import Tab from "../tab/tab";
import Link from "next/link";

type navTab =  {
    id: number | string,
    label: string,
    to: string,
}

export default function Header() {

    const navTabs: navTab[] = [
        { id: 0, label: "Services", to: "#services" },
        { id: 1, label: "Projects", to: "#projects" },
        { id: 2, label: "Skills", to: "#skills"},
        { id: 3, label: "Contacts", to: "#contacts"},
    ]

    return (
        <div className="flex items-center justify-between z-[50] dark:text-gray md:p-3 p-4 md:m-2 md:mx-[5%]">
            <Link href="/" className="md:ml-3 w-[150px]">
                <div className="flex items-center">
                    <h2 className="font-light text-xl">ABEL.</h2>
                </div>
            </Link>

            <nav className="md:flex items-center justify-between gap-4 hidden">
                {
                    navTabs.map((tab: navTab) => (
                        <Tab key={tab.id} label={tab.label} to={tab.to} />
                    ))
                }
            </nav>

            <div className="flex items-center justify-end gap-6 relative text-[14px]">
                <Link href="https://github.com/abel-otegbola" className="flex gap-2 items-center p-2">
                    Github
                </Link>
                <Link href="https://x.com/Abel_Otegbola" className="flex gap-2 items-center p-2">
                    X
                </Link>
                <Link href="https://x.com/Abel_Otegbola" className="flex gap-2 items-center p-2">
                    LinkedIn
                </Link>

                <Link href="/contact" className="h-[40px] w-[40px] rounded-full flex justify-center items-center border border-black"></Link>
            </div>
        </div>
    )
}