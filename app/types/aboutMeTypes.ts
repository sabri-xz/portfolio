type TimeLineInfo = {
    id: string, 
    start_date: string,
    end_date: string
}

export type ExpInfo = TimeLineInfo & {
    role: string,
    company: string,
    description: string
}

export type EduInfo = TimeLineInfo & {
    school: string, 
    degree: string, 
    gpa: string,
    majors: string, 
    minor: string,
    concentration: string,
    rewards: string,
    coursework: string
}

export type Pic = {
    src: string,
    alt: string,
    description: string
}

export type NewPic = Pic & {
    width: number,
    height: number,
    cWidth: number,
    cHeight: number
}