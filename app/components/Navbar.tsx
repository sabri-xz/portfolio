"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MyLogo } from "./icons";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar: React.FC<{}> = () => {
    const pathname = usePathname();

    if (pathname === "/") { // do not display on the front page
        return <> </>;
    }

    return (
        <div className="w-full h-14 bg-th-foreground sticky top-0 px-16 transition-colors duration-500 z-50">
            <div className="flex justify-between items-center h-full overflow-hidden">
              <Link href="/">
                <MyLogo className='text-th-background hover:text-th-secondary transition-colors duration-500' width={95} height={64}/>
              </Link>
              <ul className="hidden md:flex gap-x-8 text-th-background text-base">
                <li>
                  <Link href="/about" className="hover:text-th-secondary">
                    <p>About</p>
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-th-secondary">
                    <p>Projects</p>
                  </Link>
                </li>
                <li>
                  <Link href="/files/resume.pdf" className="hover:text-th-secondary">
                    <p>Resume</p>
                  </Link>
                </li>
                <li>
                  <ThemeSwitcher />
                </li>
              </ul>
            </div>
          </div>
      );
}

export default Navbar;