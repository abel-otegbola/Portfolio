import Image from "next/image"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Button from "../button/button";

const Header = () => {
  return (
    <header className="bg-[url('/bg.png')] bg-cover bg-gray-100/[0.03] bg-center md:flex gap-6 justify-center items-center p-[5%] md:py-[7%] py-[70px]">
      <img src={"/avatar.webp"} width={150} height={150} className="rounded-lg" />
      <div className="md:w-[50%]">
        <h1 className="flex relative sm:text-5xl text-3xl md:leading-[60px] font-bold dark:text-slate-200">
          Building Creative website projects. 
          <Image src={"/cursor-green.svg"} width={50} height={30} className="absolute hover:animate-bounce bottom-2 left-[35%] md:block hidden" />
          <Image src={"/cursor-red.svg"} width={50} height={30} className="absolute hover:animate-bounce top-8 -right-[5%] md:block hidden" />
        </h1>
        <p className="text-xl py-5">Full Stack Website Developer, UI designer</p>
        <div className="flex flex-wrap gap-4">
          <Button text={"Contact"} to={"#contacts"} type={"primary"}/>
          <Button text={<FaGithub />} to={"https://github.com/abel-otegbola"} type={"secondary"}/>
          <Button text={<FaTwitter />} to={"https://twitter.com/Abel_Otegbola"} type={"secondary"}/>
          <Button text={<FaLinkedin />} to={"https://linkedin.com/in/abel-otegbola"} type={"secondary"}/>

        </div>
      </div>
    </header>
  );
};

export default Header;
