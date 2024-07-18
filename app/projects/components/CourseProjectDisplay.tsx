"use client";

import { Project } from "@/app/types";
import { motion } from 'framer-motion';

const CourseProjectDisplay: React.FC<{projects: Project[]}> = ( { projects } ) => {

    return (
        <motion.ul className="flex flex-col"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}>

            {projects.map( ( project, index ) => (
                <li key={index} className='flex flex-col py-3'>
                    <a className='text-2xl font-bold' href={project.link} target="_"> 
                        &#8226;<span className="underline ml-2">{project.name} </span> 
                    </a>
                    <span className="ml-5 flex flex-col">
                        <span className="text-sm italic mb-1 pb-1"> {project.caption} </span>
                        <span className="whitespace-pre-line"> {project.description} </span>
                    </span>
                </li>
            ) )}
            
        </motion.ul>
    )
}


export default CourseProjectDisplay;