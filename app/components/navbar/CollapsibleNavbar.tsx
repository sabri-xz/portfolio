import React from "react";
import "./navbar.css";
import Link from "next/link";
import { GithubIcon, GmailIcon, LinkedInIcon } from "../icons";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

const NavBarIcon = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
    <div className={`icon ${isOpen ? "open" : ""}`} onClick={onClick}>
      <span />
      <span />
      <span />
    </div>
  );

export const CollapsibleNavbar: React.FC<{
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }> = ({ isOpen, setIsOpen }) => {
    const handleClick = () => setIsOpen(!isOpen);
  
    return (
      <div className={`collapsible-navbar ${isOpen ? "uncollapsed" : "collapsed"}`}>
        <NavBarIcon isOpen={isOpen} onClick={handleClick} />
  
        <div className={`navbar-content ${isOpen ? "open" : ""}`}>
          <Link href="/" className="content-entry">
            <p className="font-extrabold text-lg">Welcome</p>
          </Link>
          <Link href="/about" className="button content-entry">
            <p>About</p>
          </Link>
          <Link href="/projects" className="button content-entry">
            <p>Projects</p>
          </Link>
          <Link href="/files/resume.pdf" className="button content-entry">
            <p>Resume</p>
          </Link>
        </div>

        <div className={`text-th-foreground contact-icons ${isOpen ? "open" : ""}`}>
            <Link href="https://github.com/sabri-xz" target="_blank">
              <GithubIcon className="text-th-foreground hover:text-th-secondary" width={25} height={25} />
            </Link>
            <Link href="https://www.linkedin.com/in/xinzhi-liang/" target="_blank">
              <LinkedInIcon className="text-th-foreground hover:text-th-secondary" width={25} height={25} />
            </Link>
            <Link href="mailto:xinzhi.liang34@gmail.com" target="_blank">
              <GmailIcon className="text-th-foreground hover:text-th-secondary" width={25} height={25} />
            </Link>
        </div>
      </div>
    );
  };
