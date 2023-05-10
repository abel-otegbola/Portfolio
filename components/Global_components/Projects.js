import Link from "next/link"
import Image from "next/image"

const Projects = () => {
    const contracts = [
        { id: 1, title: "SOLTOOLS", img: "/projects/Cleanlist.png", summary: "A landing page for soltools which is a one-stop shop providing Defi support on the solana blockchain", Inspiration: "The inspiration behind the design and tech stack used is to provide a simple, informative and easy to understand landing page. The colors carefully used to match the brand logo, headings and call to actions to give the visitors an understanding of the services offered", how: "The landing page was built with HTML, CSS, JS and Bootstrap to keep it light and simple", tech: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"] },
        { id: 2, title: "NEPAL BEST DEALS", img: "/projects/nepalbestdeal.png", summary: "A landing page for soltools which is a one-stop shop providing Defi support on the solana blockchain", Inspiration: "The inspiration behind the design and tech stack used is to provide a simple, informative and easy to understand landing page. The colors carefully used to match the brand logo, headings and call to actions to give the visitors an understanding of the services offered", how: "The landing page was built with HTML, CSS, JS and Bootstrap to keep it light and simple", tech: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"] },
    ]

    return (
        <div className="py-4">
            <h3 className="font-semibold pb-4 underline underline-offset-8 decoration-1 decoration-gray-700 w-full" id="contract-projects">Contract Projects</h3>
            {
                contracts.map(project => (
                    <div key={project.id} className="my-10">
                        <Link href={`/project/${project.title.toLowerCase()}`}><a><Image src={project.img} alt={project.title} className="rounded-lg" width={700} height={300} /></a></Link>
                        <div className="p-2">
                            <h1 className="text-xl font-semibold py-4"><Link href={`/project/${project.title.toLowerCase()}`}><a>{project.title}</a></Link></h1>
                            <p className="leading-[30px]">{project.summary}...<Link href={`/project/${project.title.toLowerCase()}`} ><a className="text-fuchsia-300 hover:text-fuchsia-600">View more</a></Link></p>
                            <div className="flex flex-wrap gap-4 py-4 text-[10px]">
                                {
                                    project.tech.map((skill, i) => (
                                        <span key={i} className="p-2 px-6 rounded-[30px] bg-fuchsia-500/[0.3]">{skill}</span>
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