"use client";

import React, { useState, useEffect } from "react";
import { CollapsibleNavbar } from "./CollapsibleNavbar";
import { DefaultNavbar } from "./DefaultNavbar";

export const useScreenWidth = () => {
    const [width, setWidth] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth : 0
    );

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
};

export const Navbar: React.FC<{}> = () => {
    const width = useScreenWidth();
    const isMobile = width <= 768;

    const [isOpen, setIsOpen] = useState(false);

    return isMobile ? (
        <CollapsibleNavbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    ) : (
        <DefaultNavbar />
    );
};
