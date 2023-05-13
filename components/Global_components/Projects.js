import Link from "next/link"
import Image from "next/image"
import { BiGitPullRequest } from "react-icons/bi"
import { FaGithub, FaLink } from "react-icons/fa"

const Projects = () => {
    const contracts = [
        { id: 1, title: "SOLTOOLS", img: "/projects/soltools.PNG", summary: "A landing page for soltools which is a one-stop shop providing Defi support on the solana blockchain", Inspiration: "The inspiration behind the design and tech stack used is to provide a simple, informative and easy to understand landing page. The colors carefully used to match the brand logo, headings and call to actions to give the visitors an understanding of the services offered", how: "The landing page was built with HTML, CSS, JS and Bootstrap to keep it light and simple", tech: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"] },
        { id: 2, title: "NEPAL BEST DEALS", img: "/projects/nepalbestdeal.png", summary: "An ecommerce website offering users nepal products such as clothes and apparels, toys, herbs and lots more", Inspiration: "The project was to redesign the entire website and make it more visually appealing. Using a simple theme and builder I optimized the user interface and experience", how: "The website was built with wordpress. I used an awesome wordpress theme together with elementor builder.", tech: ["WORDPRESS", "ELEMENTOR", "WOOCOMMERCE"] },
    ]

    const side_projects = [
        { id: 1, title: "FORMILIO", img: "/projects/formilio.PNG", summary: "A website to easily generate endpoints for your static forms and start collecting data in no time.", Inspiration: "Creating static websites are easy, but handling informations from users has a lot of work. Some of which are making sure informaton is genuine, secure and stored properly. Formilio will serve as your data storage to store all your form submissions.", how: "The website was built with NEXT.JS, MONGODB, and other libraries and tools", tech: ["NEXT.JS", "REACT", "MONGODB", "CHART.JS"] },
        { id: 2, title: "CLOCKS APP", img: "/projects/clock-app.PNG", summary: "A fun clock ui website displaying different clock designs such as neomorphism, glassmorphism, apple wristwatch, table clock and lots more", Inspiration: "A simple frontend application, with easy to read codebase, opened to contributors and unique in design and functionality.", how: "Easy to understand and replicate Javascript, css and html codes with minimal design.", tech: ["HTML", "CSS", "JAVASRCIPT"] },
    ]
    
    const opensource = [
        { id: 1, title: "PRICE TEMPLATES", github: "https://github.com/abel-otegbola/PriceTemplate/", live: "https://elvinpero.github.io/PriceTemplate/", decription: "This is a price template panel project where the aim is to make working price template model that can be used on webapps", pull: {title: "Feature Darkmode", link: "https://github.com/ElvinPero/PriceTemplate/pull/85"}, tech: ["HTML", "CSS", "JAVASCRIPT"] },
        { id: 2, title: "PARYAVARN", github: "https://github.com/abel-otegbola/Paryavarn", live: "#", decription: "A platform for calculating tree cover on specific locations and detecting live locations", pull: {title: "Responsiveness of the layout fixed", link: "https://github.com/SuperContributors/Paryavarn/pull/3"}, tech: ["CSS", "REACT", "NODEJS"] },
        { id: 3, title: "OMNIFOOD", github: "https://github.com/abel-otegbola/Omnifood", live: "https://devbayo-omnifood.netlify.app", decription: "A food app that offers AI functionalities in choosing meal and delivering meal to users.", pull: {title: "Make navbar sticky by adding position fixed", link: "https://github.com/devBayo/Omnifood/pull/7"}, tech: ["CSS", "HTML", "JAVASCRIPT"] },
    ]

    return (
        <div className="py-4">
            <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full" id="contract-projects">Contract Projects</h3>
            {
                contracts.map(project => (
                    <div key={project.id} className="my-10" data-aos="fade-up">
                        <Link href={`/project/${project.title.toLowerCase()}`}><a><Image src={project.img} alt={project.title} className="rounded-lg" width={700} height={320} /></a></Link>
                        <div className="p-2">
                            <h1 className="text-xl font-semibold py-4"><Link href={`/project/${project.title.toLowerCase()}`}><a>{project.title}</a></Link></h1>
                            <p className="leading-[30px]">{project.summary}...<Link href={`/project/${project.title.toLowerCase()}`} ><a className="text-fuchsia-300 hover:text-fuchsia-600">View more</a></Link></p>
                            <div className="flex flex-wrap gap-4 py-4 text-[10px]">
                                {
                                    project.tech.map((skill, i) => (
                                        <span key={i} className="p-[2px] px-4 border border-fuchsia-300/[0.4] rounded-[30px] bg-fuchsia-500/[0.3]">{skill}</span>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }

            
            <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full" id="side-projects">Side Projects</h3>
            {
                side_projects.map(project => (
                    <div key={project.id} className="my-10" data-aos="fade-up">
                        <Link href={`/project/${project.title.toLowerCase()}`}><a><Image src={project.img} alt={project.title} className="rounded-lg" width={700} height={320} /></a></Link>
                        <div className="p-2">
                            <h1 className="py-4"><Link href={`/project/${project.title.toLowerCase()}`}><a className="text-xl font-semibold">{project.title}</a></Link></h1>
                            <p className="leading-[30px]">{project.summary}...<Link href={`/project/${project.title.toLowerCase()}`} ><a className="text-fuchsia-300 hover:text-fuchsia-600">View more</a></Link></p>
                            <div className="flex flex-wrap gap-4 py-4 text-[10px]">
                                {
                                    project.tech.map((skill, i) => (
                                        <span key={i} className="p-[2px] px-4 border border-fuchsia-300/[0.4] rounded-[30px] bg-fuchsia-500/[0.3]">{skill}</span>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
            
            <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full" id="open-source-contributions">Opensource Contributions</h3>
            {
                opensource.map(project => (
                    <div key={project.id} className="my-10" data-aos="fade-right">
                        <div className="py-2 pb-6 rounded border border-transparent border-y-slate-300/[0.1]">
                            <h1 className="py-4 hover:text-fuchsia-500"><Link href={`/project/${project.title.toLowerCase()}`}><a className="text-xl font-semibold">{project.title}</a></Link></h1>
                            <p className="leading-[30px]">{project.decription}</p>
                            <div className="flex items-center gap-6">
                                <p className="flex items-center py-4 hover:text-fuchsia-500"><BiGitPullRequest className="mr-2 text-fuchsia-600"/><Link href={project.pull.link}><a className="text-[10px]">{project.pull.title}</a></Link></p>
                                <p className="flex items-center py-4 hover:text-fuchsia-500"><FaGithub className="mr-2 text-green-600"/><Link href={project.github}><a className="text-[10px]">Github</a></Link></p>
                                <p className="flex items-center py-4 hover:text-fuchsia-500"><FaLink className="mr-2 text-red-600"/><Link href={project.live}><a className="text-[10px]">Live</a></Link></p>
                            </div>
                            <div className="flex flex-wrap gap-4 py-4 text-[10px]">
                                {
                                    project.tech.map((skill, i) => (
                                        <span key={i} className="p-[2px] px-4 border border-fuchsia-300/[0.4] rounded-[30px] bg-fuchsia-500/[0.3]">{skill}</span>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Projects