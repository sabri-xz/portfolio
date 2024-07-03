'use client'

import { useState } from "react"
import "../../styles/pages.css"
import "../../styles/animation.css"
import { EduInfo, ExpInfo } from "@/app/types"
import { motion } from 'framer-motion';

function calcMonthsDiff(startDate: Date, endDate: Date): number {
    return (endDate.getFullYear() - startDate.getFullYear())*12 + (endDate.getMonth() - startDate.getMonth())
}

const ani = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.35,
            ease: "anticipate",
        },
    },
    close: {
        y: 30,
        opacity: 0,
        transition: {
            duration: 0.25,
            ease: "anticipate",
        },
    }
}

const TimeLine: React.FC<{info: any}> = ( {info} ) => {
    const education: EduInfo[] = info.education;
    const experiences: ExpInfo[] = info.experiences;
    const [showDetails, setShowDetails] = useState({show: false, id: "0"})
    const [showCourses1, setShowCourses1] = useState(false)
    const [showCourses2, setShowCourses2] = useState(false)
    const years = ['2020', '2021', '2022', '2023', '2024']

    const top_group: string[] = ["1", "2", "3", "4", "5"]

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
    const h_per_month: number = 14 // height per month in pixels

    function datesToStartLocHeight(start_date: string, end_date: string) {
        // return the start location of the current item and the height it should span
        const startDate = new Date(start_date)
        const endDate = new Date(end_date)
        
        const monthSpan = calcMonthsDiff(startDate, endDate)
        const heightSpan = monthSpan * h_per_month
        const padding = 6
    
        const startLoc = padding + calcMonthsDiff(endDate, maxDate) * h_per_month

        return [startLoc, heightSpan - 2*padding]
    }

    function hoverHandler(id: string, enter: boolean) {
        setShowDetails({show: enter, id: id})
    }

    function getDisplayInfo(exp: ExpInfo | undefined) {
        if (!exp) {
            return <div> no information </div>
        }

        const description = exp.description;
        const role = exp.role;
        const company = exp.company

        return (
            <div className="whitespace-pre-wrap flex flex-col w-full h-auto leading-loose">
                <span className="text-xl font-bold">{role}</span>
                <span className="text-sm italic">{company}</span>
                <span className="text-sm">{dateFormatter(exp.start_date)} - {dateFormatter(exp.end_date)}</span>
                <span className="mt-1">{description}</span>
            </div>
        )
    }

    function dateFormatter(date: string) {
        const d = new Date(date)
        const options: Intl.DateTimeFormatOptions = {
            month: "short",
            year: "numeric"
        }
        return d.toLocaleDateString(undefined, options)
    }
    let i = 0;

    return (
        <motion.div className="flex flex-row h-auto relative justify-between pt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.4 }}>
            {/* experiences section */}
            <ul className={`flex flex-col relative w-1/2 h-[${total_months*h_per_month + 32}px] items-end`}>
                {
                    experiences.map( (exp) => {
                        const [startLoc, height] = datesToStartLocHeight(exp.start_date, exp.end_date)
                        
                        if (top_group.includes(exp.id)) {
                            return (
                            <li key={i++} className={`text-right bg-th-background timeline-item flex flex-col overflow-hidden z-20 transition-colors duration-500`}
                                style={{height: `${height}px`, top: `${startLoc + 12}px`, left: "-12px"}}
                                onMouseEnter={ () => {
                                    hoverHandler(exp.id, true)
                                }}
                                onMouseLeave={ () => {
                                    hoverHandler(exp.id, false)
                                }}
                                id="experience">
                                    <span className="font-semibold">{exp.role}</span>
                                    <span className="text-sm">{dateFormatter(exp.start_date)} - {dateFormatter(exp.end_date)}</span>
                                </li>)
                        } else {
                            return (
                                <li key={i++} className={`text-right bg-th-midground2 timeline-item flex flex-col overflow-hidden z-10 transition-colors duration-500`}
                                style={{height: `${height}px`, top: `${startLoc}px`}}
                                onMouseEnter={ () => {
                                    hoverHandler(exp.id, true)
                                }}
                                onMouseLeave={ () => {
                                    hoverHandler(exp.id, false)
                                }}
                                id="experience">
                                    <span className="font-semibold">{exp.role}</span>
                                    <span className="text-sm">{dateFormatter(exp.start_date)} - {dateFormatter(exp.end_date)}</span>
                                </li> )
                        } 
                    })
                }
            </ul>

            {/* divider */}
            <div className="h-full w-2 flex justify-center text-th-foreground transition-colors duration-500 mx-10 mr-11">
                <span className="relative">
                    {   
                        years.map( (year) => {
                            const position: number = datesToStartLocHeight(year, year)[0];

                            return (
                                <span key={i++} 
                                      className="text-sm absolute opacity-50 transition-colors duration-500"
                                      style={{top:position-5, left: '-4px', transform: `rotate(90deg)`}}> {year} </span>
                            )
                        })
                    }
                    <svg width="4" height={"100%"} viewBox={`0 0 4 ${total_months*h_per_month + 32}`}>
                        <path d={`M1 1 L1 ${total_months*h_per_month + 24} Z`} fill="transparent" stroke="currentcolor" strokeWidth="4" />
                    </svg>
                </span>
                
            </div>

            {/* education section */}
            <ul className={`flex flex-col relative w-1/2 h-[${total_months*h_per_month + 32}px]`}>
                {
                    education.map( (edu) => {
                        const [startLoc, height] = datesToStartLocHeight(edu.start_date, edu.end_date)

                        return (
                            <motion.li key={i++} 
                                className="timeline-item  hover:cursor-pointer"
                                style={{height: `${height}px`, top: `${startLoc}px`}}
                                onClick={() => {
                                    if (edu.id === "1") {
                                        setShowCourses1(!showCourses1)
                                    } else {
                                        setShowCourses2(!showCourses2)
                                    }
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.1, type: "spring" }}
                                whileHover={{ scale: 1.1 }}>
                                {/* front cover of this education */}
                                <div className={`flex flex-col bg-th-background leading-loose timeline-item pointer-events-none transition-colors duration-500 z-10`}
                                    style={{height: `${height}px`, 
                                            visibility: (edu.id === "1" ? !showCourses1 : !showCourses2) ? "visible" : "hidden"}}>
                                        <span className="text-xl">
                                            {edu.degree} <span className="text-sm">in</span> <span className="font-bold">{edu.majors}</span>
                                        </span>
                                        {
                                            edu.concentration && (<span className="-mt-2">
                                                focus in {edu.concentration}
                                            </span>)
                                        }
                                        <span className="italic text-sm">{edu.school}</span>
                                        <span className="text-sm">{dateFormatter(edu.start_date)} - {dateFormatter(edu.end_date)}</span>
                                        <span className="pt-2 text-sm">
                                            <span className="font-semibold">GPA:</span> {edu.gpa}
                                        </span>
                                        <span className="text-sm">
                                            <span className="font-semibold">reward(s):</span> {edu.rewards}
                                        </span>
                                </div>

                                {/* relavent courses during this education */}
                                <div className={`flex flex-col bg-th-background leading-loose text-sm timeline-item pointer-events-none overflow-hidden transition-colors duration-500 z-0`}
                                    style={{height: `${height}px`}}>
                                        <span className="font-bold"> Courses: </span>
                                        <span className="whitespace-pre-line">{edu.coursework}</span>
                                </div>
                            </motion.li>
                            )
                    })
                }
            </ul>
            
            {/* notification to try hovering :) */}
            <section id="" className="absolute w-80 h-auto text-th-background rounded-md p-4 shake" 
                style={{left: "-340px", top: "150px"}}>
                try hovering &rarr; 
            </section>

            {/* details tab */}
            <motion.section className="absolute w-80 h-auto bg-th-background rounded-md p-4" 
                style={{left: "-400px", top: "35px"}}
                animate={showDetails.show ? "open" : "close"} variants={ani}>
                    {getDisplayInfo(experiences.find(exp => exp.id === showDetails.id))}

            </motion.section>
        </motion.div>
    )
}

export default TimeLine;