'use client';

import React, { useState } from "react";
import { GithubIcon, GmailIcon, LinkedInIcon, Period } from "../icons";
import Link from "next/link";
import "./styles/contactSection.css";
import { Averia_Serif_Libre } from 'next/font/google'

const averia_thic = Averia_Serif_Libre({ subsets: ['latin'], weight: ['700'] });

type ContactSectionProps = {
    githubUrl: string;
    linkedinUrl: string;
    email: string;
}

{/* <div className={`text-th-foreground contact-icons ${isOpen ? "open" : ""}`}>
<Link href="https://github.com/sabri-xz" target="_blank">
    <GithubIcon className="text-th-foreground hover:text-th-secondary" width={25} height={25} />
</Link>
<Link href="https://www.linkedin.com/in/xinzhi-liang/" target="_blank">
    <LinkedInIcon className="text-th-foreground hover:text-th-secondary" width={25} height={25} />
</Link>
<Link href="mailto:xinzhi.liang34@gmail.com" target="_blank">
    <GmailIcon className="text-th-foreground hover:text-th-secondary" width={25} height={25} />
</Link>
</div> */}

export const ContactSection = () => {
    const githubUrl = 'https://github.com/sabri-xz';
    const linkedinUrl = 'https://www.linkedin.com/in/xinzhi-liang/';
    const email = 'mailto:xinzhi.liang34@gmail.com';
    const [isExpanded, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setIsOpen(!isExpanded);
    };

    return (
        <div className={`contact-section ${averia_thic.className} ${isExpanded ? "expanded" : ""}`} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            contact me 
            <div className={`contact-icons-container`}>
                <Period className={`period ${isHovered ? "hovered" : ""} ${isExpanded ? "expanded" : ""}`} />
                <Link className={`contact-icon github-icon ${isExpanded ? "expanded" : ""}`} href={githubUrl} target="_blank">
                    <GithubIcon className="text-th-foreground hover:text-th-secondary" width={35} height={35} />
                </Link>
                <Link className={`contact-icon linkedin-icon ${isExpanded ? "expanded" : ""}`} href={linkedinUrl} target="_blank">
                    <LinkedInIcon className="text-th-foreground hover:text-th-secondary" width={35} height={35} />
                </Link>
                <Link className={`contact-icon gmail-icon ${isExpanded ? "expanded" : ""}`} href={email} target="_blank">
                    <GmailIcon className="text-th-foreground hover:text-th-secondary" width={35} height={35} />
                </Link>
            </div>
        </div>
    );
};
