import { Project } from "@/app/types";

const ProjectDisplay: React.FC<{projects: Project[]}> = ( { projects } ) => {

    return (
        <ul>
            {projects.map( ( project, index ) => (
                <li key={index} className='flex flex-col'>
                    <a className='text-2xl font-bold' href={project.link} target="_"> 
                        &#8226; <span className="underline"> {project.name} </span> 
                    </a>
                    <span className="ml-5 flex flex-col">
                        <span className="text-sm italic mb-1"> {project.caption} </span>
                        <span className="whitespace-pre-line"> {project.description} </span>
                    </span>
                </li>
            ) )}
        </ul>
    )
}


export default ProjectDisplay;