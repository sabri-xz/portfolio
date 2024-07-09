import { Project } from "@/app/types";
import ProjectDisplay from "./ProjectDisplay";

const CourseProjectPage: React.FC<{projects: Project[]}> = ( { projects } ) => {

    return (
        <div className="m-5 px-12 w-full">
            <h1 className='justify-self-center text-5xl font-medium'> Course Projects </h1>
            <p className='mt-5 mb-4'> Projects for various courses while being in school. </p>
            <ProjectDisplay projects={projects} />
        </div>
    )
}


export default CourseProjectPage;