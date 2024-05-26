"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC<{}> = () => {
    const pathname = usePathname();

    if (pathname === "/") {
        return <> </>;
    }

    return (
        <>
          <div className="w-full h-16 bg-th-foreground sticky top-0">
            <div className="container mx-auto px-4 h-full">
              <div className="flex justify-between items-center h-full">
                <ul className="hidden md:flex gap-x-24 text-th-background">
                  <li>
                    <Link href="/">
                      <p>Home</p>
                    </Link>
                  </li>
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
                  <li> {pathname} </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      );
}

export default Navbar;