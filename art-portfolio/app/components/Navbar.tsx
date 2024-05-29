"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MyLogo } from "./icons";

const Navbar: React.FC<{}> = () => {
    const pathname = usePathname();

    if (pathname === "/") {
        return <> </>;
    }

    return (
        <>
          <div className="w-full h-14 bg-th-foreground sticky top-0 px-16 transition-colors duration-500 z-50">
            {/* <div className="container w-full px-4 h-full justify-between items-center"> */}
              <div className="flex justify-between items-center h-full overflow-hidden">
                <Link href="/">
                  <MyLogo className='text-th-background hover:text-th-secondary transition-colors duration-500' width={95} height={64}/>
                </Link>
                <ul className="hidden md:flex gap-x-6 text-th-background text-base pr-16">
                  <li>
                    <Link href="/about" className="hover:text-th-secondary">
                      <p>About</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/files/resume.pdf" className="hover:text-th-secondary">
                      <p>Resume</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="hover:text-th-secondary">
                      <p>Projects</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/arts" className="hover:text-th-secondary">
                      <p>Arts</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          {/* </div> */}
        </>
      );
}

export default Navbar;