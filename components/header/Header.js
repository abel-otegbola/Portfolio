import About from "../about/about";

const Header = () => {
  return (
    <div className="flex flex-wrap gap-4 w-full md:mt-[2%]">
      <About />

      <div className="flex flex-col gap-4 md:w-[65%] w-full py-5 rounded p-6" >
        <p className="p-4 bg-gray-600/[0.09] rounded">About me</p>
        <div className="px-1 flex flex-col gap-4 leading-[170%]">
          <p>In 2019, I embarked on my journey into the world of coding and web development, transforming a passion into a profession. With a strong foundation in HTML, CSS3, JavaScript, and React.js, I&apos;ve honed my skills to build robust software solutions for businesses and corporations.</p>
          <p>Today, I specialize in creating high-performance, user-friendly websites and applications. My expertise spans across developing ecommerce platforms, business websites, blogs, and personal sites, ensuring each project is tailored to the client&apos;s unique needs. I also lead projects from conception to completion, ensuring seamless execution and timely delivery.</p>
        </div>
         </div>
    </div>
  );
};

export default Header;
