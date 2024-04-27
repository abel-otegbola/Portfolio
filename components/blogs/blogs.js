import Image from "next/image";
import { projects } from "../../data/projects";

const Blogs = () => {
    return (
        <div className="grid md:grid-cols-2 gap-4">
            {
                projects.blogs.map(blog => (
                    <div key={blog.id} className="">
                        <div className="w-full min-h-[240px] relative overflow-hidden bg-gray-800/[0.1]" data-aos="zoom-in">
                            <Image
                            src={blog?.img}
                            alt={blog.title}
                            className="object-cover object-center rounded"
                            fill={true}
                            />
                        </div>
                        <div className="py-4">
                            <h1>{blog.title}</h1>
                        </div>
                    </div>
                ))
            }

                
        </div>
    )
}

export default Blogs;