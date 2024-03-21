import Image from "next/image"
import { FaFile, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Header = () => {
  return (
    <header className="bg-[url('/bg.png')] bg-cover bg-center md:flex gap-6 justify-center items-center p-[5%] md:py-[7%] py-[70px]">
      <div className="relative md:w-[50%]">

        <h1 className="md:w-[70%] -leading-[10px] sm:text-3xl text-3xl dark:text-slate-200" data-aos="fade-down">
          A <span className="underline">developer</span> cutting through the space of building amazing website projects. 
        </h1>
        
        <p className="py-5" data-aos="fade-down" data-aos-delay="400">Full Stack Website Developer</p>
        
      </div>
      <div className="flex gap-2">
        <Image src={"/img.webp"} width={200} height={150} alt="Abel Otegbola" className="rounded mb-4" data-aos="zoom-out"></Image>
        <div className="flex flex-col gap-4">
          <a className="p-2 text-[20px] border border-gray-500/[0.2] w-fit rounded" href={"https://drive.google.com/file/d/1FK09zavZtnsVuExYwwJ45wsTr-6N6_Cd/view?usp=sharing"}><FaFile /></a>
          <a className="p-2 text-[20px] border border-gray-500/[0.2] w-fit rounded" href={"https://github.com/abel-otegbola"}><FaGithub /></a>
          <a className="p-2 text-[20px] border border-gray-500/[0.2] w-fit rounded" href={"https://twitter.com/Abel_Otegbola"}><FaTwitter /></a>
          <a className="p-2 text-[20px] border border-gray-500/[0.2] w-fit rounded" href={"https://linkedin.com/in/abel-otegbola"}><FaLinkedin/></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
