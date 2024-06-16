'use client'

import { useState } from "react"
import "../../styles/pages.css"

interface ExpInfo {
    id: string,
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

function calcMonthsDiff(startDate: Date, endDate: Date): number {
    return (endDate.getFullYear() - startDate.getFullYear())*12 + (endDate.getMonth() - startDate.getMonth())
}


const TimeLine: React.FC<{info: any}> = ( {info} ) => {
    const education: EduInfo[] = info.education;
    const experiences: ExpInfo[] = info.experiences;
    const [showDetails, setShowDetails] = useState({show: false, id: "0"})

    const bottom_group: string[] = ["4", "5", "7"]

    let max_date: string = education.reduce( (max, edu) => {
        return new Date(edu.end_date) > new Date(max) ? edu.end_date : max
    }, education[0].end_date)
    max_date = experiences.reduce( (max, exp) => {
        return new Date(exp.end_date) > new Date(max) ? exp.end_date : max
    }, max_date)

    let min_date: string = education.reduce( (min, edu) => {
        return new Date(edu.start_date) < new Date(min) ? edu.start_date : min
    }, education[0].start_date)
    min_date = experiences.reduce( (min, exp) => {
        return new Date(exp.start_date) < new Date(min) ? exp.start_date : min
    }, education[0].start_date)

    const maxDate: Date = new Date(max_date)
    const minDate: Date = new Date(min_date)

    const total_months: number = calcMonthsDiff(minDate, maxDate)
    const h_per_month: number = 16 // height per month in pixels

    function datesToStartLocHeight(start_date: string, end_date: string) {
        // return the start location of the current item and the height it should span
        const startDate = new Date(start_date)
        const endDate = new Date(end_date)
        
        const monthSpan = calcMonthsDiff(startDate, endDate)
        const heightSpan = monthSpan * h_per_month
        const padding = 4
    
        const startLoc = padding + calcMonthsDiff(endDate, maxDate) * h_per_month

        return [startLoc, heightSpan - 2*padding]
    }

    function hoverHandler(id: string) {
        setShowDetails({show: true, id: id})
        console.log(showDetails)
    }

    return (
        <div className="flex flex-row h-auto relative justify-between pt-4">
            <div className={`flex flex-col relative w-5/12 h-[${total_months*h_per_month + 32}px] items-end`}>
                {
                    experiences.map( (exp, index) => {
                        const [startLoc, height] = datesToStartLocHeight(exp.start_date, exp.end_date)
                        
                        if (bottom_group.includes(exp.id)) {
                            return (
                            <div key={index} className={`text-right bg-slate-500 timeline-item z-10`}
                                style={{height: `${height}px`, top: `${startLoc}px`}}
                                onMouseEnter={ () => {
                                    hoverHandler(exp.id)
                                }}
                                onMouseLeave={ () => {
                                    
                                }}>
                                    {exp.role}
                                </div>)
                        } else {
                            return (
                                <div key={index} className={`text-right bg-slate-400 timeline-item z-20`}
                                style={{height: `${height}px`, top: `${startLoc+12}px`, left: "-12px"}}
                                onMouseEnter={ () => {

                                }}
                                onMouseLeave={ () => {
                                    
                                }}>
                                    {exp.role}
                                </div> )
                        } 
                    })
                }
            </div>
            <div className="h-full w-4 flex justify-center text-th-foreground">
                <svg width="4" height={"100%"} viewBox={`0 0 4 ${total_months*h_per_month + 32}`}>
                    <path d={`M1 1 L1 ${total_months*h_per_month + 32} Z`} fill="transparent" stroke="currentcolor" strokeWidth="4" />
                </svg>
            </div>
            <div className={`flex flex-col relative w-5/12 h-[${total_months*h_per_month + 32}px]`}>
                {
                    education.map( (edu, index) => {
                        const [startLoc, height] = datesToStartLocHeight(edu.start_date, edu.end_date)

                        return (
                            <div key={index} className={`bg-slate-500 timeline-item`}
                                style={{height: `${height}px`, top: `${startLoc}px`}}
                                onMouseEnter={ () => {

                                }}
                                onMouseLeave={ () => {

                                }}>
                                {edu.school} <br/>
                            </div> )
                    })
                }
            </div>

            <section id="" className="absolute w-64 h-80 bg-slate-200" 
                style={{left: "-365px", top: "120px", visibility: "visible"}}> 
                details of the experience :D
            </section>
        </div>
    )
}

export default TimeLine;