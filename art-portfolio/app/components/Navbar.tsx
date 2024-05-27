"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { GithubIcon } from "./icons";

const Navbar: React.FC<{}> = () => {
    const pathname = usePathname();

    if (pathname === "/") {
        return <> </>;
    }

    return (
        <>
          <div className="w-full h-16 bg-th-foreground sticky top-0 px-16">
            {/* <div className="container w-full px-4 h-full justify-between items-center"> */}
              <div className="flex justify-between items-center h-full">
                <Link href="/">
                  <GithubIcon className='text-th-background hover:text-th-secondary' width={40} height={40}/>
                </Link>
                <ul className="hidden md:flex gap-x-6 text-th-background text-base">
                  <li>
                    <Link href="/about">
                      <p>About</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/files/resume.pdf">
                      <p>Resume</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">
                      <p>Projects</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/arts">
                      <p>Arts</p>
                    </Link>
                  </li>
                  <li><ThemeSwitcher /></li>
                </ul>
              </div>
            </div>
          {/* </div> */}
        </>
      );
}

export default Navbar;