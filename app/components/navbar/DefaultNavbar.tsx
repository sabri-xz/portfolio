import React from "react";
import Link from "next/link";
import { MyLogo } from "../icons";
import "./navbar.css";

export const DefaultNavbar = () => (
    <div className="navbar default-navbar">
        <Link href="/">
            <MyLogo className='button ml-2' width={95} height={64}/>
        </Link>
        <ul className="gap-x-8 text-th-foreground text-lg font-semibold pt-2 flex justify-between items-center">
            <li>
                <Link href="/about" className="button">
                <p>About</p>
                </Link>
            </li>
            <li>
                <Link href="/projects" className="button">
                <p>Projects</p>
                </Link>
            </li>
            <li>
                <Link href="/files/resume.pdf" className="button">
                <p>Resume</p>
                </Link>
            </li>
        </ul>
    </div>
);