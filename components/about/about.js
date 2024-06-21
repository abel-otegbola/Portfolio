import Image from "next/image"
import Link from "next/link";
import { PiFile, PiGithubLogo, PiTwitterLogo, PiLinkedinLogo } from "react-icons/pi";

export default function About() {
    return (
        <div className="flex-1 p-6 rounded flex flex-col md:items-center bg-slate-100 dark:bg-gray-600/[0.05]">
            
            <Image src={"/img.webp"} width={120} height={120} alt="Abel Otegbola" className="rounded-full border-2 border-fuchsia-500/[0.2] bg-white dark:bg-none mb-4"></Image>
            
            <h1 className="text-xl font-semibold">Abel Otegbola</h1>

            <div className="flex gap-4 w-full md:justify-center border border-transparent border-b-gray-500/[0.2] py-4">
                <Link className="p-2 text-[20px] border border-gray-500/[0.2] w-fit rounded-full hover:bg-fuchsia-600 hover:text-white" href={"https://drive.google.com/file/d/1rW7ynrcrexlWba1PyqvYZGKq8I7V7_fD/view?usp=sharing"}><PiFile /></Link>
                <Link className="p-2 text-[20px] border border-gray-500/[0.2] w-fit rounded-full hover:bg-fuchsia-600 hover:text-white" href={"https://github.com/abel-otegbola"}><PiGithubLogo /></Link>
                <Link className="p-2 text-[20px] border border-gray-500/[0.2] w-fit rounded-full hover:bg-fuchsia-600 hover:text-white" href={"https://twitter.com/Abel_Otegbola"}><PiTwitterLogo /></Link>
                <Link className="p-2 text-[20px] border border-gray-500/[0.2] w-fit rounded-full hover:bg-fuchsia-600 hover:text-white" href={"https://linkedin.com/in/abel-otegbola"}><PiLinkedinLogo/></Link>
            </div>

            <div className="py-3 md:text-center text-[12px] bg-gray-400/[0.09] dark:bg-slate-100/[0.03] p-4 w-full mt-3 rounded">
                <Link href="tel:+2347060989331" className="block hover:text-fuchsia-600">+2347060989331</Link>
                <Link href="mailto:abel.d.otegbola@gmail.com" className="block hover:text-fuchsia-600">Abel.d.otegbola@gmail.com</Link>
            </div>

        </div>
    )
}