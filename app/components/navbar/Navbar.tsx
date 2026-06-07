"use client";

import React, { useState, useRef, useEffect } from "react";
import { CollapsibleNavbar } from "./CollapsibleNavbar";

export const Navbar: React.FC<{}> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, setIsOpen]);

    return (
        <CollapsibleNavbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            navbarRef={navbarRef}
        />
    );
};
