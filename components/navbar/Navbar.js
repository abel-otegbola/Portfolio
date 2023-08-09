import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../button/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex sticky top-0 dark:bg-body items-center justify-between md:p-3 p-5 md:px-[7.5%] px-[5%] z-10">
      <h1 className='min-w-[20%] text-xl'>
        Abel Otegbola
      </h1>
      <nav
        className={`lg:static fixed md:flex items-center gap-8 right-0 top-0 bg-white dark:bg-body overflow-hidden transition-all duration-700 z-20 lg:h-[auto] h-screen ${
          open ? "lg:w-[auto] w-[100%] md:p-0 p-[5%]" : "lg:w-[auto] w-0"
        }`}
      >
        <Link href={"#portfolio"} className="md:inline block md:p-0 px-[30px] py-5">Portfolio</Link>
        <Link href={"#experience"} className="md:inline block md:p-0 px-[30px] py-5">Experience</Link>
        <Link href={"#experience"} className="md:inline block md:p-0 px-[30px] py-5">Skills</Link>
        <div className="md:p-0 px-[30px] py-5">
          <Button text={"Hire me"} to={"#contacts"} type={"primary"} />
        </div>
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
