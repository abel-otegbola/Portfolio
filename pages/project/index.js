import { useSearchParams } from 'next/navigation'
import { projects } from '../../data/projects';
import { FiCode, FiLink } from 'react-icons/fi';

const Project = () => {
    const searchParams = useSearchParams().get("id");

    return (
        <div className="md:px-[10%] md:py-[5%] md:mb-[5%] mb-[30%]">
            {
                projects.personal.filter(item => item.id === parseInt(searchParams)).map(project => (
                    <div key={project.id} className='grid md:grid-cols-2 gap-[5%]'>
                        <img src={project.img} className='w-full md:rounded-[10px]' />
                        <div className='px-4'>
                            <h1 className='text-xl font-semibold'>{project.title}</h1>

                            <div className='flex gap-4 py-4 items-center'>
                                <img src={project?.logo} className="w-[30px] h-[30px] bg-white rounded-full p-1 outline outline-offset-1 outline-fuchsia-600/[0.3]"/>
                                <div>
                                    <p className='text-[12px] opacity-[0.7]'>{project?.tags}</p>
                                    <p className='font-semibold'>{project?.about}</p>
                                </div>
                            </div>

                            <h2 className='font-semibold mt-6'>About the project</h2>
                            <p className='py-4'>{project.summary}</p>
                            <p className='pb-4'>{project.how}</p>

                            <div className='py-4 flex gap-2 text-[12px]'>
                                <p>Tools: </p>
                                {
                                    project.tech.map((tool, i) => (
                                        <span key={i}> {tool} </span>
                                    ))
                                }
                            </div>

                            <div className='grid grid-cols-2 px-2 mb-12'>
                                <a href={project.live} className='flex gap-4 py-4 items-center'>
                                    <FiLink className="w-[30px] h-[30px] rounded p-2 text-blue-600 outline outline-offset-1 outline-gray-600/[0.3]"/>
                                    <div>
                                        <p className='text-[10px] opacity-[0.7]'>Link</p>
                                        <p>Live Demo</p>
                                    </div>
                                </a>
                                {
                                    project?.github ?
                                    <a href={project.github} className='flex gap-4 py-4 items-center'>
                                        <FiCode className="w-[30px] h-[30px] rounded p-2 text-orange-600 outline outline-offset-1 outline-gray-600/[0.3]"/>
                                        <div>
                                            <p className='text-[10px] opacity-[0.7]'>Link</p>
                                            <p>Github Repo</p>
                                        </div>
                                    </a>
                                    :""
                                }
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Project;