import Image from "next/image"
import { PiFile, PiGithubLogo, PiTwitterLogo, PiLinkedinLogo } from "react-icons/pi";


const Header = () => {
  return (
    <div className="p-6 rounded flex flex-col md:items-center bg-white dark:bg-body md:shadow-lg -mt-[5%] md:ml-[5%] md:w-[250px] border border-gray-500/[0.1]">
      <Image src={"/img.webp"} width={120} height={120} alt="Abel Otegbola" className="rounded-full shadow-lg mb-4" data-aos="zoom-out"></Image>
      <h1 className="text-xl font-semibold">Abel Otegbola</h1>
      <div className="py-3 md:text-center text-[12px]">
        <a href="tel:+2347060989331" className="block">+2347060989331</a>
        <a href="mailto:abel.d.otegbola@gmail.com" className="block">Abel.d.otegbola@gmail.com</a>
      </div>
      <p className="py-5 rounded -leading-[10px] text-[12px] text-justify" data-aos="fade-down" >
        In 2020, I made the decision to delve into the world of coding and web development.
        now building software for businesses and corporations. My main focus these days is building products and leading projects for clients.
      </p>
      <div className="flex gap-4 w-full md:justify-center border border-transparent border-b-gray-500/[0.2] py-4">
        <a className="p-2 text-[20px] border border-gray-500/[0.2] w-fit rounded-full" href={"https://drive.google.com/file/d/1FK09zavZtnsVuExYwwJ45wsTr-6N6_Cd/view?usp=sharing"}><PiFile /></a>
        <a className="p-2 text-[20px] border border-gray-500/[0.2] w-fit rounded-full" href={"https://github.com/abel-otegbola"}><PiGithubLogo /></a>
        <a className="p-2 text-[20px] border border-gray-500/[0.2] w-fit rounded-full" href={"https://twitter.com/Abel_Otegbola"}><PiTwitterLogo /></a>
        <a className="p-2 text-[20px] border border-gray-500/[0.2] w-fit rounded-full" href={"https://linkedin.com/in/abel-otegbola"}><PiLinkedinLogo/></a>
      </div>
    </div>
  );
};

export default Header;
