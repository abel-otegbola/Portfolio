import Link from "next/link";
import { useState } from "react";
import { FaBars, FaEnvelope, FaTimes } from "react-icons/fa";
import NavMenu from "./NavMenu";
import Button from "../button/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-3 px-[7.5%]">
      <h1 className='min-w-[20%] text-xl'>
        Abel Otegbola
      </h1>
      <nav
        className={`lg:static fixed md:flex items-center gap-8 right-0 top-0 lg:bg-transparent bg-white dark:bg-body/[0.95] backdrop-blur-sm overflow-hidden transition-all duration-700 z-20 lg:h-[auto] h-screen ${
          open ? "lg:w-[auto] w-[100%]" : "lg:w-[auto] w-0"
        }`}
      >
        <Link href={"#portfolio"}>Portfolio</Link>
        <Link href={"#experience"}>Experience</Link>
        <Link href={"#experience"}>Skills</Link>
        <Button text={"Hire me"} to={"#contacts"} type={"primary"} />
      </nav>
      <div onClick={() => setOpen(!open)} className="lg:hidden block z-50">
        {!open ? (
          <FaBars className="p-1 text-3xl" />
        ) : (
          <FaTimes className="p-1 text-3xl" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
