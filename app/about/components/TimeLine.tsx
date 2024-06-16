'use client'

interface ExpInfo {
    role: string,
    company: string,
    start_date: string,
    end_date: string, 
    decription: string
}

interface EduInfo {
    school: string, 
    degree: string, 
    start_date: string,
    end_date: string, 
    gpa: string,
    majors: string, 
    minor: string,
    concentration: string,
    rewards: string
}

const TimeLine: React.FC<{info: any}> = ( {info} ) => {
    const education: EduInfo[] = info.education;
    const experiences: ExpInfo[] = info.experiences;

    return (
        <div className="flex flex-row h-auto relative justify-between pt-4">
            <div className="flex flex-col gap-3 w-5/12">
                {
                    experiences.map( (exp, index) => {
                        return (
                            <div key={index} className="text-right">
                                {exp.role}
                            </div> )
                    })
                }
            </div>
            <div className="absolute h-full w-4 flex justify-center" 
                style={{left: '50%', transform: 'translateX(-50%)'}}>
                <svg width="4" height={"550"} viewBox="0 0 4 550">
                    <path d="M1 1 L1 550 Z" fill="transparent" stroke="#3D4927" strokeWidth="4" />
                </svg>
            </div>
            <div className="flex flex-col gap-3 w-5/12">
                {
                    education.map( (edu, index) => {
                        return (
                            <div key={index} className="whitespace-pre-wrap">
                                {edu.school} <br/>
                                {edu.degree} in {edu.majors}
                            </div> )
                    })
                }
            </div>
        </div>
    )
}

export default TimeLine;