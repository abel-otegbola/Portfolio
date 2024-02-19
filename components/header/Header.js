import Image from "next/image"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Button from "../button/button";

const Header = () => {
  return (
    <header className="bg-[url('/bg.png')] bg-cover bg-slate-100 dark:bg-gray-100/[0.03] bg-center md:flex gap-6 justify-center items-center p-[5%] md:py-[7%] py-[70px]">
      <Image src={"/img.webp"} width={150} height={150} alt="Abel Otegbola" className="rounded-[50%] mb-4" data-aos="zoom-out"></Image>
      <div className="relative md:w-[50%]">

        <h1 className="flex sm:text-5xl text-3xl md:leading-[60px] font-bold dark:text-slate-200" data-aos="fade-down">
          Building Amazing Website Projects. 
        </h1>

        <Image src={"/cursor-green.svg"} width={50} height={30} alt="cursor" className="absolute hover:animate-bounce top-[30%] left-[35%] md:block hidden" />
        <Image src={"/cursor-red.svg"} width={50} height={30} alt="cursor" className="absolute hover:animate-bounce top-8 -right-[5%] md:block hidden" />
        
        <p className="text-xl py-5" data-aos="fade-down" data-aos-delay="400">Full Stack Website Developer</p>
        
        <div className="flex flex-wrap gap-4">
          <Button text={"Resume"} to={"https://drive.google.com/file/d/1FK09zavZtnsVuExYwwJ45wsTr-6N6_Cd/view?usp=sharing"} type={"primary"}/>
          <Button text={<FaGithub />} to={"https://github.com/abel-otegbola"} type={"secondary"}/>
          <Button text={<FaTwitter />} to={"https://twitter.com/Abel_Otegbola"} type={"secondary"}/>
          <Button text={<FaLinkedin />} to={"https://linkedin.com/in/abel-otegbola"} type={"secondary"}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
