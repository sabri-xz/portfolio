import React from "react";
import Link from "next/link";
import { ThemeSwitcher, MyLogo } from ".";

export const Navbar: React.FC<{}> = () => (
        <div className="w-full h-14 sticky top-0 px-16 transition-colors duration-500 z-50">
            <div className="flex justify-between items-center h-full overflow-hidden">
              <Link href="/">
                <MyLogo className='text-th-foreground hover:text-th-secondary transition-colors duration-500' width={95} height={64}/>
              </Link>
              <ul className="hidden md:flex gap-x-8 text-th-foreground text-base pt-2">
                <li>
                  <Link href="/about" className="hover:text-th-midground1">
                    <p>About</p>
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-th-midground1">
                    <p>Projects</p>
                  </Link>
                </li>
                <li>
                  <Link href="/files/resume.pdf" className="hover:text-th-midground1">
                    <p>Resume</p>
                  </Link>
                </li>
                <li className="-mt-2">
                  <ThemeSwitcher />
                </li>
              </ul>
            </div>
          </div>
      );
